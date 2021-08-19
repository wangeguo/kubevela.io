---
title:  实践案例-多集群部署
---

本章节讲述如何使用 KubeVela 做多集群应用部署，将包含从集群创建、集群注册、环境初始化、多集群调度，一直到应用多集群部署的完整流程。

## 解决方案

- 通过 KubeVela 中的环境初始化（Initializer）功能，我们可以创建一个 Kubernetes 集群并注册到中央管控集群，同样通过环境初始化功能，可以将应用管理所需的系统依赖一并安装。
- 通过 KubeVela 的多集群多环境部署（EnvBinding）功能，可以对应用进行差异化配置，并选择资源下发到哪些集群。

## 先决条件

- 首先你需要有一个 Kubernetes 版本为 1.20+ 的集群作为管控集群，并且已经安装好 KubeVela ，管控集群需要有一个可以通过公网访问的 APIServer 
  的地址。如果不做特殊说明，实践案例上的所有步骤都在管控集群上操作。
  

- 在这个场景中，KubeVela 背后采用[OCM(open-cluster-management)](https://open-cluster-management.io/getting-started/quick-start/)技术做实际的多集群资源分发。


- 本实践案例相关的 YAML 描述和 Shell 脚本都在 KubeVela 项目的 [docs/examples/workflow-with-ocm](https://github.com/oam-dev/kubevela/tree/master/docs/examples/workflow-with-ocm) 下，
  请在该目录下执行下面的终端命令。


- 本实践案例将以阿里云的 ACK 集群作为例子，创建阿里云资源需要使用相应的鉴权，需要保存你阿里云账号的 AK/SK 到管控集群的 Secret 中。

  ```shell
  export ALICLOUD_ACCESS_KEY=xxx; export ALICLOUD_SECRET_KEY=yyy
  ```

  ```shell
  # 如果你想使用阿里云安全令牌服务，还要导出环境变量 ALICLOUD_SECURITY_TOKEN 。
  export ALICLOUD_SECURITY_TOKEN=zzz  
  ```

  ```shell
  # prepare-alibaba-credentials.sh 脚本会读取环境变量并创建 secret 到当前集群。
  sh hack/prepare-alibaba-credentials.sh
  ```
  
  ```shell
  $ kubectl get secret -n vela-system
  NAME                                         TYPE                                  DATA   AGE
  alibaba-account-creds                        Opaque                                1      11s
  ```

## 初始化阿里云资源创建功能

我们可以使用 KubeVela 的环境初始化功能，开启阿里云资源创建的系统功能，这个初始化过程主要是将之前配置的鉴权信息提供出来，并初始化 Terraform 系统插件。我们将这个初始化对象命名为：`terraform-alibaba`。

```yaml
# initializers/init-terraform-alibaba.yaml
apiVersion: core.oam.dev/v1beta1
kind: Initializer
metadata:
  name: terraform-alibaba
  namespace: vela-system
spec:
  appTemplate:
    spec:
      components:
        - name: default
          type: raw
          properties:
            apiVersion: terraform.core.oam.dev/v1beta1
            kind: Provider
            metadata:
              namespace: default
            spec:
              provider: alibaba
              region: cn-hongkong
              credentials:
                source: Secret
                secretRef:
                  namespace: vela-system
                  name: alibaba-account-creds
                  key: credentials
  dependsOn:
    - ref:
        apiVersion: core.oam.dev/v1beta1
        kind: Initializer
        name: terraform
        namespace: vela-system
```

环境初始化 `terraform-alibaba` 用于创建一个允许用户创建一个阿里云上云资源的环境，`terraform-alibaba` 依赖了环境初始化 `terraform`
（为集群提供 `terraform` 创建云资源的能力），`terraform` 属于内置的环境初始化，`KubeVela` 会自动安装环境初始化 `terraform` 。
环境初始化 `terraform-alibaba` 的应用部署计划模板中包含了一个 `raw` 类型的组件（KubeVela内置的组件），填充一个 `Provider` 对象，用于阿里云资源的管理。

### 创建环境初始化 `terraform-alibaba`

```shell
kubectl apply -f initializers/init-terraform-alibaba.yaml
```

当环境初始化 `terraform-alibaba` 的 `PHASE` 字段为 `success` 表示环境初始化成功，这可能需要等待1分钟左右的时间。

```shell
$ kubectl get initializers.core.oam.dev -n vela-system
NAMESPACE     NAME                  PHASE     AGE
vela-system   terraform-alibaba     success   94s
```

## 初始化多集群调度功能

我们使用 KubeVela 的环境初始化功能，开启多集群调度的系统功能，这个初始化过程主要是创建一个新的 ACK 集群，使用 OCM 多集群管理方案管理新创建的集群，我们将这个初始化对象命名为：`managed-cluster`。

```yaml
# initializers/init-managed-cluster.yaml
apiVersion: core.oam.dev/v1beta1
kind: Initializer
metadata:
  name: managed-cluster
  namespace: vela-system
spec:
  appTemplate:
    spec:
      components:
        - name: ack-worker
          type: alibaba-ack
          properties:
            writeConnectionSecretToRef:
              name: ack-conn
              namespace: vela-system
              
      workflow:
        steps:
          - name: terraform-ack
            type: create-ack
            properties:
              component: ack-worker
            outputs:
              - name: connInfo
                exportKey: connInfo

          - name: register-ack
            type: register-cluster
            inputs:
              - from: connInfo
                parameterKey: connInfo
            properties:
              # 用户需要填写管控集群的 APIServer 的公网地址
              hubAPIServer: {{ public network address of APIServer }}
              env: prod
              initNameSpace: default
              patchLabels:
                purpose: test
  dependsOn:
    - ref:
        apiVersion: core.oam.dev/v1beta1
        kind: Initializer
        name: terraform-alibaba
        namespace: vela-system
    - ref:
        apiVersion: core.oam.dev/v1beta1
        kind: Initializer
        name: ocm-cluster-manager
        namespace: vela-system
```

环境初始化 `managed-cluster` 的 `dependsOn` 字段依赖了环境初始化 `terraform-alibaba` 和 `ocm-cluster-manager`。利用 `terraform-alibaba`
的能力创建一个 ACK 集群，利用 `ocm-cluster-manager` 提供的 OCM 多集群管理方案的能力管理多个集群。其中环境初始化 `ocm-cluster-manager` 是内置的，
KubeVela会帮助用户自动安装。

环境初始化 `managed-cluster` 的应用部署计划模板包含一个类型为 `alibaba-ack` 的组件代表将要创建的 ACK 集群，其中，组件定义 `alibaba-ack` 是随着环境初始化 `terraform` 
被一同安装到当前集群的，不用再单独安装。

环境初始化 `managed-cluster` 的应用部署计划模板中，我们利用了交付工作流（Workflow）的能力流程化的初始化环境，交付工作流分成 2 个步骤：创建
ACK 集群，注册 ACK 集群到当前管控集群。

除此之外，为了让创建好的集群可以被管控集群所使用，我们还需要将创建的集群注册到管控集群。我们通过定义一个工作流节点来传递新创建集群的证书信息，再定义一个工作流节点来完成集群注册。

**自定义执行集群创建的工作流节点，命名为 `create-ack`**

```yaml
# definitions/create-ack.yaml
apiVersion: core.oam.dev/v1beta1
kind: WorkflowStepDefinition
metadata:
  name: create-ack
  namespace: vela-system
spec:
  schematic:
    cue:
      template: |
        import (
        	"vela/op"
        	"encoding/base64"
        )
        configuration: op.#Load & {
        	component: parameter.component
        }
        apply: op.#Apply & {
        	value: {
        		configuration.value.workload
        	}
        }
        wait: op.#ConditionalWait & {
        	continue: apply.value.status.state == "Available"
        }
        secretName:      apply.value.spec.writeConnectionSecretToRef.name
        secretNamespace: apply.value.spec.writeConnectionSecretToRef.namespace
        ackConn: op.#Read & {
        	value: {
        		apiVersion: "v1"
        		kind:       "Secret"
        		metadata: {
        			name:      secretName
        			namespace: secretNamespace
        		}
        	}
        }
        parameter: {
        	component: string
        }
        connInfo: {
            # 使用内置包 "encoding/base64" 对数据解码，函数 Decode 的第一个参数为 null 表示使用默认的译码器
        	clusterName:      base64.Decode(null, ackConn.value.data["name"])
        	clusterCACert:    base64.Decode(null, ackConn.value.data["cluster_ca_cert"])
        	clientCert:       base64.Decode(null, ackConn.value.data["client_cert"])
        	clientKey:        base64.Decode(null, ackConn.value.data["client_key"])
        	clusterAPIServer: base64.Decode(null, ackConn.value.data["api_server_internet"])
        }
```

工作流节点定义 `create-ack` 的执行流程分为 3 个步骤：
1. 加载并创建组件 `ack-worker`，实际上会创建一个 `terraform` 的 `Configuration` 对象。
2. 等待组件 `ack-worker` 的工作负载的状态为 `Available`，表示 ACK 集群已经创建成功。
3. 从 `Secret` 中读取新创建的 ACK 集群的连接信息，传递到下一个工作流节点。

> 因为 Secret 中的数据会以 `base64` 的编码方式被存储，传递到下一个工作节点的时候，需要利用 `cue` 的内置包 `"encoding/base64"` 对数据进行解码。


**自定义集群注册的工作流节点，命名为 `register-cluster`**

```yaml
apiVersion: core.oam.dev/v1beta1
kind: WorkflowStepDefinition
metadata:
  name: register-cluster
  namespace: vela-system
spec:
  schematic:
    cue:
      template: |
        import ("vela/op")
        ... 省略部分 CUE 模板
        register: op.#Apply & {
        	value: {
        		apiVersion: "batch/v1"
        		kind:       "Job"
        		metadata: {
        			name:      "cluster-register"
        			namespace: "default"
        		}
        		spec: {
        			template: {
        				spec: {
        					containers: [{
        						name:            "cluster-register"
        						image:           "oamdev/cluster-register:v1.0"
        						imagePullPolicy: "Always"
        						command: [
        							"/app", "--cluster-name=" + "\(parameter.connInfo.clusterName)",
        							"--hub-api-server=" + "\(parameter.hubAPIServer)",
        							"--cluster-ca-cert=" + "\(parameter.connInfo.clusterCACert)",
        							"--client-cert=" + "\(parameter.connInfo.clientCert)",
        							"--client-key=" + "\(parameter.connInfo.clientKey)",
        							"--api-server-internet=" + "\(parameter.connInfo.clusterAPIServer)",
        							"--kube-config=" + "\(parameter.connInfo.kubeConfig)",
        						]
        					}]
        					restartPolicy:      "OnFailure"
        					serviceAccountName: "cluster-register"
        				}
        			}
        		}
        	}
        }
        wait: op.#ConditionalWait & {
        	continue: register.value.status.succeeded == 1
        }
        clusterSet: op.#Apply & {
        	value: {
        		apiVersion: "cluster.open-cluster-management.io/v1alpha1"
        		kind:       "ManagedClusterSet"
        		metadata: name: parameter.env
        	}
        }
        clusterSetBinding: op.#Apply & {
        	value: {
        		apiVersion: "cluster.open-cluster-management.io/v1alpha1"
        		kind:       "ManagedClusterSetBinding"
        		metadata: {
        			name:      parameter.env
        			namespace: parameter.initNameSpace
        		}
        		spec: clusterSet: parameter.env
        	}
        }
        managedCluster: op.#Read & {
        	value: {
        		apiVersion: "cluster.open-cluster-management.io/v1"
        		kind:       "ManagedCluster"
        		metadata: {
        			name: parameter.connInfo.clusterName
        		}
        	}
        }
        patchManagedCluster: op.#Apply & {
        	value: {
        		managedCluster.value
        		metadata: labels: {
        			"cluster.open-cluster-management.io/clusterset": parameter.env
        		}
        		metadata: labels: parameter.patchLabels
        	}
        }
        parameter: {
        	env:           string
        	initNameSpace: *"default" | string
        	patchLabels: [string]: string
        	hubAPIServer: *"" | string
        	connInfo: {
        		clusterName:      string
        		clusterCACert:    *"" | string
        		clientCert:       *"" | string
        		clientKey:        *"" | string
        		clusterAPIServer: *"" | string
        		kubeConfig:       *"" | string
        	}
        }
```

工作流节点定义 `register-cluster` 的执行流程分为 2 个步骤：
1. 读取上一个工作流节点传递来的 ACK 集群连接数据，创建一个注册集群的 Job，该 Job 会为 ACK 集群创建一个 OCM 托管集群的环境，并将 ACK 集群注册到管控集群中。
2. 根据 OCM 的 [Placement 规则](https://open-cluster-management.io/concepts/placement/) ，允许用户在 `parameter.initNameSpace`
   指定的命名空间下可以使用 `parameter.patchLabels` 中设定的标签来筛选注册的 ACK 集群。

### 创建环境初始化  

1. 安装工作流节点定义 `create-ack` 和 `register-cluster`。

```shell
kubectl apply -f definitions/create-ack.yaml.yaml
kubectl apply -f definitions/register-cluster.yaml
```

2. 修改工作流节点 `register-ack` 的 hubAPIServer 的参数为管控集群的 APIServer 的公网地址。

```yaml
  - name: register-ack
    type: register-cluster
    inputs:
      - from: connInfo
        parameterKey: connInfo
    properties:
      # 用户需要填写管控集群的 APIServer 的公网地址
      hubAPIServer: {{ public network address of APIServer }}
      env: prod
      initNameSpace: default
      patchLabels:
        purpose: test
```

3. 创建环境初始化 `managed-cluster`。

```
kubectl apply -f initializers/init-managed-cluster.yaml
```

当环境初始化 `managed-cluster` 的 `PHASE` 字段为 `success` 表示环境初始化成功，你可能需要等待 15-20 分钟左右的时间（阿里云创建一个ack集群需要 15 分钟左右）。

```shell
$ kubectl get initializers.core.oam.dev -n vela-system
NAMESPACE     NAME                  PHASE     AGE
vela-system   managed-cluster       success   20m
```

当环境初始化 `managed-cluster` 初始化成功后，你可以看到新集群 `poc-01` 已经被被注册到管控集群中。

```shell
$ kubectl get managedclusters.cluster.open-cluster-management.io
NAME     HUB ACCEPTED   MANAGED CLUSTER URLS         JOINED   AVAILABLE   AGE
poc-01   true          {{ APIServer address }}       True     True        30s
```

## 部署应用到指定集群

管理员完成多集群的注册之后，用户可以在应用部署计划中指定将资源部署到哪个集群中。

```yaml
# app.yaml
apiVersion: core.oam.dev/v1beta1
kind: Application
metadata:
  name: workflow-demo
  namespace: default
spec:
  components:
    - name: podinfo-server
      type: webservice
      properties:
        image: stefanprodan/podinfo:5.2.1
        port: 9898
      traits:
        - type: expose
          properties:
            port: [9898]

  policies:
    - name: patch
      type: env-binding
      properties:
        engine: ocm
        created: false
        envs:
          - name: prod
            patch:
              components:
                - name: podinfo-server
                  type: webservice
                  properties:
                    image: stefanprodan/podinfo:6.0.0
                    port: 9898
                  traits:
                    - type: expose
                      properties:
                        port: [9898]
                        type: LoadBalancer
            placement:
              clusterSelector:
                labels:
                  purpose: test

  workflow:
    steps:
      - name: deploy-server
        type: multi-env
        properties:
          env:       prod
          policy:    patch
          component: podinfo-server
```

```shell
kubectl apply -f app.yaml
```

检查应用部署计划 `workflow-demo` 是否成功创建。

```shell
$ kubectl get app workflow-demo
NAME            COMPONENT        TYPE         PHASE     HEALTHY   STATUS   AGE
workflow-demo   podinfo-server   webservice   running   true               7s
```

你可以切换到新创建的 ACK 集群上，查看资源是否被成功地部署。

```shell
$ kubectl get deployments
NAME             READY   UP-TO-DATE   AVAILABLE   AGE
podinfo-server   1/1     1            1           40s
```

```shell
$ kubectl get service
NAME             TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
podinfo-server   LoadBalancer   10.96.229.126   <EIP>         9898:31361/TCP   51s
```

Service `podinfo-server` 绑定了一个 EXTERNAL-IP，允许用户通过公网访问应用，用户可以在浏览器中输入 `http://<EIP>:9898` 来访问刚刚创建的应用。

![workflow-with-ocm-demo](../resources/workflow-with-ocm-demo.png)

上述应用部署计划 `workflow-demo` 中使用了内置的应用策略 `env-binding` 对应用部署计划进行差异化配置，修改了组件 `podinfo-server` 的镜像，
以及运维特征 `expose` 的类型以允许集群外部的请求访问，同时应用策略 `env-binding` 指定了资源调度策略，将资源部署到新注册的 ACK 集群内。
应用部署计划的交付工作流也使用了内置的 [`multi-env`](../end-user/workflow/multi-env) 交付工作流定义，指定具体哪一个配置后的组件部署到集群中。
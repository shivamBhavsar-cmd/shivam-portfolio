import Link from "next/link"

export default function KubernetesCKADBlog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="text-lg font-medium hover:text-muted-foreground transition-colors duration-300"
            >
              Shivam Bhavsar
            </Link>
            
            <div className="flex items-center gap-6">
              <Link 
                href="/blog" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                All Posts
              </Link>
              <Link 
                href="/" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Portfolio
              </Link>
              <Link 
                href="/#connect" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Header Section */}
          <div className="mb-12">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              Kubernetes CKAD Complete Guide
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Comprehensive study guide covering all CKAD exam topics with practical examples and commands.
            </p>
            
            <div className="flex items-center gap-4 mt-8 text-sm text-muted-foreground">
              <span>Published on September 9, 2025</span>
              <span>•</span>
              <span>45 min read</span>
            </div>
          </div>

          {/* Content Section */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="space-y-12">
              
              {/* Cluster Architecture */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Cluster Architecture</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  A Kubernetes cluster consists of a control plane plus a set of worker machines, called nodes, that run containerized applications.
                </p>
                
                <div className="bg-border/20 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-medium mb-4">Key Components</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Control Plane:</strong> Manages worker nodes and Pods in the cluster</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Worker Nodes:</strong> Host the Pods that are components of the application workload</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Master Node:</strong> Stores critical cluster information and monitors node health</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-green-400">
                    {`# Basic cluster commands
kubectl run hello-minikube
kubectl cluster-info
kubectl get nodes`}
                  </pre>
                </div>
              </section>

              {/* Pods */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Pods</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Pods are the smallest deployable units in Kubernetes. They represent a single instance of a running process.
                </p>

                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Pod YAML Definition</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# pod-definition.yml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
    type: frontend
spec:
  containers:
  - name: nginx
    image: nginx
    ports:
    - containerPort: 80`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Essential Pod Commands</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# View existing pods
kubectl get pods
kubectl get pods -o wide

# Create pod from definition file
kubectl create -f pod-definition.yml

# Create pod imperatively
kubectl run nginx --image=nginx

# Get detailed information about a pod
kubectl describe pod <pod-name>

# Execute commands inside a pod
kubectl exec -it <pod-name> -- /bin/bash

# Delete a pod
kubectl delete pod webapp

# Get pod YAML definition
kubectl get pod <pod-name> -o yaml`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* ReplicaSets and Deployments */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">ReplicaSets and Deployments</h2>
                
                <div className="space-y-8">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">ReplicaSet</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A ReplicaSet ensures a specified number of identical pods are running at any given time.
                    </p>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# replicaset-definition.yml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: myapp-replicaset
spec:
  replicas: 3
  selector:
    matchLabels:
      type: front-end
  template:
    metadata:
      labels:
        app: myapp
        type: front-end
    spec:
      containers:
      - name: nginx-container
        image: nginx`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Deployment</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Deployments provide declarative updates for Pods and ReplicaSets.
                    </p>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# deployment-definition.yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      type: frontend
  template:
    metadata:
      labels:
        app: myapp
        type: frontend
    spec:
      containers:
      - name: nginx-container
        image: nginx`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* StatefulSets and DaemonSets */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">StatefulSets and DaemonSets</h2>
                
                <div className="space-y-8">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">StatefulSets</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Manages stateful applications that require persistent state and stable network identities.
                    </p>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
spec:
  selector:
    matchLabels:
      app: nginx
  serviceName: "nginx"
  replicas: 3
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx
        ports:
        - containerPort: 80
        volumeMounts:
        - name: www
          mountPath: /usr/share/nginx/html
  volumeClaimTemplates:
  - metadata:
      name: www
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 1Gi`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">DaemonSets</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Ensures that all nodes run a copy of a Pod. Common for system daemons and monitoring agents.
                    </p>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: fluentd-elasticsearch
  namespace: kube-system
spec:
  selector:
    matchLabels:
      name: fluentd-elasticsearch
  template:
    metadata:
      labels:
        name: fluentd-elasticsearch
    spec:
      tolerations:
      - key: node-role.kubernetes.io/control-plane
        operator: Exists
        effect: NoSchedule
      containers:
      - name: fluentd-elasticsearch
        image: quay.io/fluentd_elasticsearch/fluentd:v2.5.2
        volumeMounts:
        - name: varlog
          mountPath: /var/log
      volumes:
      - name: varlog
        hostPath:
          path: /var/log`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Rolling Updates and Rollbacks */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Rolling Updates and Rollbacks</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Rolling Update Commands</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Check rollout status
kubectl rollout status deployment/myapp-deployment

# View rollout history
kubectl rollout history deployment/myapp-deployment

# Update deployment image
kubectl set image deployment/myapp-deployment nginx=nginx:1.9.1

# Rollback to previous version
kubectl rollout undo deployment/myapp-deployment

# Rollback to specific revision
kubectl rollout undo deployment/myapp-deployment --to-revision=2`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Services */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Services</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Service Types</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="border border-border rounded-lg p-4 text-center">
                        <h4 className="font-medium mb-2">NodePort</h4>
                        <p className="text-sm text-muted-foreground">Exposes service on each node&apos;s IP</p>
                      </div>
                      <div className="border border-border rounded-lg p-4 text-center">
                        <h4 className="font-medium mb-2">ClusterIP</h4>
                        <p className="text-sm text-muted-foreground">Virtual IP for internal communication</p>
                      </div>
                      <div className="border border-border rounded-lg p-4 text-center">
                        <h4 className="font-medium mb-2">LoadBalancer</h4>
                        <p className="text-sm text-muted-foreground">Provisions cloud load balancer</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Service Examples</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# NodePort Service
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  type: NodePort
  ports:
  - targetPort: 80
    port: 80
    nodePort: 30008
  selector:
    app: myapp

# ClusterIP Service
apiVersion: v1
kind: Service
metadata:
  name: back-end
spec:
  type: ClusterIP
  ports:
  - targetPort: 80
    port: 80
  selector:
    app: myapp`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Ingress */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Ingress</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Ingress Configuration</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-wildcard-host
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: "foo.bar.com"
    http:
      paths:
      - pathType: Prefix
        path: "/bar"
        backend:
          service:
            name: service1
            port:
              number: 80

# Ingress commands
kubectl create ingress <ingress-name> --rule="host/path=service:port"
kubectl get ingress
kubectl describe ingress <ingress-name>`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Network Policies */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Network Policies</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Network Policy Example</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: db-policy
spec:
  podSelector:
    matchLabels:
      role: db
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          name: api-pod
    ports:
    - protocol: TCP
      port: 3306`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Storage */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Persistent Volumes and Claims</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">PV and PVC Example</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Persistent Volume
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-vol1
spec:
  accessModes:
    - ReadWriteOnce
  capacity:
    storage: 1Gi
  hostPath:
    path: /data/pv0001/

# Persistent Volume Claim
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: myclaim
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 500Mi

# Using PVC in Pod
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
  - name: myfrontend
    image: nginx
    volumeMounts:
    - mountPath: "/var/www/html"
      name: mypd
  volumes:
  - name: mypd
    persistentVolumeClaim:
      claimName: myclaim`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* ConfigMaps and Secrets */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">ConfigMaps and Secrets</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">ConfigMap Example</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Create ConfigMap imperatively
kubectl create configmap app-config --from-literal=APP_COLOR=blue

# ConfigMap YAML
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  APP_COLOR: blue
  APP_MODE: prod

# Using ConfigMap in Pod
apiVersion: v1
kind: Pod
metadata:
  name: simple-webapp-color
spec:
  containers:
  - name: simple-webapp-color
    image: simple-webapp-color
    envFrom:
    - configMapRef:
        name: app-config`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Secrets</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Create secret imperatively
kubectl create secret generic app-secret \\
  --from-literal=DB_Host=mysql \\
  --from-literal=DB_User=root \\
  --from-literal=DB_Password=paswrd

# Secret YAML (base64 encoded)
apiVersion: v1
kind: Secret
metadata:
  name: app-secret
data:
  DB_Host: bXlzcWw=      # base64 encoded 'mysql'
  DB_User: cm9vdA==      # base64 encoded 'root'
  DB_Password: cGFzd3Jk  # base64 encoded 'paswrd'

# Decode secret
kubectl get secret app-secret -o jsonpath="{.data.DB_Password}" | base64 --decode`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Resource Management */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Resource Management</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Resource Requests and Limits</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`apiVersion: v1
kind: Pod
metadata:
  name: simple-webapp-color
spec:
  containers:
  - name: simple-webapp-color
    image: simple-webapp-color
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">LimitRange and ResourceQuota</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# LimitRange
apiVersion: v1
kind: LimitRange
metadata:
  name: mem-limit-range
spec:
  limits:
  - default:
      memory: "512Mi"
    defaultRequest:
      memory: "256Mi"
    type: Container

# ResourceQuota
apiVersion: v1
kind: ResourceQuota
metadata:
  name: mem-cpu-demo
spec:
  hard:
    requests.cpu: "1"
    requests.memory: 1Gi
    limits.cpu: "2"
    limits.memory: 2Gi`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Autoscaling */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Horizontal Pod Autoscaler</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">HPA Configuration</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Create HPA imperatively
kubectl autoscale deployment php-apache --cpu-percent=50 --min=1 --max=10

# HPA YAML
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: php-apache-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: php-apache
  minReplicas: 1
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 50`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Security Context */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Security Context</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Pod Security Context</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`apiVersion: v1
kind: Pod
metadata:
  name: security-context-demo
spec:
  securityContext:
    runAsUser: 1000
    runAsGroup: 3000
    fsGroup: 2000
  containers:
  - name: sec-ctx-demo
    image: busybox
    command: [ "sh", "-c", "sleep 1h" ]
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true
      runAsNonRoot: true
      capabilities:
        add: ["NET_ADMIN"]
        drop: ["ALL"]`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Service Accounts */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Service Accounts</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Service Account Usage</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Create service account
kubectl create serviceaccount my-service-account

# Pod with service account
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  serviceAccountName: my-service-account
  containers:
  - name: my-container
    image: nginx`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Node Scheduling */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Node Scheduling</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Node Selectors and Affinity</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Label nodes
kubectl label nodes node-1 size=Large

# Pod with nodeSelector
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
spec:
  containers:
  - name: data-processor
    image: data-processor
  nodeSelector:
    size: Large

# Node Affinity
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
spec:
  containers:
  - name: data-processor
    image: data-processor
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: size
            operator: In
            values:
            - Large
            - Medium`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Taints and Tolerations</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Apply taint to node
kubectl taint nodes node1 app=blue:NoSchedule

# Remove taint
kubectl taint nodes node1 app=blue:NoSchedule-

# Pod with toleration
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
spec:
  containers:
  - name: nginx-container
    image: nginx
  tolerations:
  - key: "app"
    operator: "Equal"
    value: "blue"
    effect: "NoSchedule"`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Labels and Selectors */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Labels and Selectors</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Label Operations</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Get pods with labels
kubectl get pods --show-labels

# Filter pods by labels
kubectl get pods --selector env=dev
kubectl get pods -l env=dev,tier=frontend

# Filter with operators
kubectl get pods -l 'environment in (production,qa)'
kubectl get pods -l 'tier notin (frontend,backend)'

# Label nodes and pods
kubectl label nodes node-1 size=Large
kubectl label pods my-pod version=v1`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Jobs and CronJobs */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Jobs and CronJobs</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Jobs</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`apiVersion: batch/v1
kind: Job
metadata:
  name: pi
spec:
  template:
    spec:
      containers:
      - name: pi
        image: perl
        command: ["perl", "-Mbignum=bpi", "-wle", "print bpi(2000)"]
      restartPolicy: Never
  backoffLimit: 4

# Job commands
kubectl get jobs
kubectl describe job pi
kubectl logs -f job/pi`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">CronJobs</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`apiVersion: batch/v1
kind: CronJob
metadata:
  name: hello
spec:
  schedule: "*/1 * * * *"  # Every minute
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: hello
            image: busybox
            command:
            - /bin/sh
            - -c
            - date; echo Hello from Kubernetes
          restartPolicy: OnFailure

# Common schedules:
# "0 0 * * *"    - Daily at midnight
# "0 0 * * 0"    - Weekly on Sunday
# "*/5 * * * *"  - Every 5 minutes`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Multi-Container Pods */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Multi-Container Pods</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Sidecar Pattern</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`apiVersion: v1
kind: Pod
metadata:
  name: multi-container-pod
spec:
  containers:
  - name: web-server
    image: nginx
    ports:
    - containerPort: 80
  - name: log-agent
    image: fluent/fluent-bit
    volumeMounts:
    - name: log-volume
      mountPath: /var/log
  volumes:
  - name: log-volume
    emptyDir: {}`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Init Containers</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
spec:
  containers:
  - name: myapp-container
    image: busybox:1.28
    command: ['sh', '-c', 'echo App is running! && sleep 3600']
  initContainers:
  - name: init-myservice
    image: busybox:1.28
    command: ['sh', '-c', 'until nslookup myservice; do echo waiting; sleep 2; done;']`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Probes */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Readiness and Liveness Probes</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Probe Types</h3>
                    <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                      <li>• <strong>Liveness Probe:</strong> Checks if container is running (restarts if fails)</li>
                      <li>• <strong>Readiness Probe:</strong> Checks if container is ready to accept traffic</li>
                      <li>• <strong>Startup Probe:</strong> Checks if container application has started</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Probe Examples</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`apiVersion: v1
kind: Pod
metadata:
  name: goproxy
spec:
  containers:
  - name: goproxy
    image: nginx
    ports:
    - containerPort: 8080
    # HTTP GET probe
    readinessProbe:
      httpGet:
        path: /healthz
        port: 8080
      initialDelaySeconds: 5
      periodSeconds: 10
    # TCP Socket probe
    livenessProbe:
      tcpSocket:
        port: 8080
      initialDelaySeconds: 15
      periodSeconds: 20
    # Exec probe
    startupProbe:
      exec:
        command:
        - cat
        - /tmp/healthy
      initialDelaySeconds: 10
      periodSeconds: 5`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Namespaces */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Namespaces</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Namespace Operations</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# View pods in namespaces
kubectl get pods                           # default namespace
kubectl get pods --namespace=kube-system  # specific namespace
kubectl get pods --all-namespaces         # all namespaces

# Create namespace
kubectl create namespace dev

# Set default namespace
kubectl config set-context $(kubectl config current-context) --namespace=dev

# Namespace YAML
apiVersion: v1
kind: Namespace
metadata:
  name: dev`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Pod Disruption Budget */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Pod Disruption Budget</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">PDB Configuration</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: zk-pdb
spec:
  minAvailable: 2  # or maxUnavailable: 1
  selector:
    matchLabels:
      app: zookeeper

# PDB Commands
kubectl get pdb
kubectl describe pdb zk-pdb`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Advanced kubectl Commands */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Advanced kubectl Commands</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-3">Field Selectors & Queries</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Get pods on specific node
kubectl get po -A --field-selector spec.nodeName=node01

# Get pod owner reference
kubectl get pod <pod-name> -o=jsonpath='{.metadata.ownerReferences[0].name}'

# Remove taint
kubectl taint nodes node-name key=value:NoSchedule-

# Decode secret
kubectl get secret <name> -o jsonpath="{.data.password}" | base64 --decode`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-3">Debugging & Testing</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Test connectivity
kubectl run test-pod --image=busybox --rm -it -- /bin/sh

# Port forward
kubectl port-forward svc/myapp 8080:80

# Watch resources
kubectl get pods -w

# Get events
kubectl get events --sort-by=.metadata.creationTimestamp`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Imperative Commands */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Imperative Commands</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Quick Resource Creation</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Create deployment
kubectl create deployment webapp --image=nginx --replicas=3

# Expose deployment
kubectl expose deployment webapp --port=80 --target-port=80 --type=ClusterIP

# Generate YAML
kubectl create deployment nginx --image=nginx --dry-run=client -o yaml > nginx.yaml

# Run pod with labels
kubectl run redis --image=redis:alpine --labels=tier=db

# Create and expose in one command
kubectl run httpd --image=httpd:alpine --port=80 --expose`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>
              {/* RBAC - Role Based Access Control */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">RBAC - Role Based Access Control</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Role and RoleBinding</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Role
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "watch", "list"]

# RoleBinding
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
  namespace: default
subjects:
- kind: User
  name: jane
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io

# Commands
kubectl create role pod-reader --verb=get,list,watch --resource=pods
kubectl create rolebinding read-pods --role=pod-reader --user=jane`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">ClusterRole and ClusterRoleBinding</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: secret-reader
rules:
- apiGroups: [""]
  resources: ["secrets"]
  verbs: ["get", "watch", "list"]

# ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: read-secrets-global
subjects:
- kind: User
  name: manager
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: ClusterRole
  name: secret-reader
  apiGroup: rbac.authorization.k8s.io`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Pod Security Standards */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Pod Security Standards</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Pod Security Policy</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Namespace with Pod Security Standards
apiVersion: v1
kind: Namespace
metadata:
  name: restricted-ns
  labels:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/audit: restricted
    pod-security.kubernetes.io/warn: restricted

# Security levels:
# - privileged: Unrestricted policy
# - baseline: Minimally restrictive policy
# - restricted: Heavily restricted policy`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Monitoring and Observability */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Monitoring and Observability</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Metrics Server and Resource Usage</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Install metrics server
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

# Resource usage commands
kubectl top nodes
kubectl top pods
kubectl top pods --containers
kubectl top pods --sort-by=cpu
kubectl top pods --sort-by=memory

# Get resource usage for specific namespace
kubectl top pods -n kube-system`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Logging and Events</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# View logs
kubectl logs pod-name
kubectl logs pod-name -c container-name
kubectl logs -f pod-name  # Follow logs
kubectl logs --tail=10 pod-name
kubectl logs --since=1h pod-name

# View events
kubectl get events
kubectl get events --sort-by=.metadata.creationTimestamp
kubectl get events --field-selector involvedObject.name=pod-name

# Debug pod issues
kubectl describe pod pod-name
kubectl get pod pod-name -o yaml`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Troubleshooting */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Troubleshooting Guide</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-3">Common Pod Issues</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Pod stuck in Pending
kubectl describe pod <pod-name>
# Check: resources, node capacity, taints/tolerations

# Pod stuck in ContainerCreating
kubectl describe pod <pod-name>
# Check: image pull, volumes, security context

# Pod CrashLoopBackOff
kubectl logs <pod-name>
kubectl logs <pod-name> --previous
# Check: application errors, health checks

# ImagePullBackOff
kubectl describe pod <pod-name>
# Check: image name, registry access, secrets`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-3">Network Troubleshooting</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Test pod connectivity
kubectl run busybox --image=busybox --rm -it -- sh
# Inside pod: nslookup, wget, ping

# Check service endpoints
kubectl get endpoints <service-name>

# Test service from inside cluster
kubectl run test --image=busybox --rm -it -- sh
# wget <service-name>:<port>

# Check network policies
kubectl get networkpolicies
kubectl describe networkpolicy <policy-name>`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-3">Storage Issues</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Check PV and PVC status
kubectl get pv
kubectl get pvc
kubectl describe pvc <pvc-name>

# Check storage class
kubectl get storageclass

# Volume mount issues
kubectl describe pod <pod-name>
# Check: mount paths, permissions, storage availability`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-3">Resource Issues</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Check resource quotas
kubectl get resourcequota
kubectl describe resourcequota <quota-name>

# Check limit ranges
kubectl get limitrange
kubectl describe limitrange <limit-name>

# Node resource usage
kubectl describe node <node-name>
kubectl top nodes`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Storage Classes */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Storage Classes</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">StorageClass Definition</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# StorageClass for dynamic provisioning
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast-ssd
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp2
  fsType: ext4
allowVolumeExpansion: true
reclaimPolicy: Delete

# PVC using StorageClass
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: fast-ssd
  resources:
    requests:
      storage: 10Gi

# Commands
kubectl get storageclass
kubectl describe storageclass fast-ssd`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Helm Basics */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Helm Package Manager</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Helm Commands</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Install Helm chart
helm install my-release bitnami/nginx

# List releases
helm list

# Upgrade release
helm upgrade my-release bitnami/nginx

# Rollback release
helm rollback my-release 1

# Uninstall release
helm uninstall my-release

# Add repository
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

# Search charts
helm search repo nginx`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>
              {/* Vertical Pod Autoscaler */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Vertical Pod Autoscaler (VPA)</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">VPA Configuration</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: nginx-vpa
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: nginx-deployment
  updatePolicy:
    updateMode: "Off"  # Off, Initial, Auto
  resourcePolicy:
    containerPolicies:
      - containerName: '*'
        controlledResources: ["cpu", "memory"]
        minAllowed:
          cpu: 100m
          memory: 128Mi
        maxAllowed:
          cpu: 2
          memory: 2Gi

# VPA Commands
kubectl get vpa
kubectl describe vpa nginx-vpa`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Additional Essential Commands */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Essential kubectl Commands Reference</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-3">Resource Management Commands</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Scale deployment
kubectl scale deployment myapp-deployment --replicas=6

# Edit resources
kubectl edit deployment myapp-deployment

# Patch deployment
kubectl patch deployment nginx -p '{"spec":{"replicas":5}}'

# Replace resource
kubectl replace --force -f pod.yaml

# Apply configuration
kubectl apply -f deployment.yaml

# Delete resources
kubectl delete -f deployment.yaml
kubectl delete deployment myapp-deployment`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-3">Context and Configuration</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Context management
kubectl config get-contexts
kubectl config current-context
kubectl config use-context <context-name>

# Set namespace
kubectl config set-context --current --namespace=dev

# View configuration
kubectl config view

# API resources
kubectl api-resources
kubectl api-versions

# Explain resources
kubectl explain pods
kubectl explain pods.spec`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-3">Output and Formatting</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Output formats
kubectl get pods -o wide
kubectl get pods -o yaml
kubectl get pods -o json
kubectl get pods -o jsonpath='{.items[*].metadata.name}'

# Custom columns
kubectl get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase

# Sort resources
kubectl get pods --sort-by=.metadata.name
kubectl get pods --sort-by=.status.startTime

# Show labels
kubectl get pods --show-labels`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-3">Advanced Filtering</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Field selectors
kubectl get pods --field-selector status.phase=Running
kubectl get pods --field-selector spec.nodeName=node01
kubectl get events --field-selector type=Warning

# Label selectors
kubectl get pods -l environment=production
kubectl get pods -l 'environment in (production,qa)'
kubectl get pods -l environment!=staging

# Multiple filters
kubectl get pods -l app=nginx --field-selector status.phase=Running`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Pod Lifecycle and Restart Policies */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Pod Lifecycle and Restart Policies</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Restart Policies</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Pod with restart policy
apiVersion: v1
kind: Pod
metadata:
  name: restart-demo
spec:
  restartPolicy: Always  # Always, OnFailure, Never
  containers:
  - name: container1
    image: busybox
    command: ['sh', '-c', 'echo Hello && sleep 30']

# Job with restart policy
kubectl run pi --image=perl --restart=OnFailure -- perl -Mbignum=bpi -wle 'print bpi(2000)'

# Pod lifecycle phases:
# Pending, Running, Succeeded, Failed, Unknown`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Pod Conditions</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# Check pod conditions
kubectl describe pod <pod-name>

# Pod Conditions:
# - PodScheduled: Pod has been scheduled to a node
# - ContainersReady: All containers are ready
# - Initialized: Init containers have completed
# - Ready: Pod is able to serve requests`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Environment Variables and ConfigMap/Secret Mounting */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Environment Variables and Mounting</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Environment Variables</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`apiVersion: v1
kind: Pod
metadata:
  name: env-demo
spec:
  containers:
  - name: demo
    image: nginx
    env:
    - name: DEMO_GREETING
      value: "Hello from the environment"
    - name: DEMO_FAREWELL
      value: "Such a sweet sorrow"
    envFrom:
    - configMapRef:
        name: app-config
    - secretRef:
        name: app-secret`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-3">Volume Mounting</h3>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`# ConfigMap as volume
apiVersion: v1
kind: Pod
metadata:
  name: configmap-volume-demo
spec:
  containers:
  - name: demo
    image: nginx
    volumeMounts:
    - name: config-volume
      mountPath: /etc/config
  volumes:
  - name: config-volume
    configMap:
      name: app-config

# Secret as volume
apiVersion: v1
kind: Pod
metadata:
  name: secret-volume-demo
spec:
  containers:
  - name: demo
    image: nginx
    volumeMounts:
    - name: secret-volume
      mountPath: /etc/secrets
      readOnly: true
  volumes:
  - name: secret-volume
    secret:
      secretName: app-secret`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>
              {/* CKAD Exam Tips */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">CKAD Exam Tips</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-3">Time Management</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Use imperative commands when possible</li>
                      <li>• Generate YAML with --dry-run=client</li>
                      <li>• Practice kubectl shortcuts and aliases</li>
                      <li>• Skip difficult questions and return later</li>
                    </ul>
                  </div>
                  <div className="border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-3">Essential Aliases</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
                        {`alias k=kubectl
alias kg='kubectl get'
alias kd='kubectl describe'
alias kdel='kubectl delete'

export do="--dry-run=client -o yaml"
export now="--force --grace-period 0"`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Conclusion</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  This comprehensive guide covers all essential CKAD exam topics. Success requires hands-on practice with real Kubernetes clusters. Focus on imperative commands for speed, understand core concepts deeply, and practice troubleshooting. CKAD tests your ability to work efficiently with Kubernetes in real-world scenarios. Good luck with your CKAD journey!
                </p>
              </section>
            </div>
          </article>

          {/* Footer Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Posts
              </Link>
              <div className="text-sm text-muted-foreground">
                Previous: Getting Started with Kubernetes
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
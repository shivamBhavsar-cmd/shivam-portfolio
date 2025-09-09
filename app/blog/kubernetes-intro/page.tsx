import Link from "next/link"

export default function KubernetesIntroBlog() {
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
              Getting Started with Kubernetes
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              A beginner's guide to container orchestration with Kubernetes.
            </p>
            
            <div className="flex items-center gap-4 mt-8 text-sm text-muted-foreground">
              <span>Published on December 20, 2024</span>
              <span>•</span>
              <span>15 min read</span>
            </div>
          </div>

          {/* Content Section */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Introduction</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. Originally developed by Google, it's now maintained by the Cloud Native Computing Foundation and has become the de facto standard for container orchestration.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">What is Kubernetes?</h2>
                <div className="bg-border/20 rounded-lg p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Kubernetes, often abbreviated as K8s, provides a platform for:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Container Orchestration:</strong> Managing containerized applications across a cluster of machines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Service Discovery:</strong> Automatically finding and connecting services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Load Balancing:</strong> Distributing traffic across multiple instances</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Auto-scaling:</strong> Automatically scaling applications based on demand</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Core Architecture</h2>
                <div className="space-y-8">
                  <div className="border border-border rounded-lg p-6 hover:border-muted-foreground/50 transition-colors duration-300">
                    <h3 className="text-xl font-medium mb-3">Control Plane</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The control plane manages the worker nodes and Pods in the cluster. It includes:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>API Server:</strong> The central hub that exposes the Kubernetes API</li>
                      <li>• <strong>etcd:</strong> Key-value store for all cluster data</li>
                      <li>• <strong>Scheduler:</strong> Assigns Pods to nodes</li>
                      <li>• <strong>Controller Manager:</strong> Manages various controllers</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-6 hover:border-muted-foreground/50 transition-colors duration-300">
                    <h3 className="text-xl font-medium mb-3">Worker Nodes</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Worker nodes run the containerized applications. Each node contains:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>kubelet:</strong> Communicates with the control plane</li>
                      <li>• <strong>Container Runtime:</strong> Runs containers (Docker, containerd, etc.)</li>
                      <li>• <strong>kube-proxy:</strong> Handles network routing for services</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Essential Kubernetes Objects</h2>
                <div className="space-y-8">
                  <div className="border border-border rounded-lg p-6 hover:border-muted-foreground/50 transition-colors duration-300">
                    <h3 className="text-xl font-medium mb-3">Pods</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The smallest deployable unit in Kubernetes. A Pod represents a single instance of a running process and can contain one or more containers.
                    </p>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
{`apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
  - name: nginx
    image: nginx
    ports:
    - containerPort: 80`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6 hover:border-muted-foreground/50 transition-colors duration-300">
                    <h3 className="text-xl font-medium mb-3">Deployments</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Provides declarative updates for Pods and ReplicaSets. Manages the desired state of your application.
                    </p>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.16.1`}
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6 hover:border-muted-foreground/50 transition-colors duration-300">
                    <h3 className="text-xl font-medium mb-3">Services</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Exposes a set of Pods as a network service. Provides stable networking and load balancing.
                    </p>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
{`apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
  type: ClusterIP`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Essential kubectl Commands</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Basic Operations</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
{`# Get cluster info
kubectl cluster-info

# Get nodes
kubectl get nodes

# Get pods
kubectl get pods

# Get all resources
kubectl get all`}
                      </pre>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Creating Resources</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
{`# Create from file
kubectl apply -f deployment.yaml

# Create deployment
kubectl create deployment nginx --image=nginx

# Expose deployment
kubectl expose deployment nginx --port=80`}
                      </pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Debugging</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
{`# Describe resource
kubectl describe pod nginx-pod

# Get logs
kubectl logs nginx-pod

# Execute in pod
kubectl exec -it nginx-pod -- /bin/bash`}
                      </pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Scaling & Updates</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">
{`# Scale deployment
kubectl scale deployment nginx --replicas=5

# Update image
kubectl set image deployment/nginx nginx=nginx:1.17

# Rollback
kubectl rollout undo deployment/nginx`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Getting Started - Your First Application</h2>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-3">Step 1: Create a Deployment</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto mb-3">
                      <pre className="text-sm text-green-400">
{`kubectl create deployment hello-world --image=nginx:latest`}
                      </pre>
                    </div>
                    <p className="text-sm text-muted-foreground">This creates a deployment with a single nginx pod.</p>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-3">Step 2: Expose the Application</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto mb-3">
                      <pre className="text-sm text-green-400">
{`kubectl expose deployment hello-world --type=NodePort --port=80`}
                      </pre>
                    </div>
                    <p className="text-sm text-muted-foreground">This creates a service to expose your application.</p>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-3">Step 3: Scale the Application</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto mb-3">
                      <pre className="text-sm text-green-400">
{`kubectl scale deployment hello-world --replicas=3`}
                      </pre>
                    </div>
                    <p className="text-sm text-muted-foreground">This scales your application to 3 replicas for high availability.</p>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-3">Step 4: Check Status</h4>
                    <div className="bg-black/20 rounded-lg p-4 overflow-x-auto mb-3">
                      <pre className="text-sm text-green-400">
{`kubectl get pods
kubectl get services
kubectl describe deployment hello-world`}
                      </pre>
                    </div>
                    <p className="text-sm text-muted-foreground">Monitor your application's status and health.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Best Practices</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium">Resource Management</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Always set resource requests and limits</li>
                      <li>• Use namespaces to organize resources</li>
                      <li>• Implement proper labeling strategy</li>
                      <li>• Use ConfigMaps and Secrets for configuration</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium">Security</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Use RBAC for access control</li>
                      <li>• Implement Pod Security Policies</li>
                      <li>• Regularly update container images</li>
                      <li>• Use service accounts appropriately</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium">Monitoring</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Implement health checks (readiness/liveness)</li>
                      <li>• Use Prometheus for metrics collection</li>
                      <li>• Set up proper logging with Fluentd</li>
                      <li>• Monitor resource utilization</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium">Development</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Use Helm for package management</li>
                      <li>• Implement GitOps workflows</li>
                      <li>• Version your container images</li>
                      <li>• Test deployments in staging first</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Next Steps</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Now that you understand the basics of Kubernetes, here are some areas to explore further:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-border rounded-lg p-4 text-center">
                    <h4 className="font-medium mb-2">Advanced Workloads</h4>
                    <p className="text-sm text-muted-foreground">StatefulSets, DaemonSets, Jobs, and CronJobs</p>
                  </div>
                  <div className="border border-border rounded-lg p-4 text-center">
                    <h4 className="font-medium mb-2">Networking</h4>
                    <p className="text-sm text-muted-foreground">Ingress, Network Policies, and Service Mesh</p>
                  </div>
                  <div className="border border-border rounded-lg p-4 text-center">
                    <h4 className="font-medium mb-2">Storage</h4>
                    <p className="text-sm text-muted-foreground">Persistent Volumes, Storage Classes, and CSI</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Conclusion</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Kubernetes is a powerful platform that can seem overwhelming at first, but by understanding the core concepts and practicing with basic commands, you'll quickly become proficient. Start with simple deployments and gradually explore more advanced features as your applications grow in complexity. The key is to start small and build your knowledge incrementally.
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
                Previous: How to Build a CI/CD Pipeline with Jenkins
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
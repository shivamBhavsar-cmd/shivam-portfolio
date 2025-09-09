import Link from "next/link"

export default function JenkinsCICDBlog() {
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

      {/* Main Content with top padding for fixed navbar */}
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
              How to Build a CI/CD Pipeline with Jenkins
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Step-by-step guide to automate deployments using Jenkins and Docker.
            </p>
            
            <div className="flex items-center gap-4 mt-8 text-sm text-muted-foreground">
              <span>Published on December 15, 2024</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>

          {/* Content Section */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Introduction</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Continuous Integration and Continuous Deployment (CI/CD) are essential for modern DevOps workflows. Jenkins is a popular open-source automation server that helps you build, test, and deploy your code efficiently.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Prerequisites</h2>
                <div className="bg-border/20 rounded-lg p-6">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Basic knowledge of Docker and containerization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Jenkins installed on your server or local machine</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Sample application code (e.g., a Maven project)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Access to a Kubernetes cluster (optional)</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Implementation Steps</h2>
                <div className="space-y-8">
                  <div className="border border-border rounded-lg p-6 hover:border-muted-foreground/50 transition-colors duration-300">
                    <h3 className="text-xl font-medium mb-3">1. Set up Jenkins</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Install Jenkins and configure the necessary plugins for Docker integration. Make sure to install the Docker Pipeline plugin and configure Docker as a build agent.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-6 hover:border-muted-foreground/50 transition-colors duration-300">
                    <h3 className="text-xl font-medium mb-3">2. Create a Jenkins Pipeline</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Use a Jenkinsfile to define your build, test, and deploy stages. This declarative approach makes your pipeline version-controlled and reproducible.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-6 hover:border-muted-foreground/50 transition-colors duration-300">
                    <h3 className="text-xl font-medium mb-3">3. Integrate Docker</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Build Docker images in your pipeline and push them to a registry like Docker Hub or AWS ECR. This ensures consistent deployment across environments.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-6 hover:border-muted-foreground/50 transition-colors duration-300">
                    <h3 className="text-xl font-medium mb-3">4. Deploy to Kubernetes</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Use kubectl or Helm to deploy your Docker containers to a Kubernetes cluster. Implement rolling updates for zero-downtime deployments.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Best Practices</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium">Security</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Use secure credential management</li>
                      <li>• Implement proper access controls</li>
                      <li>• Scan images for vulnerabilities</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium">Performance</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Use parallel execution where possible</li>
                      <li>• Cache dependencies and build artifacts</li>
                      <li>• Optimize Docker image layers</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Conclusion</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  By automating your CI/CD pipeline with Jenkins and Docker, you can achieve faster, more reliable deployments and improve your development workflow. This setup provides a solid foundation for scaling your DevOps practices.
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
                Next: AWS Cost Optimization Strategies
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
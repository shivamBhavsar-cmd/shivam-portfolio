import Link from "next/link"

const blogs = [
  {
    title: "How to Build a CI/CD Pipeline with Jenkins",
    excerpt: "Step-by-step guide to automate deployments using Jenkins and Docker.",
    url: "/blog/jenkins-cicd"
  },
  {
    title: "AWS Basics",
    excerpt: "An introduction to AWS services and best practices.",
    url: "/blog/aws"
  },
  {
    title: "Getting Started with Kubernetes",
    excerpt: "A beginner's guide to container orchestration with Kubernetes.",
    url: "/blog/kubernetes-intro"
  },
  {
    title: "Kubernetes CKAD Complete Guide",
    excerpt: "Comprehensive study guide covering all CKAD exam topics with practical examples and commands.",
    url: "/blog/kubernetes-ckad"
  }
]

export default function BlogPage() {
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
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Thoughts on DevOps, cloud infrastructure, and software engineering.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8">
            {blogs.map((blog, index) => (
              <article key={index} className="group">
                <Link href={blog.url} className="block">
                  <div className="border border-border rounded-lg p-8 hover:border-muted-foreground/50 transition-colors duration-300">
                    <h2 className="text-2xl sm:text-3xl font-light mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                      {blog.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span>Read more</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Footer Section */}
          <div className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground">
              More posts coming soon. Follow me on{" "}
              <Link href="https://linkedin.com/in/shivam-bhavsar" className="text-foreground hover:text-muted-foreground transition-colors duration-300">
                LinkedIn
              </Link>
              {" "}for updates.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
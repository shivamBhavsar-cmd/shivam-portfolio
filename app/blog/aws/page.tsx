import Link from "next/link"

export default function AWSBasicsBlog() {
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
              AWS Basics: Complete Guide
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              A comprehensive introduction to Amazon Web Services, covering essential services, concepts, and best practices for getting started with cloud computing.
            </p>
            
            <div className="flex items-center gap-4 mt-8 text-sm text-muted-foreground">
              <span>Published on December 25, 2024</span>
              <span>•</span>
              <span>25 min read</span>
            </div>
          </div>

          {/* Content Section */}
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="space-y-12">
              
              {/* Introduction */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">What is Amazon Web Services (AWS)?</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Amazon Web Services (AWS) is a comprehensive cloud computing platform provided by Amazon. It offers a wide range of services including computing power, database storage, content delivery, and other functionality to help businesses scale and grow.
                </p>
                
                <div className="bg-border/20 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-medium mb-4">Key Benefits of AWS</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Cost Effective</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Pay only for what you use</li>
                        <li>• No upfront costs or long-term contracts</li>
                        <li>• Scale resources up or down as needed</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Reliable & Secure</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 99.99% uptime SLA for most services</li>
                        <li>• Built-in security and compliance</li>
                        <li>• Data encryption at rest and in transit</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Core Services */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Core AWS Services</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  AWS offers over 200 services, but here are the essential ones you should know about when getting started.
                </p>

                {/* Compute Services */}
                <div className="space-y-8">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Compute Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon EC2</h4>
                        <p className="text-sm text-muted-foreground mb-3">Virtual servers in the cloud</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Scalable computing capacity</li>
                          <li>• Multiple instance types</li>
                          <li>• Pay-per-hour billing</li>
                          <li>• Auto-scaling capabilities</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">AWS Lambda</h4>
                        <p className="text-sm text-muted-foreground mb-3">Serverless compute service</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• No server management</li>
                          <li>• Pay per request</li>
                          <li>• Automatic scaling</li>
                          <li>• Event-driven execution</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon ECS</h4>
                        <p className="text-sm text-muted-foreground mb-3">Container orchestration service</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Docker container support</li>
                          <li>• Highly scalable</li>
                          <li>• Integrated with AWS services</li>
                          <li>• Fargate serverless option</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Storage Services */}
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Storage Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon S3</h4>
                        <p className="text-sm text-muted-foreground mb-3">Object storage service</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 99.999999999% durability</li>
                          <li>• Unlimited storage capacity</li>
                          <li>• Multiple storage classes</li>
                          <li>• Web hosting capabilities</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon EBS</h4>
                        <p className="text-sm text-muted-foreground mb-3">Block storage for EC2</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Persistent block storage</li>
                          <li>• High IOPS performance</li>
                          <li>• Snapshot backup</li>
                          <li>• Encryption support</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon EFS</h4>
                        <p className="text-sm text-muted-foreground mb-3">Managed file storage</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Scalable file storage</li>
                          <li>• Multiple EC2 access</li>
                          <li>• POSIX-compliant</li>
                          <li>• Pay for what you use</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Database Services */}
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Database Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon RDS</h4>
                        <p className="text-sm text-muted-foreground mb-3">Managed relational database</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• MySQL, PostgreSQL, Oracle</li>
                          <li>• Automated backups</li>
                          <li>• Multi-AZ deployments</li>
                          <li>• Read replicas</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon DynamoDB</h4>
                        <p className="text-sm text-muted-foreground mb-3">NoSQL database service</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Single-digit millisecond latency</li>
                          <li>• Fully managed</li>
                          <li>• Auto-scaling</li>
                          <li>• Global tables</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon ElastiCache</h4>
                        <p className="text-sm text-muted-foreground mb-3">In-memory data store</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Redis and Memcached</li>
                          <li>• Sub-millisecond latency</li>
                          <li>• Fully managed</li>
                          <li>• High availability</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Networking Services */}
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Networking & Content Delivery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon VPC</h4>
                        <p className="text-sm text-muted-foreground mb-3">Virtual private cloud</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Isolated network environment</li>
                          <li>• Custom IP address ranges</li>
                          <li>• Subnets and route tables</li>
                          <li>• Security groups and NACLs</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon CloudFront</h4>
                        <p className="text-sm text-muted-foreground mb-3">Global content delivery network</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Global edge locations</li>
                          <li>• Low latency content delivery</li>
                          <li>• DDoS protection</li>
                          <li>• SSL/TLS encryption</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Elastic Load Balancer</h4>
                        <p className="text-sm text-muted-foreground mb-3">Distribute incoming traffic</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Application Load Balancer</li>
                          <li>• Network Load Balancer</li>
                          <li>• Classic Load Balancer</li>
                          <li>• Health checks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Security & Identity */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Security & Identity Management</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  AWS provides comprehensive security features and identity management services to protect your resources and data.
                </p>

                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">AWS Identity and Access Management (IAM)</h3>
                    <p className="text-muted-foreground mb-4">
                      Control access to AWS services and resources securely.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Core Components</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• <strong>Users:</strong> Individual people or services</li>
                          <li>• <strong>Groups:</strong> Collection of users</li>
                          <li>• <strong>Roles:</strong> Set of permissions for AWS services</li>
                          <li>• <strong>Policies:</strong> Documents defining permissions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Best Practices</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Enable MFA for all users</li>
                          <li>• Follow principle of least privilege</li>
                          <li>• Use roles for applications</li>
                          <li>• Regularly audit permissions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Additional Security Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">AWS WAF</h4>
                        <p className="text-sm text-muted-foreground">Web application firewall to protect against common attacks</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">AWS Shield</h4>
                        <p className="text-sm text-muted-foreground">DDoS protection for applications running on AWS</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">AWS KMS</h4>
                        <p className="text-sm text-muted-foreground">Key Management Service for encryption keys</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Monitoring & Management */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Monitoring & Management</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  AWS provides powerful tools to monitor, manage, and optimize your cloud infrastructure.
                </p>

                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Amazon CloudWatch</h3>
                    <p className="text-muted-foreground mb-4">
                      Monitoring and observability service for AWS resources and applications.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Key Features</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Metrics collection and monitoring</li>
                          <li>• Log aggregation and analysis</li>
                          <li>• Alarms and notifications</li>
                          <li>• Custom dashboards</li>
                          <li>• Application insights</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Use Cases</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Infrastructure monitoring</li>
                          <li>• Application performance tracking</li>
                          <li>• Resource utilization optimization</li>
                          <li>• Automated responses to events</li>
                          <li>• Troubleshooting and debugging</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">AWS CloudFormation</h3>
                    <p className="text-muted-foreground mb-4">
                      Infrastructure as Code service to model and provision AWS resources.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Benefits</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Consistent resource provisioning</li>
                          <li>• Version control for infrastructure</li>
                          <li>• Automated rollback capabilities</li>
                          <li>• Cross-region deployments</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Template Format</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• JSON or YAML format</li>
                          <li>• Parameters and outputs</li>
                          <li>• Conditions and mappings</li>
                          <li>• Nested stacks support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Developer Tools & DevOps */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Developer Tools & DevOps</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  AWS provides a comprehensive suite of tools for continuous integration, deployment, and application development.
                </p>

                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">CI/CD Pipeline Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">AWS CodeCommit</h4>
                        <p className="text-sm text-muted-foreground mb-3">Fully managed source control service</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Git-based repositories</li>
                          <li>• Secure and scalable</li>
                          <li>• Integration with AWS services</li>
                          <li>• No size limits</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">AWS CodeBuild</h4>
                        <p className="text-sm text-muted-foreground mb-3">Fully managed continuous integration</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Compiles source code</li>
                          <li>• Runs tests</li>
                          <li>• Produces software packages</li>
                          <li>• Pay-per-use pricing</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">AWS CodeDeploy</h4>
                        <p className="text-sm text-muted-foreground mb-3">Automated application deployment</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Deploy to EC2, Lambda, ECS</li>
                          <li>• Blue/green deployments</li>
                          <li>• Rolling deployments</li>
                          <li>• Automatic rollback</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Container Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Amazon EKS</h4>
                        <p className="text-sm text-muted-foreground mb-3">Managed Kubernetes service</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Fully managed Kubernetes control plane</li>
                          <li>• Automatic updates and patching</li>
                          <li>• Integration with AWS services</li>
                          <li>• High availability and security</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">AWS Fargate</h4>
                        <p className="text-sm text-muted-foreground mb-3">Serverless compute for containers</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• No server management</li>
                          <li>• Pay for what you use</li>
                          <li>• Works with ECS and EKS</li>
                          <li>• Automatic scaling</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Application Integration */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Application Integration & Messaging</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  AWS provides services to help you integrate and coordinate distributed applications and microservices.
                </p>

                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Messaging Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon SQS</h4>
                        <p className="text-sm text-muted-foreground mb-3">Simple Queue Service</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Fully managed message queuing</li>
                          <li>• Standard and FIFO queues</li>
                          <li>• Dead letter queues</li>
                          <li>• Secure and reliable</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon SNS</h4>
                        <p className="text-sm text-muted-foreground mb-3">Simple Notification Service</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Pub/sub messaging</li>
                          <li>• Mobile push notifications</li>
                          <li>• Email and SMS</li>
                          <li>• Fan-out messaging</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon EventBridge</h4>
                        <p className="text-sm text-muted-foreground mb-3">Event bus service</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Event-driven architectures</li>
                          <li>• SaaS application integration</li>
                          <li>• Custom event routing</li>
                          <li>• Schema registry</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">API Management</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Amazon API Gateway</h4>
                        <p className="text-sm text-muted-foreground mb-3">Fully managed API service</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• RESTful and WebSocket APIs</li>
                          <li>• Authentication and authorization</li>
                          <li>• Traffic management and caching</li>
                          <li>• Request/response transformation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">AWS AppSync</h4>
                        <p className="text-sm text-muted-foreground mb-3">Managed GraphQL service</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Real-time data synchronization</li>
                          <li>• Offline support</li>
                          <li>• Multiple data sources</li>
                          <li>• Built-in security features</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Analytics & Big Data */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Analytics & Big Data</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  AWS offers a comprehensive suite of analytics services to help you gain insights from your data.
                </p>

                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Data Processing & Analytics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon Redshift</h4>
                        <p className="text-sm text-muted-foreground mb-3">Cloud data warehouse</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Petabyte-scale data warehouse</li>
                          <li>• Columnar storage</li>
                          <li>• Massively parallel processing</li>
                          <li>• SQL compatibility</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon EMR</h4>
                        <p className="text-sm text-muted-foreground mb-3">Managed big data platform</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Apache Hadoop and Spark</li>
                          <li>• Process vast amounts of data</li>
                          <li>• Auto-scaling clusters</li>
                          <li>• Cost-effective analytics</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon Athena</h4>
                        <p className="text-sm text-muted-foreground mb-3">Interactive query service</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Query data in S3 using SQL</li>
                          <li>• Serverless</li>
                          <li>• Pay per query</li>
                          <li>• Standard SQL support</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Real-time Analytics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Amazon Kinesis</h4>
                        <p className="text-sm text-muted-foreground mb-3">Real-time data streaming</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Data Streams for real-time processing</li>
                          <li>• Data Firehose for data delivery</li>
                          <li>• Data Analytics for stream processing</li>
                          <li>• Video Streams for video analytics</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">AWS Glue</h4>
                        <p className="text-sm text-muted-foreground mb-3">ETL service</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Extract, transform, load data</li>
                          <li>• Data catalog and discovery</li>
                          <li>• Serverless</li>
                          <li>• Schema inference</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Machine Learning & AI */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Machine Learning & Artificial Intelligence</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  AWS offers the most comprehensive set of machine learning services and supporting cloud infrastructure.
                </p>

                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">ML Platform Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Amazon SageMaker</h4>
                        <p className="text-sm text-muted-foreground mb-3">Fully managed ML platform</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Build, train, and deploy ML models</li>
                          <li>• Jupyter notebook instances</li>
                          <li>• Automatic model tuning</li>
                          <li>• Model registry and monitoring</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Amazon Bedrock</h4>
                        <p className="text-sm text-muted-foreground mb-3">Fully managed service for foundation models</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Access to leading foundation models</li>
                          <li>• Fine-tune models with your data</li>
                          <li>• Build generative AI applications</li>
                          <li>• Secure and private</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">AI Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon Rekognition</h4>
                        <p className="text-sm text-muted-foreground">Image and video analysis service</p>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon Comprehend</h4>
                        <p className="text-sm text-muted-foreground">Natural language processing service</p>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon Textract</h4>
                        <p className="text-sm text-muted-foreground">Extract text and data from documents</p>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon Polly</h4>
                        <p className="text-sm text-muted-foreground">Text-to-speech service</p>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon Transcribe</h4>
                        <p className="text-sm text-muted-foreground">Speech-to-text service</p>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Amazon Translate</h4>
                        <p className="text-sm text-muted-foreground">Language translation service</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* AWS Global Infrastructure */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">AWS Global Infrastructure</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Understanding AWS global infrastructure is crucial for designing resilient and performant applications.
                </p>

                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Infrastructure Components</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">AWS Regions</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Geographic areas with multiple AZs</li>
                          <li>• 33+ regions worldwide</li>
                          <li>• Data sovereignty compliance</li>
                          <li>• Isolated from other regions</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Availability Zones</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• One or more data centers</li>
                          <li>• Independent power and cooling</li>
                          <li>• High-bandwidth, low-latency network</li>
                          <li>• Fault isolation boundaries</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Edge Locations</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• CloudFront content delivery</li>
                          <li>• 400+ edge locations</li>
                          <li>• Reduced latency for users</li>
                          <li>• Global content caching</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Design Principles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">High Availability</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Deploy across multiple AZs</li>
                          <li>• Use load balancers</li>
                          <li>• Implement auto-scaling</li>
                          <li>• Design for failure</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Disaster Recovery</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Cross-region replication</li>
                          <li>• Backup and restore strategies</li>
                          <li>• Pilot light and warm standby</li>
                          <li>• Multi-site active/active</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cost Management - Continue from where it left off */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Cost Management & Optimization</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  AWS provides tools and strategies to help you monitor, control, and optimize your cloud spending.
                </p>

                <div className="space-y-8">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Cost Management Tools</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">AWS Cost Explorer</h4>
                        <p className="text-sm text-muted-foreground mb-3">Visualize and analyze your AWS costs and usage</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Cost and usage reports</li>
                          <li>• Forecasting and budgeting</li>
                          <li>• Right-sizing recommendations</li>
                          <li>• Reserved Instance recommendations</li>
                          <li>• Custom cost allocation tags</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">AWS Budgets</h4>
                        <p className="text-sm text-muted-foreground mb-3">Set custom cost and usage budgets with alerts</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Cost, usage, and RI utilization budgets</li>
                          <li>• Email and SNS notifications</li>
                          <li>• Custom budget periods</li>
                          <li>• Budget actions automation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Cost Optimization Strategies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Right-Sizing</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Monitor resource utilization</li>
                          <li>• Use AWS Compute Optimizer</li>
                          <li>• Match instance types to workloads</li>
                          <li>• Implement auto-scaling</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Reserved Instances</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 1-3 year commitments</li>
                          <li>• Up to 75% cost savings</li>
                          <li>• Standard and Convertible types</li>
                          <li>• Regional or zonal flexibility</li>
                        </ul>
                      </div>
                      <div className="border border-border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Spot Instances</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Up to 90% cost savings</li>
                          <li>• Fault-tolerant workloads</li>
                          <li>• Batch processing and CI/CD</li>
                          <li>• Auto Scaling integration</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">AWS Pricing Models</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Pay-As-You-Go</h4>
                        <p className="text-sm text-muted-foreground mb-3">Pay only for what you use with no upfront costs</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• No minimum commitments</li>
                          <li>• Scale up or down anytime</li>
                          <li>• Perfect for variable workloads</li>
                          <li>• Most services use this model</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Free Tier</h4>
                        <p className="text-sm text-muted-foreground mb-3">Free usage limits for 12 months plus always-free services</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 750 hours EC2 t2.micro monthly</li>
                          <li>• 5GB S3 Standard storage</li>
                          <li>• 1 million Lambda requests monthly</li>
                          <li>• Always-free DynamoDB, SNS, CloudWatch</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Getting Started */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Getting Started with AWS</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Ready to begin your AWS journey? Here&apos;s how to get started with the cloud platform.
                </p>

                <div className="space-y-8">
                  {/* Account Setup */}
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Account Setup and Initial Configuration</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-blue-500 font-medium text-sm">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Create AWS Account</h4>
                          <p className="text-sm text-muted-foreground mb-2">Sign up at aws.amazon.com with email and payment method</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Verify email and phone number</li>
                            <li>• Choose support plan (Basic is free)</li>
                            <li>• Account activation takes a few minutes</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-500 font-medium text-sm">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Secure Your Root Account</h4>
                          <p className="text-sm text-muted-foreground mb-2">Protect your root account with MFA and strong password</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Enable Multi-Factor Authentication</li>
                            <li>• Create IAM users for daily tasks</li>
                            <li>• Never share root credentials</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-purple-500 font-medium text-sm">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Set Up Billing Alerts</h4>
                          <p className="text-sm text-muted-foreground mb-2">Monitor costs to avoid unexpected charges</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Create billing alarms in CloudWatch</li>
                            <li>• Set up AWS Budgets</li>
                            <li>• Review Free Tier usage regularly</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Learning Path */}
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Recommended Learning Path</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Beginner Level (1-2 months)</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Master the AWS Management Console</li>
                          <li>• Launch your first EC2 instance</li>
                          <li>• Store files in S3 buckets</li>
                          <li>• Create simple Lambda functions</li>
                          <li>• Set up basic monitoring with CloudWatch</li>
                          <li>• Understand IAM users, groups, and policies</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Intermediate Level (3-6 months)</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Design VPC networks with subnets</li>
                          <li>• Deploy applications with load balancers</li>
                          <li>• Set up RDS databases with backups</li>
                          <li>• Implement auto-scaling groups</li>
                          <li>• Create CloudFormation templates</li>
                          <li>• Build CI/CD pipelines with CodePipeline</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Best Practices */}
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">AWS Best Practices</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          Security
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Enable MFA on all accounts</li>
                          <li>• Use IAM roles over access keys</li>
                          <li>• Apply principle of least privilege</li>
                          <li>• Encrypt data at rest and in transit</li>
                          <li>• Regularly rotate credentials</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Reliability
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Design for failure and redundancy</li>
                          <li>• Use multiple Availability Zones</li>
                          <li>• Implement automated backups</li>
                          <li>• Monitor applications and infrastructure</li>
                          <li>• Test disaster recovery procedures</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          Cost Optimization
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Right-size your resources</li>
                          <li>• Use Reserved and Spot Instances</li>
                          <li>• Implement auto-scaling</li>
                          <li>• Monitor and optimize storage</li>
                          <li>• Choose appropriate service tiers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Common Use Cases */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Common AWS Use Cases</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Explore how different industries and business scenarios leverage AWS services.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Web Applications</h3>
                    <p className="text-muted-foreground mb-4">Host scalable web applications with global reach</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Frontend:</span>
                          <span className="text-muted-foreground ml-2">S3 + CloudFront for static hosting</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Backend:</span>
                          <span className="text-muted-foreground ml-2">EC2 or Lambda for application logic</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Database:</span>
                          <span className="text-muted-foreground ml-2">RDS or DynamoDB for data storage</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Load Balancing:</span>
                          <span className="text-muted-foreground ml-2">ALB for traffic distribution</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Data Analytics</h3>
                    <p className="text-muted-foreground mb-4">Process and analyze large datasets for business insights</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Data Lake:</span>
                          <span className="text-muted-foreground ml-2">S3 for raw data storage</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Processing:</span>
                          <span className="text-muted-foreground ml-2">EMR, Glue for data transformation</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Analytics:</span>
                          <span className="text-muted-foreground ml-2">Athena, Redshift for querying</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Visualization:</span>
                          <span className="text-muted-foreground ml-2">QuickSight for dashboards</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Machine Learning</h3>
                    <p className="text-muted-foreground mb-4">Build, train, and deploy ML models at scale</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Development:</span>
                          <span className="text-muted-foreground ml-2">SageMaker for model development</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Pre-built AI:</span>
                          <span className="text-muted-foreground ml-2">Rekognition, Comprehend, Textract</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Data Prep:</span>
                          <span className="text-muted-foreground ml-2">Glue for data preparation</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Deployment:</span>
                          <span className="text-muted-foreground ml-2">Lambda or EC2 for inference</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Backup & Disaster Recovery</h3>
                    <p className="text-muted-foreground mb-4">Protect critical data and ensure business continuity</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Backup:</span>
                          <span className="text-muted-foreground ml-2">AWS Backup for centralized backup</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Archiving:</span>
                          <span className="text-muted-foreground ml-2">S3 Glacier for long-term storage</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Replication:</span>
                          <span className="text-muted-foreground ml-2">Cross-region replication</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Recovery:</span>
                          <span className="text-muted-foreground ml-2">Multi-AZ deployments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-6">Getting Started with Your AWS Journey</h2>
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8 border border-border">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    AWS offers an incredibly powerful and flexible cloud platform that can scale with your needs. 
                    Whether you&apos;re a startup building your first application or an enterprise migrating complex workloads, 
                    AWS provides the tools and services to help you succeed.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="font-medium mb-2">Start Learning</h3>
                      <p className="text-sm text-muted-foreground">Begin with AWS Free Tier and hands-on tutorials</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </div>
                      <h3 className="font-medium mb-2">Build Projects</h3>
                      <p className="text-sm text-muted-foreground">Practice with real-world projects and use cases</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <h3 className="font-medium mb-2">Get Certified</h3>
                      <p className="text-sm text-muted-foreground">Validate your skills with AWS certifications</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Ready to dive deeper? Explore specific AWS services or check out our other cloud computing guides.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link 
                        href="https://aws.amazon.com/free/" 
                        className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Start Free Tier
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                      <Link 
                        href="/blog" 
                        className="inline-flex items-center gap-2 border border-border hover:bg-border/50 px-6 py-3 rounded-lg transition-colors duration-300"
                      >
                        More Tutorials
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
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
                Next: Deep Dive into AWS Security
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
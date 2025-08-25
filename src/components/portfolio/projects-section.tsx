import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Award, Calendar, Code2 } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Stox Sight",
      subtitle: "AI-Powered Predictive Analytics for Secure Stock and Crypto Markets",
      category: "B.Tech Project",
      duration: "04/25 - Current",
      description: "Designing an AI-driven system using Python, Scikit-Learn, TensorFlow, and PyTorch to forecast stock and crypto prices with up to 15% improved accuracy, building FastAPI + Streamlit pipelines for automated PDF reports and actionable investment insights.",
      highlights: [
        "15% improved prediction accuracy",
        "FastAPI + Streamlit integration",
        "Automated PDF report generation",
        "Real-time investment insights"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn", "FastAPI", "Streamlit"],
      githubUrl: "https://github.com/MJ665/StoxSight",
      status: "Active"
    },
    {
      title: "Algo Stox",
      subtitle: "AI-Powered Trading Dashboard",
      category: "Personal Project",
      duration: "08/25 - Current",
      description: "Developing a TradingView-style dashboard with DL & ML-driven trading strategies, integrated with an MCP server for real-time market data, and Generative AI-powered prompts to suggest buy/sell orders.",
      highlights: [
        "TradingView-style interface",
        "Real-time market data integration",
        "AI-powered trading suggestions",
        "Automated order execution"
      ],
      technologies: ["React", "Node.js", "Machine Learning", "WebSockets", "Trading APIs", "AI"],
      githubUrl: "https://github.com/MJ665/AlgoStox",
      status: "Active"
    },
    {
      title: "Mac Elearning Platform",
      subtitle: "Complete E-Learning Ecosystem",
      category: "Professional Project",
      duration: "06/24 - 09/25",
      description: "Built and maintained a React.js-based company website and Next.js e-learning platform with comprehensive features including JWT authentication, AWS-hosted media, payment integration, and admin dashboards.",
      highlights: [
        "Multi-platform architecture",
        "AWS DRM-protected content",
        "Payment gateway integration",
        "Advanced analytics dashboard"
      ],
      technologies: ["React", "Next.js", "PostgreSQL", "Prisma", "AWS", "Tailwind CSS", "Razorpay"],
      websiteUrl: "https://www.macelearning.in/",
      githubUrl: "https://github.com/MAC-Management-Academy/NextLearn",
      status: "Live"
    },
    {
      title: "System Threat Forecaster",
      subtitle: "ML-Powered Security Analysis",
      category: "IIT Madras Project",
      duration: "01/25 - 04/25",
      description: "Developed threat detection models using Logistic Regression, Random Forest, and LightGBM achieving 62.57% malware risk prediction accuracy. Awarded 81/100 (A Grade) for project excellence.",
      highlights: [
        "62.57% prediction accuracy",
        "Multiple ML algorithms comparison",
        "System property analysis",
        "A Grade achievement"
      ],
      technologies: ["Python", "Scikit-Learn", "LightGBM", "Data Analysis", "Security"],
      githubUrl: "https://github.com/MJ665/MLP-Project-System-Threat-Forecaster",
      status: "Completed",
      grade: "A (81/100)"
    },
    {
      title: "Business Data Management",
      subtitle: "Wholesale Grocery Analytics",
      category: "IIT Madras Project",
      duration: "10/24 - 04/25",
      description: "Designed data-driven strategies for wholesale grocery operations using segmentation, time series forecasting, and churn prediction, optimizing pricing and inventory management with projected improvements.",
      highlights: [
        "12% projected profit increase",
        "8% reduction in customer attrition",
        "Advanced segmentation analysis",
        "Inventory optimization"
      ],
      technologies: ["Python", "Time Series Analysis", "Customer Analytics", "Business Intelligence"],
      githubUrl: "https://github.com/MJ665/BDM-Project",
      status: "Completed"
    },
    {
      title: "Internet Banking Clone",
      subtitle: "Paytm-Inspired Payment System",
      category: "Learning Project",
      duration: "08/24",
      description: "Built a monorepo architecture using Turborepo with Next.js applications, shared UI components, and TypeScript-based package management with modular payment workflows.",
      highlights: [
        "Monorepo architecture",
        "Shared component library",
        "TypeScript integration",
        "Modular design patterns"
      ],
      technologies: ["Next.js", "Turborepo", "TypeScript", "Payment APIs", "Monorepo"],
      githubUrl: "https://github.com/MJ665/PaymentApplication",
      status: "Completed"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Live": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Completed": return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text">Projects & Hackathons</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions spanning AI/ML, full-stack development, and data science. 
            From predictive analytics to e-learning platforms, each project showcases technical excellence and real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="portfolio-card h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Code2 className="h-5 w-5 text-primary" />
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <p className="text-sm font-medium text-primary mb-2">{project.subtitle}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {project.duration}
                      {project.grade && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          <Award className="h-3 w-3 mr-1" />
                          {project.grade}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.websiteUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.websiteUrl, "_blank")}
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
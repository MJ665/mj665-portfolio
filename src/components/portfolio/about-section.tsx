import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Award, 
  Code,
  Brain,
  Database,
  Globe,
  TrendingUp,
  Users
} from "lucide-react"

export function AboutSection() {
  const skills = [
    {
      category: "AI & Machine Learning 🧠",
      icon: <Brain className="h-5 w-5" />,
      items: [
        "Artificial Intelligence", "Machine Learning", "Data Science", "Natural Language Processing", 
        "Predictive Analytics", "Generative AI", "Computer Vision", "TensorFlow", "PyTorch", 
        "Keras", "XGBoost", "LightGBM", "spaCy", "NLTK", "MLflow", "Weights & Biases", 
        "Streamlit", "HuggingFace Transformers", "LangChain", "Scikit Learn"
      ]
    },
    {
      category: "Full-Stack Development 💻", 
      icon: <Code className="h-5 w-5" />,
      items: [
        "Python", "JavaScript", "TypeScript", "C++", "C", "Spring Framework", "Express", 
        "ReactJS", "Next.js", "Next Auth", "ORM", "Prisma", "SQL", "PostgreSQL", 
        "MongoDB", "Elasticsearch", "Kafka", "RabbitMQ"
      ]
    },
    {
      category: "DevOps & Cloud ☁️",
      icon: <Database className="h-5 w-5" />,
      items: [
        "Terraform", "AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Monorepo", 
        "Turborepo", "Prometheus", "Grafana", "PagerDuty", "Linux/UNIX", "Networking", 
        "Distributed Systems", "System Design", "Scaling"
      ]
    },
    {
      category: "Business & Analytics 📊",
      icon: <TrendingUp className="h-5 w-5" />,
      items: [
        "Business Analytics", "Business Data Management", "Stock & Trading Analytics", 
        "Advanced Excel", "Power BI", "Algorithms & Data Structures", "Debugging & Performance Tuning"
      ]
    },
    {
      category: "Soft Skills & Languages 🌟",
      icon: <Users className="h-5 w-5" />,
      items: [
        "Leadership", "Critical Thinking", "Innovation", "Resilience", "Problem Solving", 
        "Team Collaboration", "Time Management", "Adaptability", "Continuous Learning", 
        "English (Professional)", "Hindi (Professional)"
      ]
    }
  ]

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/MJ665", icon: <Github className="h-5 w-5" /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mj2h/", icon: <Linkedin className="h-5 w-5" /> },
    { name: "LeetCode", url: "https://leetcode.com/u/MJ665/", icon: <Code className="h-5 w-5" /> },
    { name: "Certificates", url: "https://bit.ly/MJ665Certificates", icon: <Award className="h-5 w-5" /> },
    { name: "Linktree", url: "https://linktr.ee/mj665", icon: <ExternalLink className="h-5 w-5" /> },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text">Hey, I'm Meet! 👋</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm an AI/ML enthusiast who loves turning complex data into simple solutions! 
            When I'm not training models or building apps, you'll find me exploring the latest tech trends 
            and figuring out how to make the world a little smarter, one algorithm at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education Cards */}
          <Card className="portfolio-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">B.Tech in AI/ML Engineering</h4>
                <p className="text-muted-foreground">Thakur College of Engineering and Technology (TCET)</p>
                <p className="text-sm text-muted-foreground">CGPA: 9.47/10 | 2022-2026</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">BS in Data Science</h4>
                <p className="text-muted-foreground">Indian Institute of Technology Madras (IIT-M)</p>
                <p className="text-sm text-muted-foreground">CGPA: 7.35 | 2022-2026</p>
              </div>
            </CardContent>
          </Card>

          {/* Key Strengths */}
          <Card className="portfolio-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Key Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <Badge variant="outline" className="mr-2">Leader</Badge>
                  <Badge variant="outline" className="mr-2">Critical Thinker</Badge>
                  <Badge variant="outline" className="mr-2">Innovative</Badge>
                </div>
                <div>
                  <Badge variant="outline" className="mr-2">Problem Solver</Badge>
                  <Badge variant="outline" className="mr-2">Team Player</Badge>
                  <Badge variant="outline" className="mr-2">Adaptable</Badge>
                </div>
                <div>
                  <Badge variant="outline" className="mr-2">Time Conscious</Badge>
                  <Badge variant="outline" className="mr-2">Continuous Learner</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skillGroup, index) => (
            <Card key={skillGroup.category} className="portfolio-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  {skillGroup.icon}
                  {skillGroup.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                size="lg"
                onClick={() => window.open(link.url, "_blank")}
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {link.icon}
                <span className="ml-2">{link.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
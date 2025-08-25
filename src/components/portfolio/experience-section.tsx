import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, ExternalLink, Building2 } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Intern",
      company: "Larsen and Toubro",
      location: "Chennai",
      duration: "07/25 - 09/25",
      current: true,
      description: "Assisted in analyzing geospatial data related to infrastructure networks using data analytics and machine learning techniques to support operational improvements.",
      highlights: [
        "Analyzed geospatial data for infrastructure networks",
        "Developed interactive dashboards using Power BI",
        "Used Python and GIS tools for data preprocessing",
        "Supported pattern recognition and data segmentation"
      ],
      companyUrl: "https://www.larsentoubro.com/",
      letterUrl: "https://drive.google.com/file/d/1atTskoGax8w9ea7vJ42eJj8KMLj66LBm/view?usp=sharing",
      skills: ["Python", "Power BI", "GIS", "Machine Learning", "Data Analytics"]
    },
    {
      title: "Freelance & Developer",
      company: "MAC Academy",
      location: "Edutech Organization",
      duration: "06/24 - 09/25",
      current: true,
      description: "Engineered multiple production-grade platforms including SEO-optimized websites, e-learning platforms, and AI-driven analytics tools.",
      highlights: [
        "Built React.js company site with SEO optimization",
        "Developed Next.js e-learning platform with AWS DRM",
        "Implemented secure JWT authentication & payment gateways",
        "Created AI-driven usage analytics with churn prediction"
      ],
      companyUrl: "https://www.macelearning.in/",
      skills: ["React", "Next.js", "AWS", "PostgreSQL", "Prisma", "JWT", "Razorpay", "AI Analytics"]
    },
    {
      title: "Executive Director & Maintainer",
      company: "TCET Open Source",
      location: "Open Source Organization",
      duration: "06/23 - 11/23",
      current: false,
      description: "Led technical bootcamps and managed repository operations, promoted from Intern to Executive Director for driving impactful documentation and collaboration.",
      highlights: [
        "Led 4 technical bootcamps training 6+ members",
        "Increased open-source participation by 30%",
        "Maintained 100% CI/CD pipeline reliability",
        "Supported 2,000+ daily active users"
      ],
      companyUrl: "https://github.com/tcet-opensource",
      letterUrl: "https://drive.google.com/file/d/19o5zPVZBkU2E6rFslAAxJvqpJTrlp16p/view?usp=sharing",
      skills: ["Docusaurus", "Linux", "GitHub", "CI/CD", "Open Source", "Technical Writing"]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey across AI/ML, data science, and full-stack development with hands-on experience 
            in building scalable solutions and leading technical initiatives.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="portfolio-card">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl flex items-center gap-2 mb-2">
                      <Building2 className="h-6 w-6 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                        {exp.company}
                        {exp.companyUrl && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0"
                            onClick={() => window.open(exp.companyUrl, "_blank")}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          {exp.duration}
                          {exp.current && (
                            <Badge variant="default" className="ml-2">
                              Current
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {exp.letterUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(exp.letterUrl, "_blank")}
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Letter
                    </Button>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ContactForm from "./contact-form"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Download,
  Award,
  Code,
  Globe
} from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9967155568",
      href: "tel:+919967155568"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "meet.jain563@gmail.com",
      href: "mailto:meet.jain563@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Mumbai, India",
      href: null
    }
  ]

  const socialLinks = [
    {
      name: "GitHub",
      username: "@MJ665",
      url: "https://github.com/MJ665",
      icon: <Github className="h-5 w-5" />,
      description: "Open source projects and contributions"
    },
    {
      name: "LinkedIn",
      username: "@mj2h",
      url: "https://www.linkedin.com/in/mj2h/",
      icon: <Linkedin className="h-5 w-5" />,
      description: "Professional network and updates"
    },
    {
      name: "LeetCode",
      username: "@MJ665",
      url: "https://leetcode.com/u/MJ665/",
      icon: <Code className="h-5 w-5" />,
      description: "Coding challenges and algorithms"
    },
    {
      name: "Portfolio",
      username: "mj665.in",
      url: "http://mj665.in",
      icon: <Globe className="h-5 w-5" />,
      description: "Personal website and portfolio"
    }
  ]

  const quickLinks = [
    {
      name: "Download Resume",
      url: "https://link-bridge.mj665.in/go/mjresume",
      icon: <Download className="h-4 w-4" />,
      variant: "default" as const
    },
    {
      name: "Download CV",
      url: "https://link-bridge.mj665.in/go/mjcv",
      icon: <Download className="h-4 w-4" />,
      variant: "outline" as const
    },
    {
      name: "Certificates",
      url: "https://bit.ly/MJ665Certificates",
      icon: <Award className="h-4 w-4" />,
      variant: "outline" as const
    },
    {
      name: "All Links",
      url: "https://linktr.ee/mj665",
      icon: <ExternalLink className="h-4 w-4" />,
      variant: "outline" as const
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text">Let's Connect! 🤝</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to turn crazy ideas into reality? Want to chat about AI, ML, or just grab a virtual coffee? 
            I'm always up for exciting collaborations and meaningful conversations!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="portfolio-card">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.label}</h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="pt-6 border-t border-border">
                <h4 className="font-semibold mb-4">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant={link.variant}
                      size="sm"
                      onClick={() => window.open(link.url, "_blank")}
                      className="justify-start h-auto py-2 px-3"
                    >
                      {link.icon}
                      <span className="ml-2 text-xs">{link.name}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="portfolio-card">
            <CardHeader>
              <CardTitle className="text-2xl">Connect on Social Media</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => window.open(link.url, "_blank")}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{link.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {link.username}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="mb-12">
          <ContactForm />
        </div>

        {/* Quick Contact Options */}
        <div className="text-center">
          <Card className="portfolio-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Prefer the Classic Way? 📧</h3>
              <p className="text-muted-foreground mb-6">
                Sometimes old school is the best school! Hit me up directly or connect on LinkedIn.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="btn-hero"
                  onClick={() => window.open("mailto:meet.jain563@gmail.com", "_self")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Direct Email
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open("https://www.linkedin.com/in/mj2h/", "_blank")}
                  className="border-2 hover:bg-primary hover:text-primary-foreground"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn DM
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Resume", url: "https://link-bridge.mj665.in/go/mjresume" },
    { name: "CV", url: "https://link-bridge.mj665.in/go/mjcv" },
    { name: "Certificates", url: "https://bit.ly/MJ665Certificates" },
    { name: "Portfolio", url: "http://mj665.in" }
  ]

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/MJ665", icon: <Github className="h-4 w-4" /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mj2h/", icon: <Linkedin className="h-4 w-4" /> },
    { name: "Email", url: "mailto:meet.jain563@gmail.com", icon: <Mail className="h-4 w-4" /> },
    { name: "Linktree", url: "https://linktr.ee/mj665", icon: <ExternalLink className="h-4 w-4" /> }
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold hero-text">Meet Jain</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI/ML Engineer passionate about building innovative solutions in data science, 
              machine learning, and full-stack development. Currently pursuing dual degrees 
              from TCET and IIT Madras.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">AI/ML</Badge>
              <Badge variant="secondary" className="text-xs">Data Science</Badge>
              <Badge variant="secondary" className="text-xs">Full-Stack</Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(link.url, "_blank")}
                  className="justify-start h-auto py-2 px-2 text-sm hover:bg-[hsl(var(--primary-hover))]"
                >
                  {link.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(link.url, "_blank")}
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {link.icon}
                  <span className="ml-2 text-xs">{link.name}</span>
                </Button>
              ))}
            </div>
            
            <div className="pt-4">
              <p className="text-xs text-muted-foreground">
                📧 meet.jain563@gmail.com
              </p>
              <p className="text-xs text-muted-foreground">
                📱 +91 9967155568
              </p>
              <p className="text-xs text-muted-foreground">
                📍 Mumbai, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Meet Jain. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>CGPA: 9.47/10 (TCET) | 7.35 (IIT-M)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
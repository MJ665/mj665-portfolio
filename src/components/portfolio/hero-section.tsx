import { Download, Mail, Phone, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src="https://avatars.githubusercontent.com/u/111617351?v=4"
                alt="Meet Jain"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-primary/20 to-transparent animate-pulse"></div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 hero-text">
            Meet Jain
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 delay-100 animate-fade-in-up">
            AI/ML Engineer | Data Scientist | Full-Stack Developer
          </p>

          {/* Skills Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 delay-200 animate-fade-in-up">
            <Badge variant="secondary" className="px-3 py-1">Python</Badge>
            <Badge variant="secondary" className="px-3 py-1">Machine Learning</Badge>
            <Badge variant="secondary" className="px-3 py-1">React</Badge>
            <Badge variant="secondary" className="px-3 py-1">Data Science</Badge>
            <Badge variant="secondary" className="px-3 py-1">AI</Badge>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 delay-300 animate-fade-in-up">
            <Button
              size="lg"
              className="btn-hero group px-8 py-3 text-lg"
              onClick={() => window.open("https://link-bridge.mj665.in/go/mjresume", "_blank")}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => window.open("https://link-bridge.mj665.in/go/mjcv", "_blank")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-4 delay-400 animate-fade-in-up">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open("tel:+919967155568", "_self")}
              className="hover:bg-[hsl(var(--primary-hover))]"
            >
              <Phone className="mr-2 h-4 w-4" />
              +91 9967155568
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open("mailto:meet.jain563@gmail.com", "_self")}
              className="hover:bg-[hsl(var(--primary-hover))]"
            >
              <Mail className="mr-2 h-4 w-4" />
              meet.jain563@gmail.com
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open("http://mj665.in", "_blank")}
              className="hover:bg-[hsl(var(--primary-hover))]"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              mj665.in
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
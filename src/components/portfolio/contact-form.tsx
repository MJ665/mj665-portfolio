import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Send, CheckCircle } from "lucide-react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

const scriptURL = import.meta.env.CONTACT_FORM_SCRIPT_URL as string;


    const postData = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      message: formData.message
    }).toString()

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: postData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })

      const result = await response.json()

      if (result.result === 'success') {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        toast({
          title: "Message sent! 🎉",
          description: "Thanks for reaching out! I'll get back to you soon.",
        })
      } else {
        throw new Error(result.message || 'Unknown error occurred')
      }
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Failed to send message. Please try again or reach out directly via email.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <Card className="portfolio-card max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Message Delivered! 🚀</h3>
          <p className="text-muted-foreground mb-4">
            Your message landed safely in my inbox at <strong>meet.jain563@gmail.com</strong>. 
            I'll ping you back soon with some exciting ideas!
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            variant="outline"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="portfolio-card max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Let's Build Something Amazing! ✨</CardTitle>
        <p className="text-center text-muted-foreground">
          Got a cool project idea? Want to chat about AI/ML? Just drop me a line below!
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name*</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="What should I call you?"
              required
              className="transition-all duration-200 focus:scale-[1.02]"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address*</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.awesome.email@domain.com"
              required
              className="transition-all duration-200 focus:scale-[1.02]"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Your Message*</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, idea, or just say hi! I'm all ears 👂"
              required
              className="min-h-[120px] transition-all duration-200 focus:scale-[1.02]"
            />
          </div>
          
          <Button
            type="submit"
            disabled={loading}
            className="w-full btn-hero"
            size="lg"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message 🚀
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default ContactForm
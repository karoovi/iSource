"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@isource.com",
    href: "mailto:hello@isource.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9898 989 898",
    href: "tel:+919898989898",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, IN",
    href: "https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9881312,77.5393994,39543m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9628957!4d77.57754!16zL20vMDljMTc",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-background to-primary/6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="animate-slide-in-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Contact Us
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Let&apos;s discuss your project
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Ready to build your dream team? Get in touch and let&apos;s explore
              how we can help you achieve your goals.
            </p>

            <div className="mt-12 space-y-6">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-start gap-4 p-4 rounded-lg hover-lift smooth-transition"
              >
                <div className="p-3 bg-accent/12 border border-accent/30 rounded-lg smooth-transition group-hover:bg-accent group-hover:text-accent-foreground text-accent">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-foreground smooth-transition group-hover:text-accent">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-gradient-to-br from-primary/8 to-primary/3 p-8 lg:p-10 rounded-xl border-2 border-primary/25 backdrop-blur-sm animate-slide-in-right">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
              <div className="w-16 h-16 bg-accent/15 border border-accent/30 rounded-full flex items-center justify-center mb-6">
                <Send className="w-8 h-8 text-accent" />
              </div>
                <h3 className="font-serif text-2xl font-medium text-foreground mb-2">
                  Message Sent
                </h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We&apos;ll be in touch within 24 hours.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your staffing needs..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 smooth-transition hover-lift"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      {/* Navy Accent Divider */}
      <div className="h-1 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
      <AboutSection />
      <div className="h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
      <ServicesSection />
      <div className="h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
      <TestimonialsSection />
      <div className="h-0.5 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0" />
      <ContactSection />
      <Footer />
    </main>
  )
}

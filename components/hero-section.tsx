import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-primary/5 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/12 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/6 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-6 border border-primary/30 bg-primary/8 px-4 py-1.5 rounded-full animate-fade-in">
            Staffing &amp; Product Solutions
          </span>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.1] text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Building teams that
            <br />
            <span className="text-accent smooth-transition">transform</span> businesses
          </h1>

          <p className="mt-8 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We connect exceptional talent with forward-thinking companies,
            delivering end-to-end staffing and product solutions that drive
            measurable growth.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 smooth-transition hover-lift" asChild>
              <Link href="#contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base border-accent/40 text-accent smooth-transition hover:bg-accent/8 hover:border-accent/60" asChild>
              <Link href="#services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 gap-8 sm:grid-cols-4 border-t-2 border-primary/25 pt-12">
          {[
            { value: "500+", label: "Placements Made" },
            { value: "98%", label: "Client Retention" },
            { value: "50+", label: "Enterprise Partners" },
            { value: "12", label: "Years Experience" },
          ].map((stat, idx) => (
            <div key={stat.label} className="text-center animate-scale-in" style={{ animationDelay: `${0.4 + idx * 0.1}s` }}>
              <p className="font-serif text-4xl font-bold text-primary smooth-transition hover:text-accent">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

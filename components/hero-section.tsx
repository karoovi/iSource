import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <>
      {/* Hero Image Section */}
      <section className="relative py-8 lg:py-10 bg-white overflow-hidden">
        <div className="w-full flex items-center justify-center animate-fade-in">
          <div className="mx-auto w-full max-w-none">
            <Image
              src="/landing-hero.png"
              alt="iSource - Expert Staffing & Business Solutions"
              width={1232}
              height={428}
              className="w-full h-auto max-h-[260px] object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-10 lg:py-14 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 text-balance">
              Building teams that
              <br />
              <span className="text-accent">transform</span> businesses
            </h1>
            
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto text-pretty mb-12">
              We connect exceptional talent with forward-thinking companies, delivering end-to-end staffing and product solutions that drive measurable growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 text-base bg-primary text-white hover:bg-primary/90 smooth-transition hover-lift font-semibold" asChild>
                <Link href="#contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base border-primary/30 text-primary smooth-transition hover:bg-primary/5 hover:border-primary/50" asChild>
                <Link href="#services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

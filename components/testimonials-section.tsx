"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "iSource transformed our hiring process. Within six months, they helped us build an engineering team that has become the backbone of our product development.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechVenture Inc.",
  },
  {
    quote: "The quality of candidates and the speed of placement exceeded our expectations. Their understanding of our culture made all the difference in finding the right fit.",
    author: "Michael Roberts",
    role: "VP of Engineering",
    company: "DataFlow Systems",
  },
  {
    quote: "Working with iSource feels like having an extension of our own HR team. They truly understand our needs and consistently deliver exceptional talent.",
    author: "Jennifer Walsh",
    role: "Head of People",
    company: "Innovate Labs",
  },
  {
    quote: "From contract developers to permanent leadership hires, iSource has been our trusted partner for over five years. Their reliability is unmatched.",
    author: "David Kim",
    role: "CEO",
    company: "NextGen Solutions",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-gradient-to-br from-primary to-primary/95 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Left Column */}
          <div className="lg:w-1/3 animate-slide-in-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Testimonials
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-primary-foreground">
              Trusted by industry leaders
            </h2>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-lg border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground smooth-transition hover:bg-primary-foreground/20 hover:border-primary-foreground/50"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-lg border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground smooth-transition hover:bg-primary-foreground/20 hover:border-primary-foreground/50"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <span className="text-sm text-primary-foreground/70 ml-4 font-semibold">
                {currentIndex + 1} / {testimonials.length}
              </span>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full smooth-transition ${i === currentIndex ? "w-6 bg-accent" : "w-2 bg-primary-foreground/40"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div className="lg:w-2/3 animate-slide-in-right">
            <div className="relative bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-8 lg:p-10 smooth-transition hover-lift">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary-foreground/15" />
              <blockquote className="relative z-10">
                <p className="font-serif text-2xl lg:text-3xl font-light leading-relaxed italic text-primary-foreground">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </p>
                <footer className="mt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <span className="font-serif text-lg font-bold text-accent-foreground">
                        {currentTestimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-primary-foreground">{currentTestimonial.author}</p>
                      <p className="text-sm text-primary-foreground/70">
                        {currentTestimonial.role}, {currentTestimonial.company}
                      </p>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-24 pt-12 border-t border-primary-foreground/15">
          <p className="text-center text-sm text-primary-foreground/60 mb-8 font-medium">
            Partnering with forward-thinking companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["TechVenture", "DataFlow", "Innovate Labs", "NextGen", "CloudFirst"].map((company) => (
              <span key={company} className="font-serif text-lg font-semibold text-primary-foreground/50 tracking-wide smooth-transition hover:text-accent">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

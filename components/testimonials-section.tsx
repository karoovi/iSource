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
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % testimonials.length
      console.log("[v0] Next testimonial:", newIndex, testimonials[newIndex].author)
      return newIndex
    })
  }

  const prev = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev - 1 + testimonials.length) % testimonials.length
      console.log("[v0] Previous testimonial:", newIndex, testimonials[newIndex].author)
      return newIndex
    })
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-accent2 text-accent2-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Left Column */}
          <div className="lg:w-1/3">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent2-foreground/70 mb-4">
              Testimonials
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-accent2-foreground">
              Trusted by industry leaders
            </h2>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-lg border-2 border-accent2-foreground/40 bg-accent2-foreground/15 text-accent2-foreground hover:bg-accent2-foreground/25 hover:border-accent2-foreground/60 transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-lg border-2 border-accent2-foreground/40 bg-accent2-foreground/15 text-accent2-foreground hover:bg-accent2-foreground/25 hover:border-accent2-foreground/60 transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <span className="text-sm text-accent2-foreground/70 ml-4 font-medium">
                {currentIndex + 1} / {testimonials.length}
              </span>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${i === currentIndex ? "w-6 bg-accent2-foreground" : "w-1.5 bg-accent2-foreground/30"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div className="lg:w-2/3">
            <div className="relative bg-accent2-foreground/10 border border-accent2-foreground/15 rounded-xl p-8 lg:p-10">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-accent2-foreground/15" />
              <blockquote className="relative z-10">
                <p className="font-serif text-2xl lg:text-3xl font-light leading-relaxed italic text-accent2-foreground">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </p>
                <footer className="mt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="font-serif text-lg font-semibold text-primary-foreground">
                        {currentTestimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-accent2-foreground">{currentTestimonial.author}</p>
                      <p className="text-sm text-accent2-foreground/60">
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
        <div className="mt-24 pt-12 border-t border-accent2-foreground/15">
          <p className="text-center text-sm text-accent2-foreground/60 mb-8">
            Partnering with forward-thinking companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["TechVenture", "DataFlow", "Innovate Labs", "NextGen", "CloudFirst"].map((company) => (
              <span key={company} className="font-serif text-xl font-medium text-accent2-foreground/45 tracking-wide">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

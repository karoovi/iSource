import { Target, Users, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Precision Matching",
    description: "We go beyond resumes to understand culture, aspirations, and potential, ensuring perfect alignment between talent and opportunity.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We become an extension of your team, deeply invested in your success and committed to long-term relationships.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "From traditional staffing to complete product teams, we adapt our approach to meet your unique challenges.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              About Us
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight text-foreground leading-tight">
              A different approach to staffing
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Founded on the belief that great businesses are built by great people,
              iSource has spent over a decade connecting visionary companies with
              exceptional talent.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We understand that hiring is more than filling positions&mdash;it&apos;s about
              finding the right individuals who will contribute to your culture,
              drive innovation, and help you achieve your goals.
            </p>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="aspect-[4/3] bg-primary/8 border border-primary/20 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto bg-primary/15 rounded-full flex items-center justify-center mb-4 border border-primary/25">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-foreground font-semibold">Building exceptional teams since 2021</p>
                  <p className="text-muted-foreground text-sm mt-1">Trusted by 50+ enterprise partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const iconColors = ["text-primary", "text-accent", "[color:var(--accent2)]"]
            const borderColors = ["hover:border-primary/35", "hover:border-accent/35", "hover:[border-color:oklch(0.45_0.17_265/0.35)]"]
            return (
              <div
                key={value.title}
                className={`group p-8 border border-border rounded-lg bg-background transition-colors ${borderColors[index]}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-serif text-4xl font-light text-muted-foreground/25">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <value.icon className={`w-6 h-6 ${iconColors[index]}`} />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

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
    <section id="about" className="py-24 lg:py-32 bg-gradient-to-r from-primary/8 to-primary/4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              About Us
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
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
          <div className="relative animate-slide-in-right">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/12 to-accent/8 border border-primary/20 rounded-xl overflow-hidden hover-lift">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto bg-accent text-accent-foreground rounded-full flex items-center justify-center mb-4 border-4 border-accent/30 smooth-transition group-hover:scale-110">
                    <Users className="w-12 h-12" />
                  </div>
                  <p className="text-foreground font-bold">Building exceptional teams since 2021</p>
                  <p className="text-muted-foreground text-sm mt-1">Trusted by 50+ enterprise partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const iconColors = ["text-primary", "text-accent", "text-primary"]
            const borderColors = ["border-primary/40 hover:border-primary/60", "border-accent/40 hover:border-accent/60", "border-primary/40 hover:border-primary/60"]
            const bgColors = ["bg-primary/10", "bg-accent/10", "bg-primary/8"]
            return (
              <div
                key={value.title}
                className={`group p-8 border-2 rounded-lg ${bgColors[index]} smooth-transition hover-lift ${borderColors[index]}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-serif text-5xl font-bold text-primary/15">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className={`p-3 rounded-lg ${bgColors[index]} border border-primary/20`}>
                    <value.icon className={`w-6 h-6 ${iconColors[index]} smooth-transition group-hover:scale-125`} />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3 smooth-transition group-hover:text-accent">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
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

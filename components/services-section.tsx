import Link from "next/link"
import { ArrowUpRight, Users, Code, Briefcase, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Users,
    title: "Executive Search",
    description: "Find visionary leaders who will shape your company&apos;s future. Our executive search practice identifies and attracts C-suite and senior leadership talent.",
    features: ["C-Suite Recruitment", "Board Placements", "Leadership Assessment"],
  },
  {
    icon: Code,
    title: "Technical Staffing",
    description: "Access top-tier engineering and technical talent. From individual contributors to entire development teams, we deliver the expertise you need.",
    features: ["Software Engineers", "Data Scientists", "DevOps Specialists"],
  },
  {
    icon: Briefcase,
    title: "Contract Solutions",
    description: "Scale your workforce with flexibility. Our contract and contract-to-hire solutions provide agility without compromising on quality.",
    features: ["Project-Based Teams", "Staff Augmentation", "Contract-to-Hire"],
  },
  {
    icon: Settings,
    title: "Product Teams",
    description: "Launch complete, cross-functional product teams ready to deliver from day one. End-to-end solutions for your most ambitious initiatives.",
    features: ["Full-Stack Teams", "Product Managers", "UX/UI Designers"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight text-foreground leading-tight">
            Comprehensive solutions for modern businesses
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Whether you need a single specialist or a complete product team, 
            our tailored approach ensures you get exactly what your business requires.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const iconBg = ["bg-primary/10", "bg-accent/10", "[background-color:oklch(0.45_0.17_265/0.10)]", "bg-primary/10"]
            const iconColor = ["text-primary", "text-accent", "[color:var(--accent2)]", "text-primary"]
            return (
              <div
                key={service.title}
                className="group relative p-8 lg:p-10 border border-border rounded-lg bg-card hover:border-primary/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-lg ${iconBg[index]}`}>
                    <service.icon className={`w-6 h-6 ${iconColor[index]}`} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: service.description }} />

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs font-medium px-3 py-1 bg-primary/8 text-primary border border-primary/20 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link href="#contact">
              Discuss Your Needs
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { ArrowUpRight, Users, Code, Briefcase, Settings, Lightbulb, CheckCircle } from "lucide-react"
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
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Transform your organization with cutting-edge staffing strategies and custom workforce solutions. We partner with you to design and implement innovative approaches to talent acquisition and team building.",
    features: ["Strategic Planning", "Workforce Innovation", "Future-Ready Talent"],
  },
  {
    icon: CheckCircle,
    title: "Assessment &amp; Evaluation",
    description: "Our in-house expert panel conducts comprehensive interviews and assessments of prospective candidates. Only the most qualified talent advances to your final review, ensuring you meet only with pre-vetted, production-ready professionals.",
    features: ["Expert Panel Interviews", "Technical Assessments", "Cultural Fit Analysis"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-primary/6 via-background to-primary/4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl animate-slide-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Comprehensive solutions for modern businesses
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Whether you need a single specialist or a complete product team, 
            our tailored approach ensures you get exactly what your business requires.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const iconBg = ["bg-primary/12", "bg-accent/12", "bg-primary/10", "bg-primary/12", "bg-accent/12", "bg-primary/10"]
            const iconColor = ["text-primary", "text-accent", "text-accent2", "text-primary", "text-accent", "text-accent2"]
            const cardBorder = ["border-primary/25", "border-accent/25", "border-primary/25", "border-primary/25", "border-accent/25", "border-primary/25"]
            return (
              <div
                key={service.title}
                className={`group relative p-8 border-2 rounded-xl bg-card/50 backdrop-blur-sm hover-lift animate-slide-up ${cardBorder[index]}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-lg ${iconBg[index]} smooth-transition group-hover:scale-110`}>
                    <service.icon className={`w-6 h-6 ${iconColor[index]} smooth-transition`} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground smooth-transition group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mb-3 smooth-transition group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm" dangerouslySetInnerHTML={{ __html: service.description }} />

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, fIdx) => (
                    <span
                      key={feature}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full smooth-transition ${
                        fIdx % 3 === 0 
                          ? 'bg-primary/12 text-primary border border-primary/25' 
                          : fIdx % 3 === 1
                          ? 'bg-accent/12 text-accent border border-accent/25'
                          : 'bg-accent2/12 text-accent2 border border-accent2/25'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 smooth-transition hover-lift" asChild>
            <Link href="#contact">
              Discuss Your Needs
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

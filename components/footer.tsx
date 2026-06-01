import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Executive Search", href: "#services" },
    { label: "Technical Staffing", href: "#services" },
    { label: "Contract Solutions", href: "#services" },
    { label: "Product Teams", href: "#services" },
    { label: "Innovative Solutions", href: "#services" },
    { label: "Assessment & Evaluation", href: "#services" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center group">
              <span className="font-serif text-2xl font-bold text-accent smooth-transition group-hover:text-accent">i</span>
              <span className="font-serif text-2xl font-bold text-primary-foreground">Source</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Connecting exceptional talent with forward-thinking companies since 2021.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-accent/20 rounded-lg smooth-transition hover:bg-accent hover:text-primary text-primary-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 smooth-transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 smooth-transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 smooth-transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-accent/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/70">
            &copy; {new Date().getFullYear()} iSource. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/70">
            Designed for growth-focused companies.
          </p>
        </div>
      </div>
    </footer>
  )
}

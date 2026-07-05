import type { Metadata } from "next"
import Link from "next/link"
import { Mail, MapPin, Phone, Globe } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { person } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ashlea Davies to discuss your transformation programme.",
}

const details = [
  { icon: Mail, label: "Email", value: person.email, href: `mailto:${person.email}` },
  { icon: Phone, label: "Phone", value: person.phone, href: `tel:${person.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: person.location },
  { icon: Globe, label: "LinkedIn", value: "linkedin.com/in/ashleadavies", href: "https://www.linkedin.com" },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your next transformation"
        description="Whether you're scoping a programme or need readiness support before go-live, I'd love to hear from you."
      />

      <section className="mx-auto max-w-6xl px-5 pb-20 pt-8 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-xl font-semibold tracking-tight">Contact details</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Placeholder copy. Reach out via any channel below, or use the form and I&apos;ll respond within one
              business day.
            </p>

            <ul className="mt-8 space-y-4">
              {details.map((d) => (
                <li key={d.label}>
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                      <d.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">{d.label}</p>
                      {d.href ? (
                        <Link href={d.href} className="text-sm font-medium transition-colors hover:text-primary">
                          {d.value}
                        </Link>
                      ) : (
                        <p className="text-sm font-medium">{d.value}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}

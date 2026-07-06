import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Compass, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { person } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ashlea Davies — transformation delivery, operational readiness, stakeholder engagement and customer-focused change.",
}

const values = [
  {
    icon: Compass,
    title: "Customer-focused change",
    body: "Every transformation decision should improve outcomes for customers while remaining practical for the people delivering the service.",
  },
  {
    icon: HeartHandshake,
    title: "Operational readiness",
    body: "Preparing organisations, teams and technology for successful adoption through planning, risk management and operational readiness.",
  },
  {
    icon: ShieldCheck,
    title: "Frontline-informed delivery",
    body: "Years of operational experience help me design solutions that work in practice because they're grounded in how services are actually delivered.",
  },
  {
    icon: Sparkles,
    title: "Practical transformation outcomes",
    body: "Turning strategy into measurable operational improvements through practical implementation, sustainable adoption and continuous service improvement.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Helping organisations turn strategy into operational reality."
      />

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-8 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
              <Image
                src="/images/portrait.png"
                alt={`Portrait of ${person.name}`}
                width={560}
                height={700}
                priority
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-6">
              <p className="text-sm font-semibold">{person.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{person.roles.join(" · ")}</p>
              <p className="mt-3 text-sm text-muted-foreground">{person.location}</p>
            </div>
          </div>

          <div className="space-y-6 text-pretty text-lg leading-relaxed text-foreground/80">
            <p>
              My career has progressed from frontline service delivery through operational leadership, deployment consulting and business analysis. That experience allows me to bridge strategy, customer outcomes and frontline operations, ensuring transformation is practical, measurable and successfully adopted by the people delivering services every day.
            </p>

            <p>
              I help organisations move from ambition to delivery by bringing together operational readiness, stakeholder engagement, business analysis and deployment planning. My focus is making change achievable for both the organisation and the people responsible for delivering it.
            </p>

            <p>
              Much of my experience has been gained within complex healthcare and community service environments, where successful change directly impacts customers, employees and communities. Working in these settings has shaped my approach to transformation, placing equal importance on operational excellence, customer outcomes and the people delivering services every day.
            </p>

            <p>
              Business analysis is one capability within my broader transformation experience. I bring a structured, consultative approach to understanding problems, shaping solutions and translating strategy into lasting operational outcomes.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <v.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Let’s connect
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
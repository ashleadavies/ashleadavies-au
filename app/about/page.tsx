import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { person } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ashlea Davies — healthcare transformation, operational readiness, deployment and adoption, business improvement and business analysis.",
}

const serviceEnvironments = [
  "Healthcare",
  "Aged Care & Support at Home",
  "Home & Community Care",
  "Residential Aged Care",
  "Community Nursing",
  "Allied Health",
  "Mental Health",
  "Hospital-in-the-Home",
  "Disability Services",
  "Community Services",
  "Digital Health",
  "Contact Centre & Digital Channels",
]

const values = [
  {
    icon: Compass,
    title: "Operationally grounded transformation",
    body: "Transformation should work in practice, not just on paper. I bring frontline and operational experience into decision-making so solutions are practical, scalable and sustainable.",
  },
  {
    icon: HeartHandshake,
    title: "Operational readiness & governance",
    body: "Preparing organisations, teams and technology for successful adoption through structured planning, risk and issue management, workforce readiness, implementation governance and go-live support.",
  },
  {
    icon: ShieldCheck,
    title: "Customer & service outcomes",
    body: "Transformation should improve customer outcomes while protecting service continuity and supporting the employees responsible for delivering care and services.",
  },
  {
    icon: Sparkles,
    title: "Sustainable transformation",
    body: "Turning strategy into measurable operational improvement through practical implementation, adoption, continuous improvement and strong stakeholder ownership.",
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
          {/* Profile */}
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

              <p className="mt-1 text-sm font-medium text-muted-foreground">
                Healthcare Transformation Consultant
              </p>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Operational Readiness • Deployment & Adoption • Business Analysis
              </p>

              <p className="mt-3 text-sm text-muted-foreground">
                {person.location}
              </p>
            </div>
          </div>

          {/* About content */}
          <div className="space-y-6 text-pretty text-lg leading-relaxed text-foreground/80">
            <p>
              Over more than 15 years, my career has progressed from frontline 
              healthcare and community service delivery through service coordination,
              operational leadership, enterprise deployment, deployment and adoption, 
              and business analysis. That journey
              gives me a practical end-to-end perspective on transformation
              and allows me to bridge strategy, technology, customer outcomes
              and frontline operations so change is practical, measurable and
              sustainable.
            </p>

            <p>
              I help organisations move from strategy to successful delivery by bringing together business analysis, 
              business improvement, operational readiness, governance, stakeholder engagement and deployment planning. 
              My role is creating the conditions that allow technology, people, processes and operational 
              change to succeed together.
            </p>

            <p>
              Much of my experience has been gained within complex healthcare
              and community service environments, where successful change
              directly affects customers, employees and service delivery.
              Working in these settings has shaped my approach to
              transformation, placing equal importance on operational
              excellence, customer outcomes and sustainable adoption.
            </p>

            <p>
              Business analysis is one capability within my broader
              transformation experience. I use it to understand problems,
              align stakeholders, shape practical solutions and translate
              strategy into operational outcomes that remain effective beyond
              go-live.
            </p>

            {/* Industry & domain experience */}
            <div className="pt-4">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Industry & domain experience
              </h2>

              <p className="mt-2 text-base text-muted-foreground">
                Experience spanning frontline service delivery, operational leadership and enterprise transformation 
                across healthcare, community services and digital health.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {serviceEnvironments.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Transformation principles */}
            <div className="pt-6">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                What I bring to transformation
              </h2>

              <p className="mt-2 text-base text-muted-foreground">
                The principles that shape how I deliver complex change.
              </p>
            </div>

            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <value.icon className="size-5" />
                  </span>

                  <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.body}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Let&apos;s connect
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
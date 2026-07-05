import type { Metadata } from "next"
import Link from "next/link"
import { Download, Briefcase } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { person } from "@/lib/site"

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional resume and career summary for Ashlea Davies.",
}

const roles = [
  {
    period: "2026",
    title: "Business Analyst",
    org: "Australian Unity",
    points: [
      "Supported technology-enabled transformation across Home Health programs.",
      "Worked across requirements, stakeholder engagement, readiness, UAT and operational adoption.",
    ],
  },
  {
    period: "2023 — 2026",
    title: "Deployment Consultant",
    org: "Australian Unity",
    points: [
      "Supported operational deployment across healthcare and aged care transformation initiatives.",
      "Focused on business readiness, process change, workforce impacts, data quality and service continuity.",
    ],
  },
  {
    period: "2024 — 2025",
    title: "Deployment & Adoption Lead",
    org: "Australian Unity",
    points: [
      "Led deployment and adoption activities for Team-Based Care transformation.",
      "Supported leaders and frontline teams through operational readiness, engagement and transition planning.",
    ],
  },
  {
    period: "2022 — 2023",
    title: "Community Liaison Manager",
    org: "Australian Unity",
    points: [
      "Supported customer and stakeholder relationships across Home Health services.",
      "Worked closely with operational teams to improve service coordination and customer experience.",
    ],
  },
  {
    period: "2019 — 2022",
    title: "Service Coordinator",
    org: "Australian Unity",
    points: [
      "Coordinated services across community and aged care operations.",
      "Built strong operational knowledge of frontline service delivery, workforce scheduling and customer needs.",
    ],
  },
]

const capabilities = [
  "Business analysis",
  "Operational readiness",
  "Deployment planning",
  "Stakeholder engagement",
  "Change adoption",
  "Process mapping",
  "UAT support",
  "Data remediation",
  "Healthcare operations",
  "Salesforce Health Cloud readiness",
  "Procura and AlayaCare environments",
  "Genesys Cloud",
]

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="Career summary"
        description="A practical summary of my experience across business analysis, deployment, adoption and operational readiness."
      />

      <section className="mx-auto max-w-4xl px-5 pb-8 pt-4 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Download className="size-4" />
            Download PDF
          </Link>

          <Link
            href={`mailto:${person.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Request references
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-10 px-5 pb-20 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex items-center gap-3">
            <Briefcase className="size-5 text-primary" />
            <h2 className="font-serif text-2xl font-semibold tracking-tight">Experience</h2>
          </div>

          <div className="mt-6 space-y-6">
            {roles.map((role) => (
              <div key={role.title} className="grid gap-2 sm:grid-cols-[160px_1fr] sm:gap-6">
                <p className="text-sm font-medium text-muted-foreground">{role.period}</p>

                <div>
                  <h3 className="font-semibold">{role.title}</h3>
                  <p className="text-sm text-muted-foreground">{role.org}</p>

                  <ul className="mt-2 space-y-1.5">
                    {role.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-foreground/80">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">Core capabilities</h2>

          <div className="mt-6 flex flex-wrap gap-2">
            {capabilities.map((capability) => (
              <span
                key={capability}
                className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-muted-foreground"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
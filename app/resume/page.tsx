import type { Metadata } from "next"
import { Download, GraduationCap, Award, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { person } from "@/lib/site"

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional resume and credentials for Ashlea Davies.",
}

const roles = [
  {
    period: "2022 — Present",
    title: "Principal Digital Transformation Consultant",
    org: "Independent (placeholder)",
    points: [
      "Lead consultant on enterprise transformation and readiness programmes",
      "Own discovery, target operating model design and go-live readiness",
    ],
  },
  {
    period: "2019 — 2022",
    title: "Senior Business Analyst",
    org: "Global Consultancy (placeholder)",
    points: [
      "Led analysis workstreams on multi-market platform migrations",
      "Created reusable analysis and harmonisation frameworks",
    ],
  },
  {
    period: "2016 — 2019",
    title: "Business Analyst",
    org: "Financial Services (placeholder)",
    points: ["Delivered process improvement and regulatory change", "Built adoption and performance dashboards"],
  },
]

const education = [
  { period: "2013", title: "BSc (Hons) Business Management", org: "University (placeholder)" },
  { period: "2011", title: "Diploma in Project Management", org: "Institute (placeholder)" },
]

const certifications = [
  "BCS International Diploma in Business Analysis (placeholder)",
  "PROSCI Change Management Practitioner (placeholder)",
  "Certified Scrum Product Owner (placeholder)",
  "Lean Six Sigma Green Belt (placeholder)",
]

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="Credentials & career summary"
        description="A concise overview of experience, education and certifications. Download the full document for a complete record."
      />

      <section className="mx-auto max-w-4xl px-5 pb-8 pt-4 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="lg" render={<a href="#" download />}>
            <Download className="size-4" />
            Download PDF
          </Button>
          <Button size="lg" variant="outline" render={<a href={`mailto:${person.email}`} />}>
            Request references
          </Button>
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

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center gap-3">
              <GraduationCap className="size-5 text-primary" />
              <h2 className="font-serif text-xl font-semibold tracking-tight">Education</h2>
            </div>
            <div className="mt-6 space-y-5">
              {education.map((e) => (
                <div key={e.title}>
                  <p className="text-xs font-medium text-muted-foreground">{e.period}</p>
                  <h3 className="mt-1 font-semibold">{e.title}</h3>
                  <p className="text-sm text-muted-foreground">{e.org}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center gap-3">
              <Award className="size-5 text-primary" />
              <h2 className="font-serif text-xl font-semibold tracking-tight">Certifications</h2>
            </div>
            <ul className="mt-6 space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-foreground/80">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

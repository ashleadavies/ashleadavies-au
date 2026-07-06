import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Briefcase, Download, GraduationCap } from "lucide-react"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional resume and career summary for Ashlea Davies.",
}

const roles = [
  {
    period: "Jan 2026 – Jun 2026",
    title: "Business Analyst",
    subtitle: "Technology, Digital & Transformation secondment",
    points: [
      "Delivered business analysis across Salesforce Health Cloud, Genesys Cloud and enterprise transformation initiatives.",
      "Facilitated requirements workshops, stakeholder engagement, process mapping, UAT and operational readiness.",
      "Supported customer experience, contact centre and service improvement initiatives.",
    ],
  },
  {
    period: "Jan 2023 – Jun 2026",
    title: "Deployment Consultant",
    subtitle: "Substantive Home Health transformation role",
    points: [
      "Led operational readiness and deployment across enterprise transformation programs.",
      "Prepared more than 45,000 customer records for migration.",
      "Supported business readiness, workforce planning and acquired business integration.",
    ],
  },
  {
    period: "Jul 2024 – Jan 2025",
    title: "Deployment & Adoption Lead",
    subtitle: "Secondment",
    points: [
      "Led Team-Based Care deployment across 53 neighbourhoods.",
      "Supported workforce transformation affecting more than 3,000 employees.",
      "Developed operational readiness frameworks and deployment governance.",
    ],
  },
  {
    period: "Feb 2022 – Jan 2023",
    title: "Community Liaison Manager",
    subtitle: "Operational leadership role",
    points: [
      "Led multidisciplinary service delivery.",
      "Improved customer outcomes through workforce leadership and operational management.",
      "Managed stakeholder relationships and service quality.",
    ],
  },
  {
    period: "May 2019 – Feb 2022",
    title: "Service Coordinator",
    subtitle: "Home Health operations",
    points: [
      "Coordinated community and aged care services.",
      "Developed deep operational knowledge of frontline service delivery.",
      "Supported workforce scheduling and customer service delivery.",
    ],
  },
]

const expertiseGroups = [
  {
    title: "Business Analysis",
    items: ["Requirements Engineering", "Process Mapping", "Current & Future State", "Functional Specifications", "User Stories", "UAT"],
  },
  {
    title: "Transformation Delivery",
    items: ["Operational Readiness", "Deployment", "Business Improvement", "Change Adoption", "Governance"],
  },
  {
    title: "Customer Experience & Operations",
    items: ["Customer Experience", "Service Improvement", "Stakeholder Engagement", "Operational Leadership", "Continuous Improvement"],
  },
  {
    title: "Platforms & Tools",
    items: [
      "Salesforce Health Cloud",
      "Genesys Cloud",
      "SAP Procura",
      "Microsoft Excel",
      "Alayacare",
      "Tableau",
      "Jira",
      "Confluence",
      "Miro",
      "Visio",
      "Microsoft Copilot",
      "Microsoft Forms",
      "SharePoint",
      "Microsoft Teams",
      
    ],
  },
]

const achievements = [
  {
    value: "45,000+",
    label: "Customer and employee records reviewed, validated and prepared for migration.",
  },
  {
    value: "3,000+",
    label: "Employees supported through operational change and adoption.",
  },
  {
    value: "53+",
    label: "Neighbourhood deployments delivered nationally, improving customer outcomes and operational efficiency.",
  },
  {
    value: "Enterprise Platforms",
    label: "Delivered business analysis, operational readiness and deployment across Salesforce Health Cloud, Genesys Cloud, Procura, Civica and enterprise integration initiatives.",
  },
]

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="Resume & Credentials"
        description="A concise professional profile highlighting my experience in business analysis, operational readiness, deployment leadership, customer-focused change and enterprise transformation across healthcare and community services."
      />

      <section className="mx-auto max-w-4xl px-5 pb-8 pt-4 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Download className="size-4" />
            Download Resume
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Contact Me
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-10 px-5 pb-20 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex items-center gap-3">
            <Briefcase className="size-5 text-primary" />
            <h2 className="font-serif text-2xl font-semibold tracking-tight">Career Highlights</h2>
          </div>

          <div className="mt-6">
            <div className="mb-4 rounded-xl border border-border/60 bg-background/70 px-4 py-3">
              <p className="text-sm font-semibold text-foreground">Australian Unity | 2019–2026</p>
            </div>

            <div className="space-y-6">
              {roles.map((role) => (
                <div key={role.title} className="grid gap-2 sm:grid-cols-[220px_1fr] sm:gap-6">
                  <p className="text-sm font-medium text-muted-foreground">{role.period}</p>

                  <div>
                    <h3 className="font-semibold">{role.title}</h3>
                    <p className="text-sm text-muted-foreground">{role.subtitle}</p>

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
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">Areas of Expertise</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {expertiseGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-semibold">{group.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">Selected Achievements</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {achievements.map((achievement) => (
              <div key={achievement.value} className="rounded-2xl border border-border bg-background p-5">
                <p className="text-2xl font-semibold text-foreground">{achievement.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">Professional Development &amp; Qualifications</h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-foreground/80">
            Continuous learning is an important part of my professional development. Alongside practical delivery experience, I continue to build my knowledge through formal qualifications and targeted professional learning.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-border bg-background p-5">
              <div className="flex items-center gap-2">
                <GraduationCap className="size-4 text-primary" />
                <h3 className="font-semibold">National Qualification</h3>
              </div>

              <div className="mt-4">
                <h4 className="font-medium">CHC33015 Certificate III in Individual Support</h4>
                <p className="mt-1 text-sm text-muted-foreground">Australian Qualifications Framework (AQF)</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  Developed practical knowledge and skills in person-centred care, communication, individual support, duty of care, infection prevention and control, workplace health and safety, and supporting people across aged care and community service environments.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5">
              <div className="flex items-center gap-2">
                <BookOpen className="size-4 text-primary" />
                <h3 className="font-semibold">Professional Learning</h3>
              </div>

              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-border bg-card/50 p-4">
                  <h4 className="font-medium">What Is Business Analysis?</h4>
                  <p className="mt-1 text-sm text-muted-foreground">LinkedIn Learning • December 2023</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    Introduced core business analysis principles including stakeholder engagement, problem analysis and business analysis fundamentals.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card/50 p-4">
                  <h4 className="font-medium">Miro for UX: Brainstorming and Collaboration</h4>
                  <p className="mt-1 text-sm text-muted-foreground">LinkedIn Learning • February 2026</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    Focused on collaborative workshops, visual facilitation, brainstorming techniques and using Miro to support user-centred design and cross-functional collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">Professional Summary</h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-foreground/80">
            My career combines frontline operational experience with business analysis, deployment leadership and enterprise transformation delivery across healthcare and community services. I specialise in translating strategy into practical outcomes through operational readiness, customer-focused change and stakeholder engagement, helping organisations deliver sustainable improvements that are adopted by the people responsible for delivering services every day.
          </p>
        </div>
      </section>
    </>
  )
}
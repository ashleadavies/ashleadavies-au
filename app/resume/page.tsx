import type { Metadata } from "next"
import Link from "next/link"
import {
  BookOpen,
  Briefcase,
  Download,
  GraduationCap,
} from "lucide-react"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional resume for Ashlea Davies, a healthcare transformation professional specialising in operational readiness, deployment and adoption, business improvement and business analysis.",
}

const roles = [
  {
    period: "Jan 2023 – Jun 2026",
    title: "Deployment Consultant",
    subtitle: "Home Health | Substantive Role",
    points: [
      "Delivered operational readiness and deployment across large-scale healthcare transformation initiatives.",
      "Supported 53+ neighbourhood deployments involving 45,000+ customer records and 4,000+ employees across service delivery.",
      "Coordinated customer, workforce and service readiness, data validation, cutover preparation, go-live support and post-deployment remediation.",
    ],
  },
  {
    period: "Jan 2026 – Jun 2026",
    title: "Business Analyst",
    subtitle: "Technology, Digital & Transformation | Secondment",
    points: [
      "Delivered business analysis across Salesforce, Genesys Cloud and enterprise transformation initiatives.",
      "Facilitated discovery, requirements elicitation, process analysis, stakeholder workshops, UAT and operational readiness.",
      "Supported customer experience, contact centre, service improvement and release readiness initiatives across healthcare environments.",
    ],
  },
  {
    period: "Apr 2024 – Oct 2024",
    title: "Deployment & Adoption Lead",
    subtitle: "Home Health | Secondment",
    points: [
      "Led the Deployment Analyst and DRSWAT stream within a Team-Based Care operating model rollout across 26 neighbourhoods supporting 33,000+ customers.",
      "Coordinated operational readiness, workforce preparation, training, go-live and frontline adoption.",
      "Worked across program, change, technology, branch deployment and workforce optimisation teams to support sustainable implementation.",
    ],
  },
  {
    period: "Feb 2022 – Jan 2023",
    title: "Community Liaison Manager",
    subtitle: "Home Health | Operational Leadership",
    points: [
      "Led community-based service delivery with responsibility for customer outcomes, workforce coordination and operational performance.",
      "Managed stakeholder relationships, service quality and day-to-day operational priorities.",
      "Connected customer needs with workforce capability and service delivery requirements.",
    ],
  },
  {
    period: "May 2019 – Feb 2022",
    title: "Service Coordinator",
    subtitle: "Home Health | Service Operations",
    points: [
      "Coordinated community and aged care services across complex customer and workforce requirements.",
      "Managed service delivery, workforce scheduling and operational issues within a fast-paced care environment.",
      "Developed the frontline operational knowledge that now informs my approach to transformation and implementation.",
    ],
  },
]

const expertiseGroups = [
  {
    title: "Business Analysis",
    items: [
      "Requirements Elicitation",
      "Process Mapping",
      "Current & Future State",
      "User Stories",
      "Acceptance Criteria",
      "UAT",
      "Root Cause Analysis",
      "Process Improvement",
    ],
  },
  {
    title: "Operational Readiness & Deployment",
    items: [
      "Operational Readiness",
      "Enterprise Deployment",
      "Deployment & Adoption",
      "Cutover Planning",
      "Go-Live Readiness",
      "Hypercare",
      "Workforce Readiness",
      "Risk & Dependency Management",
    ],
  },
  {
    title: "Healthcare Transformation & Operations",
    items: [
      "Healthcare Transformation",
      "Business Improvement",
      "Workforce Optimisation",
      "Customer Experience",
      "Service Improvement",
      "Stakeholder Engagement",
      "Operational Leadership",
      "Continuous Improvement",
    ],
  },
  {
    title: "Platforms & Tools",
    items: [
      "Salesforce Health Cloud",
      "Salesforce Service Cloud",
      "Genesys Cloud",
      "Procura (AlayaCare)",
      "Biarri",
      "SAP SuccessFactors Employee Central",
      "Jira",
      "Confluence",
      "Wrike",
      "Microsoft Excel",
      "Microsoft Visio",
      "Miro",
      "Tableau",
      "SharePoint",
      "Microsoft Teams",
      "ServiceNow",
    ],
  },
]

const achievements = [
  {
    value: "45,000+",
    label:
      "Customer records prepared across large-scale healthcare transformation and deployment.",
  },
  {
    value: "4,000+",
    label:
      "Employees across service delivery within the transformation environment.",
  },
  {
    value: "53+",
    label:
      "Neighbourhood deployments supported across enterprise healthcare transformation.",
  },
  {
    value: "15+ years",
    label:
      "Experience spanning frontline healthcare, community services, operations, deployment and transformation.",
  },
]

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="Resume & Credentials"
        description="Healthcare transformation experience spanning frontline service delivery, operational leadership, enterprise deployment, operational readiness, business improvement and business analysis."
      />

      <section className="mx-auto max-w-4xl px-5 pb-8 pt-4 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/resume/Ashlea_Davies_Resume.pdf"
            download="Ashlea_Davies_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Download className="size-4" />
            Download Resume
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Contact Me
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-10 px-5 pb-20 lg:px-8">
        {/* Professional Profile */}
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">
            Professional Profile
          </h2>

          <p className="mt-4 text-pretty text-sm leading-relaxed text-foreground/80">
            Healthcare transformation and business improvement professional
            with 15+ years&apos; experience spanning frontline healthcare,
            community service operations, operational leadership, enterprise
            deployment, change and adoption, and business analysis.
          </p>

          <p className="mt-4 text-pretty text-sm leading-relaxed text-foreground/80">
            My career progression from frontline service delivery through
            coordination and operational leadership into deployment and
            enterprise transformation gives me a practical understanding of
            how strategy, technology, workforce and customer needs intersect.
            I specialise in translating complex change into operationally
            practical outcomes that can be successfully implemented and
            sustained.
          </p>
        </div>

        {/* Career Highlights */}
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex items-center gap-3">
            <Briefcase className="size-5 text-primary" />

            <h2 className="font-serif text-2xl font-semibold tracking-tight">
              Professional Experience
            </h2>
          </div>

          <div className="mt-6">
            <div className="mb-4 rounded-xl border border-border/60 bg-background/70 px-4 py-3">
              <p className="text-sm font-semibold text-foreground">
                Australian Unity | 2019–2026
              </p>
            </div>

            <div className="space-y-6">
              {roles.map((role) => (
                <div
                  key={`${role.title}-${role.period}`}
                  className="grid gap-2 sm:grid-cols-[220px_1fr] sm:gap-6"
                >
                  <p className="text-sm font-medium text-muted-foreground">
                    {role.period}
                  </p>

                  <div>
                    <h3 className="font-semibold">
                      {role.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {role.subtitle}
                    </p>

                    <ul className="mt-2 space-y-1.5">
                      {role.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm text-foreground/80"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-border/60 bg-background/70 px-4 py-4">
            <p className="text-sm font-semibold text-foreground">
              Earlier Healthcare & Community Services Experience
            </p>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Earlier roles across community care, disability support,
              residential aged care and health services established the
              frontline service delivery experience that underpins my approach
              to operational transformation.
            </p>
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">
            Areas of Expertise
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {expertiseGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-semibold">
                  {group.title}
                </h3>

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

        {/* Selected Achievements */}
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">
            Transformation at Scale
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Scale of transformation and service delivery environments
            supported across recent enterprise initiatives.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {achievements.map((achievement) => (
              <div
                key={achievement.value}
                className="rounded-2xl border border-border bg-background p-5"
              >
                <p className="font-serif text-2xl font-semibold text-primary">
                  {achievement.value}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Qualifications */}
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">
            Qualifications &amp; Professional Development
          </h2>

          <p className="mt-4 text-pretty text-sm leading-relaxed text-foreground/80">
            Formal qualifications and targeted professional learning complement
            practical experience developed across healthcare operations,
            deployment, transformation and business analysis.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-border bg-background p-5">
              <div className="flex items-center gap-2">
                <GraduationCap className="size-4 text-primary" />

                <h3 className="font-semibold">
                  Qualifications
                </h3>
              </div>

              <div className="mt-4">
                <h4 className="font-medium">
                  CHC33015 Certificate III in Individual Support
                </h4>

                <p className="mt-1 text-sm text-muted-foreground">
                  Australian Qualifications Framework (AQF)
                </p>

                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  Foundation in person-centred care, communication, individual
                  support, duty of care, infection prevention and control,
                  workplace health and safety, and service delivery across aged
                  care and community environments.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5">
              <div className="flex items-center gap-2">
                <BookOpen className="size-4 text-primary" />

                <h3 className="font-semibold">
                  Professional Learning
                </h3>
              </div>

              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-border bg-card/50 p-4">
                  <h4 className="font-medium">
                    What Is Business Analysis?
                  </h4>

                  <p className="mt-1 text-sm text-muted-foreground">
                    LinkedIn Learning • December 2023
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    Business analysis fundamentals including stakeholder
                    engagement, problem analysis and requirements practices.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card/50 p-4">
                  <h4 className="font-medium">
                    Miro for UX: Brainstorming and Collaboration
                  </h4>

                  <p className="mt-1 text-sm text-muted-foreground">
                    LinkedIn Learning • February 2026
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    Collaborative workshops, visual facilitation, brainstorming
                    and cross-functional collaboration using Miro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Summary */}
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">
            Career Focus
          </h2>

          <p className="mt-4 text-pretty text-sm leading-relaxed text-foreground/80">
            I bring together frontline healthcare experience, operational
            knowledge and enterprise transformation capability to help
            organisations move from strategy to successful implementation. My
            strengths sit at the intersection of operational readiness,
            deployment and adoption, business improvement, stakeholder
            engagement and business analysis.
          </p>

          <p className="mt-4 text-pretty text-sm leading-relaxed text-foreground/80">
            I am particularly suited to roles where complex transformation
            needs to be translated into practical ways of working for the
            customers, employees and operational teams responsible for making
            change succeed.
          </p>
        </div>

        {/* Final CTA */}
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="/resume/Ashlea_Davies_Resume.pdf"
            download="Ashlea_Davies_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Download className="size-4" />
            Download Full Resume
          </a>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            View Case Studies
          </Link>
        </div>
      </section>
    </>
  )
}
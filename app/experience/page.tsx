import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Career history spanning healthcare transformation, operational readiness, deployment and adoption, business analysis, operational leadership and frontline healthcare and community services.",
}

const experience = [
  {
    period: "Jan 2023 – Jun 2026",
    role: "Deployment Consultant",
    company: "Australian Unity | Home Health | Substantive Role",
    summary:
      "Substantive transformation role supporting enterprise deployment, operational readiness, customer and workforce data readiness, business integration and frontline adoption across Home Health.",
    highlights: [
      "Supported 53+ neighbourhood deployments across large-scale healthcare transformation initiatives",
      "Worked within transformation environments involving 45,000+ customer records and 4,000+ employees across service delivery",
      "Coordinated customer, workforce and service readiness ahead of deployment",
      "Supported Salesforce Health Cloud transformation across Home Health, Community Nursing and Allied Healthcare",
      "Led and supported data validation, readiness assessment, cutover preparation, go-live and post-deployment remediation",
      "Coordinated operational readiness for acquired business integration across 40+ neighbourhoods",
      "Worked across frontline operations, neighbourhood leadership, transformation and technology teams to resolve implementation risks",
    ],
    tags: [
      "Operational Readiness",
      "Enterprise Deployment",
      "Healthcare Transformation",
      "Data Readiness",
      "Stakeholder Engagement",
    ],
  },
  {
    period: "Jan 2026 – Jun 2026",
    role: "Business Analyst",
    company:
      "Australian Unity | Technology, Digital & Transformation | Secondment",
    summary:
      "Secondment delivering business analysis across enterprise healthcare technology, customer experience, contact centre and operational improvement initiatives.",
    highlights: [
      "Delivered business analysis across Salesforce, Genesys Cloud and enterprise transformation initiatives",
      "Facilitated discovery, requirements elicitation and stakeholder workshops across business and technology teams",
      "Developed user stories, acceptance criteria, process documentation and implementation artefacts",
      "Coordinated UAT, defect management, production validation and release readiness activities",
      "Delivered business analysis and operational readiness for a Genesys Cloud IVR supporting a national mental health partnership",
      "Designed an accessible UAT framework enabling external partners and internal testers without Jira access to participate in enterprise testing",
      "Led root cause analysis and stakeholder coordination to restore a critical healthcare eligibility service",
    ],
    tags: [
      "Business Analysis",
      "Requirements",
      "UAT",
      "Genesys Cloud",
      "Salesforce",
      "Process Improvement",
    ],
  },
  {
    period: "Apr 2024 – Oct 2024",
    role: "Deployment & Adoption Lead",
    company: "Australian Unity | Home Health | Secondment",
    summary:
      "Secondment leading the Deployment Analyst and DRSWAT stream within a major Team-Based Care operating model transformation.",
    highlights: [
      "Led the Deployment Analyst and DRSWAT stream supporting Team-Based Care readiness and deployment",
      "Supported rollout across 26 neighbourhoods serving 33,000+ customers",
      "Directed neighbourhood readiness, workforce preparation, training, go-live and frontline adoption activities",
      "Oversaw analysis of workforce demand, utilisation, capability, capacity and service requirements",
      "Supported workforce optimisation processes operating at approximately 12,000 scheduling files each fortnight",
      "Worked closely with program, change, technology, branch deployment, workforce optimisation and specialist communications and data resources",
      "Supported alignment of operational requirements with the organisation's future Salesforce Health Cloud environment",
    ],
    tags: [
      "Deployment Leadership",
      "Workforce Optimisation",
      "Operational Readiness",
      "Change Adoption",
      "Cross-Functional Leadership",
    ],
  },
  {
    period: "Feb 2022 – Jan 2023",
    role: "Community Liaison Manager",
    company: "Australian Unity | Home Health | Operational Leadership",
    summary:
      "Operational leadership role responsible for coordinating community-based service delivery, workforce performance, customer outcomes and stakeholder relationships.",
    highlights: [
      "Led day-to-day service delivery across multidisciplinary community care environments",
      "Managed customer escalations, complaints and service quality outcomes",
      "Coordinated workforce capability, service requirements and operational priorities",
      "Supported employee onboarding, workforce performance and service continuity",
      "Built relationships across customers, families, frontline teams and internal stakeholders",
      "Used frontline operational insight to identify and resolve service delivery issues",
    ],
    tags: [
      "Operational Leadership",
      "Service Delivery",
      "Customer Outcomes",
      "Workforce Coordination",
      "Stakeholder Management",
    ],
  },
  {
    period: "May 2019 – Feb 2022",
    role: "Service Coordinator",
    company: "Australian Unity | Home Health | Service Operations",
    summary:
      "Coordinated customer services and workforce scheduling within complex home and community care operations.",
    highlights: [
      "Coordinated customer services across community and aged care environments",
      "Managed workforce scheduling, service changes and day-to-day operational issues",
      "Matched customer requirements with appropriate workforce capability and availability",
      "Managed service escalations and worked with stakeholders to maintain continuity of care",
      "Supported workforce and service continuity throughout COVID-19 operational disruption",
      "Developed deep frontline knowledge of the systems, processes and operational realities later addressed through transformation programs",
    ],
    tags: [
      "Service Coordination",
      "Scheduling",
      "Customer Service",
      "Workforce Coordination",
      "Home & Community Care",
    ],
  },
  {
    period: "2011 – 2019",
    role: "Earlier Healthcare & Community Services",
    company: "Frontline Care, Community Services & Health",
    summary:
      "Earlier roles across residential aged care, community care, disability support, nursing support and diversional therapy established the frontline service experience that now informs my approach to transformation.",
    highlights: [
      "Community Care Coordinator | LiveBetter | 2018–2019",
      "Disability Support Worker | CareWest / LiveBetter | 2016–2018",
      "Assistant in Nursing | Warren GWAHS | 2015–2017",
      "Diversional Therapist | Gilgandra GWAHS | 2016–2017",
      "Assistant in Nursing | Emily Gardens Residential Aged Care | 2011–2014",
    ],
    tags: [
      "Frontline Healthcare",
      "Community Services",
      "Aged Care",
      "Disability Services",
      "Service Delivery",
    ],
  },
]

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="From frontline healthcare to enterprise transformation"
        description="More than 15 years of experience progressing through frontline healthcare and community services, service coordination, operational leadership, deployment and adoption, operational readiness and business analysis."
      />

      <section className="mx-auto max-w-4xl px-5 pb-20 pt-8 lg:px-8">
        <div className="mb-10 rounded-2xl border border-border bg-card p-6">
          <p className="text-sm leading-relaxed text-foreground/80">
            My career progression gives me an end-to-end perspective on
            transformation. I understand how strategy, technology, customer
            requirements, workforce capability and frontline operations connect
            because I have worked across each layer of service delivery, from
            direct care and operational coordination through to enterprise
            deployment and business analysis.
          </p>
        </div>

        <ol className="relative border-l border-border">
          {experience.map((item) => (
            <li
              key={`${item.role}-${item.period}`}
              className="mb-10 ml-8 last:mb-0"
            >
              <span className="absolute -left-[9px] flex size-4 items-center justify-center rounded-full border-2 border-primary bg-background" />

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {item.period}
                </p>

                <h2 className="mt-2 font-serif text-xl font-semibold tracking-tight">
                  {item.role}
                </h2>

                <p className="text-sm font-medium text-muted-foreground">
                  {item.company}
                </p>

                <p className="mt-3 text-pretty text-sm leading-relaxed text-foreground/80">
                  {item.summary}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2 text-sm text-foreground/80"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
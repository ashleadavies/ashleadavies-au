import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Experience",
  description:
    "15+ years across healthcare, aged care, home and community care, mental health, disability services, digital health and enterprise transformation, spanning business analysis, operational readiness, governance, deployment and adoption.",
}

const industryExperience = [
  "Healthcare",
  "Aged Care",
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

const governanceExperience = [
  "Operational Governance",
  "Risk & Issue Management",
  "UAT & Release Governance",
  "Data Quality & Readiness",
  "Requirements Traceability",
  "Vendor & Partner Engagement",
  "Privacy & Security Requirements",
  "Change & Implementation Governance",
  "Service Continuity",
]

const experience = [
  {
    period: "Jan 2026 – Jun 2026",
    role: "Business Analyst",
    company:
      "Australian Unity | Technology, Digital & Transformation | Secondment",
    summary:
      "Delivered business analysis across customer experience, digital channels, operational improvement and healthcare technology initiatives spanning Australian Unity Home Health, Remedy Healthcare and partner-delivered services. Worked across discovery, requirements, process analysis, UAT, governance, vendor engagement, implementation readiness and service improvement.",
    highlights: [
      "Delivered end-to-end business analysis and operational readiness for a Genesys Cloud IVR transformation supporting a national mental health service, spanning discovery, requirements, acceptance criteria, UAT, Salesforce CTI validation, production testing, release readiness and hypercare.",
      "Led analysis of webchat session-management and routing challenges, initially pursuing remediation within the existing environment before developing the Business Requirements Document and future-state requirements subsequently used to support implementation of a new Genesys Web Messaging solution integrated with Salesforce CRM.",
      "Defined business and non-functional requirements spanning service continuity, participant experience, routing, CRM integration, reporting, privacy, security, availability, performance and usability.",
      "Led root-cause analysis and cross-functional vendor engagement to restore a critical Hospital-in-the-Home eligibility capability, achieving full service restoration without additional licensing cost and strengthening process ownership and governance.",
      "Designed a live Excel-based enterprise UAT framework enabling internal employees, external vendors and partners without Jira access to execute testing, capture evidence and participate in real-time defect triage while maintaining Jira-based defect and release governance.",
      "Established a Business Analysis Community of Practice, strengthening collaboration, reusable practices, knowledge sharing and consistency across the BA function while exploring practical Microsoft Copilot and AI-enabled ways of working",
    ],
    tags: [
      "Business Analysis",
      "Digital Health",
      "Mental Health",
      "Hospital-in-the-Home",
      "Contact Centre",
      "Requirements",
      "BRD",
      "UAT & Release Governance",
      "Risk & Issue Management",
      "Vendor & Partner Engagement",
      "Genesys Cloud",
      "Salesforce",
      "AI-Enabled Ways of Working",
    ],
  },

  {
    period: "Jan 2023 – Jun 2026",
    role: "Deployment Consultant",
    company: "Australian Unity | Home Health | Substantive Role",
    summary:
      "Worked between project teams and Home Health operations to translate technology, operating-model, acquisition integration and data-transformation requirements into practical deployment, governance and operational-readiness actions across geographically dispersed healthcare services.",
    highlights: [
      "Delivered operational and data readiness for phased Salesforce Health Cloud transformation across 53+ neighbourhoods, encompassing 45,000+ customer records and 4,000+ employees across Home Health, Community Nursing and Allied Healthcare.",
      "Analysed large operational datasets to identify anomalies, duplicates, gaps and incorrect records, coordinating validation, remediation and readiness controls ahead of migration and deployment.",
      "Supported integration of an acquired healthcare provider across 40+ neighbourhoods, coordinating customer, workforce and service readiness while protecting continuity of care.",
      "Coordinated deployment planning, stakeholder engagement, training, risk and issue management, cutover, go-live readiness and post-implementation support.",
      "Worked across frontline operations, clinical services, technology, transformation, data and leadership teams to identify, escalate and resolve implementation risks.",
    ],
    tags: [
      "Healthcare",
      "Aged Care",
      "Home & Community Care",
      "Community Nursing",
      "Allied Health",
      "Operational Governance",
      "Enterprise Deployment",
      "Salesforce Health Cloud",
      "Data Readiness",
      "Acquisition Integration",
      "Risk & Issue Management",
    ],
  },

  {
    period: "Apr 2024 – Oct 2024",
    role: "Deployment & Adoption Lead",
    company: "Australian Unity | Home Health | Secondment",
    summary:
      "Led the deployment and training stream, comprising Deployment Analysts, Deployment Consultants and Trainers, for the Team-Based Care operating-model transformation across 26 neighbourhoods supporting 33,000+ customers and 2,600+ home care workers.",
    highlights: [
      "Directed neighbourhood readiness, workforce preparation, training, go-live and frontline adoption, translating the future operating model into practical processes for frontline teams.",
      "Analysed workforce capacity, service demand, employee availability, contracted hours and operational data to identify readiness gaps and implementation risks.",
      "Supported workforce optimisation across approximately 12,000 scheduling files per fortnight, balancing workforce capacity, customer service requirements and operational constraints.",
      "Led identification, escalation and mitigation of operational, workforce, system and process risks to support implementation and continuity of care.",
      "Partnered across program, change, technology, communications, workforce and operational teams to coordinate deployment, governance and adoption.",
    ],
    tags: [
      "Aged Care",
      "Home Care",
      "Operating Model Transformation",
      "Deployment Leadership",
      "Workforce Optimisation",
      "Operational Governance",
      "Risk Management",
      "Change & Adoption",
      "Service Continuity",
    ],
  },

  {
    period: "Feb 2022 – Jan 2023",
    role: "Community Liaison Manager",
    company: "Australian Unity | Home Health | Operational Leadership",
    summary:
      "Managed an aged care customer caseload across Western Plains and Far West operations while relieving in Branch Manager responsibilities, spanning service delivery, workforce coordination, recruitment, onboarding, employee capability and coordination of allied health, community nursing and third-party services.",
    highlights: [
      "Managed customer, workforce and service-delivery issues across geographically dispersed operations, balancing care requirements against workforce capacity, availability and service risk.",
      "Built trusted relationships with customers, families, employees and community stakeholders, resolving concerns and coordinating changing care needs.",
      "Coordinated workforce scheduling, recruitment, onboarding, employee capability and third-party service providers.",
      "Supported service continuity across regional and remote communities where workforce and provider availability presented additional operational challenges.",
      "Managed operational risks, escalations and service-quality issues while supporting appropriate governance and continuity of care.",
    ],
    tags: [
      "Aged Care",
      "Home & Community Care",
      "Community Nursing",
      "Allied Health",
      "Operational Leadership",
      "Operational Governance",
      "Third-Party Providers",
      "Workforce Coordination",
      "Service Delivery",
    ],
  },

  {
    period: "May 2019 – Feb 2022",
    role: "Service Coordinator",
    company: "Australian Unity | Home Health | Service Operations",
    summary:
      "Coordinated high-volume home-care service delivery across a regional network, balancing customer needs against employee availability, location, qualifications, contracted capacity and travel requirements.",
    highlights: [
      "Managed complex workforce scheduling and service continuity through unplanned leave, cancellations and changing customer requirements.",
      "Matched customer care requirements with employee skills, availability, contracted hours, location and service constraints.",
      "Supported recruitment, interviewing, onboarding, mandatory training and workforce capability.",
      "Coordinated third-party providers where internal workforce capacity could not meet customer demand.",
      "Managed customer and service escalations across customers, families, employees and operational stakeholders to maintain continuity of care.",
      "Developed deep frontline knowledge of the workforce, systems, controls and operational processes later addressed through enterprise transformation initiatives.",
    ],
    tags: [
      "Aged Care",
      "Home & Community Care",
      "Service Coordination",
      "Workforce Scheduling",
      "Service Continuity",
      "Third-Party Providers",
      "Customer Outcomes",
    ],
  },

  {
    period: "2011 – 2019",
    role: "Earlier Healthcare & Community Services",
    company: "Frontline Care, Community Services & Health",
    summary:
      "Earlier roles across residential aged care, community care, disability support, nursing support and diversional therapy established the frontline service experience that now informs my approach to transformation, governance and service design.",
    highlights: [
      "Community Care Coordinator | LiveBetter | 2018–2019 | Coordinated aged care and community services, customer activities and budgets while rostering and supporting a workforce of 60+ employees.",
      "Disability Support Worker | CareWest / LiveBetter | 2016–2018 | Delivered person-centred disability support across daily living, community participation and independence goals.",
      "Assistant in Nursing | Warren GWAHS | 2015–2017 | Delivered direct patient and residential care supporting people with complex health needs.",
      "Diversional Therapist | Gilgandra GWAHS | 2016–2017 | Planned and delivered individualised leisure and wellbeing programs supporting participation, social connection and quality of life.",
      "Assistant in Nursing | Emily Gardens Residential Aged Care | 2011–2014 | Delivered residential aged care spanning personal care, mobility, clinical observations, skin integrity and documentation.",
    ],
    tags: [
      "Healthcare",
      "Residential Aged Care",
      "Community Care",
      "Disability Services",
      "Nursing Support",
      "Community Services",
    ],
  },
]

function TagGroup({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
        {title}
      </h2>

      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="From frontline healthcare to enterprise transformation"
        description="More than 15 years across healthcare and community services, progressing from frontline care and service operations into operational leadership, enterprise deployment, governance, transformation and business analysis."
      />

      <section className="mx-auto max-w-4xl px-5 pb-20 pt-8 lg:px-8">
        <div className="mb-8 rounded-2xl border border-border bg-card p-6">
          <p className="text-sm leading-relaxed text-foreground/80">
            My career progression gives me an end-to-end perspective on
            transformation. I understand how governance, strategy, technology,
            customer requirements, workforce capability and frontline operations
            connect because I have worked across each layer of service delivery,
            from direct care and operational coordination through to enterprise
            deployment and business analysis.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            At Australian Unity, I progressed from service coordination into
            operational leadership and enterprise transformation, with Deployment
            Consultant as my substantive role from 2023 and secondments into
            Deployment & Adoption Lead and Business Analyst.
          </p>
        </div>

        <div className="mb-12 grid gap-6 rounded-2xl border border-border bg-card p-6 md:grid-cols-2">
          <TagGroup
            title="Industry & Domain Experience"
            items={industryExperience}
          />

          <TagGroup
            title="Governance & Delivery"
            items={governanceExperience}
          />
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
                      <span>{highlight}</span>
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
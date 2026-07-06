import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Experience",
  description: "Career history and professional experience of Ashlea Davies.",
}

const experience = [
  {
    period: "Jan 2026 – Jun 2026",
    role: "Business Analyst",
    company: "Technology, Digital & Transformation",
    summary:
      "Fixed-term secondment supporting enterprise initiatives across customer experience, contact centre technology and operational transformation.",
    highlights: [
      "Delivered business analysis across Salesforce Health Cloud and Genesys Cloud initiatives",
      "Led requirements workshops and stakeholder engagement across business and technology teams",
      "Supported process mapping, UAT coordination, defect management and implementation documentation",
      "Supported customer experience initiatives including IVR transformation and service enhancement programs",
    ],
    tags: ["Business Analysis", "Salesforce Health Cloud", "Genesys Cloud", "UAT"],
  },
  {
    period: "Jan 2023 – Jun 2026 substantive role",
    role: "Deployment Consultant",
    company: "Home Health Transformation",
    summary:
      "Substantive role supporting major transformation, implementation and business readiness initiatives across Home Health.",
    highlights: [
      "Supported enterprise-wide Salesforce Health Cloud transformation",
      "Coordinated business readiness across nationally distributed operational teams",
      "Led data remediation activities impacting approximately 43,500 customer records",
      "Supported operational integration of acquired businesses",
      "Delivered deployment, stakeholder engagement and transition support across transformation programs",
    ],
    tags: ["Deployment", "Business Readiness", "Data Remediation", "Stakeholder Engagement"],
  },
  {
    period: "Jul 2024 – Jan 2025",
    role: "Deployment & Adoption Lead",
    company: "Secondment",
    summary:
      "Promotional secondment leading deployment and workforce transformation activities across national operations.",
    highlights: [
      "Led deployment activities across 24 operational departments nationally",
      "Supported workforce transformation impacting 3,200 employees and 32,000 clients",
      "Delivered workforce optimisation initiatives improving scheduling efficiency and utilisation",
      "Developed Tableau reporting dashboards for workforce performance and capacity planning",
    ],
    tags: ["Workforce Optimisation", "Reporting", "Deployment Leadership"],
  },
  {
    period: "Feb 2022 – Jan 2023",
    role: "Community Liaison Manager",
    company: "Operational Leadership",
    summary:
      "Operational leadership role responsible for service delivery, workforce leadership and stakeholder management.",
    highlights: [
      "Managed multidisciplinary service delivery teams",
      "Led client-centred care planning and service delivery activities",
      "Managed escalations, complaints and service quality outcomes",
      "Supported workforce capability, onboarding and operational performance initiatives",
    ],
    tags: ["Service Delivery", "Stakeholder Management", "Operational Leadership"],
  },
  {
    period: "May 2019 – Feb 2022",
    role: "Service Coordinator",
    company: "Home Health Operations",
    summary:
      "Coordinated workforce scheduling and service delivery across regional operations.",
    highlights: [
      "Coordinated workforce scheduling and service delivery",
      "Managed service escalations and operational improvement activities",
      "Supported workforce continuity throughout COVID-19 operational challenges",
      "Built strong stakeholder relationships across clinical and operational teams",
    ],
    tags: ["Scheduling", "Service Coordination", "Operations"],
  },
  {
    period: "2015 – 2019",
    role: "Earlier Roles",
    company: "Frontline Care & Community Services",
    summary:
      "Earlier frontline roles across disability support, community care, nursing support and diversional therapy.",
    highlights: [
      "Community Care Coordinator, LiveBetter, 2018–2019",
      "Disability Support Worker, CareWest / LiveBetter, 2016–2018",
      "Assistant in Nursing, Warren GWAHS, 2015–2017",
      "Diversional Therapist, Gilgandra GWAHS, 2016–2017",
    ],
    tags: ["Frontline Care", "Community Services", "Customer Support"],
  },
]

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="A career built across frontline operations, deployment, transformation and business analysis"
        description="More than seven years progressing through operational, leadership, deployment and transformation roles, with experience across healthcare, community services, aged care, Salesforce Health Cloud, Genesys Cloud, operational readiness and customer-focused change."
      />

      <section className="mx-auto max-w-4xl px-5 pb-20 pt-8 lg:px-8">
        <ol className="relative border-l border-border">
          {experience.map((item) => (
            <li key={item.role} className="mb-10 ml-8 last:mb-0">
              <span className="absolute -left-[9px] flex size-4 items-center justify-center rounded-full border-2 border-primary bg-background" />
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{item.period}</p>
                <h2 className="mt-2 font-serif text-xl font-semibold tracking-tight">{item.role}</h2>
                <p className="text-sm font-medium text-muted-foreground">{item.company}</p>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-foreground/80">{item.summary}</p>
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-foreground/80">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {h}
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

import type { Metadata } from "next"
import {
  BarChart3,
  Boxes,
  HeartHandshake,
  ClipboardList,
  GitBranch,
  Users,
  ShieldCheck,
} from "lucide-react"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Healthcare transformation capabilities spanning business analysis, operational readiness, deployment and adoption, governance, business improvement, data readiness and stakeholder engagement.",
}

const skillGroups = [
  {
    icon: ClipboardList,
    title: "Business Analysis",
    skills: [
      "Requirements elicitation",
      "Business requirements",
      "Functional requirements",
      "Non-functional requirements",
      "Requirements traceability",
      "Business rules & constraints",
      "Process mapping",
      "Current & future state",
      "User stories",
      "Acceptance criteria",
      "Data analysis",
      "Root cause analysis",
      "Business process improvement",
    ],
  },
  {
    icon: GitBranch,
    title: "Operational Readiness",
    skills: [
      "Readiness assessments",
      "Operational impact assessment",
      "Go-live readiness",
      "Cutover planning",
      "Operational acceptance",
      "Risk & dependency management",
      "Workforce readiness",
      "Business continuity",
      "Hypercare",
      "Post-deployment remediation",
    ],
  },
  {
    icon: Boxes,
    title: "Deployment & Adoption",
    skills: [
      "Enterprise deployment",
      "Deployment planning",
      "Change implementation",
      "Frontline adoption",
      "Training coordination",
      "Stakeholder readiness",
      "Go-live support",
      "Cross-functional delivery",
      "Implementation risk management",
      "Sustainable adoption",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Governance, Risk & Delivery Assurance",
    skills: [
      "Operational governance",
      "Risk & issue management",
      "Requirements traceability",
      "Business rules & constraints",
      "UAT governance",
      "Defect management",
      "Release readiness",
      "Data quality & validation",
      "Service continuity",
      "Vendor & partner engagement",
      "Privacy requirements",
      "Security requirements",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Healthcare & Service Transformation",
    skills: [
      "Healthcare transformation",
      "Service transformation",
      "Customer experience",
      "Customer journey improvement",
      "Continuity of care",
      "Workforce optimisation",
      "Service delivery improvement",
      "Operational efficiency",
      "Business improvement",
      "Continuous improvement",
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Insights",
    skills: [
      "Data readiness",
      "Data quality",
      "Data validation",
      "Customer data",
      "Workforce data",
      "Data migration readiness",
      "Data remediation",
      "Operational reporting",
      "Microsoft Excel (Advanced)",
      "Power Query",
      "Power BI",
      "Tableau",
    ],
  },
  {
    icon: Users,
    title: "Stakeholder & Delivery Leadership",
    skills: [
      "Stakeholder engagement",
      "Workshop facilitation",
      "Cross-functional leadership",
      "Operational leadership",
      "Vendor & partner engagement",
      "Issue escalation & resolution",
      "Decision support",
      "Collaboration",
      "Coaching & capability uplift",
      "Community of Practice leadership",
    ],
  },
]

const specialistExperience = [
  "Healthcare Transformation",
  "Home & Community Care",
  "Aged Care",
  "Mental Health",
  "Hospital-in-the-Home",
  "Digital Health",
  "Contact Centre & Digital Channels",
  "Operational Readiness",
  "Enterprise Deployment",
  "Deployment & Adoption",
  "Workforce Optimisation",
  "Business Analysis",
  "Business Improvement",
  "CRM Transformation",
  "Acquisition Integration",
  "Customer & Workforce Integration",
  "Data Readiness & Migration",
  "UAT & Release Readiness",
  "AI-Enabled Ways of Working",
]

const tools = [
  "Salesforce Health Cloud",
  "Salesforce Service Cloud",
  "Salesforce Omni-Channel",
  "Salesforce CTI",
  "Genesys Cloud",
  "Procura (AlayaCare)",
  "Biarri",
  "SAP SuccessFactors Employee Central",
  "Jira",
  "Confluence",
  "Wrike",
  "Microsoft Excel",
  "Power Query",
  "Power BI",
  "Microsoft PowerPoint",
  "Microsoft Visio",
  "Miro",
  "Tableau",
  "SharePoint",
  "Microsoft Teams",
  "Microsoft Copilot",
  "ServiceNow",
]

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Capabilities that turn strategy into operational outcomes"
        description="A combination of healthcare transformation, business analysis, operational readiness, deployment and adoption, governance, business improvement and stakeholder leadership developed across frontline service delivery, operations and enterprise transformation."
      />

      <section className="mx-auto max-w-6xl px-5 pb-8 pt-8 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <group.icon className="size-5" />
              </span>

              <h2 className="mt-4 font-serif text-lg font-semibold">
                {group.title}
              </h2>

              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-foreground/80"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-serif text-2xl font-semibold tracking-tight">
              Specialist Experience
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Areas where I have applied these capabilities across healthcare,
              community services and enterprise transformation.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {specialistExperience.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-serif text-2xl font-semibold tracking-tight">
              Tools &amp; Platforms
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Enterprise platforms and delivery tools used across operations,
              transformation, deployment and business analysis.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground/80"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
import type { Metadata } from "next"
import { BarChart3, Boxes, Brain, ClipboardList, GitBranch, Users } from "lucide-react"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Capabilities that turn strategy into operational outcomes",
}

const skillGroups = [
  {
    icon: ClipboardList,
    title: "Business Analysis",
    skills: [
      "Business requirements",
      "Process mapping",
      "Current & future state",
      "Stakeholder engagement",
      "User stories",
      "Functional specifications",
      "UAT planning",
      "Traceability",
    ],
  },
  {
    icon: GitBranch,
    title: "Operational Readiness",
    skills: [
      "Readiness assessments",
      "Go-live planning",
      "Cutover planning",
      "Hypercare",
      "Risk management",
      "Operational acceptance",
      "Workforce readiness",
      "Business continuity",
    ],
  },
  {
    icon: Boxes,
    title: "Transformation Delivery",
    skills: [
      "Change implementation",
      "Service transformation",
      "Business improvement",
      "Deployment planning",
      "Benefits realisation",
      "Cross-functional delivery",
      "Governance",
    ],
  },
  {
    icon: Brain,
    title: "Customer & Service Improvement",
    skills: [
      "Customer journey improvement",
      "Service design",
      "Process improvement",
      "Operational efficiency",
      "Customer experience",
      "Continuous improvement",
      "Data-driven decision making",
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Insights",
    skills: [
      "Data migration readiness",
      "Data quality",
      "Reporting",
      "KPI development",
      "Power Query",
      "Pivot tables",
      "Tableau Dashboard Development",
      "Microsoft Excel (Advanced)",
      "Business Reporting & Insights",
    ],
  },
  {
    icon: Users,
    title: "Leadership & Facilitation",
    skills: [
      "Workshops",
      "Executive stakeholder engagement",
      "Vendor management",
      "Cross-functional leadership",
      "Facilitation",
      "Decision making",
      "Coaching",
    ],
  },
]

const specialistExperience = [
  "Salesforce Health Cloud",
  "Genesys Cloud",
  "CRM Transformation",
  "Customer & Employee Data Migration",
  "Operational Readiness",
  "Enterprise Deployment",
  "Service Transformation",
  "Business Analysis",
  "Healthcare Transformation",
  "Contact Centre Transformation",
]

const tools = [
  "Jira",
  "Confluence",
  "Microsoft Excel (Advanced)",
  "Salesforce Health Cloud",
  "Genesys Cloud",
  "Miro",
  "Visio",
  "Tableau Dashboard Development",
  "SharePoint",
  "Microsoft Teams",
  "ServiceNow",
  "Alayacare",
  "SAP Procura",
]

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Capabilities that turn strategy into operational outcomes"
        description="The combination of business analysis, operational readiness, deployment leadership and customer-focused transformation that I bring to complex initiatives."
      />

      <section className="mx-auto max-w-6xl px-5 pb-8 pt-8 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <group.icon className="size-5" />
              </span>
              <h2 className="mt-4 font-serif text-lg font-semibold">{group.title}</h2>
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
            <h2 className="font-serif text-2xl font-semibold tracking-tight">Specialist Experience</h2>
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
            <h2 className="font-serif text-2xl font-semibold tracking-tight">Tools &amp; platforms</h2>
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

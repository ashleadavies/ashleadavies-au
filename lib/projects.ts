export type Project = {
  slug: string
  title: string
  category: string
  summary: string
  year: string
  client: string
  duration: string
  tags: string[]
  kpis: { value: string; label: string }[]
  overview: string
  challenge: string
  role: string
  approach: string
  activities: string[]
  outcomes: { value: string; label: string }[]
  technology: string[]
  lessons: string
}

export const projects: Project[] = [
  {
    slug: "mental-health-service-transformation",
    title: "Mental Health Service Transformation",
    category: "Public Sector",
    summary:
      "Redesigned end-to-end patient pathways for a regional mental health provider, reducing waiting times and improving care continuity.",
    year: "2024",
    client: "Regional NHS Trust (placeholder)",
    duration: "9 months",
    tags: ["Service Design", "Operational Readiness", "Change Management"],
    kpis: [
      { value: "34%", label: "Reduction in wait times" },
      { value: "12", label: "Pathways redesigned" },
      { value: "1.2k", label: "Staff onboarded" },
    ],
    overview:
      "This is placeholder overview copy. A regional mental health provider needed to modernise fragmented patient pathways spanning referral, triage, treatment and discharge. The programme aligned clinical, operational and digital teams around a single, patient-centred operating model.",
    challenge:
      "Placeholder business challenge copy. Legacy processes, disconnected systems and inconsistent data made it difficult to understand demand, allocate capacity and give patients a predictable experience. Long waiting lists were creating clinical risk and staff burnout.",
    role: "Placeholder role copy. As lead Business Analyst and Operational Readiness Specialist, I owned discovery, current-state analysis, target operating model design and the readiness plan that prepared teams to adopt new ways of working.",
    approach:
      "Placeholder approach copy. I combined data-led demand analysis with front-line co-design workshops, mapping value streams and prioritising interventions by clinical impact and feasibility. A phased rollout de-risked delivery and built momentum.",
    activities: [
      "Facilitated discovery workshops with clinical and operational stakeholders",
      "Mapped current and future-state patient pathways and value streams",
      "Defined requirements and acceptance criteria for the digital toolset",
      "Built the operational readiness and cutover plan",
      "Designed KPI dashboards to track adoption and outcomes",
    ],
    outcomes: [
      { value: "34%", label: "Shorter average wait time" },
      { value: "22%", label: "Increase in throughput" },
      { value: "4.6/5", label: "Patient experience score" },
    ],
    technology: ["Azure DevOps", "Power BI", "Miro", "Visio", "ServiceNow"],
    lessons:
      "Placeholder lessons copy. Early, sustained front-line involvement was the single biggest predictor of adoption. Investing in readiness before go-live protected both patients and staff during the transition.",
  },
  {
    slug: "enterprise-crm-transformation",
    title: "Enterprise CRM Transformation",
    category: "Financial Services",
    summary:
      "Led requirements and readiness for a global CRM migration, unifying sales, service and marketing on a single platform.",
    year: "2023",
    client: "Global Financial Services Firm (placeholder)",
    duration: "14 months",
    tags: ["CRM", "Requirements", "Data Migration"],
    kpis: [
      { value: "8", label: "Markets migrated" },
      { value: "3.5k", label: "Users onboarded" },
      { value: "99.9%", label: "Data integrity" },
    ],
    overview:
      "Placeholder overview copy. A global financial services firm consolidated multiple regional CRMs into a single enterprise platform to create one view of the customer and standardise ways of working across markets.",
    challenge:
      "Placeholder business challenge copy. Divergent processes, duplicated data and heavy customisation created cost, risk and a fractured customer experience across regions.",
    role: "Placeholder role copy. I led business analysis across workstreams, translating strategic goals into detailed requirements and owning the operational readiness assessment for each market.",
    approach:
      "Placeholder approach copy. I established a shared requirements framework, ran cross-market process harmonisation and used a wave-based rollout with rigorous readiness gates.",
    activities: [
      "Defined a global requirements and process taxonomy",
      "Facilitated cross-market harmonisation workshops",
      "Owned data migration mapping and reconciliation criteria",
      "Ran readiness assessments and go/no-go reviews",
      "Coordinated UAT and hypercare across regions",
    ],
    outcomes: [
      { value: "27%", label: "Faster sales cycle" },
      { value: "-40%", label: "Reduced admin effort" },
      { value: "1", label: "Unified customer view" },
    ],
    technology: ["Salesforce", "MuleSoft", "Tableau", "Jira", "Confluence"],
    lessons:
      "Placeholder lessons copy. Harmonising process before configuring technology avoided costly rework and made adoption far smoother across diverse markets.",
  },
  {
    slug: "ai-workforce-optimisation",
    title: "AI Workforce Optimisation",
    category: "Operations",
    summary:
      "Introduced AI-assisted planning and forecasting to optimise workforce allocation across a national operations network.",
    year: "2024",
    client: "National Operations Provider (placeholder)",
    duration: "7 months",
    tags: ["AI", "Forecasting", "Process Optimisation"],
    kpis: [
      { value: "18%", label: "Productivity uplift" },
      { value: "25%", label: "Lower overtime" },
      { value: "6", label: "Regions live" },
    ],
    overview:
      "Placeholder overview copy. A national operations provider adopted AI-assisted demand forecasting and scheduling to better match workforce capacity to fluctuating demand.",
    challenge:
      "Placeholder business challenge copy. Manual planning led to over- and under-staffing, high overtime costs and inconsistent service levels across regions.",
    role: "Placeholder role copy. I bridged operations and data science teams, defining the business problem, success metrics and the operating model for AI-supported decisions.",
    approach:
      "Placeholder approach copy. I framed the use case, defined guardrails for human-in-the-loop decisions, and led readiness so planners trusted and acted on model outputs.",
    activities: [
      "Defined forecasting use cases and success metrics",
      "Specified data requirements and quality thresholds",
      "Designed human-in-the-loop decision workflows",
      "Ran change and readiness for planning teams",
      "Established monitoring for model performance and drift",
    ],
    outcomes: [
      { value: "18%", label: "Productivity increase" },
      { value: "25%", label: "Overtime reduction" },
      { value: "+9pts", label: "Service level improvement" },
    ],
    technology: ["Python", "Azure ML", "Power BI", "Snowflake", "Databricks"],
    lessons:
      "Placeholder lessons copy. Trust in AI outputs came from transparency and clear guardrails — planners adopted the tools once they understood how and why recommendations were made.",
  },
  {
    slug: "enterprise-operational-integration",
    title: "Enterprise Operational Integration",
    category: "Post-Merger",
    summary:
      "Integrated operations, systems and teams following an acquisition, delivering a single operating model with minimal disruption.",
    year: "2022",
    client: "Enterprise Group (placeholder)",
    duration: "12 months",
    tags: ["Integration", "Operating Model", "Readiness"],
    kpis: [
      { value: "2", label: "Businesses merged" },
      { value: "0", label: "Days of downtime" },
      { value: "15%", label: "Cost synergies" },
    ],
    overview:
      "Placeholder overview copy. Following an acquisition, two organisations needed to combine operations, systems and teams into a single, resilient operating model without disrupting customers.",
    challenge:
      "Placeholder business challenge copy. Overlapping processes, competing systems and cultural differences created integration risk and uncertainty for employees and customers alike.",
    role: "Placeholder role copy. I led operational readiness and business analysis, defining the integrated target operating model and the cutover approach.",
    approach:
      "Placeholder approach copy. I ran a structured integration playbook — assessing capabilities, designing the combined model, and sequencing changes to protect service continuity.",
    activities: [
      "Assessed capabilities and processes across both organisations",
      "Designed the integrated target operating model",
      "Built the cutover, contingency and rollback plans",
      "Coordinated readiness across functions and locations",
      "Tracked synergy realisation post go-live",
    ],
    outcomes: [
      { value: "0", label: "Days downtime at cutover" },
      { value: "15%", label: "Cost synergies realised" },
      { value: "94%", label: "Employee retention" },
    ],
    technology: ["SAP", "ServiceNow", "Visio", "Smartsheet", "Power BI"],
    lessons:
      "Placeholder lessons copy. Detailed readiness and a rehearsed cutover plan turned a high-risk integration into a controlled, confident transition.",
  },
  {
    slug: "ai-and-automation",
    title: "AI & Automation",
    category: "Digital Transformation",
    summary:
      "Delivered an automation programme combining RPA and AI to remove manual effort across high-volume back-office processes.",
    year: "2023",
    client: "Shared Services Organisation (placeholder)",
    duration: "8 months",
    tags: ["Automation", "RPA", "AI"],
    kpis: [
      { value: "20+", label: "Processes automated" },
      { value: "30k", label: "Hours returned" },
      { value: "£3.4M", label: "Annual savings" },
    ],
    overview:
      "Placeholder overview copy. A shared services organisation launched an intelligent automation programme to eliminate repetitive manual work and free capacity for higher-value activity.",
    challenge:
      "Placeholder business challenge copy. High-volume, rules-based processes consumed significant effort, were prone to error, and limited the team's ability to focus on exceptions and customers.",
    role: "Placeholder role copy. I led process discovery and prioritisation, defined automation requirements, and owned readiness for the new human-plus-bot operating model.",
    approach:
      "Placeholder approach copy. I built an automation pipeline scored by value and complexity, combined RPA with AI for document handling, and prepared teams for a blended workforce.",
    activities: [
      "Ran process mining and automation opportunity assessment",
      "Prioritised a value-driven automation pipeline",
      "Defined requirements and exception-handling rules",
      "Designed the human-plus-bot operating model",
      "Led readiness and benefits tracking",
    ],
    outcomes: [
      { value: "30k", label: "Hours returned annually" },
      { value: "£3.4M", label: "Annual cost savings" },
      { value: "-65%", label: "Processing errors" },
    ],
    technology: ["UiPath", "Power Automate", "Azure AI", "Power BI", "Jira"],
    lessons:
      "Placeholder lessons copy. Automation delivered most value when paired with redesigned processes and a clear plan for the people whose roles evolved alongside the bots.",
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

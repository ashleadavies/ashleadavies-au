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

  publishedOutcomes?: {
    value: string
    label: string
  }[]

  publishedOutcomesContext?: string
  publishedOutcomesSource?: string
  publishedOutcomesSourceUrl?: string

  technology: string[]
  lessons: string
}

export const projects: Project[] = [
  {
    slug: "team-based-care-operating-model",

    title: "Team-Based Care Operating Model",

    category: "Operating Model Transformation",

    summary:
      "Led deployment and adoption of a Team-Based Care operating model across 26 neighbourhoods supporting 33,000+ customers, aligning workforce optimisation, operational readiness, service delivery and frontline adoption.",

    year: "2024–2025",

    client: "National Home & Community Healthcare Provider",

    duration: "Approx. 2 years",

    tags: [
      "Operating Model Transformation",
      "Operational Readiness",
      "Workforce Optimisation",
      "Deployment & Adoption",
      "Change Adoption",
    ],

    kpis: [
      {
        value: "26",
        label: "Neighbourhoods deployed",
      },
      {
        value: "33,000+",
        label: "Customers supported",
      },
      {
        value: "~12,000",
        label: "Scheduling files produced per fortnight",
      },
    ],

    overview:
      "Facing growing demand for home and community care, workforce constraints and increasingly complex rostering requirements, a national healthcare provider introduced a Team-Based Care operating model supported by Biarri workforce optimisation technology. The model moved operations beyond traditional Procura-based and manual rostering processes toward a more data-driven approach to workforce planning, service allocation and scheduling. The transformation was deployed across 26 neighbourhoods supporting more than 33,000 customers and required significant workforce, operational, data and change readiness before implementation.",

    challenge:
      "Each neighbourhood had different workforce capacity, customer demand, service requirements, data quality and operational readiness risks that needed to be understood before deployment. Workforce planning also needed to account for different enterprise agreements and awards, employee availability, contracted hours, rostering constraints, travel requirements and customer service time windows while maintaining continuity of care and familiar care relationships. The operating model, workforce rules and supporting data also needed to be designed with the organisation's longer-term technology transformation in mind so the model could transition into Salesforce Health Cloud rather than becoming a short-term solution.",

    role:
      "Initially as Deployment Consultant and subsequently as Deployment & Adoption Lead, I led and supported deployment of the Team-Based Care operating model across neighbourhood operations. I translated the future-state model into practical implementation activities spanning operational readiness, workforce planning, workforce optimisation, data validation, training, stakeholder engagement, change adoption and post-deployment support.",

    approach:
      "I used a structured readiness and adoption approach for each neighbourhood, assessing customer and service demand, workforce capability, enterprise agreement and award requirements, employee availability, contracted hours, workforce capacity, operational data, competing change, implementation risks and go-live readiness. Readiness activities considered not only workforce efficiency but also continuity of care, customer preferences, familiar care relationships and the practical impact of new rostering approaches on frontline teams. I worked across operational, project and technology stakeholders to support a model that was practical for current operations while remaining aligned with the organisation's future Salesforce Health Cloud transformation.",

    activities: [
      "Led operational readiness assessments across 26 neighbourhoods",
      "Analysed workforce demand, utilisation, capacity and service requirements",
      "Reviewed workforce constraints including enterprise agreements, awards, contracted hours, employee availability and rostering requirements",
      "Identified workforce, capability, service and data gaps ahead of deployment",
      "Partnered with operational leaders to support workforce optimisation strategies",
      "Validated customer care plans, service information and operational data",
      "Supported alignment between customer requirements and available workforce capability",
      "Considered continuity of care, familiar care relationships and customer preferences within readiness planning",
      "Supported operational preparation for optimised roster and schedule generation",
      "Supported processes for ongoing roster maintenance and management of operational disruptions",
      "Supported alignment of workforce and operational requirements with future Salesforce Health Cloud processes",
      "Coordinated deployment planning, go-live readiness and hypercare",
      "Developed and delivered training and communication materials for frontline teams",
      "Supported workforce training, communication and frontline adoption",
      "Monitored adoption barriers and coordinated targeted remediation",
      "Supported deployment of workforce optimisation processes operating at a scale of approximately 12,000 scheduling files each fortnight",
    ],

    outcomes: [
      {
        value: "Reduced",
        label: "Deployment risk through structured readiness planning",
      },
      {
        value: "Improved",
        label: "Workforce and service alignment",
      },
      {
        value: "Stronger",
        label: "Frontline readiness and sustainable adoption",
      },
    ],

    publishedOutcomes: [
      {
        value: "15%",
        label: "Reduction in cost to service a home visit",
      },
      {
        value: "15%",
        label: "Reduction in average travel minutes per visit",
      },
      {
        value: "60% → 90%",
        label: "Increase in visits delivered as planned",
      },
    ],

    publishedOutcomesContext:
      "Independent program-level results reported by Biarri following implementation of its workforce optimisation technology with Australian Unity. These outcomes reflect the broader transformation programme and are shown separately from my individual project contribution.",

    publishedOutcomesSource:
      "Biarri Home Care Scheduling + Rostering - Australian Unity Case Study",

    publishedOutcomesSourceUrl:
      "https://biarri.com/wp-content/uploads/2025/01/Biarri-Home-Care-Scheduling-Rostering-Australian-Unity-Case-Study.pdf",

    technology: [
      "Procura (AlayaCare)",
      "Biarri",
      "Salesforce Health Cloud",
      "Wrike",
      "SharePoint",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Microsoft Teams",
      "Outlook",
    ],

    lessons:
      "Successful workforce transformation requires more than implementing optimisation technology. The operating model needed to account for workforce agreements, customer needs, workforce capability, data quality, operational realities and future technology architecture. Building those requirements into readiness and deployment activities helped support both immediate operational improvement and the organisation's longer-term Salesforce Health Cloud transformation.",
  },

  {
    slug: "home-health-salesforce-transformation",

    title: "Enterprise Home Health CRM Transformation",

    category: "Healthcare Transformation & Deployment",

    summary:
      "Supported operational and data readiness for a national Salesforce Health Cloud transformation spanning Home Health, Community Nursing and Allied Healthcare, connecting customer, workforce and service delivery data across a complex healthcare ecosystem.",

    year: "2025–2026",

    client: "National Home & Community Healthcare Provider",

    duration: "Phased national rollout",

    tags: [
      "Healthcare Transformation",
      "Operational Readiness",
      "Salesforce Health Cloud",
      "Data Readiness",
      "Deployment & Adoption",
    ],

    kpis: [
      {
        value: "45,000+",
        label: "Customer records prepared",
      },
      {
        value: "4,000+",
        label: "Employees across service delivery",
      },
      {
        value: "53+",
        label: "Neighbourhood deployments supported",
      },
    ],

    overview:
      "A national home and community healthcare provider commenced a phased transformation to Salesforce Health Cloud to modernise customer management, care coordination and service delivery. The programme spanned Home Health, Community Nursing and Allied Healthcare operations, supporting an ecosystem of more than 4,000 employees alongside external healthcare partners and providers. The transformation required alignment across customer, workforce and operational systems before neighbourhoods could safely transition through staged deployment.",

    challenge:
      "The transformation extended well beyond technology migration. Customer records, care and service requirements, workforce capability, employee information and operational processes were distributed across multiple enterprise platforms and required validation and alignment before deployment. Any unresolved gaps had the potential to affect customer services, workforce readiness and frontline operations after go-live.",

    role:
      "As Deployment Consultant, I worked across frontline operations, neighbourhood leadership, transformation stakeholders and technology teams to coordinate operational readiness for deployment. My responsibilities included customer and workforce data validation, service and workforce alignment, issue resolution, cutover preparation, go-live support and post-deployment remediation.",

    approach:
      "I used a service-delivery-led readiness approach, connecting customer and service requirements with workforce capability and operational processes. This included analysing customer and workforce data, validating care and service information, assessing employee competencies and capability, identifying dependencies and working with stakeholders to resolve issues before deployment.",

    activities: [
      "Analysed and validated customer, workforce and service delivery data prior to deployment",
      "Identified inconsistencies between customer records, service requirements and operational delivery",
      "Validated employee competencies and workforce capability against required customer services",
      "Worked with neighbourhood leaders and operational stakeholders to resolve data and readiness issues",
      "Supported readiness across internal workforce and external service delivery dependencies",
      "Conducted operational readiness assessments ahead of deployment",
      "Supported Salesforce Health Cloud cutover planning and business validation",
      "Coordinated issue identification, escalation and resolution across business and technology teams",
      "Supported neighbourhood go-live preparation and hypercare",
      "Contributed to repeatable readiness processes for subsequent neighbourhood deployments",
    ],

    outcomes: [
      {
        value: "Improved",
        label: "Customer, workforce and service data quality",
      },
      {
        value: "Reduced",
        label: "Operational and deployment risk",
      },
      {
        value: "Repeatable",
        label: "Readiness approach for national rollout",
      },
    ],

    technology: [
      "Salesforce Health Cloud",
      "Procura (AlayaCare)",
      "AlayaCare",
      "SAP SuccessFactors Employee Central",
      "Jira",
      "Confluence",
      "Miro",
      "Visio",
      "Microsoft Excel",
      "Microsoft Teams",
      "SharePoint",
    ],

    lessons:
      "Large-scale healthcare transformation is not simply a technology change. Successful deployment depends on aligning customer and service requirements with workforce capability, operational processes and reliable data so service delivery can continue safely through change.",
  },

  {
    slug: "enterprise-uat-release-readiness",

    title: "Enterprise UAT & Release Readiness",

    category: "Business Analysis & UAT",

    summary:
      "Designed an accessible UAT framework enabling external partners and internal testers without Jira access to participate in enterprise testing while maintaining alignment with internal testing, defect management and release readiness processes.",

    year: "2026",

    client: "National Home & Community Healthcare Provider",

    duration: "6 weeks",

    tags: [
      "User Acceptance Testing",
      "Release Readiness",
      "Jira",
      "Stakeholder Collaboration",
      "Process Improvement",
    ],

    kpis: [
      {
        value: "100%",
        label: "Scenario coverage",
      },
      {
        value: "Cross-team",
        label: "UAT participation enabled",
      },
      {
        value: "Centralised",
        label: "Jira defect management",
      },
    ],

    overview:
      "An enterprise service enhancement required User Acceptance Testing across internal teams and external delivery partners. Jira was used internally to manage testing and defects; however, not all participants had access to the organisation's Jira environment. A practical testing solution was required that allowed all stakeholders to participate while maintaining visibility, accountability and alignment with internal testing governance.",

    challenge:
      "External partners and some internal testing participants could not access the organisation's Jira environment, creating a risk that UAT would become fragmented and that stakeholders would have limited visibility or ownership of testing outcomes. The testing process needed to remain accessible to all participants while maintaining a central internal record of scenarios, outcomes and defects.",

    role:
      "As Business Analyst, I designed and managed an Excel-based UAT framework enabling external partners and internal testers without Jira access to participate fully in testing. I coordinated test execution, maintained oversight of results and evidence, and transferred relevant UAT outcomes and defects into Jira to support internal defect management, governance and release readiness.",

    approach:
      "I designed the UAT workbook around business scenarios, test steps, expected outcomes, actual results, evidence requirements and ownership. This created a shared and accessible testing environment for participants while allowing results to be consolidated and maintained within the organisation's Jira-based testing and defect management process.",

    activities: [
      "Designed an Excel-based UAT framework for stakeholders without Jira access",
      "Defined business scenarios, test cases, expected outcomes and acceptance criteria",
      "Created structured fields for test execution, evidence capture and ownership",
      "Coordinated UAT across internal teams and external delivery partners",
      "Reviewed and consolidated testing results and supporting evidence",
      "Identified, documented and triaged defects arising through UAT",
      "Transferred relevant UAT outcomes and defects into Jira",
      "Maintained alignment between external testing activity and internal Jira records",
      "Supported stakeholder review, business sign-off and release readiness",
    ],

    outcomes: [
      {
        value: "Enabled",
        label: "UAT participation across Jira access boundaries",
      },
      {
        value: "Improved",
        label: "Testing visibility and stakeholder ownership",
      },
      {
        value: "Maintained",
        label: "Centralised testing and defect governance",
      },
    ],

    technology: [
      "Microsoft Excel",
      "Jira",
    ],

    lessons:
      "Effective UAT depends on designing a process around the people who need to participate, not simply the testing platform available. Creating an accessible testing framework enabled broader stakeholder participation while preserving traceability, ownership, governance and release confidence.",
  },

  {
    slug: "genesysivr-enhancement",

    title: "Genesys IVR Enhancement",

    category: "Digital Service Transformation",

    summary:
      "Delivered business analysis and operational readiness for the redesign of a cloud-based IVR experience integrated with Salesforce CTI, improving customer routing, frontline context and release confidence.",

    year: "2026",

    client: "National Mental Health Support Service",

    duration: "4 months",

    tags: [
      "Business Analysis",
      "Genesys Cloud",
      "Salesforce CTI",
      "UAT",
      "Operational Readiness",
    ],

    kpis: [
      {
        value: "44",
        label: "Production test cases passed",
      },
      {
        value: "97",
        label: "Validation scenarios",
      },
      {
        value: "0",
        label: "Critical production defects",
      },
    ],

    overview:
      "A national mental health support service modernised its contact centre experience through a redesigned cloud IVR integrated with Salesforce CTI. The enhancement improved customer journeys, routing and information capture while providing frontline teams with better context before interactions.",

    challenge:
      "The service needed to improve routing, safely capture optional participant information, preserve existing critical support pathways, improve reporting and enable future digital enhancements. Because the environment supported vulnerable customers, every change required rigorous business, technical and production validation.",

    role:
      "As Business Analyst, I partnered with operational leaders, business stakeholders and technical delivery teams across discovery, design, requirements, testing, production deployment and hypercare.",

    approach:
      "I used an operational readiness approach that validated each enhancement from both a business and technical perspective before deployment. This included discovery workshops, functional design reviews, user stories and acceptance criteria, IVR prompt validation, CTI testing, UAT, production smoke testing and business sign-off.",

    activities: [
      "Facilitated cross-functional discovery workshops",
      "Developed user stories and acceptance criteria",
      "Mapped customer and operational journey requirements",
      "Coordinated UAT and production validation scenarios",
      "Produced go-live run sheets and hypercare plans",
      "Validated Salesforce CTI integration",
      "Supported CAB readiness and deployment planning",
      "Managed defect triage and stakeholder communications",
      "Supported production validation and post-release hypercare",
    ],

    outcomes: [
      {
        value: "0",
        label: "Critical production defects",
      },
      {
        value: "Improved",
        label: "Customer routing and experience",
      },
      {
        value: "Stronger",
        label: "Operational reporting and frontline context",
      },
    ],

    technology: [
      "Genesys Cloud",
      "Salesforce Service Cloud",
      "Salesforce CTI",
      "Jira",
      "Confluence",
      "Miro",
      "Visio",
      "Microsoft Teams",
    ],

    lessons:
      "Delivering technology into a critical healthcare environment reinforced that successful transformation extends well beyond implementing software. Strong requirements, testing, stakeholder engagement and operational readiness reduce risk and build confidence before go-live.",
  },

  {
    slug: "customer-workforce-integration",

    title: "Customer & Workforce Integration",

    category: "Acquisition & Operational Integration",

    summary:
      "Supported operational readiness and deployment for the integration of an acquired healthcare provider, coordinating customer, workforce and service migration into a single national care management platform.",

    year: "2025",

    client: "National Home & Community Healthcare Provider",

    duration: "2 months",

    tags: [
      "Acquisition Integration",
      "Operational Readiness",
      "Customer Migration",
      "Workforce Integration",
      "Deployment",
    ],

    kpis: [
      {
        value: "40+",
        label: "Neighbourhoods supported",
      },
      {
        value: "2",
        label: "Organisations integrated",
      },
      {
        value: "1",
        label: "Operational platform",
      },
    ],

    overview:
      "Following an acquisition, customer, employee and service delivery data needed to transition from one Procura environment into the organisation's national care management platform while maintaining continuity of care and frontline service delivery.",

    challenge:
      "The project required different operating models, workforce structures, customer records, service schedules and business practices to be aligned within a compressed delivery timeframe. Migration activities needed to be completed without disrupting customer services or creating avoidable workforce and operational risk.",

    role:
      "As Deployment Consultant, I acted as an operational lead between business and technology teams, coordinating readiness activities and helping ensure neighbourhoods were prepared for migration, go-live and adoption.",

    approach:
      "The integration was delivered through a structured deployment methodology focused on operational readiness, customer continuity, workforce adoption, data validation and risk management. I worked closely with neighbourhood leaders and project stakeholders to identify issues before cutover and support resolution through go-live and hypercare.",

    activities: [
      "Coordinated operational readiness across more than 40 neighbourhoods",
      "Validated customer and employee migration data",
      "Reviewed future customer schedules before migration",
      "Identified operational risks and dependencies before deployment",
      "Facilitated stakeholder workshops and readiness discussions",
      "Supported cutover planning and execution",
      "Coordinated go-live communications",
      "Supported frontline teams through migration and hypercare",
      "Escalated and supported resolution of post-migration issues",
    ],

    outcomes: [
      {
        value: "Maintained",
        label: "Continuity of customer care",
      },
      {
        value: "Improved",
        label: "Operational data confidence",
      },
      {
        value: "Unified",
        label: "Customer and workforce records",
      },
    ],

    technology: [
      "Procura (AlayaCare)",
      "Microsoft Excel",
      "Microsoft Teams",
      "SharePoint",
      "Outlook",
      "Jira",
      "Confluence",
    ],

    lessons:
      "Successfully integrating an acquired healthcare operation requires more than moving data between systems. Early validation of customer schedules, workforce information and frontline operating requirements helps identify risks before cutover and supports continuity of care through change.",
  },

  {
    slug: "vendor-eligibility-restoration",

    title: "Vendor Eligibility Restoration",

    category: "Operational Improvement & Service Restoration",

    summary:
      "Led investigation and stakeholder coordination to restore access to a critical healthcare eligibility service, resolving vendor, registration and governance issues without additional licensing cost.",

    year: "2026",

    client: "National Home & Community Healthcare Provider",

    duration: "3 months",

    tags: [
      "Process Analysis",
      "Vendor Management",
      "Operational Governance",
      "Root Cause Analysis",
      "Service Improvement",
    ],

    kpis: [
      {
        value: "1",
        label: "Critical service restored",
      },
      {
        value: "$0",
        label: "Additional licensing cost",
      },
      {
        value: "100%",
        label: "Eligibility capability restored",
      },
    ],

    overview:
      "Operational teams relied on an external eligibility checking portal to verify customer eligibility for healthcare services. When access was lost, teams reverted to manual phone-based checks, increasing effort, processing time and operational risk.",

    challenge:
      "The issue required more than a technical fix. Historical system ownership and registration arrangements were unclear, internal documentation was limited and multiple operational, technology and vendor stakeholders needed to be engaged to determine the cause and restore access.",

    role:
      "As Business Analyst, I led the investigation, stakeholder coordination and business process review required to restore the service and improve visibility of its ongoing operational ownership.",

    approach:
      "I used a structured discovery and root cause analysis approach to understand the service failure, trace historical ownership, engage internal and external stakeholders, validate operational impacts, restore access and improve supporting procedures and governance.",

    activities: [
      "Investigated service access failure and identified root cause",
      "Reviewed historical system ownership and operational processes",
      "Coordinated vendor, technology and operational stakeholder discussions",
      "Supported facility registration and access restoration",
      "Negotiated restoration of service without additional licensing cost",
      "Reviewed and updated operational procedures",
      "Identified undocumented ownership and governance gaps",
      "Supported operational testing and transition back to online eligibility checking",
    ],

    outcomes: [
      {
        value: "Restored",
        label: "Critical operational capability",
      },
      {
        value: "Reduced",
        label: "Manual eligibility checking effort",
      },
      {
        value: "Improved",
        label: "Governance and procedure visibility",
      },
    ],

    technology: [
      "ServiceNow",
      "SharePoint",
      "Microsoft Teams",
      "Outlook",
    ],

    lessons:
      "Operational service failures are not always caused by technology. This initiative reinforced the importance of clear ownership, accurate procedures, preserved organisational knowledge and effective vendor relationships when maintaining critical business services.",
  },

  {
    slug: "business-analyst-community-of-practice",

    title: "Business Analyst Community of Practice",

    category: "Business Analysis Capability & Improvement",

    summary:
      "Designed and established a Business Analyst Community of Practice to improve collaboration, strengthen capability, standardise ways of working and create a central knowledge hub for reusable BA resources.",

    year: "2026",

    client: "Enterprise Technology Function",

    duration: "6 months",

    tags: [
      "Business Analysis",
      "Community of Practice",
      "Capability Uplift",
      "Knowledge Management",
      "Continuous Improvement",
    ],

    kpis: [
      {
        value: "1",
        label: "BA community established",
      },
      {
        value: "Centralised",
        label: "BA knowledge hub created",
      },
      {
        value: "Monthly",
        label: "Capability uplift sessions",
      },
    ],

    overview:
      "Business Analysts were working across multiple delivery squads with limited opportunities to collaborate, share lessons learnt or standardise artefacts. The Community of Practice created a practical forum for capability development, knowledge sharing, reusable resources and continuous improvement.",

    challenge:
      "Without a central BA community, knowledge often remained within individual projects and squads. Templates and artefacts were duplicated, documentation approaches varied and there were limited structured opportunities for Business Analysts to share practices, learn from each other and access reusable resources.",

    role:
      "As Business Analyst, I independently designed, established and facilitated the Business Analyst Community of Practice, creating the framework, collaboration environment, knowledge resources and ongoing engagement rhythm.",

    approach:
      "I focused on creating a practical and collaborative community rather than another meeting series. The model centred on knowledge sharing, capability development, reusable artefacts, standardisation, peer learning and continuous improvement across delivery teams.",

    activities: [
      "Established the Community of Practice framework and roadmap",
      "Designed and maintained an interactive Miro collaboration hub",
      "Facilitated monthly Community of Practice sessions",
      "Developed reusable templates, guides and BA resources",
      "Coordinated guest speakers and knowledge-sharing sessions",
      "Created a central repository for Business Analyst knowledge",
      "Encouraged cross-squad collaboration and lessons learnt sharing",
      "Used feedback and participation insights to shape future sessions and resources",
    ],

    outcomes: [
      {
        value: "Improved",
        label: "Collaboration across delivery teams",
      },
      {
        value: "Reduced",
        label: "Duplication through reusable artefacts",
      },
      {
        value: "Stronger",
        label: "Visibility and sharing of BA capability",
      },
    ],

    technology: [
      "Miro",
      "Confluence",
      "Jira",
      "Microsoft Teams",
      "Microsoft Forms",
      "Microsoft Copilot",
      "SharePoint",
    ],

    lessons:
      "A successful Community of Practice depends on participation and practical value, not documentation alone. Creating an engaging collaboration space, reusable resources and a regular knowledge-sharing rhythm helped turn individual project knowledge into shared organisational capability.",
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
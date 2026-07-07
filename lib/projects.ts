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
    slug: "team-based-care-operating-model",
    title: "Team-Based Care Operating Model",
    category: "Transformation Project",
    summary:
      "Supported the rollout of a national Team-Based Care operating model, aligning workforce planning, operational readiness, service delivery and customer outcomes across multiple neighbourhoods.",
    year: "2024–2025",
    client: "National Home Health Provider",
    duration: "Approx. 2 years",
    tags: ["Operational Readiness", "Workforce Planning", "Change Adoption"],
    kpis: [
      { value: "National", label: "Operating model rollout" },
      { value: "24+", label: "Neighbourhood deployments" },
      { value: "Future-ready", label: "CRM transformation foundation" },
    ],
    overview:
      "A national home health provider introduced a Team-Based Care operating model to improve workforce planning, service delivery and customer outcomes. The transformation required operational readiness, workforce capability alignment, stakeholder engagement and deployment planning across multiple neighbourhoods.",
    challenge:
      "The organisation needed to improve workforce utilisation, preserve continuity of care, manage increasing service complexity and prepare frontline operations for future business transformation. Each neighbourhood had different workforce capacity, service demand, data quality and readiness risks that needed to be understood before deployment.",
    role:
      "Initially as Deployment Consultant, then as Deployment & Adoption Lead, I translated the future operating model into practical operational delivery. I worked with operational leaders, frontline teams and technology stakeholders to prepare neighbourhoods for successful adoption.",
    approach:
      "I used a structured readiness approach to assess each neighbourhood before deployment. This included reviewing operational capability, workforce readiness, customer demand, workforce capacity, service risks, go-live planning and hypercare needs.",
    activities: [
      "Led operational readiness assessments across neighbourhoods",
      "Analysed workforce demand, utilisation and future capacity",
      "Identified capability gaps and supported workforce planning strategies",
      "Partnered with operational leaders to improve workforce optimisation",
      "Validated customer care plans, service information and operational data",
      "Supported deployment planning, go-live readiness and hypercare",
      "Prepared frontline teams for adoption of the new operating model",
    ],
    outcomes: [
      { value: "Reduced", label: "Deployment risk through readiness planning" },
      { value: "Improved", label: "Workforce and service alignment" },
      { value: "Stronger", label: "Operational foundation for future CRM rollout" },
    ],
    technology: [
      "Procura",
      "Salesforce Health Cloud",
      "Miro",
      "Visio",
      "Jira",
      "Confluence",
      "Microsoft Excel",
      "Microsoft Teams",
    ],
    lessons:
      "Successful transformation starts before go-live. By validating workforce capability, customer services and operational data before implementation, the project reduced deployment risk and improved confidence across frontline teams.",
  },

  {
    slug: "procura-to-salesforce-migration",
    title: "Procura to Salesforce Migration",
    category: "Platform Migration Project",
    summary:
      "Prepared customer, workforce and operational data for a phased migration from Procura to Salesforce Health Cloud, supporting business readiness for cutover and future national rollout.",
    year: "2025–2026",
    client: "National Home Health Provider",
    duration: "Phased rollout",
    tags: ["Data Readiness", "Salesforce", "Platform Migration"],
    kpis: [
      { value: "45,000+", label: "Customer records prepared" },
      { value: "First", label: "53 Neighbourhood go-live supported" },
      { value: "National", label: "Rollout framework established" },
    ],
    overview:
      "A national home health provider commenced a phased Salesforce Health Cloud transformation to modernise customer management and care coordination. The first neighbourhood successfully transitioned to Salesforce, with future neighbourhoods progressing through staged deployment.",
    challenge:
      "Migrating from Procura to Salesforce required more than technical data movement. Customer records, service information, employee capability and operational processes needed to be reviewed and corrected before cutover to reduce customer, workforce and service delivery risk.",
    role:
      "As Deployment Consultant, I supported operational readiness, data validation and cutover preparation to ensure neighbourhoods were ready to transition to Salesforce Health Cloud.",
    approach:
      "I used a business-led data readiness approach, validating customer records, care plans, service classifications, employee competencies, workforce capability and operational processes before migration.",
    activities: [
      "Analysed customer and workforce data prior to migration",
      "Identified inconsistencies between customer records and service delivery",
      "Validated employee competencies against required services",
      "Partnered with neighbourhood leaders to resolve data quality issues",
      "Conducted operational readiness assessments",
      "Supported Salesforce cutover planning and business validation",
      "Assisted go-live preparation and hypercare planning",
    ],
    outcomes: [
      { value: "Improved", label: "Customer and workforce data quality" },
      { value: "Reduced", label: "Deployment and cutover risk" },
      { value: "Repeatable", label: "Framework for future neighbourhood migrations" },
    ],
    technology: [
      "Salesforce Health Cloud",
      "Procura",
      "Jira",
      "Confluence",
      "Miro",
      "Visio",
      "Microsoft Excel",
      "Microsoft Teams",
      "SharePoint",
    ],
    lessons:
      "Enterprise CRM migrations are rarely limited by technology. Their success depends on the quality of the business processes, data and operational readiness that sit underneath them.",
  },

  {
    slug: "enterprise-uat-release-readiness",
    title: "Enterprise UAT & Release Readiness",
    category: "UAT Delivery Project",
    summary:
      "Delivered a structured UAT and release readiness package for a complex service enhancement programme, enabling clear validation, evidence capture and stakeholder sign-off.",
    year: "2026",
    client: "Public service programme",
    duration: "6 weeks",
    tags: ["UAT", "Release Readiness", "Stakeholder Alignment"],
    kpis: [
      { value: "100%", label: "Scenario coverage" },
      { value: "1", label: "Validation package" },
      { value: "0", label: "Critical gaps" },
    ],
    overview:
      "A complex service enhancement programme required a structured approach to validate customer journeys, operational readiness and release confidence in a regulated environment.",
    challenge:
      "The programme needed a clear and secure validation package that could be used across business, delivery and support teams without delaying sign-off or compromising sensitive content.",
    role:
      "As Business Analyst, I prepared the validation pack, coordinated scenario reviews and supported readiness for testing and release.",
    approach:
      "I structured the package around user journeys, test scenarios, evidence requirements and governance so that validation could be completed consistently and efficiently.",
    activities: [
      "Defined scope, scenarios and acceptance criteria",
      "Prepared a validation pack for stakeholders",
      "Coordinated testing activities and evidence capture",
      "Supported issue triage and resolution",
      "Facilitated business sign-off and readiness discussions",
    ],
    outcomes: [
      { value: "Improved", label: "Readiness and confidence" },
      { value: "Reduced", label: "Validation ambiguity" },
      { value: "Strengthened", label: "Release sign-off process" },
    ],
    technology: [
      "Contact centre platform",
      "CRM platform",
      "Workflow tools",
      "Collaboration suite",
    ],
    lessons:
      "A well-designed readiness pack improves confidence and decision-making, especially in regulated environments where clarity, control and consistency matter as much as delivery speed.",
  },

  {
    slug: "genesysivr-enhancement",
    title: "Genesys IVR Enhancement",
    category: "Transformation Initiative",
    summary:
      "Supported the redesign of a cloud-based IVR experience, improving customer journeys, frontline context and readiness for future digital service enhancements.",
    year: "2026",
    client: "National Mental Health Support Service",
    duration: "4 months",
    tags: ["Genesys Cloud", "Salesforce CTI", "Operational Readiness"],
    kpis: [
      { value: "44", label: "Production test cases passed" },
      { value: "97", label: "Validation scenarios" },
      { value: "0", label: "Critical production defects" },
    ],
    overview:
      "A national mental health support service modernised its contact centre experience through a redesigned cloud IVR integrated with Salesforce CTI. The change improved customer journeys while giving frontline teams better context before interactions.",
    challenge:
      "The service needed to improve routing, capture optional participant information safely, preserve existing critical support pathways, improve reporting and enable future digital enhancements. Because the environment supported vulnerable customers, every change required rigorous validation.",
    role:
      "As Business Analyst, I partnered with operational leaders, business stakeholders and technical delivery teams across discovery, design, testing, production deployment and hypercare.",
    approach:
      "I used an operational readiness approach that validated each enhancement from both a business and technical perspective before deployment. This included functional design reviews, IVR prompt validation, CTI testing, production smoke testing and business sign-off.",
    activities: [
      "Facilitated cross-functional discovery workshops",
      "Developed user stories and acceptance criteria",
      "Coordinated UAT and production validation scenarios",
      "Produced go-live run sheets and hypercare plans",
      "Validated Salesforce CTI integration",
      "Supported CAB readiness and deployment planning",
      "Managed defect triage and stakeholder communications",
    ],
    outcomes: [
      { value: "0", label: "Critical production defects" },
      { value: "Improved", label: "Customer routing and experience" },
      { value: "Stronger", label: "Operational reporting and frontline context" },
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
      "Delivering technology into a critical healthcare environment reinforced that successful transformation extends well beyond implementing software. Strong testing, stakeholder engagement and readiness planning reduce risk and build confidence before go-live.",
  },

  {
    slug: "customer-workforce-integration",
    title: "Customer & Workforce Integration",
    category: "Acquisition Integration Project",
    summary:
      "Supported the integration of an acquired healthcare provider by migrating customers, employees and operational services into a single national care management platform.",
    year: "2025",
    client: "National Home Health Provider",
    duration: "2 months",
    tags: ["Acquisition Integration", "Customer Migration", "Workforce Integration"],
    kpis: [
      { value: "40+", label: "Neighbourhoods supported" },
      { value: "2", label: "Organisations unified" },
      { value: "1", label: "Operational platform" },
    ],
    overview:
      "Following an acquisition, customer, employee and service delivery data needed to be migrated from one Procura environment into a national care management platform while maintaining continuity of care.",
    challenge:
      "The project required two operating models, workforce structures, customer records, service schedules and business practices to be aligned without disrupting customer services or frontline operations.",
    role:
      "As Deployment Consultant, I acted as the operational lead between business and technology teams, ensuring neighbourhoods were prepared for migration and adoption.",
    approach:
      "The migration was delivered through a structured deployment methodology focused on readiness, customer continuity, workforce adoption and operational risk management.",
    activities: [
      "Coordinated operational readiness across multiple neighbourhoods",
      "Validated customer and employee migration data",
      "Reviewed future customer schedules before migration",
      "Identified operational risks before deployment",
      "Facilitated stakeholder workshops",
      "Supported cutover planning and execution",
      "Managed go-live communications and hypercare support",
    ],
    outcomes: [
      { value: "Maintained", label: "Continuity of customer care" },
      { value: "Improved", label: "Operational data confidence" },
      { value: "Unified", label: "Workforce and customer records" },
    ],
    technology: [
      "Procura",
      "Microsoft Excel",
      "Microsoft Teams",
      "SharePoint",
      "Outlook",
      "Jira",
      "Confluence",
    ],
    lessons:
      "Successfully integrating an acquired organisation requires more than migrating data. The greatest challenges are operational, requiring strong stakeholder engagement, disciplined planning and a deep understanding of frontline service delivery.",
  },

  {
    slug: "vendor-eligibility-restoration",
    title: "Vendor Eligibility Restoration",
    category: "Operational Improvement Initiative",
    summary:
      "Restored access to a critical eligibility checking service by investigating root cause, coordinating vendor engagement and improving operational governance.",
    year: "2026",
    client: "Community Healthcare Provider",
    duration: "3 months",
    tags: ["Process Analysis", "Vendor Management", "Operational Governance"],
    kpis: [
      { value: "1", label: "Critical service restored" },
      { value: "$0", label: "Additional licensing cost" },
      { value: "100%", label: "Eligibility capability restored" },
    ],
    overview:
      "Operational teams relied on an external eligibility checking portal to verify customer eligibility for healthcare services. When access was lost, teams reverted to manual phone-based checks, increasing effort and operational risk.",
    challenge:
      "The issue required more than technical resolution. It involved understanding historical system ownership, clarifying facility registration, coordinating internal and external stakeholders, reviewing procedures and identifying governance gaps.",
    role:
      "As Business Analyst, I led the investigation, stakeholder coordination and business process review required to restore the service.",
    approach:
      "I used a structured discovery and stakeholder engagement approach to identify root cause, engage the vendor, validate operational impacts, support restored functionality and update procedures.",
    activities: [
      "Investigated service access failure and identified root cause",
      "Coordinated vendor, technology and operational stakeholder discussions",
      "Supported facility registration and access restoration",
      "Negotiated restoration of service without additional licensing cost",
      "Reviewed and updated operational procedures",
      "Identified undocumented ownership and governance gaps",
      "Supported operational testing and transition back to online checking",
    ],
    outcomes: [
      { value: "Restored", label: "Critical operational capability" },
      { value: "Reduced", label: "Manual eligibility checking effort" },
      { value: "Improved", label: "Governance and procedure visibility" },
    ],
    technology: [
      "ServiceNow",
      "SharePoint",
      "Microsoft Teams",
      "Outlook",
    ],
    lessons:
      "Restoring a business service often extends beyond resolving a technical issue. This work reinforced the importance of accurate operational documentation, clear system ownership and preserved business knowledge through organisational change.",
  },

  {
    slug: "business-analyst-community-of-practice",
    title: "Business Analyst Community of Practice",
    category: "Business Improvement Initiative",
    summary:
      "Established a Business Analyst Community of Practice to improve collaboration, standardise ways of working and create a central knowledge hub for reusable BA resources.",
    year: "2026",
    client: "Enterprise Technology Function",
    duration: "6 months",
    tags: ["Community of Practice", "Capability Uplift", "Knowledge Management"],
    kpis: [
      { value: "1", label: "BA community established" },
      { value: "100%", label: "Centralised knowledge hub" },
      { value: "Monthly", label: "Capability uplift sessions" },
    ],
    overview:
      "Business Analysts were working across multiple delivery squads with limited opportunities to collaborate, share lessons learnt or standardise artefacts. The Community of Practice created a practical forum for capability development, knowledge sharing and continuous improvement.",
    challenge:
      "Without a central community, knowledge remained within individual projects, templates were duplicated, documentation standards varied and new Business Analysts had fewer structured onboarding resources.",
    role:
      "As Business Analyst, I designed, established and facilitated the Business Analyst Community of Practice.",
    approach:
      "I focused on creating a practical and collaborative environment rather than another meeting series. The community was built around knowledge sharing, capability development, standardisation and continuous improvement.",
    activities: [
      "Established the Community of Practice framework and roadmap",
      "Designed and maintained an interactive Miro collaboration hub",
      "Facilitated monthly Community of Practice sessions",
      "Developed reusable templates, guides and BA resources",
      "Coordinated guest speakers and knowledge sharing sessions",
      "Created a central repository for business analyst knowledge",
      "Encouraged cross-squad collaboration and lessons learnt sharing",
    ],
    outcomes: [
      { value: "Improved", label: "Collaboration across delivery teams" },
      { value: "Reduced", label: "Duplication through reusable artefacts" },
      { value: "Stronger", label: "Visibility of BA capability" },
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
      "A successful Community of Practice is built on participation, not documentation alone. By creating an engaging collaboration space and regular knowledge sharing rhythm, the community became a living knowledge ecosystem.",
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
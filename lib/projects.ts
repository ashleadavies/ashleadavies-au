export type Project = {
  slug: string
  title: string
  category: string
  summary: string
  year: string
  client: string
  duration: string

  tags: string[]

  businessStreams: string[]
  stakeholderGroups: string[]

  kpis: {
    value: string
    label: string
  }[]

  overview: string
  challenge: string
  role: string
  approach: string
  activities: string[]

  outcomes: {
    value: string
    label: string
  }[]

  publishedOutcomes?: {
    value: string
    label: string
  }[]

  publishedOutcomesContext?: string
  publishedOutcomesSource?: string
  publishedOutcomesSourceUrl?: string

  technology: string[]
  governance: string[]
  lessons: string
}

export const projects: Project[] = [
  // =========================================================
  // 1. TEAM-BASED CARE OPERATING MODEL
  // =========================================================
  {
    slug: "team-based-care-operating-model",

    title: "Team-Based Care Operating Model",

    category: "Operating Model Transformation",

    summary:
      "Led deployment, workforce readiness, training and frontline adoption for a Team-Based Care operating model across 26 neighbourhoods supporting 33,000+ customers and 2,600+ home care workers, with workforce optimisation processes operating across approximately 12,000 scheduling files each fortnight.",

    year: "2024",

    client: "National Home & Community Healthcare Provider",

    duration: "Enterprise rollout",

    tags: [
      "Operating Model Transformation",
      "Operational Readiness",
      "Workforce Optimisation",
      "Deployment & Adoption",
      "Change Adoption",
      "Governance",
      "Cross-Functional Leadership",
    ],

    businessStreams: [
      "Home & Community Care",
      "Aged Care",
      "Home Care Operations",
      "Workforce & Rostering",
      "Service Coordination",
      "Operational Leadership",
      "Technology",
      "Transformation",
      "Change & Adoption",
      "Training",
      "Data & Workforce Optimisation",
    ],

    stakeholderGroups: [
      "Program Leadership",
      "Change Management",
      "Technology",
      "Operational Leaders",
      "Neighbourhood / Branch Leaders",
      "Deployment Analysts",
      "Deployment Consultants",
      "Trainers",
      "Workforce Optimisation Teams",
      "Service Coordinators",
      "Home Care Workers",
      "Communications",
      "Data Specialists",
      "Customers",
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
        value: "2,600+",
        label: "Home care workers supported",
      },
      {
        value: "~12,000",
        label: "Scheduling files processed per fortnight",
      },
    ],

    overview:
      "Facing growing demand for home and community care, workforce constraints and increasingly complex rostering requirements, a national healthcare provider introduced a Team-Based Care operating model supported by Biarri workforce optimisation technology. The transformation moved operations beyond traditional Procura-based and manual rostering approaches toward more data-driven workforce planning, service allocation and scheduling. Deployment required coordinated operational, workforce, data, communication, training and change readiness across 26 neighbourhoods supporting more than 33,000 customers and 2,600 home care workers.",

    challenge:
      "Each neighbourhood had different workforce capacity, customer demand, service requirements, employee availability, contracted hours, workforce capability, travel constraints and data quality risks. Readiness also needed to account for enterprise agreements and awards, customer service windows, continuity of care and familiar care relationships. The operating model and workforce rules also needed to remain compatible with the organisation's longer-term Salesforce Health Cloud transformation.",

    role:
      "Initially as Deployment Consultant and subsequently as Deployment & Adoption Lead, I led the deployment and training stream comprising Deployment Analysts, Deployment Consultants and Trainers. Reporting into program leadership, I worked across change, technology, workforce optimisation, communications, data and operational teams to coordinate neighbourhood readiness, workforce preparation, training, deployment, go-live and frontline adoption.",

    approach:
      "I led a structured readiness and adoption approach that considered customer demand, workforce capacity, employee capability, enterprise agreements and awards, contracted hours, data quality, competing operational change and implementation risk. Readiness planning was grounded in continuity of care and practical frontline operations while supporting alignment with the future Salesforce Health Cloud environment.",

    activities: [
      "Led the deployment and training stream supporting Team-Based Care readiness and adoption",
      "Directed neighbourhood readiness, workforce preparation, training, go-live and hypercare",
      "Coordinated Deployment Analysts, Deployment Consultants and Trainers across rollout activities",
      "Led operational readiness assessments across 26 neighbourhoods",
      "Oversaw analysis of workforce demand, utilisation, capability and capacity",
      "Assessed enterprise agreement, award, contracted-hour and employee availability constraints",
      "Coordinated identification and remediation of workforce, capability, service and data gaps",
      "Worked with operational leaders to prepare neighbourhoods for workforce optimisation",
      "Oversaw validation of customer care plans and service information",
      "Supported preparation for optimised roster and schedule generation through Biarri",
      "Supported workforce optimisation processes operating across approximately 12,000 scheduling files each fortnight",
      "Monitored adoption, operational issues and implementation risks",
      "Coordinated targeted remediation during deployment and hypercare",
      "Supported alignment with the future Salesforce Health Cloud environment",
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
      {
        value: "Maintained",
        label: "Continuity of customer care through change",
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
      "Independent program-level results reported by Biarri following implementation of its workforce optimisation technology with Australian Unity. These outcomes reflect the broader transformation program and are shown separately from my individual contribution.",

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
    ],

    governance: [
      "Operational Readiness Governance",
      "Workforce Compliance",
      "Risk & Issue Management",
      "Deployment Readiness",
      "Change & Adoption Governance",
      "Service Continuity",
      "Data Validation",
    ],

    lessons:
      "Successful workforce transformation requires more than optimisation technology. The operating model needed to account for workforce agreements, customer needs, employee capability, data quality, operational capacity and future technology architecture. Leading a major deployment stream reinforced the importance of clear ownership, structured governance and practical readiness planning when translating a new operating model into sustainable frontline practice.",
  },

  // =========================================================
  // 2. ENTERPRISE HOME HEALTH CRM TRANSFORMATION
  // =========================================================
  {
    slug: "home-health-salesforce-transformation",

    title: "Enterprise Home Health CRM Transformation",

    category: "Healthcare Transformation & Deployment",

    summary:
      "Delivered operational and data readiness for a phased Salesforce Health Cloud transformation spanning Home Health, Community Nursing and Allied Healthcare, encompassing 53+ neighbourhood deployments, 45,000+ customer records and 4,000+ employees.",

    year: "2025–2026",

    client: "National Home & Community Healthcare Provider",

    duration: "Phased national rollout",

    tags: [
      "Healthcare Transformation",
      "Operational Readiness",
      "Salesforce Health Cloud",
      "Data Readiness",
      "Deployment & Adoption",
      "Governance",
    ],

    businessStreams: [
      "Home & Community Care",
      "Aged Care",
      "Community Nursing",
      "Allied Healthcare",
      "Customer Operations",
      "Workforce Operations",
      "Technology",
      "Transformation",
      "Data",
      "Service Delivery",
    ],

    stakeholderGroups: [
      "Customers",
      "Home Care Operations",
      "Community Nursing Teams",
      "Allied Health Teams",
      "Service Coordinators",
      "Neighbourhood Leaders",
      "Frontline Employees",
      "Deployment Teams",
      "Technology Teams",
      "Salesforce Delivery Teams",
      "Data & Migration Teams",
      "Project & Program Leadership",
      "External Healthcare Providers",
    ],

    kpis: [
      {
        value: "53+",
        label: "Neighbourhood deployments supported",
      },
      {
        value: "45,000+",
        label: "Customer records prepared",
      },
      {
        value: "4,000+",
        label: "Employees across service delivery",
      },
    ],

    overview:
      "A national home and community healthcare provider commenced a phased transformation to Salesforce Health Cloud to modernise customer management, care coordination and service delivery. The program spanned Home Health, Community Nursing and Allied Healthcare, supporting more than 4,000 employees as well as external healthcare partners and providers. Successful deployment required customer, workforce, service and operational information to be validated and aligned before each neighbourhood transitioned.",

    challenge:
      "The transformation extended well beyond technology migration. Customer records, care requirements, service information, employee capability and operational processes were distributed across multiple enterprise platforms. Unresolved data or operational gaps had the potential to affect services, workforce readiness and continuity of care after go-live.",

    role:
      "As Deployment Consultant, I worked between frontline operations, neighbourhood leadership, transformation stakeholders, data teams and technology delivery teams to coordinate operational readiness. My responsibilities included customer and workforce data validation, service and workforce alignment, issue resolution, cutover preparation, business validation, go-live support and post-deployment remediation.",

    approach:
      "I used a service-delivery-led readiness approach that connected customer and service requirements with workforce capability, employee information and operational processes. Data and readiness issues were identified early, assigned to accountable stakeholders and tracked through remediation before deployment.",

    activities: [
      "Analysed and validated customer, workforce and service delivery data",
      "Identified inconsistencies between customer records, service requirements and operational delivery",
      "Validated employee competencies and workforce capability against customer service requirements",
      "Worked with neighbourhood leaders to resolve data and readiness issues",
      "Supported readiness across internal workforce and external provider dependencies",
      "Conducted operational readiness assessments",
      "Supported Salesforce Health Cloud cutover planning and business validation",
      "Coordinated issue identification, escalation and resolution",
      "Supported neighbourhood go-live preparation and hypercare",
      "Contributed to repeatable readiness processes for later deployments",
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
      {
        value: "Protected",
        label: "Continuity of service during deployment",
      },
    ],

    technology: [
      "Salesforce Health Cloud",
      "Procura (AlayaCare)",
      "SAP SuccessFactors Employee Central",
      "Jira",
      "Confluence",
      "Miro",
      "Visio",
      "Microsoft Excel",
      "Microsoft Teams",
      "SharePoint",
    ],

    governance: [
      "Operational Readiness",
      "Data Quality & Validation",
      "Risk & Issue Management",
      "Cutover Governance",
      "Go-Live Readiness",
      "Service Continuity",
      "Post-Deployment Remediation",
    ],

    lessons:
      "Large-scale healthcare transformation is not simply a technology change. Successful deployment depends on aligning customer and service requirements with workforce capability, operational processes, reliable data and effective readiness governance so healthcare delivery can continue safely through change.",
  },

  // =========================================================
  // 3. CUSTOMER & WORKFORCE INTEGRATION
  // =========================================================
  {
    slug: "customer-workforce-integration",

    title: "Customer & Workforce Integration",

    category: "Acquisition & Operational Integration",

    summary:
      "Supported integration of an acquired healthcare provider across 40+ neighbourhoods, coordinating customer, workforce and service migration into a national care management environment while maintaining continuity of care.",

    year: "2025",

    client: "National Home & Community Healthcare Provider",

    duration: "2 months",

    tags: [
      "Acquisition Integration",
      "Operational Readiness",
      "Customer Migration",
      "Workforce Integration",
      "Deployment",
      "Data Validation",
    ],

    businessStreams: [
      "Home & Community Care",
      "Aged Care",
      "Acquired Healthcare Operations",
      "Customer Operations",
      "Workforce Operations",
      "Scheduling",
      "Technology",
      "Data Migration",
      "Transformation",
    ],

    stakeholderGroups: [
      "Acquired Business Employees",
      "Existing Home Health Operations",
      "Customers",
      "Neighbourhood Leaders",
      "Service Coordinators",
      "Frontline Workforce",
      "Technology Teams",
      "Data & Migration Teams",
      "Project Leadership",
      "Operational Leadership",
    ],

    kpis: [
      {
        value: "40+",
        label: "Neighbourhoods supported",
      },
      {
        value: "2",
        label: "Healthcare operations integrated",
      },
      {
        value: "1",
        label: "National care management environment",
      },
    ],

    overview:
      "Following an acquisition, customer, employee and service delivery information needed to transition from a legacy Procura environment into the organisation's national care management platform. Integration required alignment of customer records, workforce information, schedules, service delivery practices and operational processes without disrupting continuity of care.",

    challenge:
      "Different operating models, workforce structures, customer records, service schedules and business practices needed to be aligned within a compressed delivery timeframe. Migration activities had to be completed without creating avoidable customer, workforce or operational risk.",

    role:
      "As Deployment Consultant, I acted as an operational link between business and technology teams, coordinating readiness activities and helping prepare neighbourhoods for migration, cutover, go-live and adoption.",

    approach:
      "The integration was delivered through a structured deployment methodology focused on operational readiness, customer continuity, workforce adoption, data validation and risk management. I worked with neighbourhood leaders and project stakeholders to identify issues before cutover and coordinate resolution through go-live and hypercare.",

    activities: [
      "Coordinated operational readiness across more than 40 neighbourhoods",
      "Validated customer and employee migration data",
      "Reviewed future customer schedules before migration",
      "Identified operational risks and dependencies before deployment",
      "Facilitated readiness discussions with operational stakeholders",
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
        label: "Customer and workforce information",
      },
    ],

    technology: [
      "Procura (AlayaCare)",
      "Microsoft Excel",
      "Microsoft Teams",
      "SharePoint",
      "Jira",
      "Confluence",
    ],

    governance: [
      "Acquisition Readiness",
      "Data Validation",
      "Migration Governance",
      "Operational Risk Management",
      "Cutover Readiness",
      "Service Continuity",
      "Hypercare & Issue Management",
    ],

    lessons:
      "Successfully integrating an acquired healthcare operation requires more than moving data between systems. Early validation of customer schedules, workforce information and operational requirements helps identify risks before cutover and protects continuity of care.",
  },

  // =========================================================
  // 4. GENESYS IVR ENHANCEMENT
  // =========================================================
  {
    slug: "genesys-ivr-enhancement",

    title: "Genesys IVR Enhancement",

    category: "Digital Mental Health Transformation",

    summary:
      "Delivered end-to-end business analysis and operational readiness for a Genesys Cloud IVR transformation delivered with a national mental health service partner, supporting 100+ clinicians and 3,000+ customers and achieving zero critical production defects.",

    year: "2026",

    client: "National Mental Health Support Service Partnership",

    duration: "4 months",

    tags: [
      "Mental Health",
      "Business Analysis",
      "Genesys Cloud",
      "Salesforce CTI",
      "UAT",
      "Release Readiness",
      "Operational Readiness",
      "Clinical Service Delivery",
    ],

    businessStreams: [
      "Mental Health Support",
      "Digital Health",
      "Contact Centre",
      "Counselling Operations",
      "Customer Experience",
      "Technology",
      "CRM",
      "Reporting & Analytics",
      "Clinical Governance",
    ],

    stakeholderGroups: [
      "Mental Health Service Partner",
      "Counsellors / Clinicians",
      "Contact Centre Operations",
      "Clinical Stakeholders",
      "Australian Unity / Remedy Healthcare",
      "Genesys Consultants",
      "Salesforce / CRM Stakeholders",
      "Technology Delivery Teams",
      "Business Analysts",
      "Project Leadership",
      "Reporting & Analytics Teams",
      "Change & Communications",
    ],

    kpis: [
      {
        value: "100+",
        label: "Clinicians supported",
      },
      {
        value: "3,000+",
        label: "Customers supported",
      },
      {
        value: "97",
        label: "Validation scenarios executed",
      },
      {
        value: "44",
        label: "Production test cases passed",
      },
      {
        value: "0",
        label: "Critical production defects",
      },
    ],

    overview:
      "A national mental health support service modernised its contact centre experience through a redesigned Genesys Cloud IVR integrated with Salesforce CTI. The enhancement supported adult and under-16 caller journeys, improved routing and participant information capture, and provided counsellors with relevant context before engagement.",

    challenge:
      "The service needed to improve routing and participant experience while safely capturing optional information, protecting existing critical support pathways and maintaining reliable reporting. Because the service supported vulnerable customers, changes required rigorous business, clinical, technical and production validation.",

    role:
      "As the primary Business Analyst, I worked across the mental health service partner, internal operational and clinical stakeholders, technology teams and Genesys specialists through discovery, requirements, design validation, UAT, production validation, deployment readiness and hypercare.",

    approach:
      "I used an end-to-end business analysis and operational readiness approach, validating each enhancement against participant journeys, clinical requirements, routing rules, Salesforce CTI behaviour, reporting requirements and production readiness before deployment.",

    activities: [
      "Facilitated cross-functional discovery and requirements workshops",
      "Developed and refined requirements, user stories and acceptance criteria",
      "Mapped adult and under-16 caller journeys",
      "Validated routing and participant information capture requirements",
      "Coordinated UAT and production validation",
      "Validated Salesforce CTI integration",
      "Managed defect triage and stakeholder communications",
      "Prepared go-live run sheets and hypercare activities",
      "Supported CAB and release readiness",
      "Completed production smoke testing",
      "Supported post-release hypercare and continuous improvement",
    ],

    outcomes: [
      {
        value: "0",
        label: "Critical production defects",
      },
      {
        value: "Improved",
        label: "Caller routing and participant experience",
      },
      {
        value: "Stronger",
        label: "Counsellor context before engagement",
      },
      {
        value: "Improved",
        label: "Operational reporting and journey visibility",
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
      "Power BI",
      "Microsoft Teams",
    ],

    governance: [
      "UAT Governance",
      "Clinical & Operational Validation",
      "Defect Management",
      "Release Readiness",
      "CAB Readiness",
      "Production Validation",
      "Service Continuity",
      "Hypercare",
    ],

    lessons:
      "Delivering technology into a mental health environment reinforced that successful transformation extends beyond software implementation. Strong requirements, clinical and operational validation, disciplined testing, stakeholder engagement and production readiness are essential when changes affect vulnerable customers and frontline clinicians.",
  },

  // =========================================================
  // 5. WEBCHAT TRANSFORMATION
  // =========================================================
  {
    slug: "webchat-transformation",

    title: "Webchat Transformation",

    category: "Digital Mental Health & Customer Experience",

    summary:
      "Led business analysis for transformation of a digital mental health webchat service supporting 100+ clinicians and 3,000+ customers, progressing from investigation and current-state remediation through to a BRD and future-state requirements subsequently used to support implementation of a new Genesys Web Messaging solution integrated with Salesforce CRM.",

    year: "2026",

    client: "National Mental Health Support Service Partnership",

    duration: "Discovery & requirements phase",

    tags: [
      "Mental Health",
      "Digital Customer Experience",
      "Business Analysis",
      "Genesys Cloud",
      "Salesforce CRM",
      "Salesforce Omni-Channel",
      "BRD",
      "Requirements Analysis",
      "Vendor & Partner Engagement",
    ],

    businessStreams: [
      "Mental Health Support",
      "Digital Health",
      "Webchat",
      "Contact Centre",
      "Counselling Operations",
      "Customer Experience",
      "Salesforce CRM",
      "Digital Channels",
      "Technology",
      "Reporting & Analytics",
    ],

    stakeholderGroups: [
      "Mental Health Service Partner",
      "Counsellors / Clinicians",
      "Contact Centre Operations",
      "Australian Unity / Remedy Healthcare",
      "Genesys Consultants",
      "Salesforce / CRM Stakeholders",
      "Digital Channel Teams",
      "Technology Teams",
      "Business Analysts",
      "Operational Leaders",
      "Reporting & Analytics Teams",
      "Website / Digital Platform Stakeholders",
    ],

    kpis: [
      {
        value: "100+",
        label: "Clinicians within supported service",
      },
      {
        value: "3,000+",
        label: "Customers within supported service",
      },
      {
        value: "1",
        label: "BRD establishing future-state requirements",
      },
    ],

    overview:
      "A national mental health support service relied on webchat as a key digital access channel. The existing capability faced both a future continuity risk due to retirement of legacy webchat technology and operational issues affecting session management, routing and agent efficiency. The future solution needed to preserve customer access through the partner website while maintaining Salesforce as the CRM system of record.",

    challenge:
      "Webchat interactions could remain active or queued after participants had left the experience, creating inefficient agent activity and affecting contact centre productivity and service measures. Remediation was explored within the existing environment; however, the available solution did not fully meet the operational requirements. In parallel, retirement of the legacy capability created a need to define a sustainable replacement that could support intake, routing, counsellor context, CRM integration, reporting and future digital-channel enhancements.",

    role:
      "As Business Analyst, I investigated the current-state problem, worked with internal stakeholders, vendors and the mental health service partner to pursue remediation, and developed the Business Requirements Document when the existing solution could not fully satisfy operational needs. I then presented the problem, customer and agent impacts, requirements and future-state needs directly to Genesys consultants. The BRD was subsequently used to support implementation of the new Genesys Web Messaging solution following my departure.",

    approach:
      "I followed a problem-led approach rather than beginning with a predetermined technology solution. This involved understanding current session-management and routing behaviour, assessing remediation options, defining service continuity and customer experience needs, documenting functional and non-functional requirements, identifying system dependencies and working with Genesys specialists to validate the future-state direction.",

    activities: [
      "Investigated current-state webchat session-management and routing behaviour",
      "Mapped participant and counsellor impacts",
      "Worked with technology and vendor stakeholders to pursue remediation in the existing environment",
      "Documented business problems, risks and operational impacts",
      "Developed the Business Requirements Document",
      "Defined high-level business and functional requirements",
      "Defined participant intake and counsellor context requirements",
      "Defined routing and contact centre requirements",
      "Defined Salesforce CRM integration requirements",
      "Defined reporting and analytics requirements",
      "Defined privacy, security, availability, performance and usability requirements",
      "Identified dependencies across the website, web messaging, contact centre, CRM and reporting environments",
      "Presented requirements directly to Genesys consultants",
      "Supported future-state design for Genesys Web Messaging integrated with Salesforce CRM",
    ],

    outcomes: [
      {
        value: "Defined",
        label: "Future-state business and functional requirements",
      },
      {
        value: "Protected",
        label: "Digital service continuity",
      },
      {
        value: "Improved",
        label: "Foundation for participant and counsellor experience",
      },
      {
        value: "Enabled",
        label: "Genesys Web Messaging implementation",
      },
    ],

    technology: [
      "Genesys Cloud Web Messaging",
      "Salesforce CRM",
      "Salesforce Omni-Channel",
      "Salesforce Web Messaging",
      "Jira",
      "Confluence",
      "Miro",
      "Visio",
      "Microsoft Excel",
      "Microsoft Teams",
    ],

    governance: [
      "Business Requirements Governance",
      "Requirements Traceability",
      "Business Rules & Constraints",
      "Privacy Requirements",
      "Security Requirements",
      "Availability & Performance Requirements",
      "Technology Dependencies",
      "Service Continuity",
      "Vendor & Partner Engagement",
    ],

    lessons:
      "The initiative reinforced the importance of separating the business problem from the technology solution. Investigating remediation first, then clearly documenting unmet requirements and engaging solution specialists, created a defensible pathway from operational problem through to future-state implementation.",
  },

  // =========================================================
  // 6. ENTERPRISE UAT & RELEASE READINESS
  // =========================================================
  {
    slug: "enterprise-uat-release-readiness",

    title: "Enterprise UAT & Release Readiness",

    category: "Business Analysis, Governance & UAT",

    summary:
      "Designed a live Excel-based UAT framework that enabled internal employees, external vendors and service partners without Jira access to execute testing, capture evidence and participate in real-time defect triage while maintaining Jira-based governance and avoiding testing-related release delays.",

    year: "2026",

    client: "Enterprise Healthcare Transformation",

    duration: "6 weeks",

    tags: [
      "User Acceptance Testing",
      "Release Governance",
      "Microsoft Excel",
      "Jira",
      "Vendor & Partner Testing",
      "Defect Triage",
      "Process Improvement",
    ],

    businessStreams: [
      "Technology",
      "Business Analysis",
      "Healthcare Operations",
      "Project Delivery",
      "External Partners",
      "Vendor Delivery",
      "Testing",
      "Release Management",
    ],

    stakeholderGroups: [
      "Internal Business Testers",
      "External Service Partners",
      "Technology Vendors",
      "Business Analysts",
      "Project Managers",
      "Developers / Technical Teams",
      "Operational SMEs",
      "Test & Release Stakeholders",
      "Defect Owners",
    ],

    kpis: [
      {
        value: "Live",
        label: "Cross-organisational testing visibility",
      },
      {
        value: "Real-time",
        label: "Defect identification and triage",
      },
      {
        value: "0",
        label: "Testing-related release delays",
      },
      {
        value: "1",
        label: "Centralised collaborative UAT framework",
      },
    ],

    overview:
      "An enterprise healthcare initiative required coordinated UAT across internal employees, external vendors and service partners. Jira remained the internal system for formal test and defect governance, but not every participant had access. Without an accessible shared process, testing risked becoming fragmented and defects could be delayed between organisations.",

    challenge:
      "The challenge was not simply tool access. Test execution, evidence, status, ownership and defect triage needed to be visible across multiple organisations while maintaining alignment with internal Jira governance. Delayed communication could have created testing bottlenecks and affected release readiness.",

    role:
      "As Business Analyst, I designed and managed a live Excel-based UAT framework that created a common testing environment across access boundaries. I coordinated testing, maintained visibility of results and evidence, supported live issue triage and transferred relevant defects and outcomes into Jira for formal management and release governance.",

    approach:
      "The framework was designed around live business scenarios, test steps, expected outcomes, actual results, evidence, ownership, status and defect triage. This allowed all testing parties to work from a shared source while Jira remained the formal internal defect and release management platform.",

    activities: [
      "Designed a live Excel-based UAT framework",
      "Defined scenarios, test cases and acceptance criteria",
      "Created structured fields for execution, evidence, status and ownership",
      "Enabled testing across internal employees, vendors and external partners",
      "Maintained live visibility of test results",
      "Supported real-time issue identification and defect triage",
      "Assigned ownership and monitored outstanding actions",
      "Transferred relevant defects and outcomes into Jira",
      "Maintained alignment between external testing activity and internal governance",
      "Supported business sign-off and release readiness",
    ],

    outcomes: [
      {
        value: "Enabled",
        label: "Testing across organisational and Jira access boundaries",
      },
      {
        value: "Real-time",
        label: "Visibility and defect triage",
      },
      {
        value: "Maintained",
        label: "Jira-based testing and release governance",
      },
      {
        value: "Avoided",
        label: "Testing-related release delays",
      },
    ],

    technology: [
      "Microsoft Excel",
      "Jira",
      "Microsoft Teams",
    ],

    governance: [
      "UAT Governance",
      "Test Traceability",
      "Evidence Management",
      "Defect Governance",
      "Ownership & Accountability",
      "Release Readiness",
      "Business Sign-Off",
    ],

    lessons:
      "Effective UAT governance needs to work for every participant, not just those with access to the formal testing platform. Creating a live collaborative layer enabled cross-organisational participation and rapid triage while preserving Jira as the formal internal record.",
  },

  // =========================================================
  // 7. VENDOR ELIGIBILITY RESTORATION
  // =========================================================
  {
    slug: "vendor-eligibility-restoration",

    title: "Vendor Eligibility Restoration",

    category: "Operational Improvement & Service Restoration",

    summary:
      "Led investigation and resolution of a critical healthcare eligibility access issue affecting Hospital-in-the-Home service delivery, coordinating operational, technology and vendor stakeholders to restore full capability without additional licensing cost and strengthen ongoing governance.",

    year: "2026",

    client: "Hospital-in-the-Home Service Partnership",

    duration: "3 months",

    tags: [
      "Hospital-in-the-Home",
      "Root Cause Analysis",
      "Vendor Management",
      "Operational Governance",
      "Service Restoration",
      "Process Improvement",
    ],

    businessStreams: [
      "Hospital-in-the-Home",
      "Healthcare Operations",
      "Customer Eligibility",
      "External Healthcare Partnerships",
      "Technology",
      "Vendor Management",
      "Service Operations",
      "Operational Governance",
    ],

    stakeholderGroups: [
      "Hospital-in-the-Home Operations",
      "Healthcare Service Partner",
      "Operational Teams",
      "Technology Teams",
      "External Platform Vendor",
      "Business Analysts",
      "Service Owners",
      "Operational Leadership",
    ],

    kpis: [
      {
        value: "100%",
        label: "Eligibility capability restored",
      },
      {
        value: "$0",
        label: "Additional licensing cost",
      },
      {
        value: "1",
        label: "Critical healthcare service restored",
      },
    ],

    overview:
      "Operational teams relied on an external eligibility portal to verify customer eligibility for Hospital-in-the-Home services. When access was lost, teams reverted to manual phone-based checks, increasing processing effort and creating operational and service-continuity risk.",

    challenge:
      "The issue required more than a technical fix. Historical system ownership and registration arrangements were unclear, supporting documentation was limited and several operational, technology, service-partner and vendor stakeholders needed to be engaged to identify the cause and restore capability.",

    role:
      "As Business Analyst, I led the investigation, root-cause analysis, stakeholder coordination and business process review needed to restore the service. I traced historical ownership and registration arrangements, coordinated internal and external parties, supported access restoration and strengthened visibility of ongoing operational ownership.",

    approach:
      "I used structured discovery and root-cause analysis to understand the failure, validate operational impacts, trace historical arrangements and coordinate the parties required to restore the capability. The work also examined process ownership and documentation so the restored solution had clearer ongoing governance.",

    activities: [
      "Investigated the service-access failure",
      "Identified root cause across registration and ownership arrangements",
      "Reviewed historical service and vendor processes",
      "Coordinated operational, technology and vendor stakeholders",
      "Supported facility registration and access restoration",
      "Negotiated restoration without additional licensing cost",
      "Reviewed and updated supporting operational procedures",
      "Identified undocumented ownership and governance gaps",
      "Supported operational testing",
      "Supported transition back from manual to online eligibility checking",
    ],

    outcomes: [
      {
        value: "Restored",
        label: "Critical Hospital-in-the-Home eligibility capability",
      },
      {
        value: "$0",
        label: "Additional licensing cost",
      },
      {
        value: "Reduced",
        label: "Manual eligibility checking effort",
      },
      {
        value: "Improved",
        label: "Ownership, procedures and governance visibility",
      },
    ],

    technology: [
      "External Eligibility Platform",
      "ServiceNow",
      "SharePoint",
      "Microsoft Teams",
      "Outlook",
    ],

    governance: [
      "Service Ownership",
      "Vendor & Partner Coordination",
      "Operational Risk",
      "Process Ownership & Governance",
      "Access & Registration Controls",
      "Procedure Management",
      "Service Continuity",
    ],

    lessons:
  "Operational service failures are not always technology failures. This initiative reinforced the importance of clear ownership, accurate procedures, preserved organisational knowledge and effective partner and vendor coordination when maintaining critical healthcare services.",
  },

  // =========================================================
  // 8. BUSINESS ANALYST COMMUNITY OF PRACTICE
  // =========================================================
  {
    slug: "business-analyst-community-of-practice",

    title: "Business Analyst Community of Practice",

    category: "Business Analysis Capability & Governance",

    summary:
      "Designed and established a Business Analyst Community of Practice to strengthen collaboration, standardise ways of working, improve knowledge sharing and create a central hub for reusable BA capability across technology delivery teams.",

    year: "2026",

    client: "Enterprise Technology Function",

    duration: "6 months",

    tags: [
      "Business Analysis",
      "Community of Practice",
      "Capability Uplift",
      "Knowledge Management",
      "Governance",
      "Continuous Improvement",
      "AI-Enabled Ways of Working",
    ],

    businessStreams: [
      "Technology",
      "Business Analysis",
      "Enterprise Delivery",
      "Transformation",
      "Capability Development",
      "Knowledge Management",
      "Continuous Improvement",
      "AI Capability",
    ],

    stakeholderGroups: [
      "Business Analysts",
      "Senior Business Analysts",
      "Delivery Squads",
      "Project Teams",
      "Technology Leaders",
      "Subject Matter Experts",
      "Guest Speakers",
      "Transformation Stakeholders",
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
        label: "Capability and knowledge-sharing sessions",
      },
    ],

    overview:
     "Business Analysts were working across multiple delivery squads with limited structured opportunities to collaborate, share lessons learnt, explore emerging tools or standardise artefacts. The Community of Practice created a practical forum for capability development, reusable resources, peer learning, AI-enabled ways of working and continuous improvement.",
    challenge:
      "Without a central BA community, knowledge frequently remained within individual projects or squads. Artefacts were duplicated, documentation approaches varied and there was limited visibility of reusable practices or collective BA capability.",

    role:
      "As Business Analyst, I independently designed, established and facilitated the Business Analyst Community of Practice, creating its framework, collaboration environment, knowledge resources and ongoing engagement rhythm.",

    approach:
      "I focused on creating a practical community rather than another meeting series. The model centred on knowledge sharing, capability development, reusable artefacts, standardisation, peer learning, emerging technology and AI-enabled ways of working, and continuous improvement across delivery teams.",

    activities: [
      "Established the Community of Practice framework and roadmap",
      "Designed and maintained an interactive Miro collaboration hub",
      "Facilitated monthly Community of Practice sessions",
      "Developed reusable templates, guides and BA resources",
      "Coordinated guest speakers and knowledge-sharing sessions",
      "Created a central repository for BA knowledge",
      "Encouraged cross-squad collaboration and lessons learnt",
      "Used feedback and participation insights to shape future sessions",
      "Explored and demonstrated practical Microsoft Copilot use cases to support BA research, analysis, documentation and productivity",
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
      {
        value: "Improved",
        label: "Consistency of BA ways of working",
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

    governance: [
      "BA Practice Governance",
      "Knowledge Management",
      "Template Standardisation",
      "Capability Governance",
      "Continuous Improvement",
      "Cross-Squad Collaboration",
      "AI Capability",
    ],

    lessons:
      "A successful Community of Practice depends on participation and practical value rather than documentation alone. Creating an engaging collaboration environment, reusable resources and a regular knowledge-sharing rhythm helped convert individual project knowledge into shared organisational capability.",
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
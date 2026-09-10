export const consultancyServices = [
  {
    id: 'materials-selection',
    title: 'Materials Selection & Recommendation',
    icon: 'Settings',
    description:
      'Advise clients on selecting appropriate alloys, metals, coatings, and composites based on performance requirements, environmental conditions, regulatory standards, and cost considerations.',
    details: [
      'Recommend alloys, metals, coatings, and composites for specific applications',
      'Advise based on environmental conditions, temperature, pressure, and corrosive agents',
      'Assess regulatory standards and lifecycle cost factors',
    ],
  },
  {
    id: 'failure-analysis',
    title: 'Failure Analysis & Forensic Investigation',
    icon: 'Search',
    description:
      'Investigate failures of metallic components, structures, or products to determine root causes — material defects, manufacturing issues, design flaws, corrosion, or fatigue. Full litigation support available.',
    details: [
      'Detailed examinations, testing, and metallurgical assessments',
      'Identify material defects, manufacturing issues, and design flaws',
      'Expert testimony, technical reports, and evidence analysis for litigation',
    ],
  },
  {
    id: 'corrosion-assessment',
    title: 'Corrosion Assessment & Diagnostics',
    icon: 'Activity',
    description:
      'Conduct field inspections using visual, ultrasonic thickness, and radiographic methods. Interpret inspection results to identify corrosion mechanisms and estimate remaining asset life.',
    details: [
      'Field inspections: visual assessments, ultrasonic thickness testing, radiography',
      'Data analysis to identify corrosion mechanisms and failure risk',
      'Root cause analysis and remaining life estimation',
    ],
  },
  {
    id: 'corrosion-mitigation',
    title: 'Corrosion Mitigation Strategy Development',
    icon: 'Shield',
    description:
      'Design and specify protective coatings, cladding, and linings. Design sacrificial anode or impressed current Cathodic Protection (CP) systems. Optimize chemical inhibitor treatment programs.',
    details: [
      'Protective coatings, cladding, and lining specification and guidance',
      'Cathodic Protection (CP) system design including calculations and modelling',
      'Chemical inhibitor system recommendations and optimization',
    ],
  },
  {
    id: 'prevention-planning',
    title: 'Corrosion Prevention & Control Planning',
    icon: 'Clipboard',
    description:
      'Execute design reviews for new facilities to identify and mitigate corrosion risks. Author comprehensive Corrosion Control Manuals. Perform lifecycle cost analyses for mitigation options.',
    details: [
      'Design reviews for new facilities and plant modifications',
      'Development of comprehensive Corrosion Control Manuals',
      'Lifecycle cost analysis for various corrosion mitigation options',
    ],
  },
  {
    id: 'quality-assurance',
    title: 'Quality Assurance & Regulatory Compliance',
    icon: 'CheckSquare',
    description:
      'Establish quality control measures for manufacturing materials. Conduct NDT and metallurgical analysis to verify integrity. Ensure full compliance with industry standards, codes, and regulations.',
    details: [
      'Quality control measures for manufacturing and fabrication processes',
      'Non-destructive testing (NDT) and metallurgical analysis for integrity',
      'Compliance verification with ASTM, NACE, ISO, and applicable codes',
    ],
  },
  {
    id: 'training',
    title: 'Training & Education',
    icon: 'GraduationCap',
    description:
      'Offer custom workshops, technical seminars, and educational programs to enhance client and staff knowledge of metallurgy, corrosion science, and materials best practices.',
    details: [
      'Custom workshops and technical seminars on metallurgy and corrosion',
      'Educational programs for client staff on best practices',
      'Training on emerging technologies and corrosion prevention methods',
    ],
  },
];

export const labTests = [
  {
    id: 'potentiodynamic-polarization',
    name: 'Potentiodynamic Polarization',
    standard: 'ASTM G5',
    type: 'Electrochemical Corrosion',
    scope:
      'Electrochemical technique providing insights into general corrosion rate, passivation behavior, and susceptibility to localized corrosion (pitting/crevice) in aqueous environments.',
    price: 'Rs 5,000 / Sample',
    priceValue: 5000,
  },
  {
    id: 'cyclic-corrosion-test',
    name: 'Cyclic Corrosion Test',
    standard: 'ASTM G59-97(2020)',
    type: 'Electrochemical Corrosion',
    scope:
      'Specialized electrochemical method assessing susceptibility to localized pitting and crevice corrosion in aggressive aqueous environments such as chloride solutions.',
    price: 'Rs 5,000 / Sample',
    priceValue: 5000,
  },
  {
    id: 'cyclic-polarization-medical',
    name: 'Cyclic Polarization (Medical Implants)',
    standard: 'ASTM F2129-19a',
    type: 'Biocompatibility Testing',
    scope:
      'Tests safety, biocompatibility, toxicology, and durability of small implant devices — vascular stents, ureteral stents, cardiac occluders — in simulated body fluids.',
    price: 'Rs 5,000 / Sample',
    priceValue: 5000,
  },
  {
    id: 'pitting-crevice-corrosion',
    name: 'Pitting & Crevice Corrosion Testing',
    standard: 'ASTM G48-11(2020)',
    type: 'Localized Corrosion',
    scope:
      'Evaluates resistance of stainless steels and nickel-base alloys to localized attack in ferric chloride solutions. Covers Methods A through F across specified critical temperatures.',
    price: 'Rs 2,000 / Sample',
    priceValue: 2000,
  },
  {
    id: 'intergranular-corrosion',
    name: 'Intergranular Corrosion Testing',
    standard: 'ASTM A262 (Practices A–E)',
    type: 'Materials Testing',
    scope:
      'Detects grain boundary attacks and sensitization in austenitic and ferritic stainless steels, ensuring material integrity for energy, oil & gas, and chemical sector applications.',
    price: 'Rs 1,500 / Sample',
    priceValue: 1500,
  },
  {
    id: 'salt-spray-corrosion',
    name: 'Salt Spray Corrosion Test',
    standard: 'ASTM B117 / ASTM G85',
    type: 'Accelerated Corrosion',
    scope:
      'Accelerated chamber test simulating marine, coastal, and industrial salt-fog conditions to evaluate corrosion resistance of metallic materials, surface coatings, and inhibitors.',
    price: 'Inquire for Pricing',
    priceValue: null,
  },
  {
    id: 'metal-corrosion-analysis',
    name: 'Metal Corrosion Analysis',
    standard: 'On-Field or Laboratory',
    type: 'Corrosion Identification',
    scope:
      'Expert field or lab-based analysis using advanced analytical techniques to diagnose the exact type, cause, and extent of corrosion affecting structural and engineering metal components.',
    price: 'Rs 2,000 / Sample',
    priceValue: 2000,
  },
  {
    id: 'corrosion-analysis-level2',
    name: 'Corrosion Analysis Service (Level II)',
    standard: 'NACE Standards',
    type: 'Corrosion Inspection',
    scope:
      'Comprehensive analysis of metals exposed to corrosive liquids (500 mL sample required). Identifies contaminants, determines corrosion rates, and delivers results within 2 days.',
    price: 'Rs 500 / Sample',
    priceValue: 500,
  },
  {
    id: 'corrosion-coupon-analysis',
    name: 'Corrosion Coupon Analysis',
    standard: 'NACE RP0775:2005 / ASTM / ISO',
    type: 'Coupon Analysis',
    scope:
      'Post-exposure analysis of strip, disc, weld, or mesh coupons. Includes sample photography, precision weight loss measurement, corrosion rate in mpy/mm-year, and detailed expert reporting.',
    price: 'Rs 4,500 / Sample',
    priceValue: 4500,
  },
];

export const industries = [
  { name: 'Oil & Gas', icon: 'Droplets' },
  { name: 'Aerospace', icon: 'Plane' },
  { name: 'Construction & Infrastructure', icon: 'Building2' },
  { name: 'Manufacturing & Power', icon: 'Factory' },
  { name: 'Medical & Biomedical', icon: 'HeartPulse' },
  { name: 'Chemical Processing', icon: 'Beaker' },
];

export const teamMembers = [
  {
    name: 'John Doe',
    role: 'Lead Metallurgical Consultant',
    initials: 'JD',
    qualifications: 'M.Tech Metallurgical Engineering | 15+ Years Industry Experience',
    expertise: 'Failure Analysis, Materials Selection, Corrosion Assessment',
  },
  {
    name: 'Jane Smith',
    role: 'Senior Corrosion Engineer',
    initials: 'JS',
    qualifications: 'B.E. Chemical Engineering | NACE Certified Corrosion Technologist',
    expertise: 'Cathodic Protection, Electrochemical Testing, Coating Specification',
  },
];

export const whyChooseUs = [
  {
    icon: 'Clock',
    title: 'Quick Turnaround',
    description: 'Results delivered within 2 business days. We respect your project timelines.',
  },
  {
    icon: 'FlaskConical',
    title: 'Field & Lab Analysis',
    description: 'On-site inspections and advanced laboratory testing — we go where the problem is.',
  },
  {
    icon: 'Shield',
    title: 'NACE & ASTM Compliant',
    description: 'All testing conducted to internationally recognized ASTM, NACE, and ISO standards.',
  },
  {
    icon: 'FileText',
    title: 'Expert Reporting',
    description: 'Clear, detailed reports with photographs, raw data, and actionable recommendations.',
  },
];

export const CONTACT = {
  email: 'tejmetconsultancy@gmail.com',
  phone: '8780547419',
};

export const consultancyDropdownLinks = [
  { label: 'Materials Selection', href: '/consultancy#materials-selection' },
  { label: 'Failure Analysis', href: '/consultancy#failure-analysis' },
  { label: 'Corrosion Assessment', href: '/consultancy#corrosion-assessment' },
  { label: 'Corrosion Mitigation', href: '/consultancy#corrosion-mitigation' },
  { label: 'Prevention & Control', href: '/consultancy#prevention-planning' },
  { label: 'Quality Assurance', href: '/consultancy#quality-assurance' },
  { label: 'Training & Education', href: '/consultancy#training' },
];

export const labTestingDropdownLinks = [
  { label: 'Potentiodynamic Polarization', href: '/lab-testing#potentiodynamic-polarization' },
  { label: 'Cyclic Corrosion Test', href: '/lab-testing#cyclic-corrosion-test' },
  { label: 'Cyclic Polarization (Medical)', href: '/lab-testing#cyclic-polarization-medical' },
  { label: 'Pitting & Crevice Testing', href: '/lab-testing#pitting-crevice-corrosion' },
  { label: 'Intergranular Corrosion', href: '/lab-testing#intergranular-corrosion' },
  { label: 'Salt Spray Test', href: '/lab-testing#salt-spray-corrosion' },
  { label: 'Metal Corrosion Analysis', href: '/lab-testing#metal-corrosion-analysis' },
  { label: 'Corrosion Coupon Analysis', href: '/lab-testing#corrosion-coupon-analysis' },
];

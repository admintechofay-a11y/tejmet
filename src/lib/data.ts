export const consultancyServices = [
  {
    id: 'materials-selection',
    title: 'Materials Selection & Recommendation',
    icon: 'Settings',
    description:
      'Advise clients on selecting appropriate materials for specific applications based on performance requirements, environmental conditions (temperature, pressure, corrosive agents), regulatory standards, and lifecycle cost considerations. Includes recommending alloys, metals, protective coatings, and composites.',
    details: [
      'Recommend alloys, metals, protective coatings, and composites for specific industrial operating environments',
      'Assess temperature, pressure, corrosive agents, and mechanical stresses for optimal material longevity',
      'Evaluate regulatory standards, codes, and lifecycle cost analysis (LCCA) for Capex/Opex optimization',
    ],
  },
  {
    id: 'failure-analysis',
    title: 'Failure Analysis & Forensic Investigation',
    icon: 'Search',
    description:
      'Investigate and analyze failures of metallic components, structures, or products to determine the root cause of failure. Comprehensive forensic examinations identifying material defects, manufacturing issues, design flaws, corrosion mechanisms, fatigue, or improper operating usage.',
    details: [
      'Detailed fractographic, metallurgical, and non-destructive examinations to pinpoint root causes',
      'Identify material defects, fabrication flaws, weld failures, fatigue, and environmental cracking',
      'Provide forensic investigation reports, certified evidence analysis, and expert testimony for litigation and insurance claims',
    ],
  },
  {
    id: 'material-characterization',
    title: 'Material Characterization & Advanced Metallurgy',
    icon: 'Microscope',
    description:
      'Characterize materials through advanced laboratory techniques including scanning electron microscopy (SEM), X-ray diffraction (XRD), optical microscopy, and spectroscopic chemical analysis to evaluate microstructures, phase composition, and mechanical properties.',
    details: [
      'Microstructural analysis, phase identification, grain size determination, and defect assessment',
      'Advanced analytical techniques: Scanning Electron Microscopy (SEM), XRD, and optical metallography',
      'Hardness testing, tensile testing, Charpy impact testing, and surface characterization',
    ],
  },
  {
    id: 'corrosion-assessment',
    title: 'Corrosion Assessment & Diagnostics',
    icon: 'Activity',
    description:
      'Field inspections and laboratory diagnostics to determine underlying corrosion mechanisms. Visual assessments, ultrasonic thickness measurement, radiography, and environmental data collection to estimate remaining asset life and mitigate failure risks.',
    details: [
      'On-site field inspections: visual surveys, ultrasonic thickness testing (UT), and radiographic assessments',
      'Data analysis to identify active corrosion mechanisms, corrosion rates, and failure probability',
      'Root cause analysis and remaining asset useful life (RUL) estimation for critical industrial infrastructure',
    ],
  },
  {
    id: 'corrosion-mitigation',
    title: 'Corrosion Mitigation Strategy Development',
    icon: 'Shield',
    description:
      'Develop engineered corrosion prevention strategies including protective coatings, cladding, and linings; sacrificial anode and impressed current Cathodic Protection (CP) systems; and chemical treatment inhibitor programs.',
    details: [
      'Protective coatings, cladding, and linings: specification, surface preparation, application guidance, and coating failure analysis',
      'Cathodic Protection (CP) design: sacrificial anode and impressed current (ICCP) systems with engineering calculations and modelling',
      'Chemical treatment programs: recommendations and optimization of corrosion inhibitor injection systems',
    ],
  },
  {
    id: 'prevention-planning',
    title: 'Corrosion Prevention & Control Planning',
    icon: 'Clipboard',
    description:
      'Provide engineering input into new facilities or plant modifications to identify potential corrosion risks and incorporate preventative measures early. Author comprehensive Corrosion Control Manuals and perform lifecycle cost analysis.',
    details: [
      'Front-End Engineering Design (FEED) and detailed design reviews to eliminate corrosion traps',
      'Development of comprehensive Corrosion Control Manuals (CCM) for asset owners and plant operators',
      'Lifecycle Cost Analysis (LCCA) comparing material upgrade options versus ongoing chemical inhibition and maintenance',
    ],
  },
  {
    id: 'quality-assurance',
    title: 'Quality Assurance & Regulatory Compliance',
    icon: 'CheckSquare',
    description:
      'Assist in establishing quality control measures for materials used in manufacturing and fabrication processes to ensure strict compliance with ASTM, NACE, ISO, ASME, and API industry standards and statutory regulations.',
    details: [
      'Establish QA/QC protocols and material verification procedures for manufacturing and construction',
      'Non-destructive testing (NDT) and metallurgical inspection to verify material integrity and compliance',
      'Audit materials, welding procedures, and heat treatments against ASTM, NACE, ISO, and client engineering specifications',
    ],
  },
  {
    id: 'training',
    title: 'Training & Educational Seminars',
    icon: 'GraduationCap',
    description:
      'Offer customized training programs, technical workshops, and educational seminars to enhance engineering staff knowledge of metallurgical principles, corrosion prevention best practices, and emerging materials technologies.',
    details: [
      'Customized corporate workshops and seminars on metallurgy, materials science, and corrosion engineering',
      'Hands-on training for plant operators and maintenance engineers on corrosion inspection and mitigation',
      'Curriculum on international standards (ASTM, NACE, ISO) and failure prevention strategies',
    ],
  },
  {
    id: 'expert-witness',
    title: 'Expert Witness & Litigation Support',
    icon: 'FileText',
    description:
      'Deliver independent forensic investigations, certified technical reports, and authoritative expert witness testimony for industrial disputes, insurance claims, failure liability arbitrations, and legal proceedings.',
    details: [
      'Independent technical investigation of catastrophic component failures and industrial accidents',
      'Preparation of certified evidence, photographic documentation, and defensible technical reports',
      'Expert witness testimony and deposition support for arbitration, regulatory inquiries, and court litigation',
    ],
  },
  {
    id: 'rd-consulting',
    title: 'Research & Development (R&D)',
    icon: 'Sparkles',
    description:
      'Collaborate on research and development initiatives to discover, test, and qualify innovative materials, barrier coatings, and chemical technologies that enhance corrosion resistance and operational durability.',
    details: [
      'Evaluation of novel corrosion-resistant alloys, surface treatments, and advanced coatings',
      'Laboratory simulation of extreme operating conditions (high temperature, high pressure, acid media)',
      'Custom electrolyte formulation and pilot-scale testing for proprietary industrial processes',
    ],
  },
];

export const labTests = [
  {
    id: 'potentiodynamic-polarization',
    name: 'Potentiodynamic Polarization Tests',
    standard: 'ASTM G5',
    type: 'Electrochemical Corrosion',
    scope:
      'Controlled potential scan from cathodic to anodic potentials to evaluate corrosion behavior in aqueous environments. Extracts corrosion potential (Ecorr), corrosion current density (Icorr), and passivation range for accurate corrosion rate assessment and failure diagnosis.',
    price: 'Rs 5,000 / Sample',
    priceValue: 5000,
    turnaround: '2 Business Days',
    keyOutcomes: [
      'Accurate corrosion rate (mm/year or mpy) in specific client-supplied electrolytes',
      'Passivation behavior, breakdown potential, and active-passive transition zones',
      'Root cause diagnosis for electrochemical attack and material qualification',
    ],
  },
  {
    id: 'cyclic-corrosion-test',
    name: 'Cyclic Polarization Tests',
    standard: 'ASTM G59-97(2020)',
    type: 'Electrochemical Corrosion',
    scope:
      'Specialized electrochemical method evaluating susceptibility to localized pitting and crevice corrosion in aggressive aqueous environments (such as chlorides). Sweeps potential forward and reverses to record hysteresis curves.',
    price: 'Rs 5,000 / Sample',
    priceValue: 5000,
    turnaround: '2 Business Days',
    keyOutcomes: [
      'Determination of Pitting Potential (Epit) at which stable pit initiation begins',
      'Repassivation Potential (Erp) indicating the material ability to heal protective oxide films',
      'Corrosion potential (Ecorr) and polarization resistance (Rp) measurements',
    ],
  },
  {
    id: 'cyclic-polarization-medical',
    name: 'Cyclic Polarization for Medical Implants & Devices',
    standard: 'ASTM F2129-19a',
    type: 'Biocompatibility & Medical',
    scope:
      'Evaluates safety, biocompatibility, and corrosion susceptibility of small implantable devices (vascular stents, ureteral stents, endovascular graft supports, cardiac occluders, orthopedic and dental implants) in simulated human body fluids (saline, Hank’s solution).',
    price: 'Rs 5,000 / Sample',
    priceValue: 5000,
    turnaround: '3–5 Business Days',
    keyOutcomes: [
      'Pitting and repassivation behavior under simulated physiological conditions (37°C)',
      'Toxicology and biocompatibility data supporting regulatory approval and medical QA',
      'Ensures metallic implants co-exist safely without releasing toxic metallic ions',
    ],
  },
  {
    id: 'pitting-crevice-corrosion',
    name: 'Pitting & Crevice Corrosion Testing (Methods A–F)',
    standard: 'ASTM G48-11(2020)',
    type: 'Localized Corrosion',
    scope:
      'Immersion in ferric chloride solution to evaluate resistance of stainless steels and nickel-base/chromium-bearing alloys to localized pitting and crevice attack. Includes all 6 ASTM G48 methods (Methods A through F) with precision weight loss determination.',
    price: 'Rs 2,000 / Sample',
    priceValue: 2000,
    turnaround: '2–4 Business Days',
    keyOutcomes: [
      'Method A & B: Ferric Chloride pitting and crevice corrosion evaluation',
      'Method C & D: Critical Pitting (CPT) and Critical Crevice (CCT) temperature for nickel-base alloys',
      'Method E & F: Critical Pitting (CPT) and Critical Crevice (CCT) temperature for stainless steels',
    ],
  },
  {
    id: 'intergranular-corrosion',
    name: 'Intergranular Corrosion (IGC) Testing',
    standard: 'ASTM A262 (Practices A to E)',
    type: 'Materials Testing',
    scope:
      'Detects susceptibility to grain boundary attack and chromium depletion (sensitization) in austenitic and ferritic stainless steels as per ASTM A262 Practices A, B, C, D, and E (and equivalent NACE standards). Vital for energy, chemical, and oil & gas fabrication.',
    price: 'Rs 1,500 / Sample',
    priceValue: 1500,
    turnaround: '2–3 Business Days',
    keyOutcomes: [
      'Detects chromium carbide precipitation at grain boundaries due to improper heat treatment or welding',
      'Corrosion rate measurement (typically 10% to 40% threshold evaluations)',
      'Verification of solution annealing and thermal stabilization for austenitic stainless steels',
    ],
  },
  {
    id: 'salt-spray-corrosion',
    name: 'Salt Spray (Fog) Corrosion Testing',
    standard: 'ASTM B117 / ASTM G85',
    type: 'Accelerated Atmospheric',
    scope:
      'Continuous and cyclic accelerated corrosion testing in a controlled salt fog chamber simulating marine, coastal, and harsh industrial atmospheres. Compliant with ASTM B117 standard practice and ASTM G85 modified cyclic and acidified fog exposures.',
    price: 'Contact for Run Pricing',
    priceValue: null,
    turnaround: 'Standard / Custom Exposure Hours',
    keyOutcomes: [
      'Accelerated durability validation for metallic samples, surface coatings, platings, and inhibitors',
      'Life expectancy and quality assurance for automotive, aerospace, marine, and construction hardware',
      'Visual red rust/white rust onset monitoring and comparative corrosion resistance rankings',
    ],
  },
  {
    id: 'metal-corrosion-analysis',
    name: 'Metal Corrosion Analysis & Diagnostics',
    standard: 'On-Field / Laboratory',
    type: 'Corrosion Identification',
    scope:
      'Comprehensive field or laboratory investigation of structural and engineering metals. Qualified corrosion engineers utilize analytical techniques to determine the exact type, cause, and extent of degradation for maintenance planning and failure prevention.',
    price: 'Rs 2,000 / Sample',
    priceValue: 2000,
    turnaround: '2 Business Days',
    keyOutcomes: [
      'Identification of active corrosion mechanisms (galvanic, crevice, pitting, erosion, or MIC)',
      'Determination of root cause contributing factors and environmental severity',
      'Actionable recommendations on alloy selection, protective barriers, and maintenance intervals',
    ],
  },
  {
    id: 'corrosion-analysis-level2',
    name: 'Corrosion Analysis Service (Level II – Liquid Medium)',
    standard: 'NACE Standards',
    type: 'Liquid & Process Corrosion',
    scope:
      'Specialized Level II analysis for metals exposed to industrial corrosive liquids (Item Code: Corr_1113). Requires 500 mL of client corrosive medium. Identifies corrosive contaminants, calculates corrosion rates, and formulates protective treatments.',
    price: 'Rs 500 / Sample',
    priceValue: 500,
    turnaround: 'Within 2 Days',
    keyOutcomes: [
      'Identification of corrosive contaminants (chlorides, sulfides, acids) in process fluids',
      'Corrosion rate evaluation under operating environmental conditions',
      'Recommendations on corrosion-resistant alloys, surface treatments, and chemical inhibitors',
    ],
  },
  {
    id: 'corrosion-coupon-analysis',
    name: 'Corrosion Coupon Analysis & Weight-Loss Evaluation',
    standard: 'NACE RP0775:2005 / ASTM / ISO',
    type: 'Coupon Monitoring',
    scope:
      'Comprehensive post-exposure analysis of industrial corrosion coupons conforming to NACE RP0775:2005, ASTM, and ISO protocols. Supports strip, disc, stress, welded, cylinder, and mesh coupons for pipeline, vessel, and plant corrosion monitoring.',
    price: 'Rs 4,500 / Sample',
    priceValue: 4500,
    turnaround: 'Fast (Within a few days)',
    keyOutcomes: [
      'Pre- and post-test digital photography and standardized chemical cleaning procedures',
      'Precision weight loss measurement with corrosion rate calculation in mpy and mm/year',
      'Detailed characterization of localized pitting vs general attack with formal engineering report',
    ],
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
    name: 'Lead Consultant',
    role: 'Lead Metallurgical & Corrosion Consultant',
    initials: 'TM',
    qualifications: 'M.Tech / B.E. Metallurgical Engineering | Senior Corrosion Specialist',
    expertise: 'Failure Analysis, Materials Selection, Electrochemical Testing, NACE & ASTM Standards',
  },
  {
    name: 'Senior Analyst',
    role: 'Senior Testing & Laboratory Engineer',
    initials: 'CS',
    qualifications: 'Metallurgical & Chemical Engineering Specialist | NACE Certified',
    expertise: 'Potentiodynamic Polarization, ASTM G48 Pitting, Salt Spray Chambers, Coupon Analysis',
  },
];

export const whyChooseUs = [
  {
    icon: 'Clock',
    title: 'Quick Turnaround',
    description: 'Results delivered within 2 business days for routine testing. We respect your critical project timelines.',
  },
  {
    icon: 'FlaskConical',
    title: 'Field & Lab Analysis',
    description: 'On-site inspections, non-destructive testing, and advanced laboratory testing — we go where the problem is.',
  },
  {
    icon: 'Shield',
    title: 'NACE & ASTM Compliant',
    description: 'All testing conducted to internationally recognized ASTM, NACE, and ISO standards with calibrated instrumentation.',
  },
  {
    icon: 'FileText',
    title: 'Expert Reporting',
    description: 'Clear, detailed reports with macroscopic photographs, raw polarization curves, weight loss data, and actionable engineering recommendations.',
  },
];

export const CONTACT = {
  email: 'tejmetconsultancy@gmail.com',
  phone: '8780547419',
};

export const consultancyDropdownLinks = [
  { label: 'Materials Selection', href: '/consultancy#materials-selection' },
  { label: 'Failure Analysis', href: '/consultancy#failure-analysis' },
  { label: 'Material Characterization', href: '/consultancy#material-characterization' },
  { label: 'Corrosion Assessment', href: '/consultancy#corrosion-assessment' },
  { label: 'Corrosion Mitigation', href: '/consultancy#corrosion-mitigation' },
  { label: 'Prevention & Control', href: '/consultancy#prevention-planning' },
  { label: 'Quality Assurance', href: '/consultancy#quality-assurance' },
  { label: 'Training & Education', href: '/consultancy#training' },
  { label: 'Expert Witness Support', href: '/consultancy#expert-witness' },
  { label: 'R&D Engineering', href: '/consultancy#rd-consulting' },
];

export const labTestingDropdownLinks = [
  { label: 'Potentiodynamic Polarization (ASTM G5)', href: '/lab-testing#potentiodynamic-polarization' },
  { label: 'Cyclic Polarization (ASTM G59)', href: '/lab-testing#cyclic-corrosion-test' },
  { label: 'Medical Implants (ASTM F2129)', href: '/lab-testing#cyclic-polarization-medical' },
  { label: 'Pitting & Crevice G48 (Methods A–F)', href: '/lab-testing#pitting-crevice-corrosion' },
  { label: 'Intergranular Corrosion (ASTM A262)', href: '/lab-testing#intergranular-corrosion' },
  { label: 'Salt Spray Test (ASTM B117 / G85)', href: '/lab-testing#salt-spray-corrosion' },
  { label: 'Metal Corrosion Analysis', href: '/lab-testing#metal-corrosion-analysis' },
  { label: 'Level II Corrosion Analysis', href: '/lab-testing#corrosion-analysis-level2' },
  { label: 'Corrosion Coupon Analysis (NACE)', href: '/lab-testing#corrosion-coupon-analysis' },
];

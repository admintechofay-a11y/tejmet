import Link from 'next/link';
import {
  Target,
  ArrowRight,
  Droplets,
  Plane,
  Building2,
  Factory,
  HeartPulse,
  Beaker,
  Award,
  ShieldCheck,
  CheckCircle2,
  Microscope,
  Search,
  Activity,
  Shield,
  FileText,
  GraduationCap,
  Scale,
  Sparkles,
  Settings,
} from 'lucide-react';
import { teamMembers, industries, consultancyServices } from '@/lib/data';

const industryIconMap: Record<string, React.ReactNode> = {
  Droplets: <Droplets className="w-6 h-6" />,
  Plane: <Plane className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Factory: <Factory className="w-6 h-6" />,
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  Beaker: <Beaker className="w-6 h-6" />,
};

const scopeIcons: Record<string, React.ReactNode> = {
  'materials-selection': <Settings className="w-5 h-5" />,
  'failure-analysis': <Search className="w-5 h-5" />,
  'material-characterization': <Microscope className="w-5 h-5" />,
  'corrosion-assessment': <Activity className="w-5 h-5" />,
  'corrosion-mitigation': <Shield className="w-5 h-5" />,
  'prevention-planning': <FileText className="w-5 h-5" />,
  'quality-assurance': <ShieldCheck className="w-5 h-5" />,
  'training': <GraduationCap className="w-5 h-5" />,
  'expert-witness': <Scale className="w-5 h-5" />,
  'rd-consulting': <Sparkles className="w-5 h-5" />,
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-navy bg-tech-grid pt-36 pb-20 overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm">
            <Award className="w-4 h-4 text-amber-light" />
            <span className="text-white text-xs sm:text-sm font-semibold">
              Metallurgical &amp; Corrosion Science Heritage
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl tracking-tight">
            Decades of Metallurgical &amp; Corrosion Expertise
          </h1>
          <p className="mt-5 text-white/90 text-lg max-w-2xl leading-relaxed">
            TEJMET Consultancy Services provides specialized expertise in metallurgy and corrosion
            science to help industrial clients address materials performance, corrosion prevention,
            and failure analysis — with reliable turnaround and rigorous ASTM &amp; NACE standards.
          </p>
        </div>
      </section>

      {/* Mission & Stats */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-amber/10 text-amber rounded-2xl flex items-center justify-center shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                  Our Engineering Mission
                </h2>
              </div>
              <p className="text-slate-gray leading-relaxed text-lg mb-6">
                To deliver accurate, timely, and high-quality metallurgical assessments that preserve
                asset integrity, extend equipment lifecycle, and prevent catastrophic structural failures
                across critical industrial operations.
              </p>
              <p className="text-slate-gray leading-relaxed">
                We believe that the right materials knowledge, applied at the design and operating
                stages, is the most cost-effective safeguard against corrosion degradation. Our engineers
                combine advanced analytical laboratory testing (SEM, XRD, Potentiostats) with practical
                field diagnostics.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { value: '10', label: 'Practice Disciplines', sub: 'From selection to forensics' },
                { value: '9+', label: 'Lab Test Standards', sub: 'ASTM & NACE compliant' },
                { value: '2-Day', label: 'Rapid Turnaround', sub: 'For key electrochemical tests' },
                { value: '100%', label: 'Standards Compliance', sub: 'ASTM, NACE, ISO, ASME, API' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-sky rounded-2xl p-6 border border-sky-mid hover:border-blue-accent hover:shadow-md card-hover transition-all"
                >
                  <p className="text-3xl sm:text-4xl font-extrabold text-navy font-mono">
                    {stat.value}
                  </p>
                  <p className="text-sm font-bold text-navy mt-2">{stat.label}</p>
                  <p className="text-xs text-steel mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Scope of Services from Profile */}
      <section className="bg-light-bg py-24 border-y border-sky-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-navy bg-sky px-3 py-1 rounded-full border border-sky-mid">
              Comprehensive Consulting Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-3">
              10 Core Disciplines of TEJMET Consultancy
            </h2>
            <p className="mt-3 text-slate-gray text-lg max-w-2xl mx-auto">
              Our multidisciplinary engineering scope covers the entire materials and corrosion lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consultancyServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-sky-mid hover:border-blue-accent hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-mid group-hover:bg-navy text-navy group-hover:text-white flex items-center justify-center transition-colors">
                      {scopeIcons[service.id] || <Shield className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-mono font-semibold text-steel">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-navy mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-gray leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-sky-mid/60">
                  <Link
                    href={`/consultancy#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-accent hover:text-navy transition-colors"
                  >
                    <span>View Engineering Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Regulatory Assurance */}
      <section className="bg-white py-20 border-b border-sky-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy to-navy-dark rounded-3xl p-8 sm:p-12 text-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-white mb-4">
                  <ShieldCheck className="w-4 h-4 text-amber-light" />
                  Quality Assurance &amp; Code Compliance
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                  Rigorous Compliance with Global Engineering Standards
                </h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
                  TEJMET ensures that materials, fabrication processes, and test methods strictly adhere
                  to relevant international codes and regulations. Our certified assessments support client
                  compliance for ASTM, NACE / AMPP, ISO, ASME, and API engineering specifications.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'ASTM G5',
                    'ASTM G59',
                    'ASTM F2129',
                    'ASTM G48 (Methods A–F)',
                    'ASTM A262',
                    'ASTM B117 / G85',
                    'NACE RP0775:2005',
                    'NACE Level II',
                    'ISO Standards',
                    'ASME & API Codes',
                  ].map((std) => (
                    <span
                      key={std}
                      className="px-3 py-1 bg-white/15 rounded-lg border border-white/20 text-xs font-mono font-semibold"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 bg-amber hover:bg-amber-dark text-white font-bold text-sm rounded-xl transition-colors shadow-lg text-center"
                >
                  Request Compliance Review
                </Link>
                <Link
                  href="/lab-testing"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm rounded-xl transition-colors text-center"
                >
                  View Laboratory Catalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-light-bg py-24 border-b border-sky-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Industries We Serve
            </h2>
            <p className="mt-3 text-slate-gray text-lg">
              Our services are applied across a wide range of critical industrial sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-white rounded-xl p-6 flex flex-col items-center text-center border border-sky-mid hover:border-blue-accent hover:shadow-md card-hover transition-all duration-200 group"
              >
                <div className="w-14 h-14 bg-sky-mid group-hover:bg-blue-accent text-navy group-hover:text-white rounded-2xl flex items-center justify-center mb-4 transition-colors duration-200 shadow-sm">
                  {industryIconMap[industry.icon]}
                </div>
                <p className="text-xs sm:text-sm font-bold text-navy leading-snug">
                  {industry.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Our Engineering Team
            </h2>
            <p className="mt-3 text-slate-gray text-lg">
              Qualified engineers with deep domain knowledge in metallurgy and corrosion science.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-sky rounded-xl p-8 border border-sky-mid hover:border-blue-accent hover:shadow-md card-hover transition-all"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-navy text-white flex items-center justify-center shrink-0 font-bold text-xl shadow-md">
                    <span>{member.initials}</span>
                  </div>
                  <div>
                    <p className="font-extrabold text-lg text-navy">{member.name}</p>
                    <p className="text-xs font-bold text-amber uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-xs font-semibold text-steel mb-2 font-mono">
                  {member.qualifications}
                </p>
                <p className="text-sm text-slate-gray leading-relaxed">
                  <span className="font-bold text-navy">Expertise:</span> {member.expertise}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-steel mt-8">
            Contact our engineering desk at{' '}
            <a href="mailto:tejmetconsultancy@gmail.com" className="text-navy font-bold underline">
              tejmetconsultancy@gmail.com
            </a>{' '}
            or call{' '}
            <a href="tel:8780547419" className="text-navy font-bold underline">
              +91 8780547419
            </a>{' '}
            to speak directly with our lead metallurgical specialist.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-navy-dark py-20 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Discuss Your Project Requirements
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto leading-relaxed">
            Our engineering team is ready to provide expert guidance tailored to your industry and materials challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-amber hover:bg-amber-dark text-white font-bold rounded-xl transition-colors shadow-lg border border-amber-400/30"
          >
            <span>Contact Our Engineers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

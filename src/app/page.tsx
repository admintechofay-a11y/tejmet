import Link from 'next/link';
import {
  ArrowRight,
  Clock,
  FlaskConical,
  Shield,
  FileText,
  CheckCircle,
  Microscope,
  ShieldCheck,
  Zap,
  Activity,
  Award,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { whyChooseUs, labTests } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-7 h-7" />,
  FlaskConical: <FlaskConical className="w-7 h-7" />,
  Shield: <Shield className="w-7 h-7" />,
  FileText: <FileText className="w-7 h-7" />,
};

export default function HomePage() {
  return (
    <>
      {/* High-Impact Technical Hero Section */}
      <section className="relative min-h-[92vh] flex items-center bg-navy bg-gradient-to-br from-navy-dark via-navy to-navy-light bg-tech-grid overflow-hidden pt-28 pb-20">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-navy-light/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-40 w-96 h-96 bg-amber/15 rounded-full blur-3xl pointer-events-none" />

        {/* Technical Coordinate lines */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute top-12 right-12 w-[450px] h-[450px] opacity-[0.06]"
            viewBox="0 0 500 500"
            fill="none"
          >
            <circle cx="250" cy="250" r="230" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
            <circle cx="250" cy="250" r="160" stroke="white" strokeWidth="2" />
            <circle cx="250" cy="250" r="90" stroke="white" strokeWidth="2" />
            <line x1="250" y1="20" x2="250" y2="480" stroke="white" strokeWidth="2" />
            <line x1="20" y1="250" x2="480" y2="250" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 bg-white/15 border border-white/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-light animate-pulse" />
                <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-wide">
                  ASTM &amp; NACE Certified Testing Laboratory
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight">
                Expert Metallurgical &amp;{' '}
                <span className="text-amber-light">
                  Corrosion Consultancy
                </span>{' '}
                Services
              </h1>

              <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
                Providing specialized materials performance analysis, failure diagnostics, and
                laboratory testing for critical industries. Trusted by clients in oil &amp; gas,
                aerospace, construction, and biomedical sectors.
              </p>

              {/* Action Buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-amber hover:bg-amber-dark text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
                >
                  <span>Request a Quote / RFQ</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/lab-testing"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/15 hover:bg-white/25 border border-white/40 text-white font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm"
                >
                  <FlaskConical className="w-4 h-4 text-amber-light" />
                  <span>View Testing Catalog</span>
                </Link>

                <a
                  href="https://wa.me/918780547419?text=Hello%20TEJMET,%20I%20need%20assistance%20with%20metallurgical%20testing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>

              {/* Verified Trust Stats */}
              <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <p className="text-3xl font-extrabold text-white font-mono tracking-tight">9+</p>
                  <p className="text-xs text-white/60 uppercase font-medium tracking-wider mt-1">
                    ASTM/NACE Tests
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-white font-mono tracking-tight">2-Day</p>
                  <p className="text-xs text-white/60 uppercase font-medium tracking-wider mt-1">
                    Fast Turnaround
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-white font-mono tracking-tight">100%</p>
                  <p className="text-xs text-white/60 uppercase font-medium tracking-wider mt-1">
                    Confidential &amp; NDA
                  </p>
                </div>
              </div>
            </div>

            {/* Right Interactive Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-gradient-to-b from-white/15 to-white/5 border border-white/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber/20 border border-amber/30 flex items-center justify-center text-amber-light">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-white">Testing Capabilities Desk</h2>
                      <p className="text-xs text-white/70">Real-time laboratory services</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Lab Active
                  </span>
                </div>

                {/* Micro capabilities list */}
                <div className="space-y-3 mb-6">
                  {[
                    { name: 'Potentiodynamic Polarization', std: 'ASTM G5', time: '2 Days' },
                    { name: 'Pitting & Crevice Corrosion', std: 'ASTM G48', time: 'Critical Temp' },
                    { name: 'Medical Implant Passivation', std: 'ASTM F2129', time: 'Body Fluid Sim' },
                    { name: 'Corrosion Coupon Analysis', std: 'NACE RP0775', time: 'Precision Wt Loss' },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors"
                    >
                      <div>
                        <p className="text-xs font-semibold text-white">{item.name}</p>
                        <p className="text-[11px] font-mono text-sky-mid mt-0.5">{item.std}</p>
                      </div>
                      <span className="text-[10px] font-medium text-white/90 bg-white/10 px-2 py-0.5 rounded border border-white/10">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-navy-dark/60 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-sky-mid shrink-0" />
                    <span className="text-xs text-white/90">
                      Sample dispatch assistance &amp; custom electrolyte formulations
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="shrink-0 text-xs font-bold text-amber-light hover:text-white transition-colors"
                  >
                    Enquire &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Marquee / Quick Badges Bar */}
      <section className="bg-navy-dark border-y border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="font-bold uppercase tracking-wider text-sky-mid flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-light" />
              Standard Protocols:
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {[
                'ASTM G5',
                'ASTM G59',
                'ASTM G48 (Methods A–F)',
                'ASTM F2129',
                'ASTM A262',
                'ASTM B117 / G85',
                'NACE RP0775',
                'NACE Level II',
                'ISO Standards',
              ].map((std) => (
                <span
                  key={std}
                  className="px-3 py-1 bg-white/10 rounded-lg border border-white/15 font-mono text-white font-semibold"
                >
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-navy uppercase tracking-widest bg-sky px-3.5 py-1.5 rounded-full mb-4 border border-sky-mid">
              <Sparkles className="w-3.5 h-3.5 text-amber" />
              Comprehensive Materials Science
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Solving Complex Corrosion &amp; Materials Challenges
            </h2>
            <p className="mt-5 text-slate-gray text-lg leading-relaxed">
              TEJMET Consultancy Services provides deep expertise in metallurgy and corrosion science
              to help industrial clients address materials performance issues, prevent corrosion
              failures, and execute root cause failure analysis — backed by internationally
              recognized ASTM and NACE testing standards.
            </p>
          </div>
        </div>
      </section>

      {/* Core Divisions */}
      <section className="bg-light-bg py-24 border-t border-sky-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Our Core Divisions
            </h2>
            <p className="mt-3 text-slate-gray text-lg">
              Two integrated service arms — engineering consultancy and accredited laboratory testing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Consultancy Card */}
            <div className="bg-white rounded-2xl p-8 border border-sky-mid shadow-sm hover:shadow-[0_8px_32px_rgba(21,101,192,0.12)] hover:border-sky-deep transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-sky text-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-colors duration-200 shadow-sm">
                  <Shield className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy">
                    Division 01
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">Consultancy Services</h3>
                <p className="text-slate-gray leading-relaxed mb-6">
                  Engineering advice on materials selection, corrosion prevention strategy, failure
                  analysis, cathodic protection design, and regulatory compliance. Tailored to your
                  industry, environment, and project requirements.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Materials Selection & Recommendation for Extreme Environments',
                    'Failure Analysis & Forensic Root Cause Diagnosis',
                    'Cathodic Protection (CP) & Chemical Inhibitor Strategy',
                    'Corrosion Control Manuals & Lifecycle Cost Analysis',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-gray">
                      <CheckCircle className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link
                  href="/consultancy"
                  className="inline-flex items-center gap-2 px-5 py-3 text-navy font-semibold text-sm rounded-xl hover:text-navy-dark transition-colors duration-200"
                >
                  <span>Explore Consulting Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Lab Testing Card */}
            <div className="bg-white rounded-2xl p-8 border border-sky-mid shadow-sm hover:shadow-[0_8px_32px_rgba(21,101,192,0.12)] hover:border-sky-deep transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-amber/10 text-amber rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber group-hover:text-white transition-colors duration-200 shadow-sm">
                  <Microscope className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber">
                    Division 02
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">Laboratory Testing Services</h3>
                <p className="text-slate-gray leading-relaxed mb-6">
                  ASTM and NACE compliant electrochemical, mechanical, and corrosion testing with
                  transparent public pricing. From potentiodynamic polarization to corrosion coupon
                  analysis — results delivered in days, not weeks.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Electrochemical Polarization (ASTM G5, ASTM G59)',
                    'Pitting & Crevice Corrosion in Ferric Chloride (ASTM G48)',
                    'Medical Implant Passivation & Durability (ASTM F2129)',
                    'Precision Weight-Loss Coupon Analysis (NACE RP0775)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-gray">
                      <CheckCircle className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link
                  href="/lab-testing"
                  className="inline-flex items-center gap-2 px-5 py-3 text-navy font-semibold text-sm rounded-xl hover:text-navy-dark transition-colors duration-200"
                >
                  <span>View Full Testing Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted-bg py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Why Choose TEJMET?
            </h2>
            <p className="mt-3 text-slate-gray text-lg">
              We combine technical depth with practical efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-sky-mid hover:border-navy hover:shadow-[0_8px_24px_rgba(21,101,192,0.12)] transition-all duration-200 flex flex-col p-7 rounded-2xl group"
              >
                <div className="w-14 h-14 bg-sky group-hover:bg-sky-mid text-navy group-hover:text-navy-dark rounded-2xl flex items-center justify-center mb-5 transition-colors duration-200 shadow-sm">
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-gray leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative bg-navy-dark py-24 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-white/15">
            <Zap className="w-3.5 h-3.5 text-amber-light" />
            Direct Engineering Assistance
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Solve Your Corrosion Challenge?
          </h2>
          <p className="mt-5 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Talk to our engineering team. Get expert guidance, sample dispatch instructions, and a tailored testing quotation within 24 hours.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber hover:bg-amber-dark text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              <span>Request a Quote / RFQ</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/lab-testing"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/15 hover:bg-white/25 border border-white/40 text-white font-semibold rounded-xl transition-colors"
            >
              View Test Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import {
  ArrowRight,
  Clock,
  FlaskConical,
  Shield,
  FileText,
  CheckCircle,
  Microscope,
} from 'lucide-react';
import { whyChooseUs } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-7 h-7" />,
  FlaskConical: <FlaskConical className="w-7 h-7" />,
  Shield: <Shield className="w-7 h-7" />,
  FileText: <FileText className="w-7 h-7" />,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
        {/* Geometric background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute -top-32 -right-32 w-[700px] h-[700px] opacity-[0.04]"
            viewBox="0 0 700 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="350" cy="350" r="320" stroke="white" strokeWidth="80" />
            <circle cx="350" cy="350" r="200" stroke="white" strokeWidth="60" />
            <circle cx="350" cy="350" r="80" stroke="white" strokeWidth="40" />
          </svg>
          <svg
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] opacity-[0.04]"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="80"
              y="80"
              width="340"
              height="340"
              stroke="white"
              strokeWidth="60"
              transform="rotate(45 250 250)"
            />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-dark" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-light" />
              <span className="text-white/80 text-sm font-medium">
                ASTM &amp; NACE Certified Testing
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Expert Metallurgical &amp;{' '}
              <span className="text-amber-light">Corrosion Consultancy</span> Services
            </h1>

            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
              Providing specialized materials performance analysis, failure diagnostics, and
              laboratory testing for critical industries. Trusted by clients in oil &amp; gas,
              aerospace, construction, and biomedical sectors.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/consultancy"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber hover:bg-amber-dark text-white font-semibold rounded-lg transition-colors duration-150 shadow-lg"
              >
                Explore Consulting
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/lab-testing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg transition-colors duration-150"
              >
                View Testing Catalog
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-sm">
              {[
                { value: '9+', label: 'Test Methods' },
                { value: 'ASTM', label: 'Compliant' },
                { value: '2 Day', label: 'Turnaround' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/50 mt-0.5 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy">
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
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy">Our Core Divisions</h2>
            <p className="mt-3 text-slate-gray">
              Two integrated service arms — consultancy and laboratory testing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Consultancy Card */}
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-navy transition-colors duration-200">
                <Shield className="w-6 h-6 text-navy group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Consultancy Services</h3>
              <p className="text-slate-gray leading-relaxed mb-5">
                Engineering advice on materials selection, corrosion prevention strategy, failure
                analysis, cathodic protection design, and regulatory compliance. Tailored to your
                industry, environment, and project requirements.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Materials Selection & Recommendation',
                  'Failure Analysis & Root Cause Diagnosis',
                  'Corrosion Mitigation Strategy',
                  'Lifecycle Cost Analysis',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-gray">
                    <CheckCircle className="w-4 h-4 text-amber shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/consultancy"
                className="inline-flex items-center gap-1 text-navy font-semibold text-sm hover:text-amber transition-colors"
              >
                Explore Consulting Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Lab Testing Card */}
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-amber/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber transition-colors duration-200">
                <Microscope className="w-6 h-6 text-amber group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Laboratory Testing Services</h3>
              <p className="text-slate-gray leading-relaxed mb-5">
                ASTM and NACE compliant electrochemical, mechanical, and corrosion testing with
                transparent public pricing. From potentiodynamic polarization to corrosion coupon
                analysis — results delivered in days, not weeks.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Electrochemical Corrosion Testing (ASTM G5, G59)',
                  'Pitting & Crevice Corrosion (ASTM G48)',
                  'Medical Implant Testing (ASTM F2129)',
                  'Corrosion Coupon Analysis (NACE RP0775)',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-gray">
                    <CheckCircle className="w-4 h-4 text-amber shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/lab-testing"
                className="inline-flex items-center gap-1 text-navy font-semibold text-sm hover:text-amber transition-colors"
              >
                View Testing Catalog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy">Why Choose TEJMET?</h2>
            <p className="mt-3 text-slate-gray">
              We combine technical depth with practical efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-border hover:border-amber hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-14 h-14 bg-navy/5 group-hover:bg-amber/10 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-200">
                  <span className="text-navy group-hover:text-amber transition-colors duration-200">
                    {iconMap[item.icon]}
                  </span>
                </div>
                <h3 className="text-base font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-gray leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Solve Your Corrosion Challenge?
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
            Talk to our engineering team. Get expert guidance and a tailored testing plan.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber hover:bg-amber-dark text-white font-semibold rounded-lg transition-colors shadow-lg"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/lab-testing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg transition-colors"
            >
              View Test Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import {
  Settings,
  Search,
  Activity,
  Shield,
  Clipboard,
  CheckSquare,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Compass,
  Microscope,
  FileText,
  Sparkles,
} from 'lucide-react';
import { consultancyServices } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  Settings: <Settings className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Clipboard: <Clipboard className="w-6 h-6" />,
  CheckSquare: <CheckSquare className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Microscope: <Microscope className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
};

export default function ConsultancyPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-navy bg-tech-grid pt-36 pb-20 overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm">
            <Compass className="w-4 h-4 text-amber-light" />
            <span className="text-white text-xs sm:text-sm font-semibold">
              Metallurgical &amp; Corrosion Engineering Consultancy
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl tracking-tight">
            Consultancy Services
          </h1>
          <p className="mt-5 text-white/90 text-lg max-w-2xl leading-relaxed">
            Authoritative engineering advice across materials selection, forensic failure analysis,
            microstructural characterization, cathodic protection, and regulatory compliance — tailored
            to your specific industry and operating environment.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber hover:bg-amber-dark text-white font-bold rounded-xl transition-all duration-200 shadow-xl shadow-navy-dark/40 hover:-translate-y-0.5 border border-amber-400/30"
            >
              <span>Enquire About a Service</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/lab-testing"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/15 hover:bg-white/25 border border-white/25 text-white font-semibold rounded-xl transition-colors backdrop-blur-sm"
            >
              View Lab Testing
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-light-bg py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Our Consultancy Scope
            </h2>
            <p className="mt-3 text-slate-gray text-base max-w-2xl mx-auto">
              Derived directly from our comprehensive practice scope — each service can be engaged independently or integrated into asset lifecycle programmes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {consultancyServices.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-xl p-8 sm:p-9 border border-sky-mid hover:border-blue-accent hover:shadow-md card-hover transition-all duration-200 scroll-mt-28 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-sky-mid group-hover:bg-navy text-navy group-hover:text-white rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-200 shadow-sm">
                      {iconMap[service.icon] || <Compass className="w-6 h-6" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-navy-dark bg-sky-strong px-2.5 py-0.5 rounded-md border border-sky-strong font-mono">
                          Service {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-navy leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-gray text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 text-sm text-slate-gray">
                        <CheckCircle className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-sky-mid flex items-center justify-between">
                  <span className="text-xs font-semibold text-steel">
                    Comprehensive Engineering Support
                  </span>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-accent hover:text-amber transition-colors"
                  >
                    Request Consultation <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="bg-white py-24 border-t border-sky-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Our Engagement Process
            </h2>
            <p className="mt-3 text-slate-gray text-lg">A simple, transparent workflow from consultation to forensic resolution.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                desc: 'Share your challenge. We listen and assess the scope, environment, and material details.',
              },
              {
                step: '02',
                title: 'Proposal & Plan',
                desc: 'We deliver a clear, itemized service proposal with timelines and pricing.',
              },
              {
                step: '03',
                title: 'Testing & Analysis',
                desc: 'Our engineers conduct field inspections and laboratory analysis to gather data.',
              },
              {
                step: '04',
                title: 'Report & Recommendations',
                desc: 'A detailed technical report with findings, root causes, and actionable solutions.',
              },
            ].map((step) => (
              <div
                key={step.step}
                className="relative p-6 rounded-2xl bg-sky border border-sky-mid hover:border-blue-accent card-hover transition-all"
              >
                <div className="text-5xl font-black text-blue-accent/10 mb-3 font-mono">{step.step}</div>
                <h3 className="text-base font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-slate-gray leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-navy-dark py-20 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Start?
          </h2>
          <p className="mt-4 text-white/90 max-w-lg mx-auto leading-relaxed">
            Request a consultation and our engineering team will respond within 24–48 hours with a customized scope proposal.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber hover:bg-amber-dark text-white font-bold rounded-xl transition-colors shadow-lg border border-amber-400/30"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

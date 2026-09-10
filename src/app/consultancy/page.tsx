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
};

export default function ConsultancyPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute -top-20 right-0 w-[600px] h-[600px] opacity-[0.04]"
            viewBox="0 0 600 600"
            fill="none"
          >
            <circle cx="400" cy="200" r="350" stroke="white" strokeWidth="80" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-light" />
            <span className="text-white/80 text-sm font-medium">Engineering Consultancy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl">
            Consultancy Services
          </h1>
          <p className="mt-5 text-white/70 text-lg max-w-2xl leading-relaxed">
            Expert engineering advice across materials selection, corrosion prevention, failure
            analysis, and regulatory compliance — tailored to your specific industry and environment.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber hover:bg-amber-dark text-white font-semibold rounded-lg transition-colors"
            >
              Enquire About a Service <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/lab-testing"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg transition-colors"
            >
              View Lab Testing
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy">Our Consultancy Scope</h2>
            <p className="mt-3 text-slate-gray max-w-2xl mx-auto">
              Each service can be engaged independently or as part of a comprehensive corrosion
              management programme.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {consultancyServices.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl p-8 border border-border hover:shadow-md transition-all duration-200 scroll-mt-20 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/5 group-hover:bg-navy rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200">
                    <span className="text-navy group-hover:text-white transition-colors duration-200">
                      {iconMap[service.icon]}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-amber bg-amber/10 px-2 py-0.5 rounded-full">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-3">{service.title}</h3>
                    <p className="text-slate-gray text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-slate-gray">
                          <CheckCircle className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy">Our Engagement Process</h2>
            <p className="mt-3 text-slate-gray">A simple, transparent workflow.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div key={step.step} className="relative">
                <div className="text-5xl font-black text-navy/5 mb-3">{step.step}</div>
                <h3 className="text-base font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-slate-gray leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white">Ready to Start?</h2>
          <p className="mt-3 text-white/70 max-w-lg mx-auto">
            Request a consultation and our engineering team will respond within 24–48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-amber hover:bg-amber-dark text-white font-semibold rounded-lg transition-colors shadow-lg"
          >
            Request a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

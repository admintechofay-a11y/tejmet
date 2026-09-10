import Link from 'next/link';
import { ArrowRight, Tag, FlaskConical } from 'lucide-react';
import { labTests } from '@/lib/data';

const typeColors: Record<string, string> = {
  'Electrochemical Corrosion': 'bg-blue-50 text-blue-700',
  'Biocompatibility Testing': 'bg-purple-50 text-purple-700',
  'Localized Corrosion': 'bg-orange-50 text-orange-700',
  'Materials Testing': 'bg-green-50 text-green-700',
  'Accelerated Corrosion': 'bg-red-50 text-red-700',
  'Corrosion Identification': 'bg-teal-50 text-teal-700',
  'Corrosion Inspection': 'bg-sky-50 text-sky-700',
  'Coupon Analysis': 'bg-indigo-50 text-indigo-700',
};

export default function LabTestingPage() {
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
            <circle cx="400" cy="200" r="200" stroke="white" strokeWidth="60" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-light" />
            <span className="text-white/80 text-sm font-medium">ASTM & NACE Compliant</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl">
            Laboratory Testing Catalog
          </h1>
          <p className="mt-5 text-white/70 text-lg max-w-2xl leading-relaxed">
            Comprehensive corrosion and materials testing services with transparent pricing.
            Select a test below and use the &ldquo;Request This Test&rdquo; link to enquire directly.
          </p>
        </div>
      </section>

      {/* Summary Table */}
      <section className="bg-white py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <h2 className="text-xl font-bold text-navy mb-6">Quick Reference Table</h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Test Name</th>
                <th className="text-left px-4 py-3 font-semibold">Standard</th>
                <th className="text-left px-4 py-3 font-semibold">Type</th>
                <th className="text-right px-4 py-3 font-semibold rounded-tr-lg">Price</th>
              </tr>
            </thead>
            <tbody>
              {labTests.map((test, i) => (
                <tr
                  key={test.id}
                  className={`border-b border-border hover:bg-light-bg transition-colors ${
                    i % 2 === 0 ? 'bg-white' : 'bg-light-bg/50'
                  }`}
                >
                  <td className="px-4 py-3 font-medium text-navy">
                    <a href={`#${test.id}`} className="hover:text-amber transition-colors">
                      {test.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-slate-gray font-mono text-xs">{test.standard}</td>
                  <td className="px-4 py-3 text-slate-gray">{test.type}</td>
                  <td className="px-4 py-3 text-right font-semibold text-navy">{test.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Test Cards */}
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy">Detailed Test Information</h2>
            <p className="mt-3 text-slate-gray">
              Click &ldquo;Request This Test&rdquo; on any card to submit an enquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {labTests.map((test) => (
              <div
                key={test.id}
                id={test.id}
                className="bg-white rounded-2xl border border-border hover:shadow-md transition-all duration-200 flex flex-col scroll-mt-20 group"
              >
                {/* Card Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 bg-navy/5 group-hover:bg-navy rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200">
                      <FlaskConical className="w-5 h-5 text-navy group-hover:text-white transition-colors duration-200" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        typeColors[test.type] || 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {test.type}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-navy leading-tight">{test.name}</h3>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Tag className="w-3.5 h-3.5 text-steel shrink-0" />
                    <span className="text-xs font-mono text-steel">{test.standard}</span>
                  </div>
                  <p className="text-sm text-slate-gray leading-relaxed flex-1">{test.scope}</p>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
                    <div>
                      <p className="text-xs text-steel uppercase tracking-wide">Pricing</p>
                      <p
                        className={`text-base font-bold ${
                          test.priceValue ? 'text-navy' : 'text-amber'
                        }`}
                      >
                        {test.price}
                      </p>
                    </div>
                    <Link
                      href={`/contact?test=${encodeURIComponent(test.name)}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber hover:bg-amber-dark text-white text-xs font-semibold rounded-lg transition-colors"
                    >
                      Request Test <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Notice */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy/5 border border-navy/10 rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-6">
            <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center shrink-0">
              <FlaskConical className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                All Tests Conducted to International Standards
              </h3>
              <p className="text-slate-gray text-sm leading-relaxed">
                Every test at TEJMET is performed in compliance with ASTM, NACE, and ISO standards.
                We maintain strict quality protocols, and every report includes raw data, photography,
                and expert conclusions. Custom testing parameters are available — contact us to discuss
                your specific requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-4 text-navy font-semibold text-sm hover:text-amber transition-colors"
              >
                Discuss Custom Requirements <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white">Have a Sample Ready to Test?</h2>
          <p className="mt-3 text-white/70 max-w-lg mx-auto">
            Submit your enquiry and our team will confirm sample requirements, turnaround time,
            and final pricing within 24–48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-amber hover:bg-amber-dark text-white font-semibold rounded-lg transition-colors shadow-lg"
          >
            Request a Test <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

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
} from 'lucide-react';
import { teamMembers, industries } from '@/lib/data';

const industryIconMap: Record<string, React.ReactNode> = {
  Droplets: <Droplets className="w-7 h-7" />,
  Plane: <Plane className="w-7 h-7" />,
  Building2: <Building2 className="w-7 h-7" />,
  Factory: <Factory className="w-7 h-7" />,
  HeartPulse: <HeartPulse className="w-7 h-7" />,
  Beaker: <Beaker className="w-7 h-7" />,
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.04]"
            viewBox="0 0 500 500"
            fill="none"
          >
            <circle cx="350" cy="150" r="280" stroke="white" strokeWidth="70" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-light" />
            <span className="text-white/80 text-sm font-medium">About TEJMET</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl">
            Decades of Metallurgical &amp; Corrosion Expertise
          </h1>
          <p className="mt-5 text-white/70 text-lg max-w-2xl leading-relaxed">
            TEJMET Consultancy Services was founded to bridge the gap between advanced corrosion
            science and practical industrial solutions — delivering accurate, timely, and
            high-quality metallurgical assessments.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-amber/10 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-amber" />
                </div>
                <h2 className="text-2xl font-bold text-navy">Our Mission</h2>
              </div>
              <p className="text-slate-gray leading-relaxed text-lg mb-6">
                To deliver accurate, timely, and high-quality metallurgical assessments that preserve
                asset integrity and prevent catastrophic structural failures — at every stage of the
                asset lifecycle.
              </p>
              <p className="text-slate-gray leading-relaxed">
                We believe that the right materials knowledge, applied at the right time, is the most
                cost-effective tool against corrosion. Our engineers combine field experience with
                laboratory precision to give clients the complete picture.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '9+', label: 'Test Methods', sub: 'ASTM & NACE compliant' },
                { value: '2 Day', label: 'Turnaround', sub: 'For most test services' },
                { value: '6+', label: 'Industries', sub: 'Served across sectors' },
                { value: '100%', label: 'Compliance', sub: 'International standards' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-light-bg rounded-2xl p-6 border border-border"
                >
                  <p className="text-3xl font-bold text-navy">{stat.value}</p>
                  <p className="text-sm font-semibold text-slate-gray mt-1">{stat.label}</p>
                  <p className="text-xs text-steel mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy">Industries We Serve</h2>
            <p className="mt-3 text-slate-gray">
              Our services are applied across a wide range of critical industrial sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border border-border hover:border-navy hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-14 h-14 bg-navy/5 group-hover:bg-navy rounded-2xl flex items-center justify-center mb-3 transition-colors duration-200">
                  <span className="text-navy group-hover:text-white transition-colors duration-200">
                    {industryIconMap[industry.icon]}
                  </span>
                </div>
                <p className="text-sm font-semibold text-navy leading-tight">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy">Our Expert Team</h2>
            <p className="mt-3 text-slate-gray">
              Qualified engineers with deep domain knowledge in metallurgy and corrosion science.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-light-bg rounded-2xl p-6 border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-lg">{member.initials}</span>
                  </div>
                  <div>
                    <p className="font-bold text-navy">{member.name}</p>
                    <p className="text-sm text-amber font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-xs text-steel mb-1">{member.qualifications}</p>
                <p className="text-sm text-slate-gray">
                  <span className="font-medium text-navy">Expertise:</span> {member.expertise}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-steel mt-6">
            Team profiles are representative placeholders — contact us to speak directly with a qualified engineer.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white">
            Let&apos;s Discuss Your Project Requirements
          </h2>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">
            Our team is ready to provide expert guidance tailored to your industry and materials
            challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-amber hover:bg-amber-dark text-white font-semibold rounded-lg transition-colors shadow-lg"
          >
            Contact Our Engineers <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

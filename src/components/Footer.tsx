import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, ArrowRight, ShieldCheck, MessageSquare, CheckCircle2 } from 'lucide-react';
import { CONTACT } from '@/lib/data';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Consultancy Services', href: '/consultancy' },
  { label: 'Lab Testing Catalog', href: '/lab-testing' },
  { label: 'Request a Quote (RFQ)', href: '/contact' },
];

const consultancyLinks = [
  { label: 'Materials Selection & Recommendation', href: '/consultancy#materials-selection' },
  { label: 'Failure Analysis & Root Cause', href: '/consultancy#failure-analysis' },
  { label: 'Corrosion Assessment & Diagnostics', href: '/consultancy#corrosion-assessment' },
  { label: 'Corrosion Mitigation Strategy', href: '/consultancy#corrosion-mitigation' },
  { label: 'Prevention & Control Planning', href: '/consultancy#prevention-planning' },
  { label: 'Quality Assurance & Regulatory', href: '/consultancy#quality-assurance' },
];

const labStandards = [
  'ASTM G5 Potentiodynamic Polarization',
  'ASTM G48 Pitting & Crevice Testing',
  'ASTM F2129 Medical Implant Durability',
  'ASTM A262 Intergranular Corrosion',
  'ASTM B117 / G85 Salt Spray Testing',
  'NACE RP0775 Corrosion Coupon Analysis',
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-5 group">
              <div className="bg-amber px-3 py-2 rounded-xl shadow-md inline-flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/tejmet-logo-white.png"
                  alt="TEJMET Consultancy Services"
                  width={140}
                  height={44}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-sm">
              TEJMET Consultancy Services delivers authoritative metallurgical engineering,
              corrosion mitigation strategies, and ASTM/NACE compliant laboratory testing for
              critical infrastructure, aerospace, marine, and biomedical applications.
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2.5 text-white/80 hover:text-sky-deep transition-colors"
              >
                <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-sky-deep" />
                </div>
                <span>{CONTACT.email}</span>
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-2.5 text-white/80 hover:text-sky-deep transition-colors"
              >
                <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-sky-deep" />
                </div>
                <span>+91 {CONTACT.phone}</span>
              </a>
              <a
                href={`https://wa.me/91${CONTACT.phone}?text=Hello%20TEJMET,%20I%20have%20an%20enquiry%20regarding%20testing%20services`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <div className="w-7 h-7 rounded-md bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span>Direct WhatsApp Consultation</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold text-sky-mid uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-xs text-white/70 hover:text-sky-deep transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-sky-deep opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Consultancy Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold text-sky-mid uppercase tracking-widest mb-4">
              Consultancy Scope
            </h3>
            <ul className="flex flex-col gap-2">
              {consultancyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-xs text-white/70 hover:text-sky-deep transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-sky-deep opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                    <span className="line-clamp-1">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Testing Standards & CTA */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold text-sky-mid uppercase tracking-widest mb-4">
              Testing Standards
            </h3>
            <ul className="flex flex-col gap-1.5 mb-6">
              {labStandards.map((std) => (
                <li key={std} className="flex items-center gap-2 text-[11px] text-white/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-light shrink-0" />
                  <span className="font-mono">{std}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-amber hover:bg-amber-dark text-white text-xs font-bold rounded-lg transition-colors shadow-lg"
            >
              <span>Submit RFQ / Sample Request</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>
            &copy; {new Date().getFullYear()} TEJMET Consultancy Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Strict Technical Confidentiality (NDA)
            </span>
            <span>&bull;</span>
            <span>ASTM &amp; NACE Protocol Adherence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

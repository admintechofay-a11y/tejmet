import Link from 'next/link';
import { Mail, Phone, FlaskConical, ArrowRight } from 'lucide-react';
import { CONTACT } from '@/lib/data';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Consultancy Services', href: '/consultancy' },
  { label: 'Lab Testing', href: '/lab-testing' },
  { label: 'Contact Us', href: '/contact' },
];

const consultancyLinks = [
  { label: 'Materials Selection', href: '/consultancy#materials-selection' },
  { label: 'Failure Analysis', href: '/consultancy#failure-analysis' },
  { label: 'Corrosion Assessment', href: '/consultancy#corrosion-assessment' },
  { label: 'Corrosion Mitigation', href: '/consultancy#corrosion-mitigation' },
  { label: 'Quality Assurance', href: '/consultancy#quality-assurance' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber rounded flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">TEJMET</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Expert metallurgical and corrosion consultancy services. ASTM & NACE compliant laboratory testing for critical industries.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-amber-light transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {CONTACT.email}
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-amber-light transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {CONTACT.phone}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm text-white/60 hover:text-amber-light transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Consultancy Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Consultancy</h3>
            <ul className="flex flex-col gap-2">
              {consultancyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm text-white/60 hover:text-amber-light transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get in Touch</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Have a project or sample you need analyzed? Our engineering team is ready to assist.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber hover:bg-amber-dark text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} TEJMET Consultancy Services. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            tejmetconsultancy@gmail.com &nbsp;|&nbsp; 8780547419
          </p>
        </div>
      </div>
    </footer>
  );
}

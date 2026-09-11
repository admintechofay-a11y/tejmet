'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  FlaskConical,
  Compass,
} from 'lucide-react';
import { consultancyDropdownLinks, labTestingDropdownLinks, CONTACT } from '@/lib/data';

function DropdownMenu({
  links,
  isOpen,
  type = 'consultancy',
}: {
  links: { label: string; href: string }[];
  isOpen: boolean;
  type?: 'consultancy' | 'testing';
}) {
  return (
    <div
      className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-[0_8px_32px_rgba(21,101,192,0.15)] border border-sky-mid py-3 z-50 transition-all duration-200 ${
        isOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      <div className="px-4 pb-2 mb-2 border-b border-sky-mid flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-steel">
          {type === 'consultancy' ? 'Engineering Services' : 'ASTM & NACE Testing'}
        </span>
        <span className="text-[10px] font-semibold text-navy bg-sky px-2 py-0.5 rounded-full border border-sky-mid">
          {links.length} Services
        </span>
      </div>
      <div className="max-h-[380px] overflow-y-auto divide-y divide-sky/50">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center justify-between px-4 py-2.5 text-xs font-medium text-slate-gray hover:bg-sky hover:text-navy transition-colors group"
          >
            <span>{link.label}</span>
            <ArrowRight className="w-3.5 h-3.5 text-steel opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </Link>
        ))}
      </div>
      <div className="px-3 pt-2 mt-1 border-t border-sky-mid">
        <Link
          href={type === 'consultancy' ? '/consultancy' : '/lab-testing'}
          className="block text-center py-1.5 text-xs font-semibold text-navy hover:text-navy-dark transition-colors"
        >
          View Full {type === 'consultancy' ? 'Consultancy' : 'Testing'} Scope &rarr;
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [consultancyOpen, setConsultancyOpen] = useState(false);
  const [labTestingOpen, setLabTestingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const consultancyRef = useRef<HTMLDivElement>(null);
  const labTestingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (consultancyRef.current && !consultancyRef.current.contains(e.target as Node)) {
        setConsultancyOpen(false);
      }
      if (labTestingRef.current && !labTestingRef.current.contains(e.target as Node)) {
        setLabTestingOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setConsultancyOpen(false);
    setLabTestingOpen(false);
  }, [pathname]);

  const linkClass = (href: string) =>
    `text-sm transition-colors duration-150 px-3 py-2 rounded-lg ${
      pathname === href
        ? 'text-navy font-semibold'
        : 'text-slate-gray hover:text-navy'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-[0_2px_12px_rgba(21,101,192,0.12)] border-b border-sky-mid'
          : 'bg-white border-b border-sky-mid'
      }`}
    >
      {/* Top Utility Bar */}
      <div className="hidden md:block bg-muted-bg border-b border-sky-mid py-1.5 text-xs text-slate-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 font-medium text-slate-gray">
              <ShieldCheck className="w-3.5 h-3.5 text-navy" />
              ASTM &amp; NACE Compliant Laboratory Testing &amp; Consultancy
            </span>
            <span className="text-sky-mid">|</span>
            <span className="text-steel">Response SLA: 24–48 Business Hours</span>
          </div>
          <div className="flex items-center gap-5 font-medium">
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-navy transition-colors text-slate-gray"
            >
              <Phone className="w-3 h-3 text-navy" />
              +91 {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-1.5 hover:text-navy transition-colors text-slate-gray"
            >
              <Mail className="w-3 h-3 text-navy" />
              {CONTACT.email}
            </a>
            <a
              href={`https://wa.me/91${CONTACT.phone}?text=Hello%20TEJMET,%20I%20have%20an%20enquiry%20regarding%20testing%20services`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-emerald-600/10 text-emerald-700 hover:bg-emerald-600/20 transition-colors border border-emerald-500/30"
            >
              <MessageSquare className="w-3 h-3" />
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Real Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="bg-navy px-2.5 py-1.5 rounded-lg shadow-sm border border-navy-light flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/tejmet-logo-white.png"
                alt="TEJMET Consultancy Services"
                width={120}
                height={38}
                className="h-9 w-auto object-contain"
                priority
              />
            </div>
            <div className="hidden xl:block text-left">
              <span className="block text-lg font-bold text-navy uppercase tracking-widest leading-none">
                TEJMET
              </span>
              <span className="block text-[11px] text-slate-gray leading-tight mt-0.5">
                Consultancy &amp; Testing Lab
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className={linkClass('/')}>
              Home
            </Link>
            <Link href="/about" className={linkClass('/about')}>
              About Us
            </Link>

            {/* Consultancy Services Dropdown */}
            <div ref={consultancyRef} className="relative">
              <button
                onClick={() => {
                  setConsultancyOpen((v) => !v);
                  setLabTestingOpen(false);
                }}
                className={`flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150 px-3 py-2 rounded-lg ${
                  pathname.startsWith('/consultancy')
                    ? 'text-navy font-semibold'
                    : 'text-slate-gray hover:text-navy'
                }`}
              >
                <Compass className="w-4 h-4 text-navy" />
                Consultancy Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    consultancyOpen ? 'rotate-180 text-navy' : 'text-slate-gray'
                  }`}
                />
              </button>
              <DropdownMenu
                links={consultancyDropdownLinks}
                isOpen={consultancyOpen}
                type="consultancy"
              />
            </div>

            {/* Lab Testing Dropdown */}
            <div ref={labTestingRef} className="relative">
              <button
                onClick={() => {
                  setLabTestingOpen((v) => !v);
                  setConsultancyOpen(false);
                }}
                className={`flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150 px-3 py-2 rounded-lg ${
                  pathname.startsWith('/lab-testing')
                    ? 'text-navy font-semibold'
                    : 'text-slate-gray hover:text-navy'
                }`}
              >
                <FlaskConical className="w-4 h-4 text-amber" />
                Lab Testing
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    labTestingOpen ? 'rotate-180 text-navy' : 'text-slate-gray'
                  }`}
                />
              </button>
              <DropdownMenu
                links={labTestingDropdownLinks}
                isOpen={labTestingOpen}
                type="testing"
              />
            </div>

            <Link href="/contact" className={linkClass('/contact')}>
              Contact Us
            </Link>
          </nav>

          {/* Action CTAs + Mobile Trigger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-navy hover:bg-navy-dark text-white text-sm font-bold rounded-lg transition-all duration-200 shadow-md hover:shadow-[0_4px_16px_rgba(21,101,192,0.25)] hover:-translate-y-0.5"
            >
              <span>Request Quote / RFQ</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 text-navy hover:text-navy-dark rounded-lg hover:bg-sky transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden bg-white border-t border-sky-mid shadow-lg overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[90vh] overflow-y-auto' : 'max-h-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-2">
          {/* Quick contact strip on mobile */}
          <div className="p-3 bg-sky rounded-xl border border-sky-mid flex items-center justify-between text-xs mb-2">
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-1.5 text-navy font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-navy" />
              +91 {CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/91${CONTACT.phone}?text=Hello%20TEJMET`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 rounded bg-emerald-500/10 text-emerald-700 text-xs font-semibold border border-emerald-500/20"
            >
              <MessageSquare className="w-3 h-3" />
              WhatsApp
            </a>
          </div>

          <Link
            href="/"
            className="px-3 py-2.5 text-slate-gray hover:text-navy text-sm font-semibold rounded-lg hover:bg-sky transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-3 py-2.5 text-slate-gray hover:text-navy text-sm font-semibold rounded-lg hover:bg-sky transition-colors"
          >
            About Us
          </Link>

          {/* Mobile Consultancy Submenu */}
          <div>
            <button
              onClick={() => setConsultancyOpen((v) => !v)}
              className="flex items-center justify-between px-3 py-2.5 text-slate-gray hover:text-navy text-sm font-semibold rounded-lg hover:bg-sky transition-colors w-full text-left"
            >
              <span className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-navy" />
                Consultancy Services
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${consultancyOpen ? 'rotate-180 text-navy' : ''}`}
              />
            </button>
            {consultancyOpen && (
              <div className="pl-6 pr-2 py-1 flex flex-col gap-1 border-l-2 border-navy ml-4 my-1">
                {consultancyDropdownLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-steel hover:text-navy text-xs rounded-lg hover:bg-sky transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Lab Testing Submenu */}
          <div>
            <button
              onClick={() => setLabTestingOpen((v) => !v)}
              className="flex items-center justify-between px-3 py-2.5 text-slate-gray hover:text-navy text-sm font-semibold rounded-lg hover:bg-sky transition-colors w-full text-left"
            >
              <span className="flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-amber" />
                Lab Testing
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${labTestingOpen ? 'rotate-180 text-navy' : ''}`}
              />
            </button>
            {labTestingOpen && (
              <div className="pl-6 pr-2 py-1 flex flex-col gap-1 border-l-2 border-amber ml-4 my-1">
                {labTestingDropdownLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-steel hover:text-navy text-xs rounded-lg hover:bg-sky transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="px-3 py-2.5 text-slate-gray hover:text-navy text-sm font-semibold rounded-lg hover:bg-sky transition-colors"
          >
            Contact Us
          </Link>

          <div className="pt-3 border-t border-sky-mid mt-2">
            <Link
              href="/contact"
              className="block text-center px-4 py-3 bg-amber hover:bg-amber-dark text-white text-sm font-bold rounded-lg transition-colors shadow-lg"
            >
              Request a Quote / RFQ
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

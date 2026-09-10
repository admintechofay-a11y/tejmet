'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, FlaskConical } from 'lucide-react';
import { consultancyDropdownLinks, labTestingDropdownLinks } from '@/lib/data';

function DropdownMenu({
  links,
  isOpen,
}: {
  links: { label: string; href: string }[];
  isOpen: boolean;
}) {
  return (
    <div
      className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-border py-2 z-50 transition-all duration-200 ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="block px-4 py-2 text-sm text-slate-gray hover:bg-light-bg hover:text-navy transition-colors duration-150"
        >
          {link.label}
        </Link>
      ))}
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
    const handleScroll = () => setScrolled(window.scrollY > 10);
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
    `text-sm font-medium transition-colors duration-150 ${
      pathname === href ? 'text-amber-light' : 'text-white/90 hover:text-white'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-none'
      } bg-navy`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-amber rounded flex items-center justify-center">
              <FlaskConical className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-white text-lg tracking-tight leading-tight">
              TEJMET
              <span className="block text-xs font-normal text-white/60 leading-none tracking-wide">
                Consultancy Services
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
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
                className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-colors duration-150"
              >
                Consultancy Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    consultancyOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <DropdownMenu links={consultancyDropdownLinks} isOpen={consultancyOpen} />
            </div>

            {/* Lab Testing Dropdown */}
            <div ref={labTestingRef} className="relative">
              <button
                onClick={() => {
                  setLabTestingOpen((v) => !v);
                  setConsultancyOpen(false);
                }}
                className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-colors duration-150"
              >
                Lab Testing
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    labTestingOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <DropdownMenu links={labTestingDropdownLinks} isOpen={labTestingOpen} />
            </div>

            <Link href="/contact" className={linkClass('/contact')}>
              Contact Us
            </Link>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-amber hover:bg-amber-dark text-white text-sm font-semibold rounded-lg transition-colors duration-150"
            >
              Request a Quote
            </Link>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 text-white hover:text-amber-light transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-navy-dark border-t border-white/10 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          <Link href="/" className="px-3 py-2 text-white/90 hover:text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors">
            Home
          </Link>
          <Link href="/about" className="px-3 py-2 text-white/90 hover:text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors">
            About Us
          </Link>

          {/* Mobile Consultancy Submenu */}
          <button
            onClick={() => setConsultancyOpen((v) => !v)}
            className="flex items-center justify-between px-3 py-2 text-white/90 hover:text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors w-full text-left"
          >
            Consultancy Services
            <ChevronDown className={`w-4 h-4 transition-transform ${consultancyOpen ? 'rotate-180' : ''}`} />
          </button>
          {consultancyOpen && (
            <div className="pl-4 flex flex-col gap-1">
              {consultancyDropdownLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-white/70 hover:text-white text-sm rounded-lg hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Lab Testing Submenu */}
          <button
            onClick={() => setLabTestingOpen((v) => !v)}
            className="flex items-center justify-between px-3 py-2 text-white/90 hover:text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors w-full text-left"
          >
            Lab Testing
            <ChevronDown className={`w-4 h-4 transition-transform ${labTestingOpen ? 'rotate-180' : ''}`} />
          </button>
          {labTestingOpen && (
            <div className="pl-4 flex flex-col gap-1">
              {labTestingDropdownLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-white/70 hover:text-white text-sm rounded-lg hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <Link href="/contact" className="px-3 py-2 text-white/90 hover:text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors">
            Contact Us
          </Link>

          <div className="pt-2 border-t border-white/10 mt-1">
            <Link
              href="/contact"
              className="block text-center px-4 py-2 bg-amber hover:bg-amber-dark text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

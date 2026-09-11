'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Mail,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Copy,
  Check,
  FileCheck2,
  FlaskConical,
  Compass,
  PackageCheck,
  Info,
} from 'lucide-react';
import { CONTACT, labTests, consultancyServices } from '@/lib/data';

const serviceCategories = [
  'Laboratory Testing Request',
  'Consultancy Inquiry',
  'General Inquiry',
];

const specificServices = [
  ...labTests.map((t) => t.name),
  ...consultancyServices.map((s) => s.title),
  'Other / Custom',
];

function ContactContent() {
  const searchParams = useSearchParams();
  const prefillTest = searchParams?.get('test') || searchParams?.get('service') || '';
  const prefillBreakdown = searchParams?.get('breakdown') || '';
  const prefillSamples = searchParams?.get('samples') || '';

  const [activeTab, setActiveTab] = useState<'testing' | 'consultancy' | 'general'>('testing');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    category: 'Laboratory Testing Request',
    service: prefillTest || '',
    sampleCount: prefillSamples || '1 - 5',
    alloyGrade: '',
    timeline: 'Standard (3-5 Days)',
    description: prefillBreakdown || '',
  });

  useEffect(() => {
    if (prefillBreakdown) {
      setForm((prev) => ({
        ...prev,
        category: 'Laboratory Testing Request',
        service: prefillTest || labTests[0].name,
        sampleCount: prefillSamples || prev.sampleCount,
        description: prefillBreakdown,
      }));
      setActiveTab('testing');
    } else if (prefillTest) {
      setForm((prev) => ({
        ...prev,
        category: 'Laboratory Testing Request',
        service: prefillTest,
      }));
      setActiveTab('testing');
    }
  }, [prefillTest, prefillBreakdown, prefillSamples]);

  function handleTabChange(tab: 'testing' | 'consultancy' | 'general') {
    setActiveTab(tab);
    if (tab === 'testing') {
      setForm((prev) => ({
        ...prev,
        category: 'Laboratory Testing Request',
        service: prev.service || labTests[0].name,
      }));
    } else if (tab === 'consultancy') {
      setForm((prev) => ({
        ...prev,
        category: 'Consultancy Inquiry',
        service: 'Materials Selection & Recommendation',
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        category: 'General Inquiry',
        service: 'Other / Custom',
      }));
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function generateSummaryText() {
    return [
      `=== TEJMET RFQ / ENQUIRY ===`,
      `Full Name: ${form.fullName}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Category: ${form.category}`,
      `Service / Standard: ${form.service || 'Not specified'}`,
      activeTab === 'testing' ? `Estimated Samples: ${form.sampleCount}` : null,
      activeTab === 'testing' && form.alloyGrade ? `Alloy / Material: ${form.alloyGrade}` : null,
      activeTab === 'testing' ? `Turnaround Requirement: ${form.timeline}` : null,
      `Project / Sample Description:`,
      form.description || 'N/A',
    ]
      .filter(Boolean)
      .join('\n');
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `Quote Request – ${form.category || 'General'} – ${form.fullName}`;
    const body = generateSummaryText();

    // Trigger standard email client without breaking original behavior
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  function handleCopy() {
    navigator.clipboard.writeText(generateSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-navy bg-tech-grid pt-36 pb-20 overflow-hidden">
        <div className="absolute top-10 -right-20 w-96 h-96 bg-blue-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-amber-light animate-pulse" />
            <span className="text-white text-xs sm:text-sm font-semibold">
              Fast Response Desk &bull; 24–48 Hour Engineering SLA
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl tracking-tight">
            Request a Quote or Consultation
          </h1>
          <p className="mt-5 text-white/90 text-lg max-w-2xl leading-relaxed">
            Fill in the engineering RFQ form below — our metallurgical team will evaluate your
            specifications, confirm sample dispatch requirements, and respond within 24–48 hours.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar / Trust & Contact Cards */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Direct Desks Card */}
              <div className="bg-white rounded-2xl border border-sky-mid p-6 shadow-sm">
                <h2 className="text-base font-bold text-navy mb-4 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-accent" />
                  Direct Technical Desks
                </h2>
                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:+91${CONTACT.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3.5 p-3.5 bg-sky rounded-xl border border-sky-mid hover:border-blue-accent hover:bg-sky-mid/50 transition-all group"
                  >
                    <div className="w-10 h-10 bg-sky-mid rounded-lg flex items-center justify-center shrink-0 group-hover:bg-navy transition-colors">
                      <Phone className="w-5 h-5 text-navy group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-steel uppercase tracking-wider">
                        Phone / Engineer Desk
                      </p>
                      <p className="text-sm font-bold text-navy">+91 {CONTACT.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-3.5 p-3.5 bg-sky rounded-xl border border-sky-mid hover:border-blue-accent hover:bg-sky-mid/50 transition-all group"
                  >
                    <div className="w-10 h-10 bg-sky-mid rounded-lg flex items-center justify-center shrink-0 group-hover:bg-navy transition-colors">
                      <Mail className="w-5 h-5 text-navy group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-steel uppercase tracking-wider">
                        Email Enquiries
                      </p>
                      <p className="text-xs font-bold text-navy break-all">{CONTACT.email}</p>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/91${CONTACT.phone.replace(/\s+/g, '')}?text=Hello%20TEJMET,%20I%20have%20an%20inquiry%20regarding%20testing`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-200 hover:bg-emerald-100/70 transition-all group"
                  >
                    <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center shrink-0 text-white">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">
                        Instant WhatsApp
                      </p>
                      <p className="text-xs font-bold text-emerald-950">Chat with Lead Metallurgist</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Sample Dispatch Guide Card */}
              <div className="bg-white rounded-2xl border border-sky-mid p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <PackageCheck className="w-5 h-5 text-amber" />
                  <h3 className="text-sm font-bold text-navy">Sample Dispatch Guidelines</h3>
                </div>
                <p className="text-xs text-slate-gray leading-relaxed mb-4">
                  For rapid testing turnaround, please adhere to standard specimen preparation guidelines:
                </p>
                <div className="space-y-2.5 text-xs text-slate-gray">
                  <div className="p-2.5 rounded-lg bg-sky border border-sky-mid">
                    <span className="font-bold text-navy block mb-0.5">Liquid Analysis (Level II)</span>
                    Minimum 500 mL sample in a sealed, clean container.
                  </div>
                  <div className="p-2.5 rounded-lg bg-sky border border-sky-mid">
                    <span className="font-bold text-navy block mb-0.5">Corrosion Coupons (NACE)</span>
                    Dry and bag coupons separately with sample identification tags.
                  </div>
                  <div className="p-2.5 rounded-lg bg-sky border border-sky-mid">
                    <span className="font-bold text-navy block mb-0.5">Electrochemical / Pitting</span>
                    Specify desired test electrolyte and temperature parameters.
                  </div>
                </div>
              </div>

              {/* Response SLA Card */}
              <div className="bg-white rounded-2xl border border-sky-mid p-5 shadow-sm flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-navy">Guaranteed Response Time</h3>
                  <p className="text-xs text-slate-gray mt-1 leading-relaxed">
                    Our engineering team reviews all enquiries and delivers a formal quotation within{' '}
                    <span className="font-bold text-navy">24–48 hours</span> on business days.
                  </p>
                </div>
              </div>

              {/* What to Include List */}
              <div className="bg-navy rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-4 h-4 text-amber-light" />
                  <h3 className="text-sm font-bold">What to Include in RFQ</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    'Material type and alloy grade (e.g. SS316, Inconel)',
                    'Operating environment / corrosive medium',
                    'Number of test samples or coupons',
                    'Preferred test standard (ASTM, NACE, or custom)',
                    'Project timeline or deadline urgency',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-white/80">
                      <CheckCircle className="w-4 h-4 text-amber-light shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-sky-strong/30 flex items-center gap-2 text-[11px] text-white/70">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>All customer inquiries and test data are protected under strict NDA.</span>
                </div>
              </div>
            </div>

            {/* Main Interactive Form Column */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="bg-white rounded-3xl border border-sky-mid p-8 sm:p-12 shadow-md flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-navy mb-2">
                    Enquiry Pre-Filled &amp; Mail Client Triggered
                  </h2>
                  <p className="text-slate-gray text-sm max-w-lg mb-8 leading-relaxed">
                    Your email client should have opened with all your project details ready to send to{' '}
                    <span className="font-bold text-navy">{CONTACT.email}</span>.
                    You can also send this inquiry directly via WhatsApp or copy the summary below.
                  </p>

                  {/* Multi-channel action buttons */}
                  <div className="flex flex-wrap gap-4 justify-center mb-8">
                    <a
                      href={`https://wa.me/91${CONTACT.phone.replace(/\s+/g, '')}?text=${encodeURIComponent(
                        generateSummaryText()
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-xl transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Send Directly via WhatsApp
                    </a>

                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-sky hover:bg-sky-mid text-navy text-sm font-bold rounded-xl transition-all border border-sky-strong"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          Copied to Clipboard!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy RFQ Summary
                        </>
                      )}
                    </button>
                  </div>

                  {/* Form Summary Preview */}
                  <div className="w-full text-left bg-sky border border-sky-mid rounded-2xl p-5 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-steel mb-3">
                      Generated Inquiry Preview
                    </p>
                    <pre className="text-xs text-slate-gray font-mono whitespace-pre-wrap leading-relaxed">
                      {generateSummaryText()}
                    </pre>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-semibold text-blue-accent hover:text-navy transition-colors"
                  >
                    &larr; Submit another inquiry or edit details
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl border border-sky-mid p-8 sm:p-10 shadow-md flex flex-col gap-6"
                >
                  {/* Category Switcher Tabs */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-steel mb-3">
                      Select Inquiry Type
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => handleTabChange('testing')}
                        className={`p-4 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                          activeTab === 'testing'
                            ? 'bg-sky border-blue-accent ring-2 ring-blue-accent/20'
                            : 'bg-white border-sky-mid hover:border-sky-strong hover:bg-sky/50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <FlaskConical
                            className={`w-4 h-4 ${
                              activeTab === 'testing' ? 'text-blue-accent' : 'text-steel'
                            }`}
                          />
                          <span className="text-sm font-bold text-navy">Laboratory Testing</span>
                        </div>
                        <span className="text-xs text-steel">ASTM &amp; NACE Standard Tests</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleTabChange('consultancy')}
                        className={`p-4 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                          activeTab === 'consultancy'
                            ? 'bg-sky border-blue-accent ring-2 ring-blue-accent/20'
                            : 'bg-white border-sky-mid hover:border-sky-strong hover:bg-sky/50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Compass
                            className={`w-4 h-4 ${
                              activeTab === 'consultancy' ? 'text-blue-accent' : 'text-steel'
                            }`}
                          />
                          <span className="text-sm font-bold text-navy">Consultancy</span>
                        </div>
                        <span className="text-xs text-steel">Failure Analysis &amp; Materials</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleTabChange('general')}
                        className={`p-4 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                          activeTab === 'general'
                            ? 'bg-sky border-blue-accent ring-2 ring-blue-accent/20'
                            : 'bg-white border-sky-mid hover:border-sky-strong hover:bg-sky/50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <FileCheck2
                            className={`w-4 h-4 ${
                              activeTab === 'general' ? 'text-blue-accent' : 'text-steel'
                            }`}
                          />
                          <span className="text-sm font-bold text-navy">General Inquiry</span>
                        </div>
                        <span className="text-xs text-steel">Corporate &amp; Training Info</span>
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-sky-mid pt-4">
                    <h2 className="text-lg font-bold text-navy mb-4">
                      {activeTab === 'testing'
                        ? 'Testing Quotation (RFQ) Parameters'
                        : activeTab === 'consultancy'
                        ? 'Consultancy & Failure Investigation Request'
                        : 'General Enquiry Form'}
                    </h2>

                    {/* Standard / Service Selector */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-gray uppercase tracking-wider mb-2">
                          Service Category
                        </label>
                        <select
                          name="category"
                          value={form.category}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-sky-strong text-sm font-medium text-slate-gray bg-white focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-blue-accent transition-colors"
                        >
                          {serviceCategories.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-gray uppercase tracking-wider mb-2">
                          Specific Test / Service Standard
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-sky-strong text-sm font-medium text-slate-gray bg-white focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-blue-accent transition-colors"
                        >
                          <option value="">Select a service or test standard</option>
                          <optgroup label="Laboratory Testing Standards (ASTM / NACE / ISO)">
                            {labTests.map((t) => (
                              <option key={t.id} value={t.name}>
                                {t.name} ({t.standard})
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="Consultancy &amp; Engineering Services">
                            {consultancyServices.map((s) => (
                              <option key={s.id} value={s.title}>
                                {s.title}
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="Other">
                            <option value="Other / Custom">Other / Custom Inquiry</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>

                    {/* Testing-specific RFQ parameters */}
                    {activeTab === 'testing' && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5 p-4 rounded-2xl bg-sky border border-sky-mid">
                        <div>
                          <label className="block text-xs font-bold text-slate-gray uppercase tracking-wider mb-1.5">
                            Estimated Samples
                          </label>
                          <select
                            name="sampleCount"
                            value={form.sampleCount}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 rounded-lg border border-sky-strong text-xs font-semibold text-navy bg-white focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-blue-accent"
                          >
                            <option value="1 - 2 Samples">1 – 2 Samples</option>
                            <option value="3 - 5 Samples">3 – 5 Samples</option>
                            <option value="6 - 15 Samples">6 – 15 Samples</option>
                            <option value="20+ Bulk Batch">20+ Bulk Samples</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-gray uppercase tracking-wider mb-1.5">
                            Alloy / Material Grade
                          </label>
                          <input
                            type="text"
                            name="alloyGrade"
                            value={form.alloyGrade}
                            onChange={handleChange}
                            placeholder="e.g. SS 316L, Inconel 625"
                            className="w-full px-3 py-2.5 rounded-lg border border-sky-strong text-xs font-medium text-slate-gray bg-white focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-blue-accent"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-gray uppercase tracking-wider mb-1.5">
                            Turnaround Priority
                          </label>
                          <select
                            name="timeline"
                            value={form.timeline}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 rounded-lg border border-sky-strong text-xs font-semibold text-navy bg-white focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-blue-accent"
                          >
                            <option value="Standard (3-5 Days)">Standard (3–5 Days)</option>
                            <option value="Express Priority (48 Hours)">Express (48 Hours)</option>
                            <option value="Routine Monthly Contract">Routine Contract</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Contact details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-gray uppercase tracking-wider mb-1.5">
                          Full Name <span className="text-amber">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="Dr. / Er. John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-sky-strong text-sm font-medium text-slate-gray bg-white placeholder-steel focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-blue-accent transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-gray uppercase tracking-wider mb-1.5">
                          Company / Organization <span className="text-amber">*</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={form.company}
                          onChange={handleChange}
                          placeholder="e.g. Reliance, L&T, Acme Labs"
                          className="w-full px-4 py-3 rounded-xl border border-sky-strong text-sm font-medium text-slate-gray bg-white placeholder-steel focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-blue-accent transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-gray uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-amber">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-sky-strong text-sm font-medium text-slate-gray bg-white placeholder-steel focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-blue-accent transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-gray uppercase tracking-wider mb-1.5">
                          Phone Number <span className="text-amber">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-sky-strong text-sm font-medium text-slate-gray bg-white placeholder-steel focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-blue-accent transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-gray uppercase tracking-wider mb-1.5">
                        Project / Sample Description
                      </label>
                      <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe your material grade, corrosive environment, sample dimensions, or failure symptoms..."
                        className="w-full px-4 py-3 rounded-xl border border-sky-strong text-sm font-medium text-slate-gray bg-white placeholder-steel focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-blue-accent transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button + Direct Options */}
                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-sky-mid">
                    <div className="flex items-center gap-3">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-amber hover:bg-amber-dark text-white font-bold rounded-xl transition-all duration-200 shadow-xl shadow-amber-900/30 hover:-translate-y-0.5 border border-amber-400/30"
                      >
                        <span>Send Engineering RFQ</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs text-steel">
                      Pre-fills email to <span className="font-semibold text-navy">{CONTACT.email}</span> &amp; opens instant options.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-navy flex items-center justify-center text-white">
          Loading RFQ Portal...
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}

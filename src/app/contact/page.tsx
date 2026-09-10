'use client';

import { useState } from 'react';
import { Mail, Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { CONTACT, labTests } from '@/lib/data';

const serviceCategories = [
  'Consultancy Inquiry',
  'Laboratory Testing Request',
  'General Inquiry',
];

const specificServices = [
  'Materials Selection & Recommendation',
  'Failure Analysis & Forensic Investigation',
  'Corrosion Assessment & Diagnostics',
  'Corrosion Mitigation Strategy',
  'Prevention & Control Planning',
  'Quality Assurance & Compliance',
  'Training & Education',
  ...labTests.map((t) => t.name),
  'Other / Custom',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    category: '',
    service: '',
    description: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `Quote Request – ${form.category || 'General'} – ${form.fullName}`;
    const body = [
      `Name: ${form.fullName}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service Category: ${form.category}`,
      `Specific Test / Service: ${form.service}`,
      ``,
      `Project / Sample Description:`,
      form.description,
    ].join('\n');

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute -top-10 right-0 w-[500px] h-[500px] opacity-[0.04]"
            viewBox="0 0 500 500"
            fill="none"
          >
            <circle cx="380" cy="150" r="300" stroke="white" strokeWidth="70" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-light" />
            <span className="text-white/80 text-sm font-medium">Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-xl">
            Request a Quote or Consultation
          </h1>
          <p className="mt-5 text-white/70 text-lg max-w-xl leading-relaxed">
            Fill in the form below — our engineering team will review your requirements and respond
            within 24–48 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div>
                <h2 className="text-xl font-bold text-navy mb-4">Direct Contact</h2>
                <div className="flex flex-col gap-4">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-border hover:border-amber hover:shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 bg-amber/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-amber transition-colors">
                      <Mail className="w-5 h-5 text-amber group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-steel uppercase tracking-wide mb-0.5">Email</p>
                      <p className="text-sm font-medium text-navy break-all">{CONTACT.email}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-border hover:border-amber hover:shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 bg-amber/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-amber transition-colors">
                      <Phone className="w-5 h-5 text-amber group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-steel uppercase tracking-wide mb-0.5">Phone</p>
                      <p className="text-sm font-medium text-navy">{CONTACT.phone}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response info */}
              <div className="bg-white rounded-xl border border-border p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-amber" />
                  <h3 className="text-sm font-bold text-navy">Response Time</h3>
                </div>
                <p className="text-sm text-slate-gray leading-relaxed">
                  Our engineering team reviews all enquiries and responds within{' '}
                  <span className="font-semibold text-navy">24–48 hours</span> on business days.
                </p>
              </div>

              {/* What to include */}
              <div className="bg-navy rounded-xl p-5 text-white">
                <h3 className="text-sm font-bold mb-3">What to Include</h3>
                <ul className="space-y-2">
                  {[
                    'Material type and grade',
                    'Environment / corrosive medium',
                    'Number of samples',
                    'Preferred test standard (if known)',
                    'Project timeline or deadline',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-white/70">
                      <CheckCircle className="w-3.5 h-3.5 text-amber shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-border p-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-xl font-bold text-navy mb-2">Email Client Opened</h2>
                  <p className="text-slate-gray max-w-md">
                    Your default email client should have opened with the form details pre-filled.
                    If it did not open, please email us directly at{' '}
                    <a href={`mailto:${CONTACT.email}`} className="text-amber font-medium hover:underline">
                      {CONTACT.email}
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-navy font-medium hover:text-amber transition-colors"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl border border-border p-8 flex flex-col gap-5"
                >
                  <h2 className="text-xl font-bold text-navy">Enquiry Form</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
                        Full Name <span className="text-amber">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-sm text-gray-900 bg-white placeholder-steel focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
                        Company Name <span className="text-amber">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Industries Ltd."
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-sm text-gray-900 bg-white placeholder-steel focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
                        Email Address <span className="text-amber">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-sm text-gray-900 bg-white placeholder-steel focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
                        Phone Number <span className="text-amber">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-sm text-gray-900 bg-white placeholder-steel focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
                        Service Category
                      </label>
                      <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-sm text-gray-900 bg-white focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                      >
                        <option value="">Select a category</option>
                        {serviceCategories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
                        Specific Test / Service
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-sm text-gray-900 bg-white focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                      >
                        <option value="">Select a service</option>
                        {specificServices.map((svc) => (
                          <option key={svc} value={svc}>
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
                      Project / Sample Description
                    </label>
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your material, environment, sample quantity, or any other relevant details..."
                      className="w-full px-4 py-2.5 rounded-lg border border-border text-sm text-gray-900 bg-white placeholder-steel focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-amber hover:bg-amber-dark text-white font-semibold rounded-lg transition-colors shadow-md"
                    >
                      Send Enquiry <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-xs text-steel">
                      This opens your email client with the form pre-filled.
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

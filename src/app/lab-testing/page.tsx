'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Tag,
  FlaskConical,
  Search,
  Filter,
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  Plus,
  Minus,
  Calculator,
  RefreshCw,
  Layers,
  TrendingUp,
} from 'lucide-react';
import { labTests } from '@/lib/data';

const categories = [
  'All Tests',
  'Electrochemical',
  'Localized & Pitting',
  'Medical Implants',
  'Coupons & Diagnostics',
  'Accelerated & Atmospheric',
];

export default function LabTestingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Tests');
  const [calculatorCounts, setCalculatorCounts] = useState<Record<string, number>>({});

  const handleIncrement = (testId: string) => {
    setCalculatorCounts((prev) => ({
      ...prev,
      [testId]: (prev[testId] || 0) + 1,
    }));
  };

  const handleDecrement = (testId: string) => {
    setCalculatorCounts((prev) => {
      const current = prev[testId] || 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[testId];
        return next;
      }
      return { ...prev, [testId]: current - 1 };
    });
  };

  const handleResetCalculator = () => {
    setCalculatorCounts({});
  };

  const calculatorSummary = useMemo(() => {
    let totalSamples = 0;
    let estimatedCost = 0;
    let hasCustomQuoteItem = false;
    const items: { test: (typeof labTests)[0]; count: number; subtotal: number | null }[] = [];

    Object.entries(calculatorCounts).forEach(([testId, count]) => {
      if (count <= 0) return;
      const test = labTests.find((t) => t.id === testId);
      if (!test) return;
      totalSamples += count;
      if (test.priceValue) {
        const subtotal = test.priceValue * count;
        estimatedCost += subtotal;
        items.push({ test, count, subtotal });
      } else {
        hasCustomQuoteItem = true;
        items.push({ test, count, subtotal: null });
      }
    });

    const breakdownText =
      items.length > 0
        ? `=== MULTI-TEST ESTIMATE ===\n${items
            .map(
              (i) =>
                `- ${i.test.name} (${i.test.standard}): ${i.count} sample(s) @ ${
                  i.subtotal ? 'Rs ' + i.subtotal.toLocaleString('en-IN') : 'Run Quotation'
                }`
            )
            .join('\n')}\nTotal Estimated Samples: ${totalSamples}\nEstimated Total: Rs ${estimatedCost.toLocaleString(
            'en-IN'
          )}${hasCustomQuoteItem ? ' (+ Custom Exposure Tests)' : ''}`
        : '';

    const sampleBracket =
      totalSamples > 15
        ? '20+ Bulk Batch'
        : totalSamples > 5
        ? '6 - 15 Samples'
        : totalSamples > 2
        ? '3 - 5 Samples'
        : '1 - 2 Samples';

    return {
      totalSamples,
      estimatedCost,
      hasCustomQuoteItem,
      items,
      breakdownText,
      sampleBracket,
    };
  }, [calculatorCounts]);

  const filteredTests = useMemo(() => {
    return labTests.filter((test) => {
      const matchesSearch =
        test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.standard.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.scope.toLowerCase().includes(searchQuery.toLowerCase());

      let matchesCategory = true;
      if (selectedCategory === 'Electrochemical') {
        matchesCategory = test.type.includes('Electrochemical');
      } else if (selectedCategory === 'Localized & Pitting') {
        matchesCategory =
          test.type.includes('Localized') ||
          test.name.includes('Pitting') ||
          test.standard.includes('G48') ||
          test.standard.includes('A262');
      } else if (selectedCategory === 'Medical Implants') {
        matchesCategory =
          test.type.includes('Biocompatibility') || test.name.includes('Medical');
      } else if (selectedCategory === 'Coupons & Diagnostics') {
        matchesCategory =
          test.type.includes('Coupon') ||
          test.type.includes('Identification') ||
          test.type.includes('Liquid');
      } else if (selectedCategory === 'Accelerated & Atmospheric') {
        matchesCategory =
          test.type.includes('Accelerated') || test.standard.includes('B117');
      }

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-navy bg-tech-grid pt-36 pb-20 overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-amber-light" />
            <span className="text-white text-xs sm:text-sm font-semibold">
              ASTM &amp; NACE Compliant Testing Laboratory
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl tracking-tight">
            Laboratory Testing Catalog
          </h1>
          <p className="mt-5 text-white/90 text-lg max-w-2xl leading-relaxed">
            Comprehensive electrochemical, metallurgical, and corrosion testing services with
            transparent public pricing. Select a standard below or submit a direct Request for
            Quote (RFQ).
          </p>

          {/* Search & Filter Bar */}
          <div className="mt-10 max-w-3xl bg-white/10 p-2 sm:p-3 rounded-2xl border border-sky-strong/30 backdrop-blur-md shadow-2xl flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-steel absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by standard (e.g. G48, G5, F2129, RP0775) or test name..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white text-slate-gray placeholder-steel text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-accent shadow-inner border border-sky-strong"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-steel hover:text-navy"
                >
                  Clear
                </button>
              )}
            </div>

            <a
              href="https://wa.me/919925020729?text=Hello%20TEJMET,%20I%20have%20an%20urgent%20testing%20request"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber hover:bg-amber-dark text-white font-bold text-xs transition-colors shrink-0 shadow-md"
            >
              <Zap className="w-3.5 h-3.5" />
              Urgent / 2-Day Inquiry
            </a>
          </div>

          {/* Filter Pills */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-white/80 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" />
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber text-white shadow-md shadow-amber-900/50'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quick Reference Table */}
      <section className="bg-white py-12 border-b border-sky-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-navy">Standards &amp; Pricing Directory</h2>
              <p className="text-xs text-steel mt-0.5">
                Showing {filteredTests.length} of {labTests.length} testing standards
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-gray bg-sky px-3 py-1 rounded-full border border-sky-mid">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-accent" />
              All prices per sample in INR
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-sky-mid shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-3.5 font-semibold">Test Name</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Standard Code</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Turnaround</th>
                  <th className="text-right px-5 py-3.5 font-semibold">Price</th>
                  <th className="text-center px-5 py-3.5 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky-mid">
                {filteredTests.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-5 py-10 text-center text-steel">
                      No testing standards matched your search. Try resetting filters.
                    </td>
                  </tr>
                ) : (
                  filteredTests.map((test, i) => (
                    <tr
                      key={test.id}
                      className={`hover:bg-sky/50 transition-colors ${
                        i % 2 === 0 ? 'bg-sky/30' : 'bg-white'
                      }`}
                    >
                      <td className="px-5 py-3.5 font-bold text-navy">
                        <a href={`#${test.id}`} className="hover:text-amber transition-colors">
                          {test.name}
                        </a>
                        <div className="text-[11px] font-normal text-slate-gray mt-0.5">
                          {test.type}
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-sky-mid text-navy border border-sky-strong">
                          {test.standard}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-xs text-slate-gray font-medium">
                        <span className="inline-flex items-center gap-1 text-[11px] text-navy font-semibold bg-sky px-2 py-0.5 rounded border border-sky-mid">
                          <Clock className="w-3 h-3 text-blue-accent" />
                          {test.turnaround}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-right font-bold text-navy">
                        {test.price}
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        <Link
                          href={`/contact?test=${encodeURIComponent(test.name)}`}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-amber hover:bg-amber-dark text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                        >
                          Request
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Multi-Test Sample Cost Estimator */}
      <section id="estimator" className="bg-sky/50 py-16 border-b border-sky-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-xs font-bold text-navy border border-sky-mid mb-3 shadow-xs">
                <Calculator className="w-4 h-4 text-amber" />
                Dynamic RFQ Builder
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                Multi-Standard Sample Cost Estimator
              </h2>
              <p className="mt-2 text-slate-gray text-sm max-w-2xl">
                Configure multiple testing standards, adjust specimen quantities, and generate an instant itemized estimate before dispatching samples.
              </p>
            </div>
            {calculatorSummary.totalSamples > 0 && (
              <button
                onClick={handleResetCalculator}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-steel hover:text-navy bg-white border border-sky-mid hover:border-sky-strong transition-colors self-start lg:self-center shadow-xs"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Estimator
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Test items with +/- counters */}
            <div className="lg:col-span-7 space-y-3">
              {labTests.map((test) => {
                const count = calculatorCounts[test.id] || 0;
                return (
                  <div
                    key={test.id}
                    className={`p-4 rounded-2xl border transition-all duration-150 flex items-center justify-between gap-4 ${
                      count > 0
                        ? 'bg-white border-blue-accent shadow-sm'
                        : 'bg-white/70 border-sky-mid hover:bg-white hover:border-sky-strong'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[11px] font-bold text-navy bg-sky px-2 py-0.5 rounded border border-sky-mid">
                          {test.standard}
                        </span>
                        <span className="text-[11px] text-steel font-medium truncate">
                          {test.type}
                        </span>
                      </div>
                      <p className="text-sm font-bold text-navy truncate">{test.name}</p>
                      <p className="text-xs text-slate-gray font-semibold mt-0.5">{test.price}</p>
                    </div>

                    {/* Stepper controls */}
                    <div className="flex items-center gap-2 shrink-0 bg-sky-mid/40 p-1.5 rounded-xl border border-sky-mid">
                      <button
                        onClick={() => handleDecrement(test.id)}
                        disabled={count === 0}
                        aria-label={`Decrease ${test.name} samples`}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                          count === 0
                            ? 'text-steel/40 cursor-not-allowed'
                            : 'bg-white text-navy hover:bg-navy hover:text-white shadow-xs'
                        }`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-7 text-center font-mono font-bold text-sm text-navy">
                        {count}
                      </span>
                      <button
                        onClick={() => handleIncrement(test.id)}
                        aria-label={`Increase ${test.name} samples`}
                        className="w-8 h-8 rounded-lg bg-navy text-white hover:bg-navy-dark flex items-center justify-center transition-colors shadow-xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Quotation Estimate Summary Card */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-strong shadow-lg">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-sky-mid">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-amber/15 text-amber flex items-center justify-center">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-navy">RFQ Summary</h3>
                      <p className="text-xs text-steel">Transparent sample estimation</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-navy bg-sky px-2.5 py-1 rounded-full border border-sky-mid">
                    {calculatorSummary.totalSamples} Sample{calculatorSummary.totalSamples === 1 ? '' : 's'}
                  </span>
                </div>

                {calculatorSummary.items.length === 0 ? (
                  <div className="py-10 text-center text-steel">
                    <Calculator className="w-10 h-10 mx-auto mb-3 text-sky-strong" />
                    <p className="text-sm font-semibold text-slate-gray">Estimator is empty</p>
                    <p className="text-xs text-steel mt-1 max-w-xs mx-auto">
                      Use the (+ / -) counters on the left to select testing standards and quantities.
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="max-h-60 overflow-y-auto space-y-2.5 pr-1 mb-5">
                      {calculatorSummary.items.map((item) => (
                        <div
                          key={item.test.id}
                          className="flex items-start justify-between text-xs py-2 border-b border-sky/70 gap-3"
                        >
                          <div className="min-w-0">
                            <p className="font-bold text-navy truncate">{item.test.name}</p>
                            <p className="text-[11px] text-steel">
                              {item.count} sample{item.count === 1 ? '' : 's'} &bull; {item.test.standard}
                            </p>
                          </div>
                          <p className="font-mono font-bold text-navy shrink-0">
                            {item.subtotal ? `₹${item.subtotal.toLocaleString('en-IN')}` : 'Run Quote'}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-sky-mid space-y-2 mb-6">
                      <div className="flex justify-between items-center text-xs text-slate-gray">
                        <span>Total Specimens</span>
                        <span className="font-mono font-bold text-navy">
                          {calculatorSummary.totalSamples} Units
                        </span>
                      </div>
                      <div className="flex justify-between items-baseline pt-2">
                        <span className="text-sm font-bold text-navy">Estimated Total</span>
                        <div className="text-right">
                          <span className="text-2xl font-black text-navy font-mono">
                            ₹{calculatorSummary.estimatedCost.toLocaleString('en-IN')}
                          </span>
                          {calculatorSummary.hasCustomQuoteItem && (
                            <p className="text-[10px] text-steel font-medium">
                              + customized atmospheric exposure quote
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/contact?test=${encodeURIComponent(
                        calculatorSummary.items.length === 1
                          ? calculatorSummary.items[0].test.name
                          : 'Multi-Standard Laboratory Testing'
                      )}&samples=${encodeURIComponent(
                        calculatorSummary.sampleBracket
                      )}&breakdown=${encodeURIComponent(calculatorSummary.breakdownText)}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-amber hover:bg-amber-dark text-white font-bold text-sm transition-all shadow-md hover:-translate-y-0.5 text-center"
                    >
                      <span>Proceed to RFQ with Selected Tests</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <p className="text-center text-[11px] text-steel mt-3">
                      Includes signed metallurgical report, raw potential curves &amp; data delivery.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Detailed Cards Grid */}
      <section className="bg-light-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-navy tracking-tight">
              Detailed Scope &amp; Engineering Standards
            </h2>
            <p className="mt-3 text-slate-gray text-base max-w-xl mx-auto">
              Click &ldquo;Request Test&rdquo; on any standard to pre-fill your quotation inquiry form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {filteredTests.map((test) => (
              <div
                key={test.id}
                id={test.id}
                className="bg-white rounded-2xl border border-sky-mid hover:border-blue-accent hover:shadow-xl card-hover transition-all duration-200 flex flex-col scroll-mt-28 group"
              >
                {/* Card Header */}
                <div className="p-6 border-b border-sky-mid">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 bg-sky-mid group-hover:bg-navy text-navy group-hover:text-white rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 shadow-sm">
                      <FlaskConical className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-sky-mid text-navy border border-sky-strong/50">
                      {test.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy leading-snug">{test.name}</h3>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-blue-accent shrink-0" />
                      <span className="text-xs font-mono font-bold text-navy bg-sky px-2 py-0.5 rounded border border-sky-mid">
                        {test.standard}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-navy bg-sky-mid/60 px-2 py-0.5 rounded border border-sky-strong/40 ml-auto">
                      <Clock className="w-3 h-3 text-navy" />
                      <span>{test.turnaround}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-gray leading-relaxed">{test.scope}</p>

                  {/* Key Outcomes */}
                  {test.keyOutcomes && test.keyOutcomes.length > 0 && (
                    <div className="pt-2 border-t border-sky-mid/60">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-navy mb-2">
                        Key Outcomes &amp; Deliverables:
                      </p>
                      <ul className="space-y-1.5">
                        {test.keyOutcomes.map((outcome, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-slate-gray flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-accent shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-sky-mid mt-auto">
                    <div>
                      <p className="text-[11px] font-semibold text-steel uppercase tracking-wider">
                        Sample Pricing
                      </p>
                      <p className="text-base font-extrabold text-navy">{test.price}</p>
                    </div>
                    <Link
                      href={`/contact?test=${encodeURIComponent(test.name)}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber hover:bg-amber-dark text-white text-xs font-bold rounded-xl transition-all shadow-md hover:-translate-y-0.5"
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

      {/* Visual Metallurgical Imagery & Diagnostic Schematics */}
      <section className="bg-white py-20 border-t border-sky-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-sky px-3 py-1 rounded-full text-xs font-bold text-navy border border-sky-mid mb-3">
              <TrendingUp className="w-4 h-4 text-blue-accent" />
              Standardized Scientific Diagnostics
            </div>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight">
              Analytical Methodologies &amp; Diagnostics
            </h2>
            <p className="mt-3 text-slate-gray text-base max-w-2xl mx-auto">
              Our testing procedures strictly follow reproducible thermodynamic and kinetic models compliant with ASTM and NACE specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Diagram 1: Tafel Polarization */}
            <div className="bg-light-bg rounded-2xl border border-sky-mid p-6 flex flex-col justify-between hover:border-blue-accent hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-navy bg-sky px-2.5 py-1 rounded border border-sky-mid">
                    ASTM G5 / ASTM G59
                  </span>
                  <span className="text-[11px] font-semibold text-steel">Kinetics</span>
                </div>
                <h3 className="text-base font-bold text-navy mb-2">
                  Tafel Polarization &amp; Passivation Curves
                </h3>
                <p className="text-xs text-slate-gray leading-relaxed mb-5">
                  Controlled potential sweeps extract open-circuit potential (Ecorr), corrosion rate current density (Icorr), and localized pitting breakdown potential (Epit).
                </p>
                <div className="rounded-xl overflow-hidden border border-sky-mid bg-white p-2">
                  <svg viewBox="0 0 360 200" className="w-full h-auto" fill="none">
                    <defs>
                      <pattern id="grid-tafel" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E3F2FD" strokeWidth="0.8" />
                      </pattern>
                    </defs>
                    <rect width="360" height="200" fill="#F8FAFC" rx="8" />
                    <rect width="360" height="200" fill="url(#grid-tafel)" />
                    <line x1="50" y1="170" x2="330" y2="170" stroke="#90CAF9" strokeWidth="1.5" />
                    <line x1="50" y1="20" x2="50" y2="170" stroke="#90CAF9" strokeWidth="1.5" />
                    <text x="330" y="185" fill="#64748B" fontSize="9" fontWeight="bold" textAnchor="end">log i (Current Density)</text>
                    <text x="25" y="40" fill="#64748B" fontSize="9" fontWeight="bold" transform="rotate(-90 25,40)">Potential E (V)</text>
                    <path d="M 65 160 Q 110 145 140 105" stroke="#1565C0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <path d="M 140 105 Q 165 95 165 65 L 165 45 Q 170 30 250 25" stroke="#F57C00" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <circle cx="140" cy="105" r="4" fill="#0D47A1" />
                    <line x1="50" y1="105" x2="140" y2="105" stroke="#1565C0" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="140" y1="105" x2="140" y2="170" stroke="#1565C0" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="45" y="108" fill="#0D47A1" fontSize="9" fontWeight="bold" textAnchor="end">Ecorr</text>
                    <text x="140" y="183" fill="#0D47A1" fontSize="9" fontWeight="bold" textAnchor="middle">Icorr</text>
                    <rect x="180" y="45" width="80" height="18" rx="4" fill="#E3F2FD" stroke="#90CAF9" />
                    <text x="220" y="57" fill="#1565C0" fontSize="8" fontWeight="bold" textAnchor="middle">Passive Plateau</text>
                    <rect x="235" y="15" width="85" height="18" rx="4" fill="#FFF3E0" stroke="#FFE0B2" />
                    <text x="277" y="27" fill="#E65100" fontSize="8" fontWeight="bold" textAnchor="middle">Pitting Epit Breakdown</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Diagram 2: Grain Boundary Sensitization */}
            <div className="bg-light-bg rounded-2xl border border-sky-mid p-6 flex flex-col justify-between hover:border-blue-accent hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-navy bg-sky px-2.5 py-1 rounded border border-sky-mid">
                    ASTM A262 Practices A–E
                  </span>
                  <span className="text-[11px] font-semibold text-steel">Microstructure</span>
                </div>
                <h3 className="text-base font-bold text-navy mb-2">
                  Grain Boundary Sensitization Attack
                </h3>
                <p className="text-xs text-slate-gray leading-relaxed mb-5">
                  Microstructural analysis detects chromium carbide precipitation (Cr₂₃C₆) along grain boundaries, evaluating sensitization thresholds and intergranular ditching.
                </p>
                <div className="rounded-xl overflow-hidden border border-sky-mid bg-white p-2">
                  <svg viewBox="0 0 360 200" className="w-full h-auto" fill="none">
                    <rect width="360" height="200" fill="#F8FAFC" rx="8" />
                    <polygon points="50,40 130,25 150,85 80,105" fill="#E3F2FD" stroke="#90CAF9" strokeWidth="2" />
                    <polygon points="130,25 220,35 240,95 150,85" fill="#BBDEFB" stroke="#90CAF9" strokeWidth="2" />
                    <polygon points="220,35 310,20 330,80 240,95" fill="#E3F2FD" stroke="#90CAF9" strokeWidth="2" />
                    <polygon points="80,105 150,85 160,165 90,175" fill="#BBDEFB" stroke="#90CAF9" strokeWidth="2" />
                    <polygon points="150,85 240,95 230,170 160,165" fill="#E3F2FD" stroke="#90CAF9" strokeWidth="2" />
                    <polygon points="240,95 330,80 320,160 230,170" fill="#BBDEFB" stroke="#90CAF9" strokeWidth="2" />
                    <path d="M 130 25 L 150 85 L 160 165" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 2" />
                    <path d="M 150 85 L 240 95" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 2" />
                    <circle cx="138" cy="45" r="2.5" fill="#7F1D1D" />
                    <circle cx="145" cy="65" r="2.5" fill="#7F1D1D" />
                    <circle cx="152" cy="98" r="2.5" fill="#7F1D1D" />
                    <circle cx="156" cy="125" r="2.5" fill="#7F1D1D" />
                    <circle cx="158" cy="145" r="2.5" fill="#7F1D1D" />
                    <circle cx="190" cy="90" r="2.5" fill="#7F1D1D" />
                    <circle cx="215" cy="93" r="2.5" fill="#7F1D1D" />
                    <rect x="20" y="15" width="95" height="18" rx="4" fill="#FFFFFF" stroke="#90CAF9" />
                    <text x="67" y="27" fill="#1565C0" fontSize="8" fontWeight="bold" textAnchor="middle">Austenitic Matrix (γ)</text>
                    <rect x="175" y="145" width="145" height="32" rx="4" fill="#FEF2F2" stroke="#FCA5A5" />
                    <text x="247" y="158" fill="#991B1B" fontSize="8" fontWeight="bold" textAnchor="middle">Cr₂₃C₆ Carbide Precipitation</text>
                    <text x="247" y="170" fill="#DC2626" fontSize="7" textAnchor="middle">Grain Boundary Corrosion Ditch</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Diagram 3: NACE RP0775 Coupon Profilometry */}
            <div className="bg-light-bg rounded-2xl border border-sky-mid p-6 flex flex-col justify-between hover:border-blue-accent hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-navy bg-sky px-2.5 py-1 rounded border border-sky-mid">
                    NACE RP0775:2005
                  </span>
                  <span className="text-[11px] font-semibold text-steel">Monitoring</span>
                </div>
                <h3 className="text-base font-bold text-navy mb-2">
                  Gravimetric &amp; Pit Depth Profilometry
                </h3>
                <p className="text-xs text-slate-gray leading-relaxed mb-5">
                  Pre- and post-test digital photographic capture, chemical scale removal, precision weight loss calculation, and localized pitting micrometer depth profiling.
                </p>
                <div className="rounded-xl overflow-hidden border border-sky-mid bg-white p-2">
                  <svg viewBox="0 0 360 200" className="w-full h-auto" fill="none">
                    <rect width="360" height="200" fill="#F8FAFC" rx="8" />
                    <rect x="50" y="55" width="260" height="50" rx="4" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" />
                    <circle cx="80" cy="80" r="8" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <circle cx="160" cy="75" r="5" fill="#F57C00" opacity="0.8" />
                    <circle cx="160" cy="75" r="2.5" fill="#7C2D12" />
                    <circle cx="210" cy="85" r="6" fill="#F57C00" opacity="0.8" />
                    <circle cx="210" cy="85" r="3" fill="#7C2D12" />
                    <circle cx="250" cy="70" r="4" fill="#F57C00" opacity="0.8" />
                    <circle cx="250" cy="70" r="2" fill="#7C2D12" />
                    <line x1="50" y1="40" x2="310" y2="40" stroke="#94A3B8" strokeWidth="1" />
                    <line x1="50" y1="35" x2="50" y2="45" stroke="#94A3B8" strokeWidth="1" />
                    <line x1="310" y1="35" x2="310" y2="45" stroke="#94A3B8" strokeWidth="1" />
                    <text x="180" y="32" fill="#64748B" fontSize="8" fontWeight="bold" textAnchor="middle">Standardized Surface Area (A)</text>
                    <path d="M 210 85 L 235 135" stroke="#1565C0" strokeWidth="1.5" strokeDasharray="3 3" />
                    <rect x="175" y="135" width="145" height="34" rx="4" fill="#E3F2FD" stroke="#90CAF9" />
                    <text x="247" y="148" fill="#0D47A1" fontSize="8" fontWeight="bold" textAnchor="middle">Depth Micrometer Profiling</text>
                    <text x="247" y="161" fill="#1565C0" fontSize="7" textAnchor="middle">Rate (mpy) = (W × K) / (D × A × T)</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Notice */}
      <section className="bg-white py-16 border-t border-sky-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy to-navy-dark rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-white mb-4">
                <ShieldCheck className="w-4 h-4 text-amber-light" />
                Internationally Certified Testing
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                All Tests Conducted to Rigorous ASTM &amp; NACE Standards
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Every test at TEJMET is performed with calibrated potentiostats, chambers, and analytical
                balances. Complete reports include test parameters, specimen photographs, raw potential
                curves, and metallurgical conclusions signed by lead consultants.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-amber hover:bg-amber-dark text-white font-bold text-sm rounded-xl transition-colors shadow-lg text-center"
              >
                Discuss Custom Testing Scope
              </Link>
              <a
                href="tel:+919925020729"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm rounded-xl transition-colors text-center"
              >
                Call Engineer Desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

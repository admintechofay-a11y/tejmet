'use client';

import Link from 'next/link';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { CONTACT } from '@/lib/data';

export default function MobileQuickBar() {
  return (
    <aside
      aria-label="Quick contact bar"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-sky-mid shadow-[0_-4px_20px_rgba(21,101,192,0.12)] px-3 py-2.5"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call Engineer */}
        <a
          href={`tel:${CONTACT.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sky text-navy hover:bg-sky-mid transition-colors text-center border border-sky-mid"
        >
          <Phone className="w-4 h-4 text-navy mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Call Engineer</span>
        </a>

        {/* WhatsApp Desk */}
        <a
          href={`https://wa.me/91${CONTACT.phone}?text=Hello%20TEJMET,%20I%20have%20an%20urgent%20testing%20inquiry`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors text-center border border-emerald-200"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Get Quote */}
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber hover:bg-amber-dark text-white transition-colors text-center shadow-sm"
        >
          <div className="flex items-center gap-0.5 mb-0.5">
            <span className="text-[10px] font-bold tracking-tight">Get Quote</span>
            <ArrowRight className="w-3 h-3" />
          </div>
          <span className="text-[9px] font-medium opacity-90">RFQ Portal</span>
        </Link>
      </div>
    </aside>
  );
}

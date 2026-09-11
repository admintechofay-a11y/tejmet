import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileQuickBar from '@/components/MobileQuickBar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'TEJMET Consultancy Services | Metallurgical & Corrosion Engineering',
  description:
    'Expert metallurgical and corrosion consultancy services. ASTM/NACE compliant laboratory testing, failure analysis, materials selection, and corrosion mitigation for industrial clients.',
  keywords:
    'Metallurgical Consultant, Corrosion Testing Lab, ASTM G48 Pitting Test, Failure Analysis Service, NACE Corrosion Coupon Calibration, Intergranular Corrosion Testing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-light-bg text-slate-800 antialiased pb-16 md:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileQuickBar />
      </body>
    </html>
  );
}

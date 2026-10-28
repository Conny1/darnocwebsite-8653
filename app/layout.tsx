import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Modulor — Business Software and Tools in One Platform',
  description:
    'Find the tools you need to run your business with Modulor. Manage customers, invoices, projects, and more through a flexible business software platform built for businesses in Kenya.',
  openGraph: {
    title: 'Modulor — Business Software and Tools in One Platform',
    description:
      'Find the tools you need to run your business with Modulor. Manage customers, invoices, projects, and more through a flexible business software platform built for businesses in Kenya.',
    type: 'website',
    locale: 'en_KE',
    siteName: 'Modulor',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modulor — Business Software and Tools in One Platform',
    description:
      'Find the tools you need to run your business with Modulor. Manage customers, invoices, projects, and more through a flexible business software platform built for businesses in Kenya.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-zinc-900 antialiased min-h-screen selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}

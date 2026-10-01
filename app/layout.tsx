import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Modulor — Business OS for Freelancers in Kenya',
  description:
    'The modular Business OS built for freelancers and solo businesses in Kenya. Connected CRM, Invoicing, Projects, Calendar, and more.',
  openGraph: {
    title: 'Modulor — Business OS for Freelancers in Kenya',
    description:
      'The modular Business OS built for freelancers and solo businesses in Kenya. Connected CRM, Invoicing, Projects, Calendar, and more.',
    type: 'website',
    locale: 'en_KE',
    siteName: 'Modulor',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modulor — Business OS for Freelancers in Kenya',
    description:
      'The modular Business OS built for freelancers and solo businesses in Kenya. Connected CRM, Invoicing, Projects, Calendar, and more.',
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

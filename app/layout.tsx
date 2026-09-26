import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Modulor | Business OS for Freelancers & Solo Businesses",
    template: "%s | Modulor",
  },
  icons: "/logo.png",
  description:
    "Modulor is a Business OS for freelancers and solo businesses in Kenya. CRM, Invoicing, Projects, Calendar and more — all connected in one place. Install what you need, pay for what you use.",
  metadataBase: new URL("https://modulor.co.ke"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Business OS for freelancers",
    "freelancer tools Kenya",
    "CRM for freelancers Kenya",
    "invoicing software Kenya",
    "project management for solopreneurs",
    "business software for solo businesses Kenya",
    "Zoho alternative Kenya",
    "Odoo alternative Kenya",
    "modular business software Kenya",
    "freelance business management Kenya",
    "solopreneur tools Kenya",
    "invoice generator Kenya",
    "freelance invoicing Kenya",
    "CRM software Kenya",
    "small business software Kenya",
    "business tools for one person business",
    "Kenya SaaS",
    "Modulor",
    "creator tools Kenya",
    "freelancer productivity tools Kenya",
    "solopreneur app Kenya",
    "business management software Kenya",
    "freelance project tracking Kenya",
    "pay as you go business software",
    "connected business tools Kenya",
  ],
  authors: [{ name: "Modulor" }],
  openGraph: {
    title: "Modulor | Business OS for Freelancers & Solo Businesses",
    description:
      "CRM, Invoicing, Projects, Calendar and more — all connected in one place. Built for freelancers and solo businesses in Kenya. Install what you need, pay for what you use.",
    url: "https://modulor.co.ke",
    siteName: "Modulor",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Modulor — Business OS for Freelancers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modulor | Business OS for Freelancers & Solo Businesses",
    description:
      "CRM, Invoicing, Projects, Calendar and more — all connected in one place. Built for freelancers and solo businesses in Kenya.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Modulor",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KES",
    },
    "description":
      "Modulor is a Business OS for freelancers and solo businesses. CRM, Invoicing, Projects, Calendar and more — all connected in one place. Install what you need, pay for what you use.",
    "url": "https://modulor.co.ke",
    "applicationSubCategory": "Productivity",
    "countriesSupported": "KE",
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${outfit.variable} font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
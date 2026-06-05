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
    default: "Modulor | Modular Workspace for Freelancers & Solopreneurs",
    template: "%s | Modulor",
  },
  icons: "/logo.png",
  description:
    "Modulor is a modular workspace for freelancers and solopreneurs. Install only the apps you need — CRM, Invoicing, Projects, and more. Pay for what you use.",
  metadataBase: new URL("https://modulor.co.ke"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "modular workspace",
    "freelancer tools Kenya",
    "CRM for freelancers",
    "invoicing software Kenya",
    "project management for solopreneurs",
    "pay as you go SaaS",
    "business tools for freelancers",
    "Modulor",
  ],
  authors: [{ name: "Modulor" }],
  openGraph: {
    title: "Modulor | Modular Workspace for Freelancers & Solopreneurs",
    description:
      "Install only the apps you need. Pay for what you use. CRM, Invoicing, Projects and more — all connected in one workspace.",
    url: "https://modulor.co.ke",
    siteName: "Modulor",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Modulor — Modular Workspace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modulor | Modular Workspace for Freelancers & Solopreneurs",
    description:
      "Install only the apps you need. Pay for what you use. CRM, Invoicing, Projects and more — all connected in one workspace.",
    images: ["/logo.png"],
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
  // Define the schema object inside the layout context
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'Modulor',
    'operatingSystem': 'All',
    'applicationCategory': 'BusinessApplication',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'KES',
    },
    'description': 'Unified workspace platform for CRM, invoicing, project management, and quotes.',
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${outfit.variable} font-sans`}
      >
        {/* Inject the structured data script here right inside the body */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
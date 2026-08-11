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
    "how to track freelance projects without expensive software",
    "modular business software",
    "freelancer productivity tools",
    "Kenya SaaS solutions",
    "freelance business management",
    "solopreneur software Kenya",
    "customizable workspace for freelancers",
    "freelancer app marketplace",
    "Kenya business software",
    "freelance invoicing and CRM",
    "modular SaaS platform",
    "freelancer project tracking tools",
    "solopreneur productivity apps",
    "Kenya business management software",
    "freelancer workflow optimization",
    "modular business tools for solopreneurs",
    "freelancer app integration",
    "Kenya SaaS marketplace",
    "freelance business solutions",
    "modular workspace for entrepreneurs",
    "freelancer software stack",
    "Kenya business productivity tools",
    "solopreneur app ecosystem",
    "freelancer project management software",
    "modular SaaS for freelancers",
    "Kenya business app marketplace",
    "freelance workflow management tools",
    "solopreneur productivity suite",
    "freelancer business optimization",
    "modular business software for solopreneurs",
    "Kenya SaaS solutions for freelancers",
    "freelance app integration platform",
    "solopreneur business management tools",
    "freelancer productivity and project tracking",
    "modular workspace for small businesses",
    "Kenya business software solutions",
    "freelance invoicing and CRM tools",
    "solopreneur app marketplace in Kenya",
    "freelancer project tracking and management",
    "modular SaaS platform for solopreneurs",
    "Kenya business productivity and workflow tools",
    "freelance business solutions and app integration",
    "solopreneur productivity and project management software",
    'freelance invoicing software Kenya',
    'freelancer CRM tools Kenya',
    'modular workspace for freelancers and solopreneurs',
    'Kenya SaaS solutions for small businesses',
    'freelance business management software Kenya',
    'solopreneur app ecosystem and integration',
    'freelancer project management and tracking tools',
    'modular SaaS platform for freelancers in Kenya',
    'Kenya business productivity and workflow optimization tools',
    'freelance business solutions and app marketplace in Kenya',
    'solopreneur productivity suite and project management software',
    "freelance invoicing and CRM tools for solopreneurs in Kenya",
    "tools for freelancers in Kenya", 
    "tools for solopreneurs in Kenya",
    "tools for small business owners in Kenya",
    "zoho alternatives in Kenya",
    "modular business software for freelancers in Kenya",
    "modular business software for solopreneurs in Kenya",
    "freelance business management and productivity tools in Kenya",
    "solopreneur app ecosystem and integration platform in Kenya",
    "freelancer project management and tracking software in Kenya",
    "modular SaaS platform for freelancers and solopreneurs in Kenya",
    "Kenya business productivity and workflow optimization software",
    "freelance business solutions and app marketplace for solopreneurs in Kenya",
    "solopreneur productivity suite and project management software for freelancers in Kenya",
    "Odoo alternatives in Kenya",
    "Zoho alternatives in Kenya",
    "creator tools in Kenya",
    "freelancer tools in Kenya",
    "solopreneur tools in Kenya",
    "small business tools in Kenya",
    "modular workspace for freelancers and solopreneurs in Kenya",
    "modular business software for freelancers and solopreneurs in Kenya",
    "freelance business management and productivity tools for solopreneurs in Kenya",
    "solopreneur app ecosystem and integration platform for freelancers in Kenya",
    "freelancer project management and tracking software for solopreneurs in Kenya",
    "modular SaaS platform for freelancers and solopreneurs in Kenya",
    "Kenya business productivity and workflow optimization software for freelancers and solopreneurs",
    "freelance business solutions and app marketplace for solopreneurs and freelancers in Kenya",
    "solopreneur productivity suite and project management software for freelancers and solopreneurs in Kenya",
    "invoice generator in Kenya",
    "freelance invoice generator in Kenya",
    "solopreneur invoice generator in Kenya",
    "small business invoice generator in Kenya",
    "modular workspace for freelancers and solopreneurs in Kenya",
    "modular business software for freelancers and solopreneurs in Kenya",
    "freelance business management and productivity tools for solopreneurs in Kenya",
    "solopreneur app ecosystem and integration platform for freelancers in Kenya",
    "freelancer project management and tracking software for solopreneurs in Kenya",
    "modular SaaS platform for freelancers and solopreneurs in Kenya",
    "Kenya business productivity and workflow optimization software for freelancers and solopreneurs in Kenya",
    "freelance business solutions and app marketplace for solopreneurs and freelancers in Kenya",
    "solopreneur productivity suite and project management software for freelancers and solopreneurs in Kenya"
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
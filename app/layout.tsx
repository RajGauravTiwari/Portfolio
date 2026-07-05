import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site, socials } from "@/lib/data";

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Raj Gaurav Tiwari",
    "Machine Learning Engineer",
    "Software Engineer",
    "AI Engineer",
    "Microsoft Intern",
    "IIT Guwahati",
    "Fraud Detection",
    "XGBoost",
    "LLM",
    "Portfolio",
  ],
  authors: [{ name: site.name, url: socials.linkedin }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: site.url },
  category: "technology",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Software Engineer & Machine Learning Engineer",
  url: site.url,
  email: site.email,
  worksFor: { "@type": "Organization", name: "Microsoft" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Indian Institute of Technology, Guwahati",
  },
  sameAs: [socials.linkedin, socials.github, socials.codeforces],
  knowsAbout: [
    "Machine Learning",
    "Artificial Intelligence",
    "Fraud Detection",
    "LLM Systems",
    "Computer Vision",
    "Distributed Systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

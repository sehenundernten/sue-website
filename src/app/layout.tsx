import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "@/components/ui/navigation.component";
import Footer from "@/components/ui/footer.component";

const figtree = localFont({
  src: [
    {
      path: "./fonts/Figtree-VariableFont_wght.ttf",
      weight: "400 700",
      style: "normal",
    },
  ],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sehen und Ernten - Werkstatt für Konzeption und Gestaltung",
  description: "Das Kreativnetzwerk für Studierende, Alumni und Selbständige.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Sehen und Ernten - Werkstatt für Konzeption und Gestaltung",
    description:
      "Das Kreativnetzwerk für Studierende, Alumni und Selbständige.",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sehen und Ernten - Werkstatt für Konzeption und Gestaltung",
    description:
      "Das Kreativnetzwerk für Studierende, Alumni und Selbständige.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${figtree.variable} antialiased bg-brand-beige text-brand-gray`}
      >
        {/* Skip-Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-blue text-white px-4 py-2 rounded z-50"
        >
          Zum Hauptinhalt springen
        </a>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

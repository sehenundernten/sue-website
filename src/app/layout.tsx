import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${figtree.variable} antialiased bg-brand-beige text-brand-gray`}
      >
        {children}
      </body>
    </html>
  );
}

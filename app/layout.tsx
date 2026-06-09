import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alignarchitect.com"),
  title: {
    default: "AlignArchitect — Precision Aligner Treatment Planning",
    template: "%s · AlignArchitect",
  },
  description:
    "B2B aligner treatment planning, white-label manufacturing, plan QC, and remote restorative CAD/CAM for dentists, dental labs, and aligner brands. 10+ years of clinical-grade digital workflow.",
  keywords: [
    "aligner treatment planning",
    "white-label aligners",
    "dental treatment plan QC",
    "remote CAD/CAM",
    "private label clear aligners",
    "digital dentistry workflow",
  ],
  openGraph: {
    title: "AlignArchitect — Precision Aligner Treatment Planning",
    description:
      "Clinical-grade treatment planning, white-label manufacturing, plan QC, and remote restorative design — built for dental professionals.",
    type: "website",
    siteName: "AlignArchitect",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

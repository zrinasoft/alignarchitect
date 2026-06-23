import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageLoader } from "@/components/PageLoader";

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
    default: "AlignArchitect — Digital Dentistry & Precision Design",
    template: "%s · AlignArchitect",
  },
  description:
    "AlignArchitect designs clear aligners, implants, crowns, and dentures from your digital scans — with white-label manufacturing and treatment-plan QC. For dentists, dental labs, and aligner brands; 10+ years and full workflow transparency.",
  keywords: [
    "aligner treatment planning",
    "white-label aligners",
    "dental treatment plan QC",
    "remote CAD/CAM",
    "digital denture design",
    "private label clear aligners",
    "digital dentistry workflow",
  ],
  openGraph: {
    title: "AlignArchitect — Digital Dentistry & Precision Design",
    description:
      "Clear aligner, implant, crown, and denture design from your digital scans — plus white-label manufacturing and plan QC. Built for dental professionals.",
    type: "website",
    siteName: "AlignArchitect",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/favicon/site.webmanifest",
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
        <PageLoader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

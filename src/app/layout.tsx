import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "@/lib/auth";
import { ProgressProvider } from "@/lib/progress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://vibecodeyour.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vibe Code Your App - Ship 30+ iOS Apps/Year Solo",
    template: "%s | Vibe Code Your App",
  },
  description:
    "The complete vibecoding methodology for building and shipping profitable iOS apps at scale using AI. 16 modules. 54+ lessons. From idea to App Store.",
  keywords: [
    "vibecoding",
    "iOS development",
    "AI coding",
    "Claude Code",
    "SwiftUI",
    "app development course",
    "solo developer",
    "ship apps",
    "mobile app business",
  ],
  authors: [{ name: "David Pavlovschii", url: siteUrl }],
  creator: "Doved Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Vibe Code Your App",
    title: "Vibe Code Your App - Ship 30+ iOS Apps/Year Solo",
    description:
      "The complete vibecoding methodology. 33+ apps shipped by one developer using AI. Learn the system — prompt engineering, business validation, system design.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vibe Code Your App - Ship 30+ iOS Apps/Year Solo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Code Your App - Ship 30+ iOS Apps/Year Solo",
    description:
      "The complete vibecoding methodology. 33+ apps shipped by one developer using AI. Learn the system.",
    images: ["/og-image.png"],
    creator: "@davidpavlovs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <AuthProvider>
          <ProgressProvider>
            {children}
          </ProgressProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

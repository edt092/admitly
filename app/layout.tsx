import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admitly — College planning without the panic",
  description: "Explore colleges, compare schools, use free admissions tools and estimate your college acceptance chances.",
  openGraph: {
    title: "Admitly — College planning without the panic",
    description: "Explore colleges, compare schools and calculate your chances.",
    images: [{ url: "/og-colleges.png", width: 1536, height: 804, alt: "Admitly — 60 college profiles" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-colleges.png"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

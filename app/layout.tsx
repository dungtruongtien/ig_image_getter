import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://instadown.co'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#7c3aed',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Instagram Photo Downloader – Download Instagram Photos Free Online',
    template: '%s | InstaDown',
  },
  description:
    'Download Instagram photos free online with InstaDown. Save full-resolution photos from any public Instagram post instantly — no login, no watermark, no app required. Works on mobile & PC.',
  keywords: [
    'instagram photo downloader',
    'download instagram photos',
    'instagram image downloader',
    'instagram photo download',
    'save instagram photos',
    'instagram picture downloader',
    'download instagram images free',
    'instagram photo downloader online',
    'instagram image viewer',
    'instagram photo viewer',
  ],
  authors: [{ name: 'InstaDown' }],
  creator: 'InstaDown',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'InstaDown',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'InstaDown',
    title: 'Instagram Photo Downloader – Download Instagram Photos Free Online',
    description:
      'Download full-resolution Instagram photos from any public post for free. No login, no watermark, no app required. Works on mobile & PC.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Photo Downloader – Download Instagram Photos Free Online',
    description:
      'Download full-resolution Instagram photos from any public post for free. No login, no watermark, no app required. Works on mobile & PC.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5200581180131547"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

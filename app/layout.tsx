import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Instagram Image Viewer — Free Photo Downloader',
    template: '%s | InstaDown',
  },
  description:
    'View and download full-resolution photos from public Instagram posts. Paste the URL, verify, and save the image instantly. Free, no login needed.',
  keywords: [
    'instagram image viewer',
    'instagram photo viewer',
    'instagram image downloader',
    'view instagram photos',
    'download instagram images',
    'instagram post image',
    'instagram picture viewer',
  ],
  authors: [{ name: 'InstaDown' }],
  creator: 'InstaDown',
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
    title: 'Instagram Image Viewer — Free Photo Downloader',
    description:
      'View and download full-resolution photos from public Instagram posts. Free, no login needed.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Image Viewer — Free Photo Downloader',
    description:
      'View and download full-resolution photos from public Instagram posts. Free, no login needed.',
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
          strategy="beforeInteractive"
        />
        <Script
          src="https://acscdn.com/script/aclib.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

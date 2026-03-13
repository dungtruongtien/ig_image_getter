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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Instagram Image Viewer — View & Download Public Instagram Photos',
    template: '%s | Instagram Image Viewer',
  },
  description:
    'Instantly view and download images from any public Instagram post. Paste the post URL and reveal the full-resolution photo in one click. Free, fast, no login required.',
  keywords: [
    'instagram image viewer',
    'instagram photo viewer',
    'instagram image downloader',
    'view instagram photos',
    'download instagram images',
    'instagram post image',
    'instagram picture viewer',
  ],
  authors: [{ name: 'Instagram Image Viewer' }],
  creator: 'Instagram Image Viewer',
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
    siteName: 'Instagram Image Viewer',
    title: 'Instagram Image Viewer — View & Download Public Instagram Photos',
    description:
      'Instantly view and download images from any public Instagram post. Free, fast, no login required.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Image Viewer — View & Download Public Instagram Photos',
    description:
      'Instantly view and download images from any public Instagram post. Free, fast, no login required.',
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next'
import TabNav from '@/components/TabNav'
import ReelsClient from '@/components/ReelsClient'
import AdUnit from '@/components/AdUnit'

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://instadown.co'

export const metadata: Metadata = {
  title: 'Instagram Reels Downloader – Download Reels Free Online',
  description:
    'Download Instagram Reels videos for free with InstaDown. Save full-quality Reels from any public Instagram account instantly — no login, no watermark, no app required.',
  keywords: [
    'instagram reels downloader',
    'download instagram reels',
    'instagram reels video downloader',
    'save instagram reels',
    'instagram reel download',
    'download reels from instagram',
    'instagram reels downloader online',
    'instagram video downloader',
  ],
  alternates: {
    canonical: '/insta-reel',
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/insta-reel`,
    siteName: 'InstaDown',
    title: 'Instagram Reels Downloader – Download Reels Free Online',
    description:
      'Download full-quality Instagram Reels from any public account for free. No login, no watermark, no app required.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Reels Downloader – Download Reels Free Online',
    description:
      'Download full-quality Instagram Reels from any public account for free. No login, no watermark, no app required.',
  },
}

const faqs = [
  {
    q: 'Can I download Instagram Reels without an account?',
    a: 'Yes. InstaDown lets you download Reels from any public Instagram account without logging in or creating an account.',
  },
  {
    q: 'Are downloaded Reels in full quality?',
    a: 'Yes. InstaDown retrieves the highest-quality version of the Reel directly from Instagram\'s CDN — no compression or watermark added.',
  },
  {
    q: 'Does InstaDown work on private Instagram accounts?',
    a: 'No. InstaDown only works with public Instagram accounts. Reels from private accounts cannot be accessed without the owner\'s permission.',
  },
  {
    q: 'Can I download Instagram Reels on iPhone or Android?',
    a: 'Yes. InstaDown works on all devices — iPhone, Android, Windows, Mac — directly in the browser with no app installation needed.',
  },
  {
    q: 'Is it safe to use InstaDown to download Reels?',
    a: 'Yes. InstaDown never asks for your Instagram login or password. It only accesses publicly available video URLs from Instagram\'s own servers.',
  },
  {
    q: 'Is there a limit to how many Reels I can download?',
    a: 'No. You can download as many public Instagram Reels as you need, completely free of charge.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'InstaDown – Instagram Reels Downloader',
    url: `${siteUrl}/insta-reel`,
    description: 'Free online Instagram Reels downloader. Download full-quality Reels from any public Instagram account — no login, no watermark, no app required.',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Download Instagram Reels',
    description: 'Download any public Instagram Reel in 3 simple steps using InstaDown.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Copy the Instagram Reel URL',
        text: 'Open Instagram, find the public Reel you want to download, tap the three-dot menu and select "Copy Link", or copy the URL from your browser address bar.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Paste the URL into InstaDown',
        text: 'Go to instadown.co/insta-reel, paste the Reel URL into the input field, and click the Fetch button.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Complete Verification and Download',
        text: 'Complete the quick human verification, then click "Download Reel" to save the full-quality video to your device.',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  },
]

export default function InstaReelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="mx-auto max-w-5xl px-4 py-8">

          {/* Top leaderboard ad */}
          <div aria-label="Advertisement">
            <AdUnit slot="1234567890" format="horizontal" className="mb-6 rounded-xl bg-gray-100 min-h-[90px]" />
          </div>

          {/* Header */}
          <header className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg mb-4" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Instagram Reels Downloader</h1>
            <p className="mt-2 text-sm text-gray-700 max-w-lg mx-auto">
              Download full-quality Reels from any public Instagram account — free, no login, no watermark, no app required.
            </p>
          </header>

          {/* Intro */}
          <section className="max-w-2xl mx-auto mb-8 text-center">
            <p className="text-sm text-gray-700 leading-relaxed">
              InstaDown is a free online Instagram Reels downloader that lets you save videos from any public Reel directly to your device.
              Instagram does not provide a built-in download button for Reels, making it hard to save videos you want to keep.
              InstaDown solves this — paste the Reel URL, complete a quick verification, and download the original-quality video instantly with no account, no app, and no watermark.
            </p>
          </section>

          {/* Tab navigation */}
          <TabNav active="reels" />

          {/* Interactive app */}
          <ReelsClient siteKey={siteKey} />

          <p className="mt-4 text-center text-xs text-gray-600">
            Only public Instagram Reels are supported. Videos from private accounts cannot be accessed.
          </p>

          {/* How to download */}
          <section className="mt-16 max-w-2xl md:max-w-4xl mx-auto" aria-labelledby="how-to-download-reels">
            <h2 id="how-to-download-reels" className="text-xl font-bold text-gray-900 mb-4 text-center">How to Download Instagram Reels</h2>
            <p className="text-sm text-gray-700 text-center mb-6">
              Downloading any public Instagram Reel takes only a few seconds. Follow these three steps.
            </p>
            <ol className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  step: '1',
                  title: 'Copy the Reel Link',
                  body: 'Open Instagram and find the public Reel. Tap the three-dot (⋯) menu and select "Copy Link", or copy the URL directly from your browser address bar.',
                },
                {
                  step: '2',
                  title: 'Paste the URL & Click Fetch',
                  body: 'Paste the copied Reel URL into the input field above and click Fetch. InstaDown will retrieve the video instantly.',
                },
                {
                  step: '3',
                  title: 'Verify & Download',
                  body: 'Complete the quick human verification, then click "Download Reel" to save the full-quality video to your device with no watermark.',
                },
              ].map(({ step, title, body }) => (
                <li key={step} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 font-bold text-sm mb-3">{step}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-700">{body}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* FAQ */}
          <section className="mt-12 max-w-2xl mx-auto" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">{q}</h3>
                  <p className="text-sm text-gray-700">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-12 border-t border-gray-200 pt-6">
            <nav className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 mb-3">
              <a href="/insta-photo" className="hover:text-gray-700">Instagram Photo</a>
              <a href="/insta-reel" className="hover:text-gray-700">Instagram Reels</a>
              <a href="/fb-reel" className="hover:text-gray-700">Facebook Reels</a>
              <a href="/sitemap.xml" className="hover:text-gray-700">Sitemap</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">Instagram</a>
            </nav>
            <p className="text-center text-xs text-gray-500">InstaDown is not affiliated with Instagram or Meta Platforms, Inc.</p>
            <p className="text-center text-xs text-gray-500 mt-1">This tool only accesses publicly available content in accordance with Instagram&apos;s public data policies.</p>
          </footer>

        </div>
      </main>
    </>
  )
}

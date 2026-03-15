import type { Metadata } from 'next'
import TabNav from '@/components/TabNav'
import FacebookClient from '@/components/FacebookClient'
import AdUnit from '@/components/AdUnit'

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://instadown.co'

export const metadata: Metadata = {
  title: 'Facebook Reels Downloader – Download Facebook Reels Free Online',
  description:
    'Download Facebook Reels videos for free with InstaDown. Save full-quality Facebook Reels from any public account instantly — no login, no watermark, no app required.',
  keywords: [
    'facebook reels downloader',
    'download facebook reels',
    'facebook reels video downloader',
    'save facebook reels',
    'facebook reel download',
    'download reels from facebook',
    'facebook reels downloader online',
    'facebook video downloader',
  ],
  alternates: {
    canonical: '/facebook-video-downloader',
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/facebook-video-downloader`,
    siteName: 'InstaDown',
    title: 'Facebook Reels Downloader – Download Facebook Reels Free Online',
    description:
      'Download full-quality Facebook Reels from any public account for free. No login, no watermark, no app required.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facebook Reels Downloader – Download Facebook Reels Free Online',
    description:
      'Download full-quality Facebook Reels from any public account for free. No login, no watermark, no app required.',
  },
}

const faqs = [
  {
    q: 'Can I download Facebook Reels without an account?',
    a: 'Yes. InstaDown lets you download Reels from any public Facebook account without logging in or creating an account.',
  },
  {
    q: 'Are downloaded Facebook Reels in full quality?',
    a: 'Yes. InstaDown retrieves the highest-quality version of the Reel directly from Facebook\'s CDN — no compression or watermark added.',
  },
  {
    q: 'Does InstaDown work on private Facebook Reels?',
    a: 'No. InstaDown only works with public Facebook Reels. Videos set to "Friends only" or private cannot be accessed without the owner\'s permission.',
  },
  {
    q: 'Can I download Facebook Reels on iPhone or Android?',
    a: 'Yes. InstaDown works on all devices — iPhone, Android, Windows, Mac — directly in the browser with no app installation needed.',
  },
  {
    q: 'Is it safe to use InstaDown to download Facebook Reels?',
    a: 'Yes. InstaDown never asks for your Facebook login or password. It only accesses publicly available video URLs from Facebook\'s own servers.',
  },
  {
    q: 'Is there a limit to how many Facebook Reels I can download?',
    a: 'No. You can download as many public Facebook Reels as you need, completely free of charge.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'InstaDown – Facebook Reels Downloader',
    url: `${siteUrl}/facebook-video-downloader`,
    description: 'Free online Facebook Reels downloader. Download full-quality Reels from any public Facebook account — no login, no watermark, no app required.',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Download Facebook Reels',
    description: 'Download any public Facebook Reel in 3 simple steps using InstaDown.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Copy the Facebook Reel URL',
        text: 'Open Facebook, find the public Reel you want to download, tap the three-dot menu and select "Copy Link", or copy the URL from your browser address bar.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Paste the URL into InstaDown',
        text: 'Go to instadown.co/facebook-video-downloader, paste the Reel URL into the input field, and click the Fetch button.',
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

export default function FbReelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-5xl px-4 py-8">

          {/* Top leaderboard ad */}
          <div aria-label="Advertisement">
            <AdUnit slot="1234567890" format="horizontal" className="mb-6 rounded-xl bg-gray-100 min-h-[90px]" />
          </div>

          {/* Header */}
          <header className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg mb-4" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Facebook Reels Downloader</h1>
            <p className="mt-2 text-sm text-gray-700 max-w-lg mx-auto">
              Download full-quality Reels from any public Facebook account — free, no login, no watermark, no app required.
            </p>
          </header>

          {/* Intro */}
          <section className="max-w-2xl mx-auto mb-8 text-center">
            <p className="text-sm text-gray-700 leading-relaxed">
              InstaDown is a free online Facebook Reels downloader that lets you save videos from any public Reel directly to your device.
              Facebook does not provide a built-in download button for Reels, making it hard to save videos you want to keep.
              InstaDown solves this — paste the Reel URL, complete a quick verification, and download the original-quality video instantly with no account, no app, and no watermark.
            </p>
          </section>

          {/* Tab navigation */}
          <TabNav active="facebook" />

          {/* Interactive app */}
          <FacebookClient siteKey={siteKey} />

          <p className="mt-4 text-center text-xs text-gray-600">
            Only public Facebook Reels are supported. Videos from private accounts or friends-only posts cannot be accessed.
          </p>

          {/* How to download */}
          <section className="mt-16 max-w-2xl md:max-w-4xl mx-auto" aria-labelledby="how-to-download-fb-reels">
            <h2 id="how-to-download-fb-reels" className="text-xl font-bold text-gray-900 mb-4 text-center">How to Download Facebook Reels</h2>
            <p className="text-sm text-gray-700 text-center mb-6">
              Downloading any public Facebook Reel takes only a few seconds. Follow these three steps.
            </p>
            <ol className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  step: '1',
                  title: 'Copy the Reel Link',
                  body: 'Open Facebook and find the public Reel. Tap the three-dot (⋯) menu and select "Copy Link", or copy the URL directly from your browser address bar.',
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
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-sm mb-3">{step}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-700">{body}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* FAQ */}
          <section className="mt-12 max-w-2xl mx-auto" aria-labelledby="faq-facebook-heading">
            <h2 id="faq-facebook-heading" className="text-xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions</h2>
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
              <a href="/instagram-photo-downloader" className="hover:text-gray-700">Instagram Photo</a>
              <a href="/instagram-reel-downloader" className="hover:text-gray-700">Instagram Reels</a>
              <a href="/facebook-video-downloader" className="hover:text-gray-700">Facebook Reels</a>
              <a href="/sitemap.xml" className="hover:text-gray-700">Sitemap</a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">Facebook</a>
            </nav>
            <p className="text-center text-xs text-gray-500">InstaDown is not affiliated with Facebook or Meta Platforms, Inc.</p>
            <p className="text-center text-xs text-gray-500 mt-1">This tool only accesses publicly available content in accordance with Facebook&apos;s public data policies.</p>
          </footer>

        </div>
      </main>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://instadown.co'

export const metadata: Metadata = {
  title: 'InstaDown – Free Instagram Downloader | Photos, Reels & Facebook Videos',
  description:
    'Download Instagram photos, Reels, and Facebook videos for free. No login, no watermark, no app required. Works on iPhone, Android, and PC instantly.',
  keywords: [
    'instagram downloader',
    'free instagram downloader',
    'instagram photo downloader',
    'instagram reels downloader',
    'facebook video downloader',
    'instagram video downloader',
    'download instagram',
    'save instagram photos',
    'instagram downloader online',
    'instagram media downloader',
    'instagram saver',
    'ig downloader',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'InstaDown',
    title: 'InstaDown – Free Instagram Downloader | Photos, Reels & Facebook Videos',
    description:
      'Download Instagram photos, Reels, and Facebook videos for free. No login, no watermark, no app required.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InstaDown – Free Instagram Downloader | Photos, Reels & Facebook Videos',
    description:
      'Download Instagram photos, Reels, and Facebook videos for free. No login, no watermark, no app required.',
  },
}

const tools = [
  {
    id: 'photo',
    title: 'Instagram Photo Downloader',
    description:
      'Download full-resolution photos from any public Instagram post instantly. No compression, no watermark.',
    href: '/instagram-photo-downloader',
    gradient: 'from-purple-500 to-pink-500',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    ctaLabel: 'Download Photos',
    badge: 'Most Popular',
  },
  {
    id: 'reels',
    title: 'Instagram Reels Downloader',
    description:
      'Save Instagram Reels videos in full quality to your device. No app needed, works on mobile and PC.',
    href: '/instagram-reel-downloader',
    gradient: 'from-purple-500 to-pink-500',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    ctaLabel: 'Download Reels',
    badge: null,
  },
  {
    id: 'facebook',
    title: 'Facebook Reels Downloader',
    description:
      'Download Facebook Reels and videos in full quality for free. Paste the link and save instantly.',
    href: '/facebook-video-downloader',
    gradient: 'from-blue-500 to-indigo-600',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    ctaLabel: 'Download Facebook',
    badge: null,
  },
]

const features = [
  {
    title: 'No Login Required',
    body: "Never share your Instagram or Facebook credentials. InstaDown works without any account.",
  },
  {
    title: 'No Watermark',
    body: 'Download original content exactly as posted — clean, with no added logos or branding.',
  },
  {
    title: 'Full Resolution',
    body: 'Get the highest-quality version of every photo and video directly from the platform CDN.',
  },
  {
    title: 'Works on All Devices',
    body: 'iPhone, Android, Windows, Mac — InstaDown runs in any browser with no app to install.',
  },
  {
    title: '100% Free',
    body: 'No subscriptions, no premium tiers, no hidden fees. Download unlimited content for free.',
  },
  {
    title: 'Fast & Private',
    body: 'Only publicly available URLs are accessed. No data is stored on our servers.',
  },
]

const faqs = [
  {
    q: 'What can I download with InstaDown?',
    a: 'InstaDown supports downloading Instagram photos, Instagram Reels (videos), and Facebook Reels. All downloads are free, require no login, and produce no watermark.',
  },
  {
    q: 'Do I need to create an account to use InstaDown?',
    a: 'No account is needed. Simply paste the Instagram or Facebook post URL into the tool and follow the steps to download.',
  },
  {
    q: 'Does InstaDown work on mobile phones?',
    a: 'Yes. InstaDown is fully mobile-friendly and works on iPhone, Android, and any device with a web browser. No app installation is required.',
  },
  {
    q: 'Can I download private Instagram posts?',
    a: 'No. InstaDown only works with publicly accessible posts. Private accounts and friends-only Facebook posts cannot be accessed.',
  },
  {
    q: 'Is InstaDown safe to use?',
    a: 'Yes. InstaDown never requests your login credentials or personal information. It only accesses publicly available media URLs from Instagram and Facebook servers.',
  },
  {
    q: 'Is there a daily download limit?',
    a: 'No. You can download as many public Instagram and Facebook posts as you need — completely free with no limits.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'InstaDown',
    url: siteUrl,
    description:
      'Free online tool to download Instagram photos, Reels, and Facebook videos. No login, no watermark, no app required.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/instagram-photo-downloader?url={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'InstaDown',
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    description: 'Free online downloader for Instagram photos, Reels, and Facebook videos.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'InstaDown',
    url: siteUrl,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    description:
      'Free web app to download Instagram photos, Instagram Reels, and Facebook Reels. No login, no watermark.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="mx-auto max-w-5xl px-4 py-8">

          {/* Top ad */}
          <div aria-label="Advertisement">
            <AdUnit slot="1234567890" format="horizontal" className="mb-6 rounded-xl bg-gray-100 min-h-[90px]" />
          </div>

          {/* Hero */}
          <header className="text-center mb-12">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg mb-5"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Free Instagram Downloader
            </h1>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Download Instagram photos, Reels, and Facebook videos for free — no login, no
              watermark, no app required. Works on all devices.
            </p>
          </header>

          {/* Tool cards */}
          <section aria-labelledby="tools-heading">
            <h2 id="tools-heading" className="sr-only">Download Tools</h2>
            <div className="grid gap-5 sm:grid-cols-3 mb-14">
              {tools.map(({ id, title, description, href, gradient, icon, ctaLabel, badge }) => (
                <Link
                  key={id}
                  href={href}
                  className="group relative flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  {badge && (
                    <span className="absolute top-4 right-4 bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                      {badge}
                    </span>
                  )}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} shadow mb-4`}
                  >
                    {icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1">{description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 group-hover:gap-2.5 transition-all">
                    {ctaLabel}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* How it works */}
          <section className="mb-14 max-w-2xl md:max-w-4xl mx-auto" aria-labelledby="how-it-works">
            <h2 id="how-it-works" className="text-xl font-bold text-gray-900 mb-4 text-center">
              How It Works
            </h2>
            <p className="text-sm text-gray-700 text-center mb-6">
              Downloading Instagram and Facebook content with InstaDown takes just three steps.
            </p>
            <ol className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  step: '1',
                  title: 'Copy the Post URL',
                  body: 'Open Instagram or Facebook and find the post you want to save. Tap the three-dot menu and select "Copy Link".',
                },
                {
                  step: '2',
                  title: 'Paste & Fetch',
                  body: 'Choose the right tool above, paste the link into the input field, and click Fetch. InstaDown retrieves the media instantly.',
                },
                {
                  step: '3',
                  title: 'Verify & Download',
                  body: 'Complete a quick human verification, then click Download. Your photo or video saves directly to your device.',
                },
              ].map(({ step, title, body }) => (
                <li key={step} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 font-bold text-sm mb-3">
                    {step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-700">{body}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Features */}
          <section className="mb-14 max-w-2xl mx-auto" aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-xl font-bold text-gray-900 mb-4 text-center">
              Why Use InstaDown?
            </h2>
            <ul className="space-y-3">
              {features.map(({ title, body }) => (
                <li
                  key={title}
                  className="flex gap-3 bg-white rounded-xl border border-gray-100 shadow-sm p-4"
                >
                  <span className="flex-shrink-0 text-green-500 font-bold text-base mt-0.5">✓</span>
                  <span className="text-sm text-gray-700">
                    <strong className="text-gray-900">{title}:</strong> {body}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section className="mb-14 max-w-2xl mx-auto" aria-labelledby="faq-home-heading">
            <h2
              id="faq-home-heading"
              className="text-xl font-bold text-gray-900 mb-4 text-center"
            >
              Frequently Asked Questions
            </h2>
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
          <footer className="border-t border-gray-200 pt-6">
            <nav className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 mb-3">
              <Link href="/instagram-photo-downloader" className="hover:text-gray-700">
                Instagram Photo
              </Link>
              <Link href="/instagram-reel-downloader" className="hover:text-gray-700">
                Instagram Reels
              </Link>
              <Link href="/facebook-video-downloader" className="hover:text-gray-700">
                Facebook Reels
              </Link>
              <a href="/sitemap.xml" className="hover:text-gray-700">
                Sitemap
              </a>
            </nav>
            <p className="text-center text-xs text-gray-500">
              InstaDown is not affiliated with Instagram, Facebook, or Meta Platforms, Inc.
            </p>
            <p className="text-center text-xs text-gray-500 mt-1">
              This tool only accesses publicly available content in accordance with platform data
              policies.
            </p>
          </footer>

        </div>
      </main>
    </>
  )
}

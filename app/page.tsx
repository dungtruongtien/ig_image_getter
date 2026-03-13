import AppClient from '@/components/AppClient'
import AdUnit from '@/components/AdUnit'

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://instadown.co'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Instagram Image Viewer',
  url: siteUrl,
  description: 'View and download images from any public Instagram post. Paste the post URL and reveal the full-resolution photo instantly.',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'View public Instagram images',
    'Download Instagram photos',
    'No login required',
    'Free to use',
  ],
}

const faqs = [
  {
    q: 'Does this work on private Instagram accounts?',
    a: 'No. This tool only works with public Instagram posts. Private posts require authentication and are not accessible.',
  },
  {
    q: 'Do I need an Instagram account to use this?',
    a: 'No. You can view and download images from public Instagram posts without logging in to Instagram.',
  },
  {
    q: 'Why do I need to complete a verification?',
    a: 'The verification step prevents automated abuse and keeps the service free for everyone.',
  },
  {
    q: 'Is the downloaded image full resolution?',
    a: 'Yes. The tool retrieves the original image URL from Instagram\'s CDN, which is the highest resolution available for public posts.',
  },
  {
    q: 'How long is the image link valid?',
    a: 'Instagram CDN links are time-limited. Download the image promptly after it is revealed.',
  },
]

export default function Home() {
  return (
    <>
      {/* JSON-LD structured data */}
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

          {/* Header — server-rendered for SEO */}
          <header className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg mb-4" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Instagram Image Viewer</h1>
            <p className="mt-1 text-sm text-gray-700">
              View and download images from any public Instagram post — free, fast, no login required.
            </p>
          </header>

          {/* Interactive app (client component) */}
          <AppClient siteKey={siteKey} />

          <p className="mt-4 text-center text-xs text-gray-600">
            Only public Instagram posts are supported.
          </p>

          {/* How it works — static content for SEO */}
          <section className="mt-16 max-w-2xl mx-auto" aria-labelledby="how-it-works">
            <h2 id="how-it-works" className="text-xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
            <ol className="grid gap-4 sm:grid-cols-3">
              {[
                { step: '1', title: 'Paste the URL', body: 'Copy the link of any public Instagram post and paste it into the input above.' },
                { step: '2', title: 'Verify', body: 'Complete a quick human verification to prevent abuse and keep the service free.' },
                { step: '3', title: 'View & Download', body: 'The full-resolution image is revealed instantly. Download it with one click.' },
              ].map(({ step, title, body }) => (
                <li key={step} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 font-bold text-sm mb-3">{step}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-700">{body}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* FAQ — static content for SEO */}
          <section className="mt-12 max-w-2xl mx-auto" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
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
          <footer className="mt-12 text-center text-xs text-gray-500 border-t border-gray-200 pt-6">
            <p>Instagram Image Viewer is not affiliated with Instagram or Meta Platforms, Inc.</p>
            <p className="mt-1">This tool only accesses publicly available content.</p>
          </footer>

        </div>
      </main>
    </>
  )
}

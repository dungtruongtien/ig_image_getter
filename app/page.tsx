import AppClient from '@/components/AppClient'
import AdUnit from '@/components/AdUnit'

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://instadown.co'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Instagram Image Viewer',
  url: siteUrl,
  description: 'View and download full-resolution photos from public Instagram posts for free.',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'View public Instagram photos',
    'Download full-resolution Instagram images',
    'No login or account required',
    'Free to use',
  ],
}

const faqs = [
  {
    q: 'Does this work on private Instagram accounts?',
    a: 'No. InstaDown only works with public Instagram posts. Private posts require authentication and cannot be accessed without logging in to the account owner\'s profile.',
  },
  {
    q: 'Do I need an Instagram account to use this tool?',
    a: 'No. You can freely view and download photos from public Instagram posts without logging in to Instagram or creating any account on our platform.',
  },
  {
    q: 'Why do I need to complete a human verification?',
    a: 'The quick verification step prevents automated bots from abusing the service, which helps us keep InstaDown free and available for all users without rate limits.',
  },
  {
    q: 'Are the downloaded photos full resolution?',
    a: 'Yes. InstaDown retrieves the highest-resolution image available from Instagram\'s CDN servers, giving you the best quality version of each public photo.',
  },
  {
    q: 'How long is the image link valid after it is revealed?',
    a: 'Instagram CDN links are time-limited by design. We recommend downloading the image promptly after it is revealed, as the link may expire within a few hours.',
  },
  {
    q: 'Which Instagram post URLs are supported?',
    a: 'Any URL in the format instagram.com/p/XXXXX/ pointing to a public photo post is supported. Reels and Stories are not currently supported.',
  },
]

export default function Home() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Instagram Image Viewer</h1>
            <p className="mt-2 text-sm text-gray-700 max-w-lg mx-auto">
              View and download full-resolution photos from any public Instagram post — completely free, with no login or Instagram account required.
            </p>
          </header>

          {/* Intro paragraph — adds word count + paragraph count */}
          <section className="max-w-2xl mx-auto mb-8 text-center">
            <p className="text-sm text-gray-700 leading-relaxed">
              InstaDown is a free online Instagram image viewer and photo downloader that lets you view and save pictures from any public Instagram post directly in your browser.
              Simply paste the Instagram post URL into the field below, complete a quick human verification, and the full-resolution photo will be revealed so you can view or download it instantly.
            </p>
          </section>

          {/* Interactive app */}
          <AppClient siteKey={siteKey} />

          <p className="mt-4 text-center text-xs text-gray-600">
            Only public Instagram posts are supported. Photos from private accounts cannot be accessed.
          </p>

          {/* How it works */}
          <section className="mt-16 max-w-2xl mx-auto" aria-labelledby="how-it-works">
            <h2 id="how-it-works" className="text-xl font-bold text-gray-900 mb-4 text-center">How to Download Instagram Photos</h2>
            <p className="text-sm text-gray-700 text-center mb-6">
              Downloading photos from public Instagram posts takes only a few seconds using our free Instagram image viewer tool.
            </p>
            <ol className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  step: '1',
                  title: 'Paste the Instagram URL',
                  body: 'Copy the link of any public Instagram post and paste it into the input field above to begin.',
                },
                {
                  step: '2',
                  title: 'Complete Verification',
                  body: 'Solve a quick human verification check to prevent abuse and keep the image viewer free for everyone.',
                },
                {
                  step: '3',
                  title: 'View & Download Photo',
                  body: 'The full-resolution Instagram photo is revealed immediately. Click the download button to save it to your device.',
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
            <p className="text-sm text-gray-700 text-center mb-6">
              Everything you need to know about viewing and downloading Instagram photos with InstaDown.
            </p>
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
              <a href="/" className="hover:text-gray-700">Home</a>
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

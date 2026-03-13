import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://instadown.co'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow Google AdSense crawler full access
        userAgent: 'Mediapartners-Google',
        allow: '/',
      },
      {
        // Allow Googlebot full access
        userAgent: 'Googlebot',
        allow: '/',
        disallow: '/api/',
      },
      {
        // All other crawlers
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}

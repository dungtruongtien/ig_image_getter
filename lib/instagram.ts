import * as cheerio from 'cheerio'

export interface InstagramMetadata {
  imageUrl: string
  title: string
  description: string
}

function toFullResUrl(raw: string): string {
  // Decode HTML entities (Instagram encodes & as &amp; in meta tags)
  const decoded = raw.replaceAll('&amp;', '&')
  try {
    const url = new URL(decoded)
    // Remove the `stp` param which forces a crop + resize (e.g. s640x640, c288.0.864...)
    // Without it, Instagram CDN serves the original full-resolution image
    url.searchParams.delete('stp')
    return url.toString()
  } catch {
    return decoded
  }
}

export async function fetchInstagramOgImage(url: string): Promise<InstagramMetadata> {
  const res = await fetch(url, {
    headers: {
      // Must use a crawler UA — Instagram only injects og:image for crawlers, not browsers
      'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uagent.php)',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
    },
    redirect: 'follow',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch Instagram page: HTTP ${res.status}`)
  }

  const html = await res.text()

  if (html.includes('"requiresLogin":true') || html.includes('login_required')) {
    throw new Error('Instagram requires login to view this post. Only public posts are supported.')
  }

  const $ = cheerio.load(html)

  const rawImage = $('meta[property="og:image"]').attr('content') || ''
  const title =
    $('meta[property="og:title"]').attr('content') ||
    $('title').text() ||
    'Instagram Post'
  const description = $('meta[property="og:description"]').attr('content') || ''

  if (!rawImage) {
    if (html.includes('Log in') || html.toLowerCase().includes('login')) {
      throw new Error('Instagram returned a login page. This post may be private or require authentication.')
    }
    throw new Error('Could not extract image from this Instagram post. The post may be private or the URL may be invalid.')
  }

  const imageUrl = toFullResUrl(rawImage)

  return { imageUrl, title, description }
}

export function isValidInstagramUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return (
      (parsed.hostname === 'www.instagram.com' || parsed.hostname === 'instagram.com') &&
      /^\/p\/[A-Za-z0-9_-]+\/?/.test(parsed.pathname)
    )
  } catch {
    return false
  }
}

import * as cheerio from 'cheerio'

export interface InstagramMetadata {
  imageUrl: string
  title: string
  description: string
}

/** Fetch the embed/captioned page and extract the highest-resolution image from srcset */
async function fetchEmbedImage(postUrl: string): Promise<string> {
  const embedUrl = postUrl.replace(/[?#].*$/, '').replace(/\/?$/, '/') + 'embed/captioned/'
  const res = await fetch(embedUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
      'Accept': 'text/html,application/xhtml+xml',
      'Accept-Language': 'en-US,en;q=0.9',
    },
    redirect: 'follow',
  })

  if (!res.ok) throw new Error(`Embed page returned HTTP ${res.status}`)

  const html = await res.text()
  const $ = cheerio.load(html)

  let bestUrl = ''
  let bestWidth = 0

  // Parse srcset to find the highest-res CDN image
  $('img[srcset]').each((_, el) => {
    const srcset = $(el).attr('srcset') || ''
    const isCdn = srcset.includes('fna.fbcdn') || srcset.includes('cdninstagram')
    if (!isCdn) return
    srcset.split(',').forEach(entry => {
      const parts = entry.trim().split(/\s+/)
      if (parts.length < 2) return
      const url = parts[0].replaceAll('&amp;', '&')
      const w = parseInt(parts[1]) || 0
      if (w > bestWidth) { bestWidth = w; bestUrl = url }
    })
  })

  // Fallback: first CDN img src with no srcset
  if (!bestUrl) {
    $('img').each((_, el) => {
      const src = $(el).attr('src') || ''
      if (src.includes('fna.fbcdn') || src.includes('cdninstagram')) {
        bestUrl = src.replaceAll('&amp;', '&')
        return false
      }
    })
  }

  return bestUrl
}

/** Fetch og:title and og:description using the Facebook crawler UA */
async function fetchOgMeta(url: string): Promise<{ title: string; description: string }> {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uagent.php)',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
    },
    redirect: 'follow',
  })

  if (!res.ok) return { title: 'Instagram Post', description: '' }

  const html = await res.text()
  const $ = cheerio.load(html)

  const title =
    $('meta[property="og:title"]').attr('content') ||
    $('title').text() ||
    'Instagram Post'
  const description = $('meta[property="og:description"]').attr('content') || ''

  return { title, description }
}

export async function fetchInstagramOgImage(url: string): Promise<InstagramMetadata> {
  // Run both fetches in parallel
  const [imageUrl, { title, description }] = await Promise.all([
    fetchEmbedImage(url),
    fetchOgMeta(url),
  ])

  if (!imageUrl) {
    throw new Error(
      'Could not extract image from this Instagram post. The post may be private or the URL may be invalid.'
    )
  }

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

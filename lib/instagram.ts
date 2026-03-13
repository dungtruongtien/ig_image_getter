import * as cheerio from 'cheerio'

export interface InstagramMetadata {
  imageUrl: string
  title: string
  description: string
}

export async function fetchInstagramOgImage(url: string): Promise<InstagramMetadata> {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Upgrade-Insecure-Requests': '1',
    },
    redirect: 'follow',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch Instagram page: HTTP ${res.status}`)
  }

  const html = await res.text()

  // Check for login wall
  if (html.includes('login') && html.includes('You must log in') ||
      html.includes('"requiresLogin":true') ||
      (html.includes('og:image') === false && html.includes('login_wall'))) {
    throw new Error('Instagram requires login to view this post. Only public posts are supported.')
  }

  const $ = cheerio.load(html)

  const imageUrl = $('meta[property="og:image"]').attr('content') || ''
  const title = $('meta[property="og:title"]').attr('content') ||
                $('title').text() ||
                'Instagram Post'
  const description = $('meta[property="og:description"]').attr('content') || ''

  if (!imageUrl) {
    // Check if it's a login wall
    if (html.includes('Log in') || html.includes('Sign up') || html.toLowerCase().includes('login')) {
      throw new Error('Instagram returned a login page. This post may be private or require authentication.')
    }
    throw new Error('Could not extract image from this Instagram post. The post may be private or the URL may be invalid.')
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

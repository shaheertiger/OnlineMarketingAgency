import { NextResponse } from 'next/server'
import sitemap from '../../sitemap'

const HOST = 'onlinemarketingagency.ca'
const KEY = '87e5a7420ea343ec86bbd7af3b39ada9'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`
const ENDPOINT = 'https://api.indexnow.org/IndexNow'

export const dynamic = 'force-dynamic'

async function submit(urls: string[]) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    }),
  })
  return { status: res.status, body: await res.text() }
}

export async function GET() {
  const urls = sitemap().map((entry) => entry.url)
  const result = await submit(urls)
  return NextResponse.json({ submitted: urls.length, ...result })
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  const urls: string[] = Array.isArray(body?.urls) && body.urls.length
    ? body.urls
    : sitemap().map((entry) => entry.url)
  const result = await submit(urls)
  return NextResponse.json({ submitted: urls.length, ...result })
}

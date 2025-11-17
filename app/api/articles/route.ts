import { NextResponse } from 'next/server'
import { mockArticles } from '@/lib/mock-data'

export async function GET() {
  try {
    const articles = mockArticles.sort((a, b) => 
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    )
    return NextResponse.json(articles)
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { mockTestimonials } from '@/lib/mock-data'

// Store new testimonials in memory for demo
let demoTestimonials = [...mockTestimonials]

export async function GET() {
  try {
    return NextResponse.json(demoTestimonials)
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, rating, comment } = await request.json()

    // Validate
    if (!name || !rating || !comment) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const newTestimonial = {
      id: Date.now(),
      name,
      rating: Math.min(5, Math.max(1, rating)),
      comment,
      is_approved: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    demoTestimonials.unshift(newTestimonial)

    console.log('[Demo] Testimonial added:', newTestimonial)

    return NextResponse.json(newTestimonial, { status: 201 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 })
  }
}

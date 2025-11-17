import { NextRequest, NextResponse } from 'next/server'

const RATE_LIMIT_REQUESTS = 5
const RATE_LIMIT_WINDOW = 3600 // 1 hour in seconds

// Simple in-memory rate limiting for demo
const requestLog = new Map<string, number[]>()

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('cf-connecting-ip') || 'unknown'

    // Validation
    const errors: Record<string, string> = {}
    if (!name || name.length < 3) errors.name = 'Nama minimal 3 karakter'
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Format email tidak valid'
    if (!phone || phone.length < 10) errors.phone = 'Nomor handphone minimal 10 digit'
    if (!message || message.length < 10) errors.message = 'Pesan minimal 10 karakter'

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 })
    }

    const now = Date.now()
    const oneHourAgo = now - RATE_LIMIT_WINDOW * 1000

    if (!requestLog.has(ip)) {
      requestLog.set(ip, [])
    }

    const timestamps = requestLog.get(ip)!
    const recentRequests = timestamps.filter(t => t > oneHourAgo)

    if (recentRequests.length >= RATE_LIMIT_REQUESTS) {
      return NextResponse.json(
        { error: 'Terlalu banyak permintaan. Silakan coba lagi dalam 1 jam.' },
        { status: 429 }
      )
    }

    recentRequests.push(now)
    requestLog.set(ip, recentRequests)

    // Log to console (demo only)
    console.log('[Demo] Contact submission:', { name, email, phone, message })

    return NextResponse.json({ success: true, message: 'Pesan berhasil dikirim (Demo Mode)' }, { status: 201 })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Terjadi kesalahan pada server' }, { status: 500 })
  }
}

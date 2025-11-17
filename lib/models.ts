export interface Contact {
  id?: number
  name: string
  email: string
  phone: string
  message: string
  ip_address?: string
  created_at?: Date
  updated_at?: Date
}

export interface Testimonial {
  id?: number
  name: string
  rating: number
  comment: string
  is_approved?: boolean
  created_at?: Date
  updated_at?: Date
}

export interface Article {
  id?: number
  title: string
  slug: string
  category: 'Tips & Trik' | 'Info Layanan' | 'Promo Spesial' | 'Teknologi'
  excerpt: string
  content: string
  image?: string
  published_at?: Date
  created_at?: Date
  updated_at?: Date
}

export interface ServiceCategory {
  id?: number
  name: string
  slug: string
  description?: string
  image?: string
  has_brands: boolean
  created_at?: Date
  updated_at?: Date
}

export interface ServiceBrand {
  id?: number
  category_id: number
  name: string
  logo?: string
  created_at?: Date
  updated_at?: Date
}

export interface Pricing {
  id?: number
  category: string
  service_type: string
  price_min?: number
  price_max?: number
  warranty_period?: string
  notes?: string
  created_at?: Date
  updated_at?: Date
}

'use client'

import { useEffect, useRef, useState } from 'react'

const Counter = ({ target, label }: { target: number; label: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let current = 0
          const increment = target / 50
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 30)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-bold text-accent mb-2">
        {count.toLocaleString()}
        {target > 100 ? '+' : '%'}
      </div>
      <p className="text-text-secondary">{label}</p>
    </div>
  )
}

export default function Statistics() {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <Counter target={1000} label="Pelanggan Puas" />
          <Counter target={500} label="Service Ditangani" />
          <Counter target={98} label="Tingkat Kepuasan" />
          <Counter target={15} label="Tahun Pengalaman" />
        </div>
      </div>
    </section>
  )
}

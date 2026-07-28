'use client'

import { useState } from 'react'
import CarouselDots from '../carousel/CarouselDots'
import { extrasData } from '@/lib/content/extrasData'
import ExtraCard from '../extras/ExtraCard'

const PAGE_SIZE = 6

export default function ExtrasSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const totalPages = Math.ceil(extrasData.length / PAGE_SIZE)
  const currentExtras = extrasData.slice(
    currentIndex * PAGE_SIZE,
    currentIndex * PAGE_SIZE + PAGE_SIZE,
  )

  return (
    <section
      id="extras"
      role="region"
      aria-label="Extras"
      className="extras-section relative scroll-target w-full h-[calc(100vh-80px)] snap-start bg-white"
    >
      <h2 className="sr-only">Extras</h2>

      <div className="extras-section-content flex flex-col justify-between items-center h-[calc(100vh-80px)] max-w-[720px] m-auto">
        <h3 className="extras-section-label self-start mt-6 text-primary-950 text-2xl font-semibold">
          Side projects and experiments
        </h3>

        <div className="extras-cards grid grid-cols-3 grid-rows-2 gap-4 w-[680px] h-[480px] mt-8">
          {currentExtras.map((extra, i) => (
            <ExtraCard extra={extra} key={i} />
          ))}
        </div>

        <CarouselDots totalItems={totalPages} currentIndex={currentIndex} />
      </div>
    </section>
  )
}

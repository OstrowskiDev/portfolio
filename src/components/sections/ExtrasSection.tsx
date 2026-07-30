'use client'

import { useState } from 'react'
import { extrasData } from '@/lib/content/extrasData'
import ExtraCard from '../extras/ExtraCard'
import Pagination from '../pagination/Pagination'
import useKeyboardNavigation from '../hooks/useKeyboardNavigation'

export default function ExtrasSection({ isActive }: { isActive: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const pageSize = 6

  const totalItems = extrasData.length
  const totalPages = Math.ceil(totalItems / pageSize)
  const currentExtras = extrasData.slice(
    currentIndex * pageSize,
    currentIndex * pageSize + pageSize,
  )

  function goToPrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  function goToNext() {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  useKeyboardNavigation({
    isActive,
    currentIndex,
    totalItems: totalItems,
    onPrevious: goToPrevious,
    onNext: goToNext,
  })

  return (
    <section
      id="extras"
      role="region"
      aria-label="Extras"
      className="extras-section flex justify-center items-center scroll-target w-full h-[calc(100vh-80px)] snap-start bg-app-white-bg"
    >
      <h2 className="sr-only">Extras</h2>

      <div className="extras-section-content flex flex-col justify-around items-center h-[640px] max-w-[720px] mb-4">
        <h3 className="extras-section-label text-primary-950 text-2xl font-semibold">
          Smaller tools, experiments
          <span className="block text-primary-800 text-base text-center -mt-1">
            and open-source projects
          </span>
        </h3>

        <div className="extras-cards grid grid-cols-3 grid-rows-2 gap-4 w-[750px] h-[500px] mt-6 mb-2">
          {currentExtras.map((extra, i) => (
            <ExtraCard extra={extra} key={i} />
          ))}
        </div>

        <Pagination
          totalItems={totalPages}
          currentIndex={currentIndex}
          goToPrevious={goToPrevious}
          goToNext={goToNext}
          sectionLabel={'extras'}
        />
      </div>
    </section>
  )
}

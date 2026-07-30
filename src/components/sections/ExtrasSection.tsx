'use client'

import { extrasData } from '@/lib/content/extrasData'
import ExtraCard from '../extras/ExtraCard'
import Pagination from '../pagination/Pagination'
import useKeyboardNavigation from '../hooks/useKeyboardNavigation'
import usePaginatedItems from '../hooks/usePaginatedItems'

export default function ExtrasSection({ isActive }: { isActive: boolean }) {
  const pageSize = 6

  const {
    currentIndex,
    currentItems: currentExtras,
    totalPages,
    goToPrevious,
    goToNext,
  } = usePaginatedItems(extrasData, pageSize)

  useKeyboardNavigation({
    isActive,
    currentIndex,
    totalItems: totalPages,
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

        <div className="extras-cards grid grid-cols-3 grid-rows-2 gap-4 w-[750px] h-[500px] shrink-0 mt-6 mb-2">
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

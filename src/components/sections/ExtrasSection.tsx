'use client'

import { extrasData } from '@/lib/content/extrasData'
import { appScreens } from '@/lib/responsive'
import ExtraCard from '../extras/ExtraCard'
import useMediaQuery from '../hooks/useMediaQuery'
import Pagination from '../pagination/Pagination'
import useKeyboardNavigation from '../hooks/useKeyboardNavigation'
import usePaginatedItems from '../hooks/usePaginatedItems'

export default function ExtrasSection({ isActive }: { isActive: boolean }) {
  const isLargeScreen = useMediaQuery(`(min-width: ${appScreens.lg})`)
  const pageSize = isLargeScreen ? 8 : 6

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
      className="extras-section flex justify-center items-center scroll-target w-full h-[800px] tall:h-[calc(100vh-80px)] px-12 tall:snap-start bg-app-white-bg"
    >
      <h2 className="sr-only">Extras</h2>

      <div className="extras-section-content flex flex-col justify-around items-center h-[640px] w-full max-w-[820px] lg:max-w-[1200px] mb-4">
        <h3 className="extras-section-label lg:mb-4 text-primary-950 text-2xl lg:text-3xl font-semibold">
          Smaller tools, experiments
          <span className="block text-primary-800 lg:text-lg text-base text-center -mt-1">
            and open-source projects
          </span>
        </h3>

        <div className="extras-cards grid grid-cols-[repeat(3,240px)] lg:grid-cols-[repeat(4,240px)] grid-rows-2 gap-4 w-full h-[500px] justify-around content-between shrink-0 mt-6 mb-2">
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

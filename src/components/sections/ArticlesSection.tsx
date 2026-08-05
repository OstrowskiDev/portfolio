'use client'

import ArticleCard from '../articles/ArticleCard'
import { articles } from '@/lib/content/articles'
import Pagination from '../pagination/Pagination'
import useKeyboardNavigation from '../hooks/useKeyboardNavigation'
import usePaginatedItems from '../hooks/usePaginatedItems'
import useMediaQuery from '../hooks/useMediaQuery'
import { appScreens } from '@/lib/tailwind/screens'

export default function ArticlesSection({ isActive }: { isActive: boolean }) {
  const isLargeScreen = useMediaQuery(`(min-width: ${appScreens.lg})`)
  const pageSize = isLargeScreen ? 6 : 3

  const {
    currentIndex,
    currentItems: currentArticles,
    totalPages,
    goToPrevious,
    goToNext,
  } = usePaginatedItems(articles, pageSize)

  useKeyboardNavigation({
    isActive,
    currentIndex,
    totalItems: totalPages,
    onPrevious: goToPrevious,
    onNext: goToNext,
  })

  return (
    <section
      id="articles"
      role="region"
      aria-label="Articles"
      className="articles-section flex justify-center items-center scroll-target h-[calc(100vh-80px)] px-12 snap-start bg-app-white-bg"
    >
      <h2 className="sr-only">Articles</h2>

      <div className="articles-section-content flex flex-col justify-center items-center w-full max-w-[820px] lg:max-w-[1200px] h-full max-h-[720px] mb-4">
        <h3 className="articles-section-label lg:mb-4 text-primary-950 text-2xl lg:text-3xl font-semibold">
          Engineering journey
          <span className="block text-primary-800 lg:text-lg text-base text-center -mt-1">
            and lessons learned
          </span>
        </h3>

        <div className="articles-list grid grid-cols-1 lg:grid-cols-2 grid-rows-3 gap-4 justify-around content-between shrink-0 mt-4 mb-2 w-full ">
          {currentArticles.map((article, i) => {
            return <ArticleCard article={article} key={i} />
          })}
        </div>

        <Pagination
          totalItems={totalPages}
          currentIndex={currentIndex}
          goToPrevious={goToPrevious}
          goToNext={goToNext}
          sectionLabel={'articles'}
        />
      </div>
    </section>
  )
}

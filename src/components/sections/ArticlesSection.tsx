'use client'

import ArticleCard from '../articles/ArticleCard'
import { articles } from '@/lib/content/articles'
import Pagination from '../pagination/Pagination'
import useKeyboardNavigation from '../hooks/useKeyboardNavigation'
import usePaginatedItems from '../hooks/usePaginatedItems'

export default function ArticlesSection({ isActive }: { isActive: boolean }) {
  const pageSize = 3

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
      className="articles-section flex justify-center items-center scroll-target w-full h-[calc(100vh-80px)] snap-start bg-app-white-bg"
    >
      <h2 className="sr-only">Articles</h2>

      <div className="articles-section-content flex flex-col justify-center items-center w-[750px] h-[500px] mb-4">
        <h3 className="articles-section-label text-primary-950 text-2xl font-semibold">
          Engineering journey
          <span className="block text-primary-800 text-base text-center -mt-1">
            and lessons learned
          </span>
        </h3>

        <div className="articles-list flex w-[720px] h-[452px] shrink-0 flex-col justify-start gap-4 mt-4 mb-2">
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

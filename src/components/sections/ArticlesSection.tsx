import { useState } from 'react'
import ArticleCard from '../articles/ArticleCard'
import { articles } from '@/lib/content/articles'
import Pagination from '../pagination/Pagination'
import useKeyboardNavigation from '../hooks/useKeyboardNavigation'

export default function ArticlesSection({ isActive }: { isActive: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const pageSize = 3

  const totalItems = articles.length
  const totalPages = Math.ceil(totalItems / pageSize)
  const currentArticles = articles.slice(
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

        <div className="articles-list w-[720px] h-[460px] mt-4 mb-2">
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

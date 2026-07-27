import { useState } from 'react'
import { projectsData } from '@/lib/content/projectsData'
import CarouselDots from '../carousel/CarouselDots'
import CarouselArrow from '../carousel/CarouselArrow'
import useKeyboardNavigation from '../hooks/useKeyboardNavigation'
import ArticleCard from '../articles/ArticleCard'

export default function ArticlesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalProjects = projectsData.length

  function goToPrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  function goToNext() {
    if (currentIndex < totalProjects - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  // useKeyboardNavigation({
  //   currentIndex,
  //   totalItems: totalProjects,
  //   onPrevious: goToPrevious,
  //   onNext: goToNext,
  // })

  return (
    <section
      id="articles"
      role="region"
      aria-label="Articles"
      className="articles-section relative scroll-target w-full h-[calc(100vh-80px)] snap-start bg-primary-50"
    >
      <h2 className="sr-only">Articles</h2>

      <div className="articles-section-content flex flex-col justify-between items-center h-[calc(100vh-80px) max-w-[720px] m-auto">
        <h3 className="articles-section-label self-start mt-6 text-primary-950 text-2xl font-semibold">
          Thoughts on engineering
        </h3>

        <div className="articles-list w-[680px] h-[420px] mt-8">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>

        <CarouselDots totalItems={totalProjects} currentIndex={currentIndex} />
      </div>

      {/* {projectsData.map((projectData, i) => {
        return (
          <ProjectCardAnimated
            key={i}
            index={i}
            projectData={projectData}
            currentIndex={currentIndex}
            totalProjects={totalProjects}
          />
        )
      })} */}

      {/* 
      {currentIndex > 0 && (
        <CarouselArrow
          size={60}
          direction="left"
          position="left-[calc(50vw-290px)] -translate-x-[130%]"
          onClick={goToPrevious}
        />
      )} */}

      {/* {currentIndex < totalProjects - 1 && (
        <CarouselArrow
          size={60}
          direction="right"
          position="right-[calc(50vw-290px)] translate-x-[130%]"
          onClick={goToNext}
        />
      )} */}
    </section>
  )
}

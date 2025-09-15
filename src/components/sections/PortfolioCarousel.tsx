import { useEffect, useState } from 'react'
import { projectsData } from '@/lib/content/projectsData'
import CarouselDots from '../carousel/CarouselDots'
import CarouselArrow from '../carousel/CarouselArrow'
import useKeyboardNavigation from '../hooks/useKeyboardNavigation'
import ProjectCardAnimated from '../cards/ProjectCardAnimated'
import ProjectBgImage from '../cards/ProjectBgImage'

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalProjects = projectsData.length

  useEffect(() => {
    projectsData.forEach((projectData) => {
      const img = new Image()
      img.src = `/projects/${projectData.image}`
    })
  }, [])

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

  useKeyboardNavigation({
    currentIndex,
    totalItems: totalProjects,
    onPrevious: goToPrevious,
    onNext: goToNext,
  })

  return (
    <section
      id="portfolio"
      className="portfolio-section relative scroll-target w-full h-[calc(100vh-80px)] flex justify-center snap-start bg-primary-800"
    >
      {projectsData.map((projectData, i) => (
        <ProjectBgImage
          key={i}
          projectData={projectData}
          active={i === currentIndex}
        />
      ))}

      {projectsData.map((projectData, i) => {
        return (
          <ProjectCardAnimated
            projectData={projectData}
            index={i}
            currentIndex={currentIndex}
          />
        )
      })}

      {currentIndex > 0 && (
        <CarouselArrow
          size={60}
          direction="left"
          position="left-[calc(50vw-290px)] -translate-x-[130%]"
          onClick={goToPrevious}
        />
      )}

      {currentIndex < totalProjects - 1 && (
        <CarouselArrow
          size={60}
          direction="right"
          position="right-[calc(50vw-290px)] translate-x-[130%]"
          onClick={goToNext}
        />
      )}

      <CarouselDots totalItems={totalProjects} currentIndex={currentIndex} />
    </section>
  )
}

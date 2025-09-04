import { useState } from 'react'
import ProjectCardWide from '../cards/ProjectCardWide'
import { projectsData } from '@/lib/content/projectsData'
import CarouselDots from '../carousel/CarouselDots'
import CarouselArrow from '../carousel/CarouselArrow'
import useKeyboardNavigation from '../hooks/useKeyboardNavigation'

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const projectData = projectsData[currentIndex]
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

  useKeyboardNavigation({
    currentIndex,
    totalItems: totalProjects,
    onPrevious: goToPrevious,
    onNext: goToNext,
  })

  return (
    <section
      id="portfolio"
      className="portfolio-section scroll-target w-full h-[100vh] flex justify-center snap-start"
    >
      <div
        className="project-background-image relative w-full h-[calc(100vh-80px)] overflow-hidden font-inter border-[12px] border-r-0"
        style={{
          borderColor: projectData.bgColor,
          backgroundColor: projectData.bgColor,
          backgroundImage: `url('/projects/${projectData.image}')`,
          backgroundSize: 'auto 100%',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <ProjectCardWide projectData={projectsData[currentIndex]} />

        {currentIndex > 0 && (
          <CarouselArrow
            size={60}
            direction="left"
            position="left-[calc(50vw-290px-60px-60px)]"
            onClick={goToPrevious}
          />
        )}

        {currentIndex < totalProjects - 1 && (
          <CarouselArrow
            size={60}
            direction="right"
            position="left-[calc(50vw+290px+40px)]"
            onClick={goToNext}
          />
        )}

        <CarouselDots totalItems={totalProjects} currentIndex={currentIndex} />
      </div>
    </section>
  )
}

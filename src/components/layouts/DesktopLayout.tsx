import NavBar from '@/components/navigation/NavBar'
import DesktopIntro from '../intro/animations/DesktopIntro'
import { useIntroAnimation } from '../hooks/introAnimationContext'
import ProjectCard from '../cards/ProjectCard'
import { projectsData } from '@/lib/content/projectsData'
import SkipAnimation from '../intro/buttons/SkipAnimation'
import ProjectCardWide from '../cards/ProjectCardWide'

export default function DesktopLayout() {
  const { introActive } = useIntroAnimation()

  return (
    <main>
      <div
        className={`main-container w-full bg-white ${introActive ? 'fixed overflow-hidden' : ''} `}
      >
        <DesktopIntro />

        <NavBar />
        <div
          id="portfolio"
          className="portfolio-section scroll-target w-full h-[100vh] flex justify-center "
        >
          <ProjectCardWide projectData={projectsData[1]} />
        </div>
        <div
          id="extras"
          className="extras-section scroll-target w-full h-[100vh]"
        ></div>
        <div
          id="articles"
          className="articles-section scroll-target w-full h-[100vh]"
        ></div>
        <div
          id="contact"
          className="contact-section scroll-target w-full h-[100vh]"
        ></div>
      </div>

      {introActive && (
        <div className="animation-overlay fixed inset-0 w-full h-full">
          <SkipAnimation />
        </div>
      )}
    </main>
  )
}

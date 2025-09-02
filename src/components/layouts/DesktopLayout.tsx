import NavBar from '@/components/navigation/NavBar'
import DesktopIntro from '../intro/animations/DesktopIntro'
import { useIntroAnimation } from '../hooks/introAnimationContext'
import ProjectCard from '../cards/ProjectCard'
import { projectsData } from '@/lib/content/projectsData'

export default function DesktopLayout() {
  const { introActive } = useIntroAnimation()

  return (
    <main
      className={`main-container w-full bg-white ${introActive ? 'fixed overflow-hidden' : ''} `}
    >
      <DesktopIntro />
      <NavBar />
      <div id="portfolio" className="w-full h-[100vh] flex justify-center">
        <ProjectCard projectData={projectsData[2]} />
      </div>
      <div id="extras" className="w-full h-[100vh]"></div>
      <div id="articles" className="w-full h-[100vh]"></div>
      <div id="contact" className="w-full h-[100vh]"></div>
    </main>
  )
}

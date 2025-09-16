import NavBar from '@/components/navigation/NavBar'
import DesktopIntro from '../intro/animations/DesktopIntro'
import { useIntroAnimation } from '../hooks/introAnimationContext'
import SkipAnimation from '../intro/buttons/SkipAnimation'
import PortfolioCarousel from '../sections/PortfolioCarousel'
import ReadSrIntro from '../intro/buttons/ReadSrIntro'

export default function DesktopLayout() {
  const { introActive } = useIntroAnimation()

  return (
    <main>
      <div
        className={`main-container w-full bg-white snap-y snap-mandatory scroll-smooth ${introActive ? 'fixed overflow-hidden' : 'h-screen overflow-y-scroll'} `}
      >
        <DesktopIntro />
        <NavBar />
        <PortfolioCarousel />

        <section
          id="extras"
          aria-label="Extra projects"
          className="extras-section scroll-target w-full h-[100vh] snap-start"
        ></section>
        <section
          id="articles"
          aria-label="Articles"
          className="articles-section scroll-target w-full h-[100vh] snap-start"
        ></section>
        <section
          id="contact"
          aria-label="Contact"
          className="contact-section scroll-target w-full h-[100vh] snap-start"
        ></section>
      </div>

      {introActive && (
        <div
          className="intro-controls-nav fixed inset-0 w-full h-full"
          role="group"
          aria-label="Intro navigation controls"
        >
          <SkipAnimation />
          <ReadSrIntro />
        </div>
      )}
    </main>
  )
}

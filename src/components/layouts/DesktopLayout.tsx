import NavBar from '@/components/navigation/NavBar'
import DesktopIntro from '../intro/animations/DesktopIntro'
import { useIntroAnimation } from '../hooks/introAnimationContext'
import SkipAnimation from '../intro/buttons/SkipAnimation'
import PortfolioCarousel from '../sections/PortfolioCarousel'
import ArticlesSection from '../sections/ArticlesSection'
import ExtrasSection from '../sections/ExtrasSection'

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
        <ArticlesSection />
        <ExtrasSection />

        <section
          id="contact"
          role="region"
          aria-label="Contact"
          className="contact-section scroll-target w-full h-[calc(100vh-80px)] snap-start"
        >
          <h2 className="sr-only">Contact</h2>
        </section>
      </div>

      {introActive && (
        <div className="intro-controls fixed inset-0 w-full h-full">
          <SkipAnimation />
        </div>
      )}
    </main>
  )
}

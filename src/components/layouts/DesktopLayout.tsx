import NavBar from '@/components/navigation/NavBar'
import DesktopIntro from '../intro/animations/DesktopIntro'
import { useIntroAnimation } from '../hooks/introAnimationContext'
import SkipAnimation from '../intro/buttons/SkipAnimation'
import PortfolioCarousel from '../sections/PortfolioCarousel'

export default function DesktopLayout() {
  const { introActive } = useIntroAnimation()

  return (
    <main>
      <div
        className={`main-container w-full bg-white ${introActive ? 'fixed overflow-hidden' : ''} `}
      >
        <DesktopIntro />
        <NavBar />
        <PortfolioCarousel />

        <section
          id="extras"
          className="extras-section scroll-target w-full h-[100vh]"
        ></section>
        <section
          id="articles"
          className="articles-section scroll-target w-full h-[100vh]"
        ></section>
        <section
          id="contact"
          className="contact-section scroll-target w-full h-[100vh]"
        ></section>
      </div>

      {introActive && (
        <div className="animation-overlay fixed inset-0 w-full h-full">
          <SkipAnimation />
        </div>
      )}
    </main>
  )
}

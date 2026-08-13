import NavBar from '@/components/navigation/NavBar'
import DesktopIntro from '../intro/animations/DesktopIntro'
import { useIntroAnimation } from '../hooks/introAnimationContext'
import SkipAnimation from '../intro/buttons/SkipAnimation'
import PortfolioCarousel from '../sections/PortfolioCarousel'
import ArticlesSection from '../sections/ArticlesSection'
import ExtrasSection from '../sections/ExtrasSection'
import useScrollSpy from '../hooks/useScrollSpy'
import useNormalizeSectionScroll from '../hooks/useNormalizeSectionScroll'
import ContactSection from '../sections/ContactSection'
import useMediaQuery from '../hooks/useMediaQuery'
import { appHeight } from '@/lib/responsive'

export default function DesktopLayout() {
  const { introActive } = useIntroAnimation()
  const activeId = useScrollSpy()
  const isShortViewport = useMediaQuery(appHeight.short)

  useNormalizeSectionScroll(activeId, introActive, isShortViewport)

  return (
    <main>
      <div
        className={`main-container w-full bg-white snap-y snap-mandatory scroll-smooth ${introActive ? 'fixed overflow-hidden' : 'h-screen overflow-y-scroll'} `}
      >
        <DesktopIntro />
        <NavBar activeId={activeId} />
        <PortfolioCarousel isActive={activeId === 'portfolio'} />
        <ExtrasSection isActive={activeId === 'extras'} />
        <ArticlesSection isActive={activeId === 'articles'} />
        <ContactSection isActive={activeId === 'contact'} />
      </div>

      {introActive && (
        <div className="intro-controls fixed inset-0 w-full h-full">
          <SkipAnimation />
        </div>
      )}
    </main>
  )
}

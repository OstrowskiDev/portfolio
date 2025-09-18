import { NavLink } from '../common/NavLink'
import { useIntroAnimation } from '../hooks/introAnimationContext'
import useScrollSpy from '../hooks/useScrollSpy'

export default function NavBar() {
  const { desktopTimelineRef, setIntroActive, setSrReadIntro } =
    useIntroAnimation()
  const activeId = useScrollSpy()

  function playOutroAnimation() {
    setTimeout(() => {
      if (desktopTimelineRef.current) {
        setIntroActive(true)
        setSrReadIntro(true)
        desktopTimelineRef.current.play()
      }
    }, 300)
  }

  return (
    <nav className="navbar sticky top-0 z-[100] w-full h-[80px] flex justify-center border-b-[1px] border-primary-200 shadow-[0_2px_2px_theme(colors.primary.100)] bg-white font-inter">
      <div className="navbar-elements flex justify-around items-center w-full max-w-screen-xl">
        <NavLink
          name="Intro"
          targetId="home"
          activeId={activeId}
          callback={() => playOutroAnimation()}
        />
        <NavLink name="Home" targetId="home" activeId={activeId} />
        <NavLink name="Portfolio" targetId="portfolio" activeId={activeId} />
        <div className="authors-data flex flex-col w-[260px]">
          <p className="authors-name text-center font-medium text-2xl">
            Marcin Ostrowski
          </p>
          <p className="authors-profession text-primary-600 text-center">
            Fullstack Developer
          </p>
        </div>
        <NavLink name="Extras" targetId="extras" activeId={activeId} />
        <NavLink name="Articles" targetId="articles" activeId={activeId} />
        <NavLink name="Contact" targetId="contact" activeId={activeId} />
      </div>
    </nav>
  )
}

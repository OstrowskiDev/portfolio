import { NavLink } from '../common/NavLink'
import { useIntroAnimation } from '../hooks/introAnimationContext'

export default function NavBar() {
  const { desktopTimelineRef, setIntroActive } = useIntroAnimation()

  function playOutroAnimation() {
    setTimeout(() => {
      if (desktopTimelineRef.current) {
        setIntroActive(true)
        desktopTimelineRef.current.play()
      }
    }, 300)
  }

  return (
    <div className="navbar sticky top-0 z-[100] w-full h-[80px] flex justify-center border-b-[1px] border-primary-200 shadow-[0_2px_2px_theme(colors.primary.100)] bg-white">
      <div className="navbar-elements flex justify-around items-center w-full max-w-screen-xl">
        <NavLink
          name="Intro"
          targetId="home"
          callback={() => playOutroAnimation()}
        />
        <NavLink name="Home" targetId="home" />
        <NavLink name="Portfolio" targetId="portfolio" />
        <div className="authors-data w-[260px]"></div>
        <NavLink name="Extras" targetId="extras" />
        <NavLink name="Articles" targetId="articles" />
        <NavLink name="Contact" targetId="contact" />
      </div>
    </div>
  )
}

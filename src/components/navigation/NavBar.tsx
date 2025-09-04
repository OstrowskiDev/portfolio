import { useEffect, useState } from 'react'
import { NavLink } from '../common/NavLink'
import { useIntroAnimation } from '../hooks/introAnimationContext'

export default function NavBar() {
  const { desktopTimelineRef, setIntroActive } = useIntroAnimation()
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }, // 60% sekcji w widoku = aktywna
    )

    sections.forEach((sec) => observer.observe(sec))
    return () => sections.forEach((sec) => observer.unobserve(sec))
  }, [])

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
          activeId={activeId}
          callback={() => playOutroAnimation()}
        />
        <NavLink name="Home" targetId="home" activeId={activeId} />
        <NavLink name="Portfolio" targetId="portfolio" activeId={activeId} />
        <div className="authors-data w-[260px]"></div>
        <NavLink name="Extras" targetId="extras" activeId={activeId} />
        <NavLink name="Articles" targetId="articles" activeId={activeId} />
        <NavLink name="Contact" targetId="contact" activeId={activeId} />
      </div>
    </div>
  )
}

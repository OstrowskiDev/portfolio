import { useEffect, useRef } from 'react'

const SECTION_IDS = ['home', 'portfolio', 'articles', 'extras', 'contact']

// this customHook overrides default browser scroll up/down arrow up/down events
// reason: Chromium and Firefox handle those very differently
// default UX varies from okay'ish to bad
// this hook overrides those and delivers good UX across all browsers

export default function useNormalizeSectionScroll(
  activeId: string,
  introActive: boolean,
) {
  const scrollCooldown = useRef(false)

  useEffect(() => {
    function navigate(direction: 'up' | 'down') {
      const currentIndex = SECTION_IDS.indexOf(activeId)
      if (currentIndex === -1) return

      const nextIndex =
        direction === 'down'
          ? Math.min(currentIndex + 1, SECTION_IDS.length - 1)
          : Math.max(currentIndex - 1, 0)

      if (nextIndex === currentIndex) return

      document
        .getElementById(SECTION_IDS[nextIndex])
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return
      if (introActive) return
      e.preventDefault()
      navigate(e.key === 'ArrowDown' ? 'down' : 'up')
    }

    function handleWheel(e: WheelEvent) {
      if (introActive) return
      e.preventDefault()
      if (scrollCooldown.current) return
      scrollCooldown.current = true
      navigate(e.deltaY > 0 ? 'down' : 'up')
      setTimeout(() => {
        scrollCooldown.current = false
      }, 350)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('wheel', handleWheel)
    }
  }, [activeId, introActive])
}

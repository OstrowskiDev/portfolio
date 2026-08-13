import { useEffect, useRef } from 'react'

const SECTION_IDS = ['home', 'portfolio', 'extras', 'articles', 'contact']

// this customHook overrides default browser scroll up/down arrow up/down events
// reason: Chromium and Firefox handle those very differently
// default UX varies from okay'ish to bad
// this hook overrides those and delivers good UX across all browsers

export default function useNormalizeSectionScroll(
  activeId: string,
  introActive: boolean,
  disabled: boolean,
) {
  const scrollCooldown = useRef(false)
  const activeIdRef = useRef(activeId)
  const introActiveRef = useRef(introActive)
  const cooldownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    activeIdRef.current = activeId
    introActiveRef.current = introActive
  }, [activeId, introActive])

  useEffect(() => {
    if (disabled) return

    function navigateToAdjacentSection(direction: 'up' | 'down') {
      const currentIndex = SECTION_IDS.indexOf(activeIdRef.current)
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
      if (introActiveRef.current) return
      if (scrollCooldown.current) return
      scrollCooldown.current = true

      e.preventDefault()
      navigateToAdjacentSection(e.key === 'ArrowDown' ? 'down' : 'up')

      cooldownTimeoutRef.current = setTimeout(() => {
        scrollCooldown.current = false
      }, 150)
    }

    function handleWheel(e: WheelEvent) {
      if (introActiveRef.current) return

      e.preventDefault()
      if (scrollCooldown.current) return

      scrollCooldown.current = true
      navigateToAdjacentSection(e.deltaY > 0 ? 'down' : 'up')

      cooldownTimeoutRef.current = setTimeout(() => {
        scrollCooldown.current = false
      }, 150)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('wheel', handleWheel)

      if (cooldownTimeoutRef.current) {
        clearTimeout(cooldownTimeoutRef.current)
      }
    }
  }, [disabled])
}

import { useIntroAnimation } from '@/components/hooks/introAnimationContext'
import { useEffect } from 'react'

export default function ScreenReaderIntro() {
  const { srReadIntro, setIntroActive, setSrReadIntro } = useIntroAnimation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setSrReadIntro(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIntroActive(false)
        setSrReadIntro(false)
      }
    }
    window.addEventListener('keydown', handleEscKey)
    return () => window.removeEventListener('keydown', handleEscKey)
  }, [setIntroActive, setSrReadIntro])

  return (
    <div aria-live="assertive" className="sr-only">
      {srReadIntro ? (
        <>
          <span>
            Intro animation started. Press escape to continue to the site.
          </span>
          <h1>- Portfolio Introduction:</h1>
          <p>- I spent over a decade shaping physical spaces as an architect</p>
          <p>
            - Now I&apos;m building digital systems and experiences as a
            fullstack developer
          </p>
          <p>
            - I&apos;m Marcin Ostrowski - and I bring ideas to life through
            engineering
          </p>
        </>
      ) : (
        <span>Intro canceled.</span>
      )}
    </div>
  )
}

'use client'

import { useEffect, useRef } from 'react'
import ArchBpAnimDesktop from './ArchBpAnimDesktop'
import DesktopBpAnimDesktop from './DesktopBpAnimDesktop'
import MobileBpAnimDesktop from './MobileBpAnimDesktop'
import GridBackground from '../grid/GridBackground'
import gsap from 'gsap'
import { useIntroAnimation } from '@/components/hooks/introAnimationContext'

export default function DesktopIntro() {
  const { animPhase, srReadIntro } = useIntroAnimation()
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return
    gsap.to(gridRef.current, { opacity: 1, duration: 4 })
  })

  return (
    <>
      <section
        id="home"
        role="dialog"
        aria-modal="true"
        aria-label="Intro animation"
        className="intro-section relative h-[100vh] w-full overflow-hidden snap-start"
        style={{
          background: 'radial-gradient(circle, hsl(0,0%,35%), hsl(0,0%,45%))',
        }}
      >
        <GridBackground gridRef={gridRef} />

        <div aria-live="assertive" className="sr-only">
          {srReadIntro && (
            <>
              <h1>Portfolio Introduction:</h1>
              <p>
                - I spent over a decade shaping physical spaces as an architect
              </p>
              <p>
                - Now I'm building digital systems and experiences as a
                fullstack developer
              </p>
              <p>
                - I'm Marcin Ostrowski - and I bring ideas to life through
                engineering
              </p>
            </>
          )}
        </div>

        <div
          className="intro-animation-container mx-auto max-w-[1520px]"
          aria-hidden="true"
        >
          {animPhase === 'architecture' && <ArchBpAnimDesktop />}
          {animPhase === 'mobile' && <MobileBpAnimDesktop />}
          {animPhase === 'desktop' && <DesktopBpAnimDesktop />}
        </div>
      </section>
    </>
  )
}

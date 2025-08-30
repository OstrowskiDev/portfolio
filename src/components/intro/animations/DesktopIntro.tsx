'use client'

import { useEffect, useRef } from 'react'
import ArchBpAnimDesktop from './ArchBpAnimDesktop'
import DesktopBpAnimDesktop from './DesktopBpAnimDesktop'
import MobileBpAnimDesktop from './MobileBpAnimDesktop'
import GridBackground from '../grid/GridBackground'
import gsap from 'gsap'
import { useIntroAnimation } from '@/components/hooks/introAnimationContext'

export default function DesktopIntro() {
  const { animPhase } = useIntroAnimation()
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return
    gsap.to(gridRef.current, { opacity: 1, duration: 4 })
  })

  return (
    <>
      <div
        id="home"
        className="intro-section relative h-[100vh] w-full overflow-hidden"
        style={{
          background: 'radial-gradient(circle, hsl(0,0%,35%), hsl(0,0%,45%))',
        }}
      >
        <GridBackground gridRef={gridRef} />

        <div className="intro-animation-container mx-auto max-w-[1520px]">
          {animPhase === 'architecture' && <ArchBpAnimDesktop />}
          {animPhase === 'mobile' && <MobileBpAnimDesktop />}
          {animPhase === 'desktop' && <DesktopBpAnimDesktop />}
        </div>
      </div>
    </>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import ArchBpAnimDesktop from './ArchBpAnimDesktop'
import DesktopBpAnimDesktop from './DesktopBpAnimDesktop'
import MobileBpAnimDesktop from './MobileBpAnimDesktop'
import GridBackground from '../grid/GridBackground'
import gsap from 'gsap'

export default function DesktopIntro() {
  const [animPhase, setAnimPhase] = useState('architecture')
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
          <DesktopBpAnimDesktop setAnimPhase={setAnimPhase} />

          {/* {animPhase === 'architecture' && (
            <ArchBpAnimDesktop setAnimPhase={setAnimPhase} />
          )}
          {animPhase === 'mobile' && (
            <MobileBpAnimDesktop setAnimPhase={setAnimPhase} />
          )}
          {(animPhase === 'desktop' || animPhase === 'finished') && (
            <DesktopBpAnimDesktop setAnimPhase={setAnimPhase} />
          )} */}
        </div>
      </div>
    </>
  )
}

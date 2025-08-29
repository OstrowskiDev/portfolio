'use client'

import { useEffect, useRef, useState } from 'react'
import GridBackground from '../grid/GridBackground'
import gsap from 'gsap'
import ArchBpAnimMobile from './ArchBpAnimMobile'
import MobileBpAnimMobile from './MobileBpAnimMobile'
import DesktopBpAnimMobile from './DesktopBpAnimMobile'

export default function MobileIntro() {
  const [animPhase, setAnimPhase] = useState('architecture')
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return
    gsap.to(gridRef.current, { opacity: 1, duration: 4 })
  })

  return (
    <>
      <div
        className="intro-section relative h-[100vh] w-full overflow-hidden"
        style={{
          background: 'radial-gradient(circle, hsl(0,0%,35%), hsl(0,0%,45%))',
        }}
      >
        <GridBackground gridRef={gridRef} />
        <div className="intro-animation-container mx-auto min-w-[415px] max-w-[480px]">
          {animPhase === 'architecture' && (
            <ArchBpAnimMobile setAnimPhase={setAnimPhase} />
          )}
          {animPhase === 'mobile' && (
            <MobileBpAnimMobile setAnimPhase={setAnimPhase} />
          )}
          {animPhase === 'desktop' && <DesktopBpAnimMobile />}
        </div>
      </div>
    </>
  )
}

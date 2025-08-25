'use client'

import { useEffect, useRef, useState } from 'react'
import ArchBlueprintAnim from './ArchBlueprintAnim'
import DesktopBlueprintAnim from './DesktopBlueprintAnim'
import MobileBlueprintAnim from './MobileBlueprintAnim'
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
        className="intro-section relative h-[100vh] w-full overflow-hidden"
        style={{
          background: 'radial-gradient(circle, hsl(0,0%,35%), hsl(0,0%,45%))',
        }}
      >
        <GridBackground gridRef={gridRef} />

        <div className="intro-animation-container mx-auto max-w-[1520px]">
          {animPhase === 'architecture' && (
            <ArchBlueprintAnim setAnimPhase={setAnimPhase} />
          )}
          {animPhase === 'mobile' && (
            <MobileBlueprintAnim setAnimPhase={setAnimPhase} />
          )}
          {animPhase === 'desktop' && <DesktopBlueprintAnim />}
        </div>
      </div>
    </>
  )
}

'use client'

import ArchBlueprintAnim from './ArchBlueprintAnim'
import GridBackground from './GridBackground'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import DesktopBlueprintAnim from './DesktopBlueprintAnim'
import MobileBlueprintAnim from './MobileBlueprintAnim'

export default function Intro() {
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
        {animPhase === 'architecture' && (
          <ArchBlueprintAnim setAnimPhase={setAnimPhase} />
        )}
        {animPhase === 'mobile' && (
          <MobileBlueprintAnim setAnimPhase={setAnimPhase} />
        )}
        {animPhase === 'desktop' && <DesktopBlueprintAnim />}
      </div>
    </>
  )
}

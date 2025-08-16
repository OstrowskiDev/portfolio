'use client'

import SvgMobileBlueprintOpt from '@/components/intro/svgr_output/MobileBlueprintOpt'
import SvgDesktopWebFlatSvgo from '@/components/intro/svgr_output/DesktopWebFlat'
import ArchBlueprintAnim from './ArchBlueprintAnim'
import GridBackground from './GridBackground'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Intro() {
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
        <ArchBlueprintAnim />
      </div>
      <div className="intro-section h-[100vh] w-full bg-primary-700">
        <SvgDesktopWebFlatSvgo />
      </div>

      <div className="intro-section h-[100vh] w-full bg-primary-700">
        <SvgMobileBlueprintOpt />
      </div>
    </>
  )
}

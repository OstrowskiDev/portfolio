'use client'

import { useEffect, useState } from 'react'
import SvgMobileBlueprintOpt from '@/components/intro/svgr_output/MobileBlueprintOpt'
import SvgDesktopWebFlatSvgo from '@/components/intro/svgr_output/DesktopWebFlat'
import SvgArchBlueprintWebReady from '@/components/intro/svgr_output/ArchBlueprintWebReady'

export default function Intro() {
  const [phase, setPhase] = useState(-1)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    if (!isActive) return
    const timers = [
      setTimeout(() => setPhase(1), 2000),
      setTimeout(() => setPhase(2), 4000),
      setTimeout(() => setPhase(3), 6000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [isActive])

  return (
    <>
      <div className="intro-section h-[100vh] w-full bg-primary-700 overflow-hidden">
        <SvgArchBlueprintWebReady
          axesColor="#fff"
          structureColor="#fff"
          viewLinesColor="#fff"
        />
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

'use client'

import { useEffect, useState } from 'react'
import SvgDesktopBlueprint from '@/components/intro/svgr_output/DesktopBlueprint'
import SvgMobileBlueprintOpt from '@/components/intro/svgr_output/MobileBlueprintOpt'
import SvgDesktopWebFlatSmallSvgo from '@/components/intro/svgr_output/DesktopWebFlatSmall'
import SvgDesktopWebFlatSvgo from '@/components/intro/svgr_output/DesktopWebFlat'

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
      <div className="intro-section h-[100vh] w-full bg-primary-500">
        <SvgDesktopWebFlatSvgo />
      </div>

      <div className="intro-section h-[100vh] w-full bg-primary-500">
        <SvgMobileBlueprintOpt />
      </div>
    </>
  )
}

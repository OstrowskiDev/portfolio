'use client'

import SvgMobileBlueprintOpt from '@/components/intro/svgr_output/MobileBlueprintOpt'
import SvgDesktopWebFlatSvgo from '@/components/intro/svgr_output/DesktopWebFlat'
import ArchBlueprintAnim from './ArchBlueprintAnim'
import GridBackground from './GridBackground'

export default function Intro() {
  return (
    <>
      <div
        className="intro-section relative h-[100vh] w-full overflow-hidden"
        style={{
          background: 'radial-gradient(circle, hsl(0,0%,35%), hsl(0,0%,45%))',
        }}
      >
        <GridBackground />
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

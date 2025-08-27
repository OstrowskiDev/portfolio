'use client'

import DesktopBlueprintSm from '@/components/intro/svgr/DesktopBlueprintSmall'
import { getNodes } from '@/lib/helpers'
import { useEffect, useRef } from 'react'

export default function HeroMobile() {
  const svgRef = useRef<SVGGElement | null>(null)
  const textRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    if (!svgRef.current || !textRef.current) return

    const framePaths = getNodes(svgRef, '.frame path')
    const layout = getNodes(svgRef, '.layout')

    if (!framePaths || !layout) return

    gsap.set(textRef.current, { opacity: 1 })

    framePaths.forEach((path) => {
      const length = path.getTotalLength()
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })
    })

    gsap.set(framePaths, { strokeDashoffset: 0, opacity: 1 })
  }, [])

  return (
    <>
      <div className="intro-section relative h-[100vh] w-full overflow-hidden">
        <h2
          ref={textRef}
          className="intro-line-three absolute top-[calc(10px+2vh)] pl-6 xs:pl-0 font-bold italic text-[clamp(18px,6vw,24px)] xs:text-[24px] text-primary-100 opacity-0 z-50"
        >
          I’m Marcin Ostrowski,
          <br /> and I bring ideas to life
          <br /> through engineering.
        </h2>
        <DesktopBlueprintSm
          className="relative left-[calc(-680px+20vw)] top-[calc(80px+6vh)] h-[calc(300px+50vh)]"
          svgRef={svgRef}
          strokeWidth="0.24"
        />
      </div>
    </>
  )
}

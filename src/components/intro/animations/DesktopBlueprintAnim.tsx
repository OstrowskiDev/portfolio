'use client'

import DesktopBlueprintSm from '@/components/intro/svgr/DesktopBlueprintSmall'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function DesktopBlueprintAnim() {
  const svgRef = useRef<SVGGElement | null>(null)
  const textRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    if (!svgRef.current || !textRef.current) return

    const framePaths = getNodes(svgRef, '.frame path')
    const layout = getNodes(svgRef, '.layout')

    if (!framePaths || !layout) return

    const tl = gsap.timeline()

    tl.set(textRef.current, { y: 200 })

    tl.addLabel('text').to(textRef.current, {
      opacity: 1,
      duration: 0.7,
      y: 0,
    })

    framePaths.forEach((path) => {
      const length = path.getTotalLength()
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })
    })

    const frameOuter = getNodes(svgRef, '.frame-outer')
    const frameInner = getNodes(svgRef, '.frame-inner')
    const frameHoriz = getNodes(svgRef, '.frame-horizontal')
    const frameSupport = getNodes(svgRef, '.frame-support')
    const frameDesk = getNodes(svgRef, '.frame-desk')

    const framesLong = [frameOuter, frameInner, frameDesk]
    const framesMedium = frameHoriz
    const framesShort = frameSupport

    tl.addLabel('frame')
      .to(framesLong, { opacity: 1 }, '<+=0.2')
      .to(framesLong, { strokeDashoffset: 0, duration: 2 }, '<')
      .to(framesMedium, { opacity: 1 }, '<+=1')
      .to(framesMedium, { strokeDashoffset: 0, duration: 1.5 }, '<')
      .to(framesShort, { opacity: 1 }, '<+=0.7')
      .to(framesShort, { strokeDashoffset: 0, duration: 1 }, '<')

    const layoutToCoords = { attr: { x1: 200, y1: 0, x2: 400, y2: 200 } }

    tl.addLabel('layout').to(layout, { opacity: 1, duration: 3 }, '<-=1.7')
  }, [])

  function getNodes(
    ref: React.RefObject<SVGGElement>,
    query: string,
  ): NodeListOf<SVGPathElement> | null {
    if (!ref.current) return null
    const nodes = ref.current.querySelectorAll<SVGPathElement>(query)
    return nodes
  }

  return (
    <>
      <div className="intro-section relative h-[100vh] w-full overflow-hidden">
        <h2
          ref={textRef}
          className="intro-line-one absolute top-28 left-20 w-[875px] font-bold italic text-[40px] text-primary-100 opacity-0 z-50"
        >
          I’m Marcin Ostrowski,
          <br /> and I bring ideas to life
          <br /> through engineering.
        </h2>
        <DesktopBlueprintSm svgRef={svgRef} />
      </div>
    </>
  )
}

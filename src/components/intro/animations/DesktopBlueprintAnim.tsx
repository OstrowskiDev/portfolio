'use client'

import DesktopBlueprintSm from '@/components/intro/svgr/DesktopBlueprintSmall'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function DesktopBlueprintAnim() {
  const svgRef = useRef<SVGGElement | null>(null)
  const textRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    if (!svgRef.current || !textRef.current) return

    const frame = getNodes(svgRef, '.frame')
    const framePaths = getNodes(svgRef, '.frame path')
    const layout = getNodes(svgRef, '.layout')
    const layoutGradient = getNodes(svgRef, '.layout-gradient')

    if (!frame || !framePaths || !layout) return

    const tl = gsap.timeline()

    tl.set(frame, { opacity: 1 })
    tl.set(layout, { opacity: 1 })
    tl.set(textRef.current, { y: 200 })

    tl.addLabel('text').to(textRef.current, {
      opacity: 1,
      duration: 1,
      y: 0,
      ease: 'power3.out',
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
      .to(framesLong, { strokeDashoffset: 0, duration: 4 }, 'frame+=0')
      .to(framesMedium, { strokeDashoffset: 0, duration: 3 }, 'frame+=1')
      .to(framesShort, { strokeDashoffset: 0, duration: 1 }, 'frame+=3.5')

    const layoutFrom = { attr: { x1: -100, y1: 0, x2: 100, y2: 200 } }
    const layoutToCoords = { attr: { x1: 200, y1: 0, x2: 400, y2: 200 } }
    const layoutTo = { ...layoutToCoords, duration: 3 }

    tl.addLabel('layout').fromTo(
      layoutGradient,
      layoutFrom,
      layoutTo,
      'frame+=3.2',
    )
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
          <br /> and I bring ideas to life,
          <br /> through engineering.
        </h2>
        <DesktopBlueprintSm svgRef={svgRef} />
      </div>
    </>
  )
}

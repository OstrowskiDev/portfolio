'use client'

import DesktopBlueprintSm from '@/components/intro/svgr/DesktopBlueprintSmall'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function DesktopBpAnimMobile() {
  const svgRef = useRef<SVGGElement | null>(null)
  const textRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    if (!svgRef.current || !textRef.current) return

    const framePaths = getNodes(svgRef, '.frame path')
    const layout = getNodes(svgRef, '.layout')

    if (!framePaths || !layout) return

    const tl = gsap.timeline()

    tl.set(textRef.current, { x: -400 })

    tl.addLabel('text').to(textRef.current, {
      opacity: 1,
      duration: 0.5,
      x: 0,
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

    const framesLong = [frameOuter, frameDesk]
    const framesMedium = frameHoriz
    const framesShort = frameSupport

    tl.addLabel('frame')
      .to(framesLong, { opacity: 1 }, '<+=0.4')
      .to(framesLong, { strokeDashoffset: 0, duration: 1.6 }, '<')
      .to(frameInner, { opacity: 1 }, '<')
      .to(frameInner, { strokeDashoffset: 0, duration: 1 }, '<')
      .to(framesMedium, { opacity: 1 }, '<+=0.2')
      .to(framesMedium, { strokeDashoffset: 0, duration: 1.5 }, '<')
      .to(framesShort, { opacity: 1 }, '<+=1')
      .to(framesShort, { strokeDashoffset: 0, duration: 1 }, '<')

    tl.addLabel('layout').to(
      layout,
      { opacity: 1, duration: 2.5, ease: 'power2.in' },
      '<-=1.8',
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

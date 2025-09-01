'use client'

import { useIntroAnimation } from '@/components/hooks/introAnimationContext'
import DesktopBlueprintSm from '@/components/intro/svgr/DesktopBlueprintSmall'
import { getNodes } from '@/lib/helpers'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function DesktopBpAnimDesktop() {
  const { setAnimPhase, desktopTimelineRef, setIntroActive } =
    useIntroAnimation()
  const svgRef = useRef<SVGGElement | null>(null)
  const textRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    if (!svgRef.current || !textRef.current) return

    const framePaths = getNodes(svgRef, '.frame path')
    const layout = getNodes(svgRef, '.layout')
    const home = document.getElementById('home')

    if (!framePaths || !layout) return

    const tl = gsap.timeline()
    desktopTimelineRef.current = tl

    tl.set(textRef.current, { y: 200 })

    tl.addLabel('text').to(textRef.current, {
      opacity: 1,
      duration: 0.7,
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

    const framesLong = [frameOuter, frameDesk]
    const framesMedium = frameHoriz
    const framesShort = frameSupport

    tl.addLabel('frame')
      .to(framesLong, { opacity: 1 }, '<+=0.2')
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

    tl.call(() => {
      setIntroActive(false)
    })

    tl.addLabel('animation-end')

    // prettier-ignore
    const animationEnd = { height: 'calc(100vh - 100px)', duration: 0.8, ease: 'power3.out' }
    tl.to(home, animationEnd, '>')

    tl.call(() => {
      tl.pause()
    })

    tl.addLabel('outro')
    tl.to(textRef.current, { y: -400, duration: 0.4 }, 'outro')
    tl.to([framePaths, layout], { opacity: 0, duration: 0.4 }, '<')
    // prettier-ignore
    const cleanVectors = { height: '100vh', duration: 0.5, onComplete: () => { setAnimPhase('architecture')}}
    tl.to(home, cleanVectors, '<')

    // Cleanup
    return () => {
      tl.kill()
      desktopTimelineRef.current = null
    }
  }, [])

  return (
    <>
      <div className="intro-section hero-section relative h-[100vh] w-full overflow-hidden">
        <h2
          ref={textRef}
          className="intro-line-one absolute top-28 left-20 w-[875px] font-bold italic text-[40px] text-primary-100 select-none opacity-0 z-50"
        >
          I’m Marcin Ostrowski,
          <br /> and I bring ideas to life
          <br /> through engineering.
        </h2>
        <DesktopBlueprintSm svgRef={svgRef} strokeWidth="0.25" />
      </div>
    </>
  )
}

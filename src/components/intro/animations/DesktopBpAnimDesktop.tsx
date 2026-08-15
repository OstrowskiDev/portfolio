'use client'

import { useIntroAnimation } from '@/components/hooks/introAnimationContext'
import DesktopBlueprintSm from '@/components/intro/svgr/DesktopBlueprintSmall'
import { getNodes } from '@/lib/helpers'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function DesktopBpAnimDesktop({
  isShortViewport = false,
}: {
  isShortViewport?: boolean
}) {
  const { setAnimPhase, setIntroActive, introActive, desktopTimelineRef } =
    useIntroAnimation()
  const svgRef = useRef<SVGGElement | null>(null)
  const textRef = useRef<HTMLHeadingElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!svgRef.current || !textRef.current || !containerRef.current) return

    // below func positions svg in such a way that h1 will be always in its empty zone (top center-left)
    function syncSvgToHeader() {
      const parent = containerRef.current
      const svg = svgRef.current
      const text = textRef.current

      if (!parent || !svg || !text) return

      const svgAspectRatio = 317.5 / 158.75
      const svgScale = 0.95
      const svgAnchor = 0.38

      const parentRect = parent.getBoundingClientRect()
      const textRect = text.getBoundingClientRect()
      const parentHeight = parent.clientHeight

      const height = parentHeight * svgScale
      const width = svgAspectRatio * height

      const textRight = textRect.right - parentRect.left
      const anchorX = width * svgAnchor
      const left = textRight - anchorX - (isShortViewport ? 0 : 350)

      const top = parentHeight / 2 - parentHeight * 0.02

      svg.style.position = 'absolute'
      svg.style.display = 'block'
      svg.style.width = `${width}px`
      svg.style.height = `${height}px`
      svg.style.left = `${left}px`
      svg.style.top = `${top}px`
      svg.style.transform = 'translateY(-50%)'
      svg.style.transformOrigin = 'left center'
      svg.style.opacity = '1'
    }

    syncSvgToHeader()

    const resizeObserver = new ResizeObserver(() => syncSvgToHeader())
    resizeObserver.observe(containerRef.current)
    resizeObserver.observe(textRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [isShortViewport])

  useEffect(() => {
    if (!svgRef.current || !textRef.current) return

    gsap.set(svgRef.current, {
      opacity: 1,
    })

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

    const navOffset = window.matchMedia('(max-height: 800px)').matches
      ? '60px'
      : '80px'
    // prettier-ignore
    const animationEnd = { height: `calc(100vh - ${navOffset})`, duration: 0.8, ease: 'power3.out' }
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
  }, [isShortViewport])

  useEffect(() => {
    // functionality for skip animation button
    if (!introActive) {
      desktopTimelineRef.current?.seek(2.6, false)
    }
  }, [introActive])

  return (
    <>
      <div
        ref={containerRef}
        className="intro-section hero-section relative h-[100vh] w-full overflow-visible"
      >
        <h1
          ref={textRef}
          className={`intro-line-one 
            absolute top-28 left-20 tall:left-12 
            w-[400px] tall:w-[875px] 
            font-bold italic 
            text-[32px] tall:text-[40px] 
            text-primary-100 
            select-none 
            opacity-0 z-40`}
        >
          I’m Marcin Ostrowski,
          <br /> and I bring ideas to life
          <br /> through engineering.
        </h1>
        <DesktopBlueprintSm svgRef={svgRef} strokeWidth="0.25" />
      </div>
    </>
  )
}

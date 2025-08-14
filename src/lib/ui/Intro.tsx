'use client'

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import gsap from 'gsap'
import SvgMobileBlueprintOpt from '@/components/intro/svgr_output/MobileBlueprintOpt'
import SvgDesktopWebFlatSvgo from '@/components/intro/svgr_output/DesktopWebFlat'
import SvgArchBlueprintWebReady from '@/components/intro/svgr_output/ArchBlueprintWebReady'

export default function Intro() {
  const textRef = useRef<HTMLHeadingElement | null>(null)
  const axesRef = useRef<SVGGElement | null>(null)
  const structRef = useRef<SVGGElement | null>(null)
  const viewsRef = useRef<SVGGElement | null>(null)

  useEffect(() => {
    if (
      !textRef.current ||
      !axesRef.current ||
      !structRef.current ||
      !viewsRef.current
    )
      return

    // opacity stanu początkowego jest ustawiane na elementach w .tsx
    gsap.set(textRef.current, {
      y: 200,
    })

    const tlStory = gsap.timeline()
    const tlSvg = gsap.timeline()

    tlStory.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power3.out',
    })

    tlStory.to(textRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.5,
      delay: 6,
      ease: 'power3.in',
    })

    tlSvg.to(axesRef.current, {
      opacity: 1,
      duration: 1,
      delay: 0.5,
    })

    tlSvg.to(structRef.current, {
      opacity: 1,
      duration: 1,
      delay: 1,
    })

    tlSvg.to(viewsRef.current, {
      opacity: 1,
      duration: 1,
      delay: 1,
    })

    tlSvg.to(
      [
        axesRef.current,
        structRef.current,
        viewsRef.current,
      ],
      {
        opacity: 0,
        duration: 2,
        delay: 1,
      },
    )
  }, [])

  return (
    <>
      <div className="intro-section relative h-[100vh] w-full bg-primary-700 overflow-hidden">
        <h2
          ref={textRef}
          className="intro-line-one absolute top-28 left-12 w-[875px] font-bold italic text-[40px] text-primary-100 opacity-0"
        >
          I spent over a decade shaping physical spaces - as
          an architect.
        </h2>
        <SvgArchBlueprintWebReady
          axesRef={axesRef}
          structRef={structRef}
          viewsRef={viewsRef}
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

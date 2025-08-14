'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SvgMobileBlueprintOpt from '@/components/intro/svgr_output/MobileBlueprintOpt'
import SvgDesktopWebFlatSvgo from '@/components/intro/svgr_output/DesktopWebFlat'
import SvgArchBlueprintWebReady from '@/components/intro/svgr_output/ArchBlueprintWebReady'
import PlusSign from '@/components/icons/PlusSign'

export default function Intro() {
  const textRef = useRef<HTMLHeadingElement | null>(null)
  const axesRef = useRef<SVGGElement | null>(null)
  const structRef = useRef<SVGGElement | null>(null)
  const viewsRef = useRef<SVGGElement | null>(null)

  const svgRef = useRef<SVGGElement | null>(null)

  useEffect(() => {
    if (
      !textRef.current ||
      !axesRef.current ||
      !structRef.current ||
      !viewsRef.current
    )
      return

    if (!svgRef.current) return

    const axesPaths =
      axesRef.current.querySelectorAll<SVGPathElement>(
        'path',
      )

    const viewPaths =
      viewsRef.current.querySelectorAll<SVGPathElement>(
        'path',
      )

    // animacja testowa krzyża

    const paths =
      svgRef.current.querySelectorAll<SVGPathElement>(
        'path',
      )

    // Najpierw ustawiamy ich stan początkowy
    paths.forEach((path) => {
      const length = path.getTotalLength()
      gsap.set(path, {
        strokeDasharray: length, // "długość" kreski
        strokeDashoffset: length, // cały przesunięty => niewidoczny
        opacity: 1,
      })
    })

    const tlCross = gsap.timeline()

    // Tworzymy animację rysowania
    tlCross.to(paths, {
      strokeDashoffset: 0, // przesuwamy do 0 => cała kreska widoczna
      duration: 1,
      ease: 'power1.inOut',
    })

    // end of PlusSVG test

    // opacity stanu początkowego jest ustawiane na elementach w .tsx
    gsap.set(textRef.current, {
      y: 200,
    })

    const tlStory = gsap.timeline()

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

    const tlSvg = gsap.timeline()

    //construction drawing lines animation:

    const structPaths =
      structRef.current.querySelectorAll<SVGPathElement>(
        'path',
      )

    console.log(structPaths)

    structPaths.forEach((path) => {
      const length = path.getTotalLength()
      gsap.set(path, {
        strokeDasharray: length, // "długość" kreski
        strokeDashoffset: length, // cały przesunięty => niewidoczny
      })
    })

    gsap.set(structPaths, { fillOpacity: 0 })

    const tlConstruction = gsap.timeline()

    // Tworzymy animację rysowania
    tlConstruction.to(structPaths, {
      strokeDashoffset: 0, // przesuwamy do 0 => cała kreska widoczna
      duration: 52,
      ease: 'power1.inOut',
    })

    // tlSvg.to(axesRef.current, {
    //   opacity: 1,
    //   duration: 1,
    //   delay: 0.5,
    // })

    // tlSvg.to(structRef.current, {
    //   opacity: 1,
    //   duration: 1,
    //   delay: 1,
    // })

    // tlSvg.to(viewsRef.current, {
    //   opacity: 1,
    //   duration: 1,
    //   delay: 1,
    // })

    // tlSvg.to(
    //   [
    //     axesRef.current,
    //     structRef.current,
    //     viewsRef.current,
    //   ],
    //   {
    //     opacity: 0,
    //     duration: 2,
    //     delay: 1,
    //   },
    // )
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
        <PlusSign svgRef={svgRef} />
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

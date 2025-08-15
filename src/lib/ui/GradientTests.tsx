'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ArchitectureBlueprint from '@/components/intro/svgr_output/Architecture'

export default function GradientTests() {
  const textRef = useRef<HTMLHeadingElement | null>(null)
  const axesRef = useRef<SVGGElement | null>(null)
  const structRef = useRef<SVGGElement | null>(null)
  const structFillRef = useRef<SVGGElement | null>(null)
  const descriptRef = useRef<SVGGElement | null>(null)
  const descriptFillRef = useRef<SVGGElement | null>(null)

  const svgRef = useRef<SVGGElement | null>(null)

  const gradientRef = useRef<SVGLinearGradientElement | null>(null)

  useEffect(() => {
    if (!svgRef.current) {
      return
    }

    const svgGroups = svgRef.current.querySelectorAll('g')
    gsap.set([svgGroups], { opacity: 1 })
    const structFillGroup = svgRef.current.querySelectorAll('.struct-fill')
    gsap.set([structFillGroup], { opacity: 0 })
    const descriptFillGroup = svgRef.current.querySelectorAll('.descript-fill')
    gsap.set([descriptFillGroup], { opacity: 0 })

    gsap.fromTo(
      axesRef.current,
      {
        attr: {
          x1: 200,
          y1: 300,
          x2: 400,
          y2: 500,
        },
      },
      {
        attr: {
          x1: 1900,
          y1: 1700,
          x2: 2100,
          y2: 1900,
        },
        duration: 3,
        ease: 'power2.inOut',
      },
    )

    gsap.to(structFillGroup, { opacity: 1, duration: 1, delay: 2.5 })

    gsap.fromTo(
      structRef.current,
      {
        attr: {
          x1: -100,
          y1: 200, // constant Y for vertical line
          x2: 100,
          y2: 200, // constant Y for vertical line
        },
      },
      {
        attr: {
          x1: 1900,
          y1: 200, // constant Y for vertical line
          x2: 2100,
          y2: 200, // constant Y for vertical line
        },
        duration: 3,
        delay: 0.7,
        ease: 'power2.inOut',
      },
    )

    gsap.fromTo(
      descriptRef.current,
      {
        attr: {
          x1: 200, // stały X
          y1: 1400, // start przy dole
          x2: 200, // stały X
          y2: 1600, // odcinek w pionie
        },
      },
      {
        attr: {
          x1: 200, // X bez zmian
          y1: 0, // przesunięcie w górę
          x2: 200,
          y2: 200,
        },
        duration: 5,
        delay: 0.7,
        ease: 'power2.inOut',
      },
    )

    gsap.to(descriptFillGroup, { opacity: 1, duration: 1, delay: 4.5 })

    // end of longest useEffect in my coding history
  }, [])

  return (
    <>
      <div className="intro-section relative h-[100vh] w-full bg-primary-700 overflow-hidden">
        <h2
          ref={textRef}
          className="intro-line-one absolute top-28 left-12 w-[875px] font-bold italic text-[40px] text-primary-100 opacity-0"
        >
          I spent over a decade shaping physical spaces - as an architect.
        </h2>
        <ArchitectureBlueprint
          svgRef={svgRef}
          gradientRef={gradientRef}
          axesRef={axesRef}
          structRef={structRef}
          structFillRef={structFillRef}
          descriptRef={descriptRef}
          descriptFillRef={descriptFillRef}
        />
      </div>
    </>
  )
}

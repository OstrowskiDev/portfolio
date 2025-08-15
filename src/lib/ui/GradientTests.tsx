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

  const gradientRef = useRef<SVGLinearGradientElement | null>(null)

  useEffect(() => {
    gsap.set(
      [
        axesRef.current,
        structRef.current,
        structFillRef.current,
        descriptRef.current,
        descriptFillRef.current,
      ],
      {
        opacity: 1,
      },
    )

    // Animacja skośnego gradientu - dostosowana do viewBox="50 150 1738 1436"
    gsap.fromTo(
      gradientRef.current,
      {
        attr: {
          x1: 200, // Zaczynamy tuż przed viewBox (50 - 150 = -100)
          y1: 300, // Zaczynamy tuż przed viewBox (150 - 150 = 0)
          x2: 400, // Gradient ma szerokość 200px
          y2: 500, // Gradient ma wysokość 200px (kąt 45°)
        },
      },
      {
        attr: {
          x1: 1900, // Kończymy tuż za viewBox (50 + 1738 + 100 = 1888)
          y1: 1700, // Kończymy tuż za viewBox (150 + 1436 + 100 = 1686)
          x2: 2100, // Gradient dalej ma szerokość 200px
          y2: 1900, // Gradient dalej ma wysokość 200px
        },
        duration: 3,
        ease: 'power2.inOut',
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
          I spent over a decade shaping physical spaces - as an architect.
        </h2>
        <ArchitectureBlueprint
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

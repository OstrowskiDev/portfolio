'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ArchitectureBlueprint from '@/components/intro/svgr_output/Architecture'

export default function ArchTests() {
  const textRef = useRef<HTMLHeadingElement | null>(null)
  const axesRef = useRef<SVGGElement | null>(null)
  const structRef = useRef<SVGGElement | null>(null)
  const structFillRef = useRef<SVGGElement | null>(null)
  const descriptRef = useRef<SVGGElement | null>(null)
  const descriptFillRef = useRef<SVGGElement | null>(null)

  // Tablice tymczasowe, na cele funkcji FindOut()
  let shortLengths: number[] = [] // 0–10
  let mediumLengths: number[] = [] // 10–50
  let longLengths: number[] = [] // 50–250
  let extraLongLengths: number[] = [] // >250
  // jw, tablice Node'ów
  let shortNodes: SVGPathElement[] = []
  let mediumNodes: SVGPathElement[] = []
  let longNodes: SVGPathElement[] = []
  let extraLongNodes: SVGPathElement[] = []

  useEffect(() => {
    if (!axesRef.current || !structRef.current || !structFillRef.current) {
      console.log('none ref elements found')
      return
    }

    const axes = axesRef.current.querySelectorAll<SVGPathElement>('path')
    const struct = structRef.current.querySelectorAll<SVGPathElement>('path')
    const structFill =
      structFillRef.current.querySelectorAll<SVGPathElement>('path')

    gsap.set(axesRef.current, { opacity: 1 })
    gsap.set(structRef.current, { opacity: 1 })
    gsap.set(structFillRef.current, { opacity: 0 })
    gsap.set(descriptRef.current, { opacity: 0 })
    gsap.set(descriptFillRef.current, { opacity: 0 })

    const tlAxes = gsap.timeline()
    const tlStruct = gsap.timeline()

    axes.forEach((path) => {
      const length = path.getTotalLength()
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })
    })

    tlAxes.to(axes, {
      strokeDashoffset: 0,
      duration: 5,
      ease: 'power1.inOut',
    })

    struct.forEach((path) => {
      const length = path.getTotalLength()
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })
    })

    tlStruct.to(struct, {
      strokeDashoffset: 0,
      duration: 4,
      ease: 'power1.inOut',
    })

    findOut(struct)
  }, [])

  function findOut(struct: NodeListOf<SVGPathElement>) {
    // Reset tablic
    shortLengths = []
    mediumLengths = []
    longLengths = []
    extraLongLengths = []

    shortNodes = []
    mediumNodes = []
    longNodes = []
    extraLongNodes = []

    struct.forEach((path) => {
      const length = path.getTotalLength()

      if (length <= 10) {
        shortLengths.push(length)
        shortNodes.push(path)
      } else if (length <= 50) {
        mediumLengths.push(length)
        mediumNodes.push(path)
      } else if (length <= 250) {
        longLengths.push(length)
        longNodes.push(path)
      } else {
        extraLongLengths.push(length)
        extraLongNodes.push(path)
      }
    })

    // Logowanie zawartości
    console.log('Short lengths (0-10):', shortLengths)
    console.log('Medium lengths (10-50):', mediumLengths)
    console.log('Long lengths (50-250):', longLengths)
    console.log('Extra long lengths (250+):', extraLongLengths)

    // Log minimalnej i maksymalnej wartości
    const allLengths = [
      ...shortLengths,
      ...mediumLengths,
      ...longLengths,
      ...extraLongLengths,
    ]
    const minLength = Math.min(...allLengths)
    const maxLength = Math.max(...allLengths)

    console.log('Min length:', minLength)
    console.log('Max length:', maxLength)

    // Log ilości elementów w każdej grupie (przydatne do planowania animacji)
    console.log('Counts:', {
      short: shortNodes.length,
      medium: mediumNodes.length,
      long: longNodes.length,
      extraLong: extraLongNodes.length,
    })
  }

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

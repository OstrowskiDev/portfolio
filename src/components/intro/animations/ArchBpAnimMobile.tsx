'use client'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import ArchitectureBpMobile from '../svgr/ArchitectureBpMobile'

export default function ArchBpAnimMobile({
  setAnimPhase,
}: {
  setAnimPhase: (value: string) => void
}) {
  const svgRef = useRef<SVGGElement | null>(null)
  const textRef = useRef<HTMLHeadingElement | null>(null)
  const axesRef = useRef<SVGGElement | null>(null)
  const structRef = useRef<SVGGElement | null>(null)
  const descriptRef = useRef<SVGGElement | null>(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!svgRef.current || !textRef.current) {
      return
    }

    const svgGroups = svgRef.current.querySelectorAll('g')
    const structFillGroup = svgRef.current.querySelectorAll('.struct-fill')
    const descriptFillGroup = svgRef.current.querySelectorAll('.descript-fill')

    gsap.set([svgGroups], { opacity: 1 })
    gsap.set([structFillGroup], { opacity: 0 })
    gsap.set([descriptFillGroup], { opacity: 0 })
    gsap.set(textRef.current, { x: -400 })

    const tl = gsap.timeline()

    tl.addLabel('text').to(textRef.current, { x: 0, opacity: 1, duration: 0.4 })

    const axesFrom = { attr: { x1: -200, y1: -100, x2: 0, y2: 100 } }
    const axesToCoords = { attr: { x1: 1300, y1: 1100, x2: 1500, y2: 1300 } }
    const axesTo = { ...axesToCoords, duration: 3, ease: 'power2.inOut' }

    const structFrom = { attr: { x1: -200, y1: -100, x2: 0, y2: 100 } }
    const structToCoords = { attr: { x1: 1300, y1: 1100, x2: 1500, y2: 1300 } }
    const structTo = { ...structToCoords, duration: 3, ease: 'power2.inOut' }

    const descriptFrom = { attr: { x1: -400, y1: 0, x2: -200, y2: 0 } }
    const descriptToCoords = { attr: { x1: 800, y1: 0, x2: 1000, y2: 0 } }
    const descriptTo = { ...descriptToCoords, duration: 2 }

    tl.addLabel('blueprint')
      .fromTo(axesRef.current, axesFrom, axesTo, '<-=0')
      .fromTo(structRef.current, structFrom, structTo, '<+=0.35')
      .to(structFillGroup, { opacity: 1, duration: 2 }, 'blueprint+=1')
      .fromTo(descriptRef.current, descriptFrom, descriptTo, 'blueprint+=1')
      .to(descriptFillGroup, { opacity: 1, duration: 1 }, 'blueprint+=2')

    tl.addLabel('bye_bye', 'blueprint+=2.5')
      .to([svgGroups], { opacity: 0, duration: 0.7 }, 'bye_bye+=0')
      .to(
        textRef.current,
        {
          x: 400,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.in',
          onComplete: () => {
            setAnimPhase('mobile')
          },
        },
        'bye_bye+=0.5',
      )
  }, [])

  return (
    <>
      <div className="intro-section relative h-[100vh] w-full overflow-hidden xs:flex xs:justify-center">
        <h2
          ref={textRef}
          className="intro-line-one absolute top-10 pl-6 xs:pl-0 font-bold italic text-[24px] text-primary-100 opacity-0 z-50"
        >
          I spent over a decade
          <br />
          shaping physical spaces
          <br />- as an architect.
        </h2>
        <ArchitectureBpMobile
          svgRef={svgRef}
          axesRef={axesRef}
          structRef={structRef}
          descriptRef={descriptRef}
        />
      </div>
    </>
  )
}

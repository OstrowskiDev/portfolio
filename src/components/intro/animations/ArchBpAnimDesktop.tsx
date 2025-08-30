'use client'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import ArchitectureBlueprint from '@/components/intro/svgr/ArchitectureBlueprint'
import { useIntroAnimation } from '@/components/hooks/introAnimationContext'

export default function ArchBpAnimDesktop() {
  const svgRef = useRef<SVGGElement | null>(null)
  const textRef = useRef<HTMLHeadingElement | null>(null)
  const axesRef = useRef<SVGGElement | null>(null)
  const structRef = useRef<SVGGElement | null>(null)
  const descriptRef = useRef<SVGGElement | null>(null)
  const { setAnimPhase } = useIntroAnimation()

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
    gsap.set(textRef.current, { y: 200 })

    const tl = gsap.timeline()

    tl.addLabel('text').to(textRef.current, { y: 0, opacity: 1, duration: 0.7 })

    const axesFrom = { attr: { x1: 200, y1: 300, x2: 400, y2: 500 } }
    const axesToCoords = { attr: { x1: 1900, y1: 1700, x2: 2100, y2: 1900 } }
    const axesTo = { ...axesToCoords, duration: 3, ease: 'power2.inOut' }

    const structFrom = { attr: { x1: -100, y1: 200, x2: 100, y2: 200 } }
    const structToCoords = { attr: { x1: 1900, y1: 200, x2: 2100, y2: 200 } }
    const structTo = { ...structToCoords, duration: 3, ease: 'power2.inOut' }

    const descriptFrom = { attr: { x1: 200, y1: 1400, x2: 200, y2: 1600 } }
    const descriptToCoords = { attr: { x1: 200, y1: 0, x2: 200, y2: 200 } }
    const descriptTo = { ...descriptToCoords, duration: 2 }

    tl.addLabel('blueprint')
      .fromTo(axesRef.current, axesFrom, axesTo, '<-=0.25')
      .fromTo(structRef.current, structFrom, structTo, '<+=0.15')
      .to(structFillGroup, { opacity: 1, duration: 2 }, 'blueprint+=1')
      .fromTo(descriptRef.current, descriptFrom, descriptTo, 'blueprint+=0.5')
      .to(descriptFillGroup, { opacity: 1, duration: 1 }, 'blueprint+=2')

    tl.addLabel('bye_bye', 'blueprint+=2.5')
      .to([svgGroups], { opacity: 0, duration: 0.7 }, 'bye_bye+=0')
      .to(
        textRef.current,
        {
          y: -200,
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
      <div className="intro-section relative h-[100vh] w-full overflow-hidden">
        <h2
          ref={textRef}
          className="intro-line-one absolute top-28 left-12 w-[875px] font-bold italic text-[40px] text-primary-100 opacity-0 z-50"
        >
          I spent over a decade shaping physical spaces - as an architect.
        </h2>
        <ArchitectureBlueprint
          svgRef={svgRef}
          axesRef={axesRef}
          structRef={structRef}
          descriptRef={descriptRef}
        />
      </div>
    </>
  )
}

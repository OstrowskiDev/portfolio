'use client'

import MobileLayout01 from '@/components/intro/svgr_output/MobileLayout01Opt'
import MobileLayout02 from '@/components/intro/svgr_output/MobileLayout02Opt'
import MobileLayout03 from '@/components/intro/svgr_output/MobileLayout03Opt'
import MobileLayout04 from '@/components/intro/svgr_output/MobileLayout04Opt'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function MobileBlueprintAnim() {
  const svgRef01 = useRef<SVGGElement | null>(null)
  const svgRef02 = useRef<SVGGElement | null>(null)
  const svgRef03 = useRef<SVGGElement | null>(null)
  const svgRef04 = useRef<SVGGElement | null>(null)

  const textRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    if (!svgRef01.current) return

    gsap.set(textRef.current, { y: 200 })

    const mainTl = gsap.timeline()

    mainTl.to(textRef.current, {
      opacity: 1,
      duration: 1,
      y: 0,
      ease: 'power3.out',
    })

    animateMobileLayout(svgRef01, 0)
    animateMobileLayout(svgRef02, 0.3)
    animateMobileLayout(svgRef03, 0.6)
    animateMobileLayout(svgRef04, 0.9)

    mainTl.to(textRef.current, { y: -400, opacity: 0, duration: 1 }, 6.5)
  }, [])

  function animateMobileLayout(
    ref: React.RefObject<SVGGElement>,
    delay: number = 0,
  ) {
    if (!ref.current) return

    const frame = getNodes(ref, '.frame')
    const framePaths = getNodes(ref, '.frame path')
    const layout = getNodes(ref, '.layout')
    const fill = getNodes(ref, '.fill')

    const tl = gsap.timeline()

    if (!framePaths) return

    framePaths.forEach((path) => {
      const length = path.getTotalLength()
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })
    })

    tl.set(frame, { opacity: 1 })

    tl.addLabel('blueprint')
      .to(
        framePaths,
        { strokeDashoffset: 0, duration: 2, delay: 1 },
        `blueprint+=${delay + 0}`,
      )
      .to(fill, { opacity: 1, duration: 3 }, `blueprint+=${delay + 2}`)
      .to(layout, { opacity: 1, duration: 2 }, `blueprint+=${delay + 3}`)

    tl.addLabel('bye-bye')
      .to(fill, { opacity: 0, duration: 1 }, `<${2.5 - delay}`)
      .to(layout, { opacity: 0, duration: 1 }, '<')
      .to(framePaths, { opacity: 0, duration: 1 }, '<')
  }

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
          className="intro-line-one absolute top-28 left-20 w-[875px] font-bold italic text-[40px] text-primary-100 opacity-0 z-50"
        >
          Now I'm building,
          <br /> digital systems and experiences
          <br /> - as a fullstack developer.
        </h2>
        <div className="absolute top-[320px] left-[120px] flex flex-row justify-around w-[100vw] h-[80vh]">
          <MobileLayout01 svgRef01={svgRef01} />
          <MobileLayout02 className="relative top-[80px]" svgRef02={svgRef02} />
          <MobileLayout03
            className="relative top-[-160px]"
            svgRef03={svgRef03}
          />
          <MobileLayout04 className="relative top-[80px]" svgRef04={svgRef04} />
        </div>
      </div>
    </>
  )
}

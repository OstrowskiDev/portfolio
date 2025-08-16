'use client'

import DesktopBlueprintSm from '@/components/intro/svgr_output/DesktopBlueprintSmall'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function DesktopBlueprintAnim() {
  const svgRef = useRef<SVGGElement | null>(null)
  const textRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    if (!svgRef.current || !textRef.current) return

    const frame = getNodes(svgRef, '.frame')
    const framePaths = getNodes(svgRef, '.frame path')
    const layout = getNodes(svgRef, '.layout')

    if (!frame || !framePaths || !layout) return

    const tl = gsap.timeline()

    tl.set(frame, { opacity: 1 })

    framePaths.forEach((path) => {
      const length = path.getTotalLength()
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })
    })

    gsap.to(framePaths, {
      strokeDashoffset: 0,
      duration: 4,
      ease: 'power1.inOut',
    })

    gsap.to(layout, { opacity: 1, delay: 4, duration: 3 })
  }, [])

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
          className="intro-line-one absolute top-28 left-12 w-[875px] font-bold italic text-[40px] text-primary-100 opacity-0 z-50"
        >
          I spent over a decade shaping physical spaces - as an architect.
        </h2>
        <DesktopBlueprintSm svgRef={svgRef} />
      </div>
    </>
  )
}

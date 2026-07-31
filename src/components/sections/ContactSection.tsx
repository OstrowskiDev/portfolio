'use client'

import { useEffect, useRef } from 'react'
import GridBackground from '../intro/grid/GridBackground'
import gsap from 'gsap'
import useKeyboardNavigation from '../hooks/useKeyboardNavigation'

export default function ContactSection({ isActive }: { isActive: boolean }) {
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return
    gsap.to(gridRef.current, { opacity: 1, duration: 4 })
  })

  useKeyboardNavigation({
    isActive,
    currentIndex: 0,
    totalItems: 0,
    onPrevious: () => null,
    onNext: () => null,
  })

  return (
    <section
      id="contact"
      role="region"
      aria-label="Contact"
      className="contact-section scroll-target snap-start relative flex justify-center items-center  w-full h-[calc(100vh-80px)]"
      style={{
        background: 'radial-gradient(circle, hsl(0,0%,35%), hsl(0,0%,45%))',
      }}
    >
      <h2 className="sr-only">Contact</h2>

      <GridBackground gridRef={gridRef} />
    </section>
  )
}

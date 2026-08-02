'use client'

import { useEffect, useRef } from 'react'
import GridBackground from '../intro/grid/GridBackground'
import gsap from 'gsap'
import useKeyboardNavigation from '../hooks/useKeyboardNavigation'
import ContactFooter from '../contact/ContactFooter'
import ContactHeader from '../contact/ContactHeader'
import ContactEmail from '../contact/ContactEmail'
import ContactInfoCards from '../contact/ContactInfoCards'

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

  const boxBgGray = `bg-primary-800/70`

  return (
    <section
      id="contact"
      role="region"
      aria-label="Contact"
      className="contact-section scroll-target snap-start relative flex flex-col items-center w-full h-[calc(100vh-80px)]"
      style={{
        background: 'radial-gradient(circle, hsl(0,0%,30%), hsl(0,0%,35%))',
      }}
    >
      <h2 className="sr-only">Contact</h2>

      <GridBackground
        gridRef={gridRef}
        mainColor="hsla(0, 0%, 40%, 0.65)"
        secondaryColor="hsla(0, 0%, 35%, 0.65)"
      />

      <div className="contact-content relative flex flex-col justify-center items-center flex-1 w-[760px] px-4 py-10 z-10 text-primary-50  ">
        <ContactHeader />

        <ContactEmail boxBgGray={boxBgGray} />

        <ContactInfoCards boxBgGray={boxBgGray} />
      </div>

      <ContactFooter />
    </section>
  )
}

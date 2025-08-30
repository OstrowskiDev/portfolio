'use client'

import { IntroAnimationProvider } from '@/components/hooks/introAnimationContext'
import useMediaQuery from '@/components/hooks/useMediaQuery'
import DesktopLayout from '@/components/layouts/DesktopLayout'
import MobileLayout from '@/components/layouts/MobileLayout'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const gridRef = useRef(null)

  const isDesktop = useMediaQuery('(min-width: 620px)')

  useEffect(() => {
    if (!gridRef.current) return
    gsap.to(gridRef.current, { opacity: 1, duration: 4 })
  })

  return (
    <main className="main-container w-full">
      <IntroAnimationProvider>
        {isDesktop ? <DesktopLayout /> : <MobileLayout />}
      </IntroAnimationProvider>
    </main>
  )
}

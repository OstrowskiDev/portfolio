'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import useMediaQuery from '@/components/hooks/useMediaQuery'
import DesktopIntro from './DesktopIntro'
import MobileIntro from './MobileIntro'

export default function Intro() {
  const gridRef = useRef(null)

  const isDesktop = useMediaQuery('(min-width: 620px)')

  useEffect(() => {
    if (!gridRef.current) return
    gsap.to(gridRef.current, { opacity: 1, duration: 4 })
  })

  return <>{isDesktop ? <DesktopIntro /> : <MobileIntro />}</>
}

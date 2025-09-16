import { useIntroAnimation } from '@/components/hooks/introAnimationContext'
import { useEffect, useRef } from 'react'

export default function ReadSrIntro() {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const { setSrReadIntro } = useIntroAnimation()

  useEffect(() => {
    buttonRef.current?.focus()
  }, [])

  return (
    <button
      ref={buttonRef}
      aria-label="Listen to portfolio introduction"
      tabIndex={1}
      className="listen-button 
        absolute bottom-16 left-1/2 -translate-x-[160%]
        flex items-center justify-center
        w-32 h-12
        bg-white/0 backdrop-blur-sm
        border border-primary-400 rounded-full 
        font-roboto font-semibold text-primary-200 text-xl
        select-none hover:cursor-pointer
        hover:bg-primary-200/20 active:scale-95
        z-50"
      onClick={() => setSrReadIntro(true)}
    >
      Read Intro
    </button>
  )
}

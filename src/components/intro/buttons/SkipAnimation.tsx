import { useIntroAnimation } from '@/components/hooks/introAnimationContext'

export default function SkipAnimation() {
  const { setAnimPhase, setIntroActive } = useIntroAnimation()

  function skipAnimation() {
    setAnimPhase('desktop')
    setIntroActive(false)
  }

  return (
    <div
      className="skip-button 
        absolute bottom-16 left-1/2 -translate-x-1/2
        flex items-center justify-center
        w-32 h-12
        bg-white/0 backdrop-blur-sm
        border border-primary-400 rounded-full 
        font-roboto font-semibold text-primary-200 text-xl
        select-none hover:cursor-pointer
        hover:bg-primary-200/20 active:scale-95
        z-50"
      onClick={skipAnimation}
    >
      Skip
    </div>
  )
}

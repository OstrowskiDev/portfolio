import { useIntroAnimation } from '@/components/hooks/introAnimationContext'

export default function SkipAnimation() {
  const { setAnimPhase, setIntroActive } = useIntroAnimation()

  function skipAnimation() {
    setAnimPhase('desktop')
    setIntroActive(false)
  }

  return (
    <div
      className="skip-button absolute bottom-28 left-[calc(50vw-80px)] 
      flex items-center justify-center 
      w-40 h-10 
      border border-primary-200 rounded-2xl 
      font-roboto font-semibold text-white 
      select-none hover:cursor-pointer
      bg-white/5 backdrop-blur-sm 
      z-50"
      onClick={skipAnimation}
    >
      Skip Animation
    </div>
  )
}

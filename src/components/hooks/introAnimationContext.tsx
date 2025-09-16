import { createContext, useContext, useRef, useState } from 'react'

interface IntroAnimationContextType {
  animPhase: string
  setAnimPhase: React.Dispatch<React.SetStateAction<string>>
  desktopTimelineRef: React.MutableRefObject<gsap.core.Timeline | null>
  introActive: boolean
  setIntroActive: React.Dispatch<React.SetStateAction<boolean>>
  srReadIntro: boolean
  setSrReadIntro: React.Dispatch<React.SetStateAction<boolean>>
}

const IntroAnimationContext = createContext<
  IntroAnimationContextType | undefined
>(undefined)

export function IntroAnimationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [animPhase, setAnimPhase] = useState('architecture')
  const [introActive, setIntroActive] = useState(true)
  const [srReadIntro, setSrReadIntro] = useState(false)
  const desktopTimelineRef = useRef<gsap.core.Timeline | null>(null)

  return (
    <IntroAnimationContext.Provider
      value={{
        animPhase,
        setAnimPhase,
        desktopTimelineRef,
        introActive,
        setIntroActive,
        srReadIntro,
        setSrReadIntro,
      }}
    >
      {children}
    </IntroAnimationContext.Provider>
  )
}

export function useIntroAnimation() {
  const context = useContext(IntroAnimationContext)
  if (!context) {
    throw new Error(
      'useIntroAnimation must be used within an IntroAnimationProvider',
    )
  }
  return context
}

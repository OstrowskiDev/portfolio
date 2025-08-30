import { createContext, useContext, useRef, useState } from 'react'

interface IntroAnimationContextType {
  animPhase: string
  setAnimPhase: React.Dispatch<React.SetStateAction<string>>
  desktopTimelineRef: React.MutableRefObject<gsap.core.Timeline | null>
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
  const desktopTimelineRef = useRef<gsap.core.Timeline | null>(null)

  return (
    <IntroAnimationContext.Provider
      value={{ animPhase, setAnimPhase, desktopTimelineRef }}
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

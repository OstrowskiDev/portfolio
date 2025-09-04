import { useEffect } from 'react'

interface UseKeyboardNavigationProps {
  currentIndex: number
  totalItems: number
  onPrevious: () => void
  onNext: () => void
}

export default function useKeyboardNavigation({
  currentIndex,
  totalItems,
  onPrevious,
  onNext,
}: UseKeyboardNavigationProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // ignore input when user is typing in textarea/input fields:
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return
      }

      switch (event.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
          event.preventDefault()
          if (currentIndex > 0) onPrevious()
          break
        case 'ArrowRight':
        case 'd':
        case 'D':
          event.preventDefault()
          if (currentIndex < totalItems - 1) onNext()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, totalItems, onPrevious, onNext])
}

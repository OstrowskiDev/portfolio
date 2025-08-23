import { useState, useEffect } from 'react'

export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    const media: MediaQueryList = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = (): void => setMatches(media.matches)
    media.addEventListener('change', listener)
    return (): void => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

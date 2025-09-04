import { useEffect, useState } from 'react'

export default function useScrollSpy() {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }, // 60% section in view makes it active
    )

    sections.forEach((sec) => observer.observe(sec))
    return () => sections.forEach((sec) => observer.unobserve(sec))
  }, [])

  return activeId
}

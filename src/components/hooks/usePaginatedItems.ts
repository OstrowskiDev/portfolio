import { useEffect, useState } from 'react'

export default function usePaginatedItems(items: any[], pageSize: number) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const totalItems = items.length
  const totalPages = Math.ceil(totalItems / pageSize)
  const lastPageIndex = Math.max(totalPages - 1, 0)

  const currentItems = items.slice(
    currentIndex * pageSize,
    currentIndex * pageSize + pageSize,
  )

  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, lastPageIndex))
  }, [lastPageIndex])

  function goToPrevious() {
    setCurrentIndex((index) => Math.max(0, index - 1))
  }

  function goToNext() {
    setCurrentIndex((index) => Math.min(lastPageIndex, index + 1))
  }

  return {
    currentIndex,
    currentItems,
    totalItems,
    totalPages,
    goToPrevious,
    goToNext,
  }
}

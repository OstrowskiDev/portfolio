import PaginationArrow from './PaginationArrow'

interface PaginationProps {
  totalItems: number
  currentIndex: number
  goToPrevious: () => void
  goToNext: () => void
  sectionLabel: string
}

export default function Pagination({
  totalItems,
  currentIndex,
  goToPrevious,
  goToNext,
  sectionLabel,
}: PaginationProps) {
  return (
    <div
      className={`${sectionLabel}-pagination-container flex flex-row justify-center items-center`}
    >
      <PaginationArrow
        size={32}
        direction="left"
        sectionLabel={sectionLabel}
        onClick={goToPrevious}
        isActive={currentIndex > 0}
      />

      <div className="pagination-dots flex items-center gap-5 ">
        {Array.from({ length: totalItems }, (_, index) => (
          <div
            key={index}
            className={`dot transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? 'w-4 h-4 bg-primary-400'
                : 'w-3 h-3 bg-primary-300'
            }`}
          />
        ))}
      </div>

      <PaginationArrow
        size={32}
        sectionLabel={sectionLabel}
        direction="right"
        onClick={goToNext}
        isActive={currentIndex < totalItems - 1}
      />
    </div>
  )
}

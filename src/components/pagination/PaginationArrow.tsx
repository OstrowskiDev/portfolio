import ChevronIco from '../icons/ChevronIco'

interface PaginationArrowProps {
  size: number
  sectionLabel: string
  direction: 'left' | 'right'
  onClick: () => void
  isActive: boolean
}

export default function PaginationArrow({
  size,
  sectionLabel,
  direction,
  onClick,
  isActive,
}: PaginationArrowProps) {
  return (
    <button
      onClick={onClick}
      disabled={!isActive}
      aria-disabled={!isActive}
      aria-label={`${direction === 'left' ? 'Previous' : 'Next'} ${sectionLabel}`}
      aria-controls={sectionLabel}
      tabIndex={0}
      className={`
        p-3 
        transition-all duration-200 z-20
        hover:scale-110
        ${isActive ? 'text-primary-400 hover:text-primary-500' : 'text-primary-200 cursor-default'}
`}
    >
      <ChevronIco
        width={size}
        height={size}
        className={direction === 'left' ? 'rotate-180' : ''}
      />
    </button>
  )
}

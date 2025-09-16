import ChevronIco from '../icons/ChevronIco'

interface CarouselArrowProps {
  size: number
  direction: 'left' | 'right'
  position: string
  onClick: () => void
}

export default function CarouselArrow({
  size,
  direction,
  position,
  onClick,
}: CarouselArrowProps) {
  return (
    <button
      onClick={onClick}
      aria-label={`${direction === 'left' ? 'Previous' : 'Next'} project`}
      aria-controls="portfolio"
      className={`
        absolute ${position} 
        top-1/2 transform -translate-y-1/2 
        p-3 
        text-white 
        transition-all duration-200 z-20
        drop-shadow-strong
        hover:scale-110
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

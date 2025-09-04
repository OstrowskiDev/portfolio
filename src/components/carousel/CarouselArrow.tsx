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
      className={`
        absolute ${position} 
        top-1/2 transform -translate-y-1/2 
        p-3 
        text-white 
        transition-all duration-200 z-20
        hover:scale-110
        drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]
        hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.9)]
`}
      aria-label={`${direction === 'left' ? 'Previous' : 'Next'} project`}
    >
      <ChevronIco
        width={size}
        height={size}
        className={direction === 'left' ? 'rotate-180' : ''}
      />
    </button>
  )
}

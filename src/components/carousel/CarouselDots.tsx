interface CarouselIndicatorProps {
  totalItems: number
  currentIndex: number
}

export default function CarouselDots({
  totalItems,
  currentIndex,
}: CarouselIndicatorProps) {
  return (
    <div className="carousel-dots flex items-center gap-5 mb-16">
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
  )
}

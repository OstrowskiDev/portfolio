interface CarouselIndicatorProps {
  totalItems: number
  currentIndex: number
}

export default function CarouselDots({
  totalItems,
  currentIndex,
}: CarouselIndicatorProps) {
  return (
    <div className="carousel-dots absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-5 z-20">
      {Array.from({ length: totalItems }, (_, index) => (
        <button
          key={index}
          className={`dot ${
            index === currentIndex
              ? 'w-4 h-4 bg-primary-100'
              : 'w-3 h-3  bg-primary-300'
          }`}
        />
      ))}
    </div>
  )
}

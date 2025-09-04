export default function BackgroundCardLeft({
  currentIndex,
  i,
}: {
  currentIndex: number
  i: number
}) {
  const prevIndex = currentIndex - i - 1
  if (prevIndex < 0) return null

  // Constants
  const CARD_OFFSET = 40
  const SCALE_FACTOR = 0.08
  const BASE_Z_INDEX = 10
  const COLOR_STEP = 100
  const BASE_COLOR = 200

  // Calculate styles
  const bgColorClass = `bg-primary-${BASE_COLOR + (i + 1) * COLOR_STEP}`
  const translateX = -(i + 1) * CARD_OFFSET
  const scale = 1 - (i + 1) * SCALE_FACTOR
  const zIndex = BASE_Z_INDEX - (i + 1)

  return (
    <div
      key={`left-${prevIndex}`}
      className={`absolute top-[calc((100%-660px)/2)] left-[calc(50vw-290px)] w-[580px] h-[640px] ${bgColorClass} rounded-xl shadow-[0_0_45px_rgba(0,0,0,.6)]`}
      style={{
        transform: `translateX(${translateX}px) scale(${scale})`,
        zIndex: zIndex,
      }}
    />
  )
}

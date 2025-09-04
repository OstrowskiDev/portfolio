import BackgroundCardLeft from './BackgroundCardLeft'
import BackgroundCardRight from './BackgroundCardRight'

export default function BackgroundCards({
  currentIndex,
  totalProjects,
}: {
  currentIndex: number
  totalProjects: number
}) {
  const maxCards = 3 // Maximum number of background cards regardless of totalProjects number

  return (
    <>
      {Array.from({ length: maxCards }, (_, i) => {
        return (
          <BackgroundCardRight
            key={`right-${i}`}
            currentIndex={currentIndex}
            totalProjects={totalProjects}
            i={i}
          />
        )
      })}

      {Array.from({ length: maxCards }, (_, i) => {
        return (
          <BackgroundCardLeft
            key={`left-${i}`}
            currentIndex={currentIndex}
            i={i}
          />
        )
      })}
    </>
  )
}

export default function ChallengesSection({
  challenges,
}: {
  challenges: string[]
}) {
  return (
    <div className="project-card-challenges">
      <h3 className="challenges-label text-sm font-semibold text-primary-950">
        Challenges:
      </h3>
      <ul className="challenges-list list-disc pl-5">
        {challenges.map((text, i) => {
          return (
            <li
              key={i}
              className="challenge-description text-sm text-primary-950"
            >
              {text}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

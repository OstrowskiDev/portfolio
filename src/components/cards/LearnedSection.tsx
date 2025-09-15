export default function LearnedSection({ learned }: { learned: string[] }) {
  return (
    <div className="project-card-learned mt-4">
      <h3 className="learned-label text-sm font-semibold text-primary-950">
        What I learned:
      </h3>
      <ul className="learned-list list-disc pl-5">
        {learned.map((text, i) => {
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

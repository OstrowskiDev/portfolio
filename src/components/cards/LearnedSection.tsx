export default function LearnedSection({ learned }: { learned: string[] }) {
  return (
    <div className="project-card-learned mt-4">
      <h3 className="learned-label mb-2 text-sm font-semibold uppercase text-accent-700 tracking-[0.5px]">
        What I learned:
      </h3>
      <ul className="learned-list list-disc pl-5">
        {learned.map((text, i) => {
          return (
            <li
              key={i}
              className="challenge-description mb-1 text-sm text-primary-800"
            >
              {text}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

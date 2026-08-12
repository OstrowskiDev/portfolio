export default function LearnedSection({ learned }: { learned: string[] }) {
  return (
    <div className="project-card-learned mt-4">
      <h3 className="learned-label mb-1 tall:mb-2 text-[13px] tall:text-sm font-semibold uppercase text-accent-600 tracking-[0.5px]">
        What I learned:
      </h3>
      <ul className="learned-list list-disc pl-3 tall:pl-5">
        {learned.map((text, i) => {
          return (
            <li
              key={i}
              className="challenge-description mb-1 text-[13px] leading-[1.4] tall:text-sm  text-primary-800"
            >
              {text}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

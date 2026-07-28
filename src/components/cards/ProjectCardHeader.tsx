export default function ProjectCardHeader({
  tag,
  title,
  subtitle,
}: {
  tag: string
  title: string
  subtitle: string
}) {
  return (
    <>
      <span className="project-tag text-xs font-semibold text-accent-700 uppercase tracking-[0.5px]">
        {tag}
      </span>
      <h3 className="project-title text-[32px] text-primary-950 font-bold">
        {title}
      </h3>
      <p className="project-card-subtitle text-sm text-primary-800 mt-1">
        {subtitle}
      </p>
    </>
  )
}

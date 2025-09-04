export default function ProjectCardHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <>
      <h3 className="project-title text-[26px] text-primary-950 font-bold">
        {title}
      </h3>
      <p className="project-card-subtitle mt-2">{subtitle}</p>
    </>
  )
}

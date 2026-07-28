import ExtrasLink from '../ExtrasLinks'
import MovieIco from '@/components/icons/MovieIco'

export default function YouTubeLink({
  href,
  colorClassName,
}: {
  href: string
  colorClassName?: string
}) {
  return (
    <ExtrasLink
      href={href}
      icon={<MovieIco width={20} />}
      className="link-github"
      colorClassName={colorClassName}
    />
  )
}

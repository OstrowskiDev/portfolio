import GithubIco from '@/components/icons/GithubIco'
import ExtrasLink from '../ExtrasLinks'

export default function GithubLink({
  href,
  colorClassName,
}: {
  href: string
  colorClassName?: string
}) {
  return (
    <ExtrasLink
      href={href}
      icon={<GithubIco width={18} />}
      className="link-github"
      colorClassName={colorClassName}
    />
  )
}

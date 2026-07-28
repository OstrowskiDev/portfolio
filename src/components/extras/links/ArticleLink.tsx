import TextIco from '@/components/icons/TextIco'
import ExtrasLink from '../ExtrasLinks'

export default function ArticleLink({
  href,
  colorClassName,
}: {
  href: string
  colorClassName?: string
}) {
  return (
    <ExtrasLink
      href={href}
      icon={<TextIco width={20} />}
      className="link-article"
      colorClassName={colorClassName}
    />
  )
}

import GithubIco from '../icons/GithubIco'
import GlobeIco from '../icons/GlobeIco'
import TextIco from '../icons/TextIco'
import ExternalLink from './ExternalLink'

export default function ExternalLinksSection({
  links,
}: {
  links: { text: string; url: string }[]
}) {
  return (
    <div className="external-links w-full h-[80px] py-16 px-12 my-auto flex justify-around items-center">
      <ExternalLink
        href={links[0].url}
        text={links[0].text}
        icon={<GlobeIco width={50} />}
        className="link-live"
      />

      <ExternalLink
        href={links[1].url}
        text={links[1].text}
        icon={<GithubIco width={50} />}
        className="link-github"
      />

      <ExternalLink
        href={links[2].url}
        text={links[2].text}
        icon={<TextIco width={50} />}
        className="link-case-study"
      />
    </div>
  )
}

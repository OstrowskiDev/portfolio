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
    <div className="external-links w-full h-[80px] px-12 my-4 tall:my-10 flex justify-around items-center">
      <ExternalLink
        href={links[0].url}
        text={links[0].text}
        icon={<GlobeIco />}
        className="link-live"
      />

      <ExternalLink
        href={links[1].url}
        text={links[1].text}
        icon={<GithubIco />}
        className="link-github"
      />

      <ExternalLink
        href={links[2].url}
        text={links[2].text}
        icon={<TextIco />}
        className="link-case-study"
      />
    </div>
  )
}

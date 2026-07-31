import GithubIco from '../icons/GithubIco'

const GITHUB_PLACEHOLDER_URL = '#'

export default function ContactFooter() {
  function handleDownloadCv() {}

  return (
    <div className="contact-section-footer flex items-center justify-center gap-4 border-t w-full h-12 border-primary-400">
      <a
        href={GITHUB_PLACEHOLDER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-section-footer-github flex items-center gap-2 text-xl text-primary-100 hover:text-primary-50"
      >
        <GithubIco width={15} height={15} />
        <span>GitHub</span>
      </a>

      <button
        type="button"
        onClick={handleDownloadCv}
        className="contact-section-footer-cv flex items-center gap-2 text-xl text-primary-100 hover:text-primary-50"
      >
        <span>Download CV</span>
      </button>
    </div>
  )
}

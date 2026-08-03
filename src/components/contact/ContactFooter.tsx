import GithubIco from '../icons/GithubIco'

const GITHUB_URL = 'https://github.com/OstrowskiDev/'

export default function ContactFooter() {
  function handleDownloadCv() {}

  return (
    <div className="contact-section-footer relative z-10 flex items-center justify-center gap-6 border-t w-full h-12 pb-1 border-primary-400">
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-section-footer-github flex items-center gap-2 text-xl text-primary-200 hover:text-primary-50 relative group"
      >
        <GithubIco width={15} height={15} />
        <span>GitHub</span>
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-100 transition-all duration-300 group-hover:w-full"></span>
      </a>

      <span className="separator text-primary-50">|</span>

      <button
        type="button"
        onClick={handleDownloadCv}
        className="contact-section-footer-cv flex items-center gap-2 text-xl text-primary-200 hover:text-primary-50 relative group"
      >
        <span>Download CV</span>
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-100 transition-all duration-300 group-hover:w-full"></span>
      </button>
    </div>
  )
}

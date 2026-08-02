import { copyToClipboard } from '@/lib/helpers'
import { useState } from 'react'
import { CopyIcon } from '@/components/icons/CopyIcon'
import { MailIcon } from '@/components/icons/MailIcon'

const CONTACT_EMAIL = 'marcin.ostrowski.coding'

export default function ContactEmail({ boxBgGray }: { boxBgGray: string }) {
  const [isCopied, setIsCopied] = useState(false)

  function handleCopyEmail() {
    void copyEmailToClipboard()
  }

  async function copyEmailToClipboard() {
    const copied = await copyToClipboard(CONTACT_EMAIL)
    if (!copied) return

    setIsCopied(true)
    window.setTimeout(resetCopyState, 1500)
  }

  function resetCopyState() {
    setIsCopied(false)
  }
  return (
    <div
      className={`contact-email flex justify-center items-center gap-5 w-[720px] h-16 px-6 py-6 mb-8 ${boxBgGray} rounded-2xl`}
    >
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="contact-email-link flex items-center gap-3 text-[24px] font-semibold text-primary-50 hover:text-primary-100"
      >
        <MailIcon className="h-7 w-7 mt-1" />
        <span>{CONTACT_EMAIL}</span>
      </a>

      <button
        type="button"
        onClick={handleCopyEmail}
        className={`contact-copy-button 
            flex items-center gap-1
            h-[34px] px-4 py-2 
            rounded-xl 
            font-semibold text-primary-50
            hover:text-primary-50
            border border-primary-200
            hover:border-primary-50 `}
        aria-label="Copy email address"
      >
        <CopyIcon className="h-5 w-5" />
        <span className="mb-1">{isCopied ? 'Copied' : 'Copy'}</span>
      </button>
    </div>
  )
}

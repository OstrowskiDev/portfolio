import { useState } from 'react'
import { CopyIcon } from '../icons/CopyIcon'
import CheckIco from '../icons/CheckIco'
import { copyToClipboard } from '@/lib/helpers'

export default function CopyToClipboardBtn({ email }: { email: string }) {
  const [isCopied, setIsCopied] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  async function handleCopyToClipboard() {
    const copied = await copyToClipboard(email)
    if (!copied) return

    setIsCopied(true)
    window.setTimeout(() => setIsCopied(false), 1500)
  }

  return (
    <div className="contact-copy-bnt-container relative">
      <button
        type="button"
        onClick={handleCopyToClipboard}
        className={`contact-copy-bnt p-2 rounded-xl text-primary-50  hover:bg-primary-700`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Copy email address"
      >
        {isCopied ? (
          <CheckIco className="h-5 w-5" />
        ) : (
          <CopyIcon className="h-5 w-5" />
        )}
      </button>

      {isHovered && !isCopied && (
        <span className="absolute top-full mt-2 px-2 py-1 left-1/2 -translate-x-1/2 text-sm font-semibold text-primary-100 bg-primary-800 rounded-xl">
          Copy
        </span>
      )}
    </div>
  )
}

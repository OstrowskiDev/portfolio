import { useState } from 'react'
import { CopyIcon } from '../icons/CopyIcon'
import CheckIco from '../icons/CheckIco'
import { copyToClipboard } from '@/lib/helpers'

export default function CopyToClipboardBtn({ email }: { email: string }) {
  const [isCopied, setIsCopied] = useState(false)

  async function handleCopyToClipboard() {
    const copied = await copyToClipboard(email)
    if (!copied) return

    setIsCopied(true)
    window.setTimeout(() => setIsCopied(false), 1500)
  }

  return (
    <button
      type="button"
      onClick={handleCopyToClipboard}
      className={`contact-copy-button 
            p-2
            rounded-xl
            text-primary-50
            hover:bg-primary-600
           `}
      aria-label="Copy email address"
    >
      {isCopied ? (
        <CheckIco className="h-6 w-6" />
      ) : (
        <CopyIcon className="h-6 w-6" />
      )}
    </button>
  )
}

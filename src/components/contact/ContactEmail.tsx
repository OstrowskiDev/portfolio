import { MailIcon } from '@/components/icons/MailIcon'
import CopyToClipboardBtn from './CopyToClipboardBtn'

const CONTACT_EMAIL = 'marcin.ostrowski.coding@gmail.com'

export default function ContactEmail({ boxBgGray }: { boxBgGray: string }) {
  return (
    <div
      className={`contact-email grid grid-cols-[1fr_auto_1fr] items-center w-[720px] h-16 px-4 mb-8 ${boxBgGray} rounded-2xl`}
    >
      <p className="contact-email-link col-start-2 justify-self-center flex items-center gap-3 text-[24px] font-semibold text-primary-50 hover:text-primary-100">
        <MailIcon className="h-7 w-7 mt-1" />
        <span>{CONTACT_EMAIL}</span>
      </p>

      <div className="col-start-3 justify-self-end">
        <CopyToClipboardBtn email={CONTACT_EMAIL} />
      </div>
    </div>
  )
}

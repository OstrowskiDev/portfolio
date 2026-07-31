import { ReactNode } from 'react'

interface ContactInfoCardProps {
  title: string
  boxBgGray: string
  children: ReactNode
}

export default function ContactInfoCard({
  title,
  boxBgGray,
  children,
}: ContactInfoCardProps) {
  return (
    <div className={`contact-section-card flex flex-col p-4 ${boxBgGray}`}>
      <h4 className="contact-section-card-label uppercase tracking-wide font-semibold text-primary-400">
        {title}
      </h4>

      <div className="contact-section-card-content mt-3 text-primary-50">
        {children}
      </div>
    </div>
  )
}

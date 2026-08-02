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
    <div
      className={`contact-section-card flex flex-col min-h-[200px] p-4 rounded-2xl ${boxBgGray}`}
    >
      <h4 className="contact-section-card-label uppercase tracking-widest font-semibold text-primary-500">
        {title}
      </h4>

      <div className="contact-section-card-content mt-3 text-primary-50">
        {children}
      </div>
    </div>
  )
}

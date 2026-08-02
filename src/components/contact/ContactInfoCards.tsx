import ContactInfoCard from './ContactInfoCard'

export default function ContactInfoCards({ boxBgGray }: { boxBgGray: string }) {
  return (
    <div className="contact-section-cards grid grid-cols-3 gap-4 w-full">
      <ContactInfoCard title="stack" boxBgGray={boxBgGray}>
        <p>Node · Next · React</p>
        <p>Tailwind · MongoDB</p>
        <p>Docker · DigitalOcean</p>
        <p>Cloudflare</p>
      </ContactInfoCard>

      <ContactInfoCard title="strengths" boxBgGray={boxBgGray}>
        <p className="text-primary-100">
          Placeholder - 2 to 3 sentences describing where you add the most value
          on a team.
        </p>
      </ContactInfoCard>

      <ContactInfoCard title="status" boxBgGray={boxBgGray}>
        <p>Looking for my first Software Engineer role.</p>
      </ContactInfoCard>
    </div>
  )
}

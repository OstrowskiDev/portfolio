import ContactInfoCard from './ContactInfoCard'

export default function ContactInfoCards({ boxBgGray }: { boxBgGray: string }) {
  return (
    <div className="contact-section-cards grid grid-cols-3 gap-4 w-full">
      <ContactInfoCard title="stack" boxBgGray={boxBgGray}>
        <p>Node · Next · React</p>
        <p>Tailwind · TypeScript </p>
        <p>MongoDB · Docker</p>
        <p>DigitalOcean · Cloudflare</p>
      </ContactInfoCard>

      <ContactInfoCard title="core strengths" boxBgGray={boxBgGray}>
        <p>Full product perspective</p>
        <p className="mt-2">10+ years delivering real-world projects</p>
      </ContactInfoCard>

      <ContactInfoCard title="status" boxBgGray={boxBgGray}>
        <p>Open to Software Engineer roles.</p>
      </ContactInfoCard>
    </div>
  )
}

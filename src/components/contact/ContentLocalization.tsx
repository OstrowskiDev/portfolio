import LocationIco from '@/components/icons/LocationIco'

export default function ContentLocalization() {
  return (
    <div className="contact-localization mb-8 flex w-[580px] items-center justify-center gap-2 text-center text-lg leading-[26px] font-normal text-primary-300">
      <LocationIco size={20} className="shrink-0" aria-hidden="true" />
      Based in Poland (CET) · Open to remote
    </div>
  )
}

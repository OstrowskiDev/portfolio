export default function ContactHeader() {
  return (
    <div className="contact-header mb-12">
      <p className="contact-header-label mb-3 text-center font-semibold uppercase text-primary-100">
        get in touch
      </p>

      <h3 className="contact-header-title mb-8 text-center text-4xl font-bold text-white">
        {`Let's build something together.`}
      </h3>

      <p className="contact-header-description w-[580px] text-center text-xl leading-[26px] font-normal text-primary-300">
        <span>Fullstack Engineer with a background in architecture,</span>
        <br />
        <span>bringing a system-oriented approach to software.</span>
      </p>
    </div>
  )
}

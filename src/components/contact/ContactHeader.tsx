export default function ContactHeader() {
  return (
    <>
      <p className="contact-label font-semibold uppercase text-primary-100">
        get in touch
      </p>

      <h3 className="contact-title mt-3 text-center text-4xl font-bold text-white">
        {`Let's build something together.`}
      </h3>

      <p className="contact-description mt-4 w-[580px] text-center text-xl leading-[26px] font-normal text-primary-100">
        <span>Looking for a Fullstack Engineer with an architectural eye</span>
        <br />
        <span>for structure. Open to new roles and collaborations.</span>
      </p>
    </>
  )
}

import { NavLink } from '../common/NavLink'

export default function NavBar() {
  return (
    <div className="navbar sticky top-0 z-[100] w-full h-[100px] flex justify-around items-center border-b-[1px] border-primary-200 shadow-[0_2px_2px_theme(colors.primary.100)] bg-white">
      <NavLink name="Intro" targetId="intro" />
      <NavLink name="Home" targetId="home" />
      <NavLink name="Portfolio" targetId="portfolio" />
      <div className="authors-data w-[260px]"></div>
      <NavLink name="Extras" targetId="extras" />
      <NavLink name="Articles" targetId="articles" />
      <NavLink name="Contact" targetId="contact" />
    </div>
  )
}

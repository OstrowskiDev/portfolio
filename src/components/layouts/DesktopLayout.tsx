import NavBar from '@/components/navigation/NavBar'
import DesktopIntro from '../intro/animations/DesktopIntro'

export default function DesktopLayout() {
  return (
    <main className="main-container w-full bg-white">
      <DesktopIntro />
      <NavBar />
      <div id="portfolio" className="w-full h-[100vh] "></div>
      <div id="extras" className="w-full h-[100vh] "></div>
      <div id="articles" className="w-full h-[100vh] "></div>
      <div id="contact" className="w-full h-[100vh] "></div>
    </main>
  )
}

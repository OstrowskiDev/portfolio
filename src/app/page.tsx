import Intro from '@/components/intro/animations/Intro'
import { NavBar } from '@/components/navigation/NavBar'

export default function Home() {
  return (
    <main className="main-container w-full">
      <Intro />
      <NavBar />
      <div id="portfolio" className="w-full h-[100vh] bg-gray-700"></div>
      <div id="extras" className="w-full h-[100vh] bg-gray-700"></div>
      <div id="articles" className="w-full h-[100vh] bg-gray-700"></div>
      <div id="contact" className="w-full h-[100vh] bg-gray-700"></div>
    </main>
  )
}

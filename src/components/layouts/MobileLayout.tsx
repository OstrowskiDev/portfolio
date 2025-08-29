import MobileIntro from '../intro/animations/MobileIntro'

export default function MobileLayout() {
  return (
    <main className="main-container w-full bg-white">
      <MobileIntro />
      <div id="portfolio" className="w-full h-[100vh]"></div>
      <div id="extras" className="w-full h-[100vh]"></div>
      <div id="articles" className="w-full h-[100vh]"></div>
      <div id="contact" className="w-full h-[100vh]"></div>
    </main>
  )
}

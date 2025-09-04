import MobileIntro from '../intro/animations/MobileIntro'

export default function MobileLayout() {
  return (
    <main className="main-container w-full bg-white h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <MobileIntro />
      <div id="portfolio" className="w-full h-[100vh] snap-start"></div>
      <div id="extras" className="w-full h-[100vh] snap-start"></div>
      <div id="articles" className="w-full h-[100vh] snap-start"></div>
      <div id="contact" className="w-full h-[100vh] snap-start"></div>
    </main>
  )
}

import ArchTests from '@/lib/ui/ArchTests'
import GradientTests from '@/lib/ui/GradientTests'
import Intro from '@/lib/ui/Intro'

export default function Home() {
  return (
    <main className="main-container">
      <GradientTests />
      <div className="w-20 h-20 bg-red-500"></div>
    </main>
  )
}

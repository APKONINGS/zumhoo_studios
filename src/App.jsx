import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import WorkGrid from './components/WorkGrid'
import FeaturedProject from './components/FeaturedProject'
import Capabilities from './components/Capabilities'
import CultureSection from './components/CultureSection'
import BehindTheScenes from './components/BehindTheScenes'
import About from './components/About'
import Recognition from './components/Recognition'
import Journal from './components/Journal'
import ProjectCTA from './components/ProjectCTA'
import Footer from './components/Footer'
import { usePrefersReducedMotion } from './lib/hooks'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const reducedMotion = usePrefersReducedMotion()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 250)
    return () => clearTimeout(id)
  }, [loading])

  useEffect(() => {
    // Lock scroll during the preloader
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <div className="relative">
      <div className="grain-overlay" />
      <Cursor />
      <Preloader onDone={() => setLoading(false)} reducedMotion={reducedMotion} />

      <Navbar />
      <main>
        <Hero ready={!loading} reducedMotion={reducedMotion} />
        <Intro />
        <WorkGrid />
        <FeaturedProject />
        <Capabilities />
        <CultureSection />
        <BehindTheScenes />
        <About />
        <Recognition />
        <Journal />
        <ProjectCTA />
      </main>
      <Footer />
    </div>
  )
}

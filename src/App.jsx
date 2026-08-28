import { useCallback, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkGrid from './components/WorkGrid'
import About from './components/About'
import ProjectCTA from './components/ProjectCTA'
import Footer from './components/Footer'
import { usePrefersReducedMotion } from './lib/hooks'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const reducedMotion = usePrefersReducedMotion()
  const [loading, setLoading] = useState(true)
  const [workFilter, setWorkFilter] = useState('All')
  const handlePreloaderDone = useCallback(() => setLoading(false), [])

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
      <Preloader onDone={handlePreloaderDone} reducedMotion={reducedMotion} />

      <Navbar onSelectCategory={setWorkFilter} />
      <main>
        <Hero ready={!loading} reducedMotion={reducedMotion} />
        <WorkGrid filter={workFilter} setFilter={setWorkFilter} />
        <About />
        <ProjectCTA />
      </main>
      <Footer />
    </div>
  )
}

import { useCallback, useEffect, useState } from 'react'
import Preloader from '../components/Preloader'
import Hero from '../components/Hero'
import HighlightReel from '../components/HighlightReel'
import CategoryTeasers from '../components/CategoryTeasers'
import About from '../components/About'
import ProjectCTA from '../components/ProjectCTA'
import { usePrefersReducedMotion } from '../lib/hooks'

export default function Home() {
  const reducedMotion = usePrefersReducedMotion()
  const [loading, setLoading] = useState(true)
  const handlePreloaderDone = useCallback(() => setLoading(false), [])

  useEffect(() => {
    // Lock scroll while the preloader plays.
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <>
      <Preloader onDone={handlePreloaderDone} reducedMotion={reducedMotion} />
      <Hero ready={!loading} reducedMotion={reducedMotion} />
      <HighlightReel />
      <CategoryTeasers />
      <About />
      <ProjectCTA />
    </>
  )
}

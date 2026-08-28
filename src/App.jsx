import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar'
import EndBar from './components/EndBar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 250)
    return () => clearTimeout(id)
  })

  return (
    <div className="relative">
      <div className="grain-overlay" />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<CategoryPage />} />
        </Routes>
      </main>
      <EndBar />
    </div>
  )
}

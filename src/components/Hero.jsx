import { useEffect, useRef } from 'react'
import { ArrowUpRight, Play } from 'lucide-react'
import { gsap } from 'gsap'
import { IMG, img } from '../data/site'

export default function Hero({ ready, reducedMotion }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ready) return
    if (reducedMotion) {
      gsap.set('.hero-anim', { opacity: 1, y: 0 })
      return
    }
    const ctx = gsap.context(() => {
      gsap.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.9, ease: 'power3.out' })
      gsap.from('.hero-line-1', { y: 44, opacity: 0, duration: 1, delay: 0.12, ease: 'power3.out' })
      gsap.from('.hero-line-2', { y: 60, opacity: 0, duration: 1.2, delay: 0.28, ease: 'power3.out' })
      gsap.from('.hero-cta, .hero-meta', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      })
      gsap.fromTo(
        '.hero-bg',
        { scale: 1.14 },
        { scale: 1, duration: 2.4, ease: 'power2.out' },
      )
    }, ref)
    return () => ctx.revert()
  }, [ready, reducedMotion])

  return (
    <section id="home" ref={ref} className="relative min-h-[100dvh] overflow-hidden bg-ink">
      <img
        src={img(IMG.projector, { w: 2000 })}
        alt="A film projector casting a beam of light through smoke in a dark screening room."
        className="hero-bg absolute inset-0 h-full w-full object-cover brightness-[0.42] contrast-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/30 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />

      {/* top / bottom hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1600px] flex-col justify-end px-6 pb-16 pt-32 sm:px-10 lg:px-16 lg:pb-24">
        <p className="hero-eyebrow eyebrow mb-6 text-accent-light">Zumhoo Studios</p>

        <h1 className="max-w-5xl font-display text-[13vw] font-extrabold uppercase leading-[0.92] tracking-tighter text-bone sm:text-7xl lg:text-8xl">
          <span className="hero-line-1 block">We make stories</span>
          <span className="hero-line-2 block font-serif italic font-normal normal-case text-accent-light">
            move.
          </span>
        </h1>

        <p className="hero-meta mt-8 max-w-md font-mono text-xs uppercase tracking-[0.2em] text-stone sm:text-sm">
          Film · Brand Stories · Photography · Graphic Design
        </p>

        <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#highlights"
            className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-ink"
          >
            Explore our work
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#start"
            className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-bone/25 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-bone glass-dark"
          >
            Start a project
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-6 right-6 z-10 hidden flex-col items-center gap-3 sm:right-10 sm:flex lg:right-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-stone">Scroll</span>
        <span className="relative h-14 w-px overflow-hidden bg-line">
          <span className="absolute inset-x-0 -top-full h-full bg-accent animate-[scrollline_2.4s_ease-in-out_infinite]" />
        </span>
      </div>
      <style>{`
        @keyframes scrollline {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  )
}

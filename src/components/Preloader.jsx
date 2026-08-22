import { useEffect, useState } from 'react'

/**
 * A brief film-ident style opener: ZUMHOO / STUDIO WORKS on black, then a
 * lens-iris wipe reveals the page. Skips straight through for
 * prefers-reduced-motion and stays well under ~2.4s total.
 */
export default function Preloader({ onDone, reducedMotion }) {
  const [stage, setStage] = useState('mark') // mark -> word -> wipe -> done

  useEffect(() => {
    if (reducedMotion) {
      onDone()
      return
    }
    const t1 = setTimeout(() => setStage('word'), 550)
    const t2 = setTimeout(() => setStage('wipe'), 1300)
    const t3 = setTimeout(() => onDone(), 2150)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [onDone, reducedMotion])

  if (reducedMotion) return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-ink transition-opacity duration-700 ${
        stage === 'wipe' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Iris wipe */}
      <div
        className="absolute inset-0 bg-ink transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{
          clipPath:
            stage === 'wipe'
              ? 'circle(0% at 50% 50%)'
              : 'circle(150% at 50% 50%)',
        }}
      />
      <div className="relative flex flex-col items-center gap-3">
        <span
          className="font-display font-extrabold text-3xl sm:text-4xl tracking-[0.3em] text-bone transition-all duration-700"
          style={{ opacity: 1 }}
        >
          ZUMHOO
        </span>
        <span
          className="font-mono text-[11px] sm:text-xs tracking-[0.5em] text-accent transition-all duration-700"
          style={{
            opacity: stage === 'mark' ? 0 : 1,
            transform: stage === 'mark' ? 'translateY(6px)' : 'translateY(0)',
          }}
        >
          STUDIO WORKS
        </span>
      </div>
    </div>
  )
}

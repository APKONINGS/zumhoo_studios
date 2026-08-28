import { ArrowUpRight, Play } from 'lucide-react'
import { HIGHLIGHTS } from '../data/projects'
import { img } from '../data/site'
import { usePrefersReducedMotion } from '../lib/hooks'

function ReelCard({ item }) {
  const isVideo = item.type === 'video'
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group relative block h-[62vw] w-[78vw] shrink-0 overflow-hidden rounded-sm bg-ink-soft sm:h-[46vw] sm:w-[42vw] lg:h-[26vw] lg:w-[24vw]"
    >
      <img
        src={img(item.image, { w: 1000 })}
        alt={`${item.title} — ${item.category}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-cinematic group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
        <div>
          <span className="eyebrow text-accent-light">{item.category}</span>
          <h3 className="mt-1 font-serif text-lg italic text-bone sm:text-xl">{item.title}</h3>
        </div>
        {isVideo ? (
          <Play className="h-4 w-4 shrink-0 text-bone opacity-70" fill="currentColor" />
        ) : (
          <ArrowUpRight className="h-4 w-4 shrink-0 text-bone opacity-70" />
        )}
      </div>
    </a>
  )
}

export default function HighlightReel() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section id="highlights" className="border-b border-line bg-ink py-16 sm:py-20">
      <div className="mx-auto mb-8 max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <p className="eyebrow mb-4 text-accent-light">Reel</p>
        <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-bone sm:text-5xl">
          Highlights
        </h2>
      </div>

      {reducedMotion ? (
        // No auto-scroll for reduced-motion — a normal wrapping row instead
        // of a strip, so every highlight stays reachable by page scroll.
        <div className="flex flex-wrap gap-4 px-6 sm:gap-5 sm:px-10 lg:px-16">
          {HIGHLIGHTS.map((item) => (
            <ReelCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="overflow-hidden">
          {/* Two copies back-to-back so the loop is seamless; the CSS
              animation scrolls exactly one copy's width (-50%) then restarts. */}
          <div className="marquee-track flex w-max gap-4 px-6 sm:gap-5 sm:px-10 lg:px-16">
            {[...HIGHLIGHTS, ...HIGHLIGHTS].map((item, i) => (
              <ReelCard key={`${item.id}-${i}`} item={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

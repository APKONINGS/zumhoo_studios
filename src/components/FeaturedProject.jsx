import { Play } from 'lucide-react'
import Reveal from './Reveal'
import { FEATURED_PROJECT } from '../data/projects'
import { img } from '../data/site'

export default function FeaturedProject() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink">
      <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[21/9]">
        <img
          src={img(FEATURED_PROJECT.image, { w: 2000 })}
          alt="A cinematographer filming a scene on set under coloured stage lighting."
          className="absolute inset-0 h-full w-full object-cover brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-14 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
          <Reveal>
            <p className="eyebrow mb-5 text-accent-light">Featured Project</p>
            <h2 className="max-w-2xl font-serif text-4xl italic text-bone sm:text-6xl">
              {FEATURED_PROJECT.title}
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-stone sm:text-base">
              {FEATURED_PROJECT.description}
            </p>

            <div className="mt-8 flex items-center gap-5">
              <button
                type="button"
                data-cursor="Play"
                className="magnetic-btn flex h-14 w-14 items-center justify-center rounded-full border border-bone/30 text-bone glass-dark"
                aria-label="Watch film"
              >
                <Play className="h-4 w-4 translate-x-0.5" fill="currentColor" />
              </button>
              <div>
                <span className="block font-mono text-xs uppercase tracking-[0.18em] text-bone">
                  Watch film
                </span>
                <span className="mt-1 block font-mono text-[11px] tabular-nums text-stone">
                  {FEATURED_PROJECT.duration}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

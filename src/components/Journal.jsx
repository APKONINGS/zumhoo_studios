import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { JOURNAL } from '../data/projects'
import { img } from '../data/site'

export default function Journal() {
  return (
    <section id="journal" className="border-b border-line bg-ink py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <Reveal className="mb-14 lg:mb-16">
          <p className="eyebrow mb-4 text-accent-light">08 / Journal</p>
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-bone sm:text-6xl">
            Journal
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {JOURNAL.map((j, i) => (
            <Reveal key={i} delay={i * 80}>
              <a href="#" onClick={(e) => e.preventDefault()} data-cursor="View" className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-ink-soft">
                  <img
                    src={img(j.image, { w: 900 })}
                    alt={j.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-[1.05]"
                  />
                </div>
                <p className="mt-5 eyebrow text-accent-light">{j.category}</p>
                <h3 className="mt-2 font-serif text-xl italic text-bone">{j.title}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-stone">{j.date}</span>
                  <span className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-bone opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Read <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

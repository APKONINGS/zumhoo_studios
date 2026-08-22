import { ArrowUpRight, Aperture } from 'lucide-react'
import Reveal from './Reveal'
import { SITE } from '../data/site'
import { TIMELINE } from '../data/projects'

export default function About() {
  return (
    <section id="about" className="border-b border-line bg-ink py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <Reveal className="mb-14 lg:mb-20">
          <p className="eyebrow mb-4 text-accent-light">06 / The people behind it</p>
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-bone sm:text-6xl">
            The People Behind the Stories
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            {/* Real portrait not yet supplied — honest placeholder frame, not a stock stand-in. */}
            <div className="flex aspect-[4/5] flex-col items-center justify-center gap-4 rounded-sm border border-dashed border-line bg-ink-soft/60 text-center">
              <Aperture className="h-8 w-8 text-stone" strokeWidth={1.5} />
              <span className="px-6 font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                [Founder portrait — to be added]
              </span>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-4">
            <h3 className="font-serif text-3xl italic text-bone">{SITE.founder.name}</h3>
            <p className="mt-2 eyebrow text-accent-light">{SITE.founder.role}</p>
            <p className="mt-6 text-sm leading-relaxed text-stone">
              [FOUNDER BIO — placeholder until the real biography is provided. No credentials
              or history are invented here.]
            </p>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              data-cursor="→"
              className="lift-on-hover mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-accent-light"
            >
              Meet the team <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>

          <Reveal delay={200} className="lg:col-span-4">
            <p className="eyebrow mb-6 text-stone">Our story</p>
            <ol className="space-y-6 border-l border-line pl-6">
              {TIMELINE.map((t) => (
                <li key={t.label} className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                  <span className="block font-display text-sm font-semibold uppercase tracking-wide text-bone">
                    {t.label}
                  </span>
                  <span className="mt-1 block text-sm text-stone">{t.detail}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

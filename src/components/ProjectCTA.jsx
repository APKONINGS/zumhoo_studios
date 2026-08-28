import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { SITE } from '../data/site'

export default function ProjectCTA() {
  return (
    <section id="start" className="relative overflow-hidden bg-ink-raised py-28 sm:py-36 lg:py-44">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] max-w-[900px] max-h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 text-center sm:px-10 lg:px-16">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-bone sm:text-6xl lg:text-7xl">
            Have a story
            <br />
            worth telling?
          </h2>
          <p className="mx-auto mt-6 max-w-md font-serif text-xl italic text-stone">
            Let&rsquo;s build it together.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${SITE.phone.tel}`}
              className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-ink"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#footer-contact"
              className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-bone/25 px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-bone"
            >
              Contact us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

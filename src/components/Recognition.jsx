import Reveal from './Reveal'
import { RECOGNITION } from '../data/projects'

export default function Recognition() {
  return (
    <section className="border-b border-line bg-ink py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <Reveal className="mb-14 lg:mb-16">
          <p className="eyebrow mb-4 text-accent-light">07 / Recognition</p>
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-bone sm:text-6xl">
            Recognition
          </h2>
          <p className="mt-4 max-w-md text-sm text-stone/70">
            Nothing is claimed here yet — this section is structured and ready for real
            awards or selections once they're confirmed.
          </p>
        </Reveal>

        <div className="border-t border-line">
          {RECOGNITION.map((r, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="flex flex-col gap-2 border-b border-line py-6 sm:flex-row sm:items-baseline sm:justify-between sm:py-8">
                <span className="font-serif text-2xl italic text-bone sm:text-3xl">
                  {r.award}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-stone">
                  {r.project} &middot; {r.year}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

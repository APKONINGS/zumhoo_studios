import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { CAPABILITIES } from '../data/projects'
import { img } from '../data/site'

export default function Capabilities() {
  const [active, setActive] = useState(0)

  return (
    <section id="capabilities" className="border-b border-line bg-ink py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <Reveal className="mb-14 lg:mb-20">
          <p className="eyebrow mb-4 text-accent-light">03 / What we do</p>
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-bone sm:text-6xl">
            What We Do
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <ul className="border-t border-line">
              {CAPABILITIES.map((c, i) => (
                <li key={c.n} className="border-b border-line">
                  <button
                    type="button"
                    data-cursor="→"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className={`group flex w-full items-baseline justify-between gap-6 py-6 text-left transition-colors sm:py-8 ${
                      active === i ? 'text-bone' : 'text-stone'
                    }`}
                  >
                    <span className="flex items-baseline gap-5 sm:gap-8">
                      <span className="font-mono text-xs text-accent-light">{c.n}</span>
                      <span className="font-display text-xl font-semibold uppercase tracking-tight transition-transform duration-300 sm:text-3xl group-hover:translate-x-1">
                        {c.title}
                      </span>
                    </span>
                    <ArrowUpRight
                      className={`h-5 w-5 shrink-0 transition-opacity duration-300 ${
                        active === i ? 'opacity-100 text-accent-light' : 'opacity-0'
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-md text-sm text-stone/70">
              {CAPABILITIES[active].text}
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-ink-soft lg:col-span-5">
            {CAPABILITIES.map((c, i) => (
              <img
                key={c.n}
                src={img(c.image, { w: 1200 })}
                alt={c.title}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-cinematic"
                style={{ opacity: active === i ? 1 : 0 }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

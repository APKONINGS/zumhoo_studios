import { ArrowUpRight, Play } from 'lucide-react'
import Reveal from './Reveal'
import { CATEGORIES, WORK_ITEMS } from '../data/projects'
import { img } from '../data/site'

const TABS = ['All', ...CATEGORIES]

function WorkCard({ item }) {
  const isVideo = item.type === 'video'
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group relative block aspect-[4/5] w-full overflow-hidden rounded-sm bg-ink-soft"
    >
      <img
        src={img(item.image, { w: 1200 })}
        alt={`${item.title} — ${item.category}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-cinematic group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/15 to-ink/40 transition-opacity duration-500 group-hover:from-ink/90 group-hover:via-ink/10 group-hover:to-transparent" />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-6">
        <span className="eyebrow text-accent-light">{item.category}</span>
        {isVideo && (
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-bone/30 text-bone opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <Play className="h-3.5 w-3.5 translate-x-0.5" fill="currentColor" />
          </span>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <h3 className="font-serif text-xl italic text-bone transition-transform duration-500 ease-cinematic group-hover:-translate-y-1 sm:text-2xl">
          {item.title}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-mono text-[11px] text-stone">{item.year}</span>
          <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-bone opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {isVideo ? 'Watch on YouTube' : 'View on Instagram'}
            <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </a>
  )
}

export default function WorkGrid({ filter, setFilter }) {
  const items = filter === 'All' ? WORK_ITEMS : WORK_ITEMS.filter((i) => i.category === filter)

  return (
    <section id="work" className="border-b border-line bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <Reveal className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end lg:mb-12">
          <div>
            <p className="eyebrow mb-4 text-accent-light">Selected work</p>
            <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-bone sm:text-6xl">
              The Work
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                aria-pressed={filter === tab}
                className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-300 ${
                  filter === tab
                    ? 'border-accent bg-accent text-ink'
                    : 'border-line text-stone hover:border-bone/40 hover:text-bone'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 6) * 60}>
              <WorkCard item={item} />
            </Reveal>
          ))}
        </div>

        <p className="mt-10 max-w-xl text-sm text-stone/70">
          Titles and years above are placeholders pending real production credits — every
          link, though, goes to the studio&rsquo;s actual YouTube or Instagram.
        </p>
      </div>
    </section>
  )
}

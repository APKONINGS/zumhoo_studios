import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { PROJECTS } from '../data/projects'
import { img } from '../data/site'

// Column span scales the card's width; aspect-ratio scales its height off
// that width, so a wider card reads as visibly larger without relying on
// fragile grid row-spans.
const SIZE_CLASSES = {
  large: 'lg:col-span-7 aspect-[4/5]',
  medium: 'lg:col-span-5 aspect-[4/5]',
  small: 'lg:col-span-4 aspect-[3/4]',
  wide: 'lg:col-span-12 aspect-[16/9] lg:aspect-[21/9]',
}

function ProjectCard({ p }) {
  return (
    <a
      href="#"
      data-cursor="View"
      onClick={(e) => e.preventDefault()}
      className="group relative block h-full w-full overflow-hidden rounded-sm bg-ink-soft"
    >
      <img
        src={img(p.image, { w: 1400 })}
        alt={`${p.title} — ${p.category}`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-cinematic group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
        <div className="transition-transform duration-500 ease-cinematic group-hover:-translate-y-1">
          <p className="eyebrow mb-2 text-accent-light">
            {p.category} — {p.year}
          </p>
          <h3 className="font-serif text-2xl italic text-bone sm:text-3xl">{p.title}</h3>
        </div>
        <span className="mb-1 flex shrink-0 items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-bone opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          View project <ArrowUpRight className="h-3 w-3" />
        </span>
      </div>
    </a>
  )
}

export default function WorkGrid() {
  return (
    <section id="work" className="border-b border-line bg-ink py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end lg:mb-20">
          <div>
            <p className="eyebrow mb-4 text-accent-light">02 / Selected work</p>
            <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-bone sm:text-6xl">
              Selected Work
            </h2>
          </div>
          <p className="max-w-xs font-serif text-xl italic text-stone">
            Stories we&rsquo;ve brought to life.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 60}
              className={SIZE_CLASSES[p.size] || SIZE_CLASSES.small}
            >
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>

        <p className="mt-10 max-w-xl text-sm text-stone/70">
          Project titles, imagery and credits above are placeholders pending real Zumhoo
          production details — structured so they can be swapped in directly.
        </p>
      </div>
    </section>
  )
}

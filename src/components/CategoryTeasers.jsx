import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { CATEGORY_INFO, getItemsByCategoryName } from '../data/projects'
import { img } from '../data/site'

export default function CategoryTeasers() {
  const categories = Object.values(CATEGORY_INFO)

  return (
    <section className="border-b border-line bg-ink py-16 sm:py-20">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <Reveal className="mb-10 lg:mb-12">
          <p className="eyebrow mb-4 text-accent-light">Browse by discipline</p>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-bone sm:text-5xl">
            The Work
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
          {categories.map((cat, i) => {
            const cover = getItemsByCategoryName(cat.name)[0]
            return (
              <Reveal key={cat.slug} delay={i * 80}>
                <Link
                  to={`/${cat.slug}`}
                  className="group relative block aspect-[16/10] w-full overflow-hidden rounded-sm bg-ink-soft"
                >
                  {cover && (
                    <img
                      src={img(cover.image, { w: 1400 })}
                      alt={cat.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-cinematic group-hover:scale-[1.06]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/50 transition-opacity duration-500 group-hover:from-ink/95" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                    <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-bone sm:text-4xl">
                      {cat.name}
                    </h3>
                    <p className="mt-2 max-w-xs font-serif text-base italic text-stone">
                      {cat.tagline}
                    </p>
                    <span className="mt-4 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-light">
                      View {cat.name}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import ProjectCTA from '../components/ProjectCTA'
import { CATEGORY_INFO, getItemsByCategoryName } from '../data/projects'

export default function CategoryPage() {
  const { slug } = useParams()
  const info = CATEGORY_INFO[slug]

  if (!info) return <Navigate to="/" replace />

  const items = getItemsByCategoryName(info.name)
  const otherCategories = Object.values(CATEGORY_INFO).filter((c) => c.slug !== slug)

  return (
    <>
      <header className="relative border-b border-line bg-ink pb-12 pt-32 sm:pb-16 sm:pt-40">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
          <Reveal>
            <p className="eyebrow mb-5 text-accent-light">Selected work</p>
            <h1 className="font-display text-5xl font-extrabold uppercase tracking-tight text-bone sm:text-7xl lg:text-8xl">
              {info.name}
            </h1>
            <p className="mt-5 max-w-xl font-serif text-xl italic text-stone sm:text-2xl">
              {info.tagline}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone/70">
              {info.description}
            </p>
          </Reveal>
        </div>
      </header>

      <section className="border-b border-line bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            {items.map((item, i) => (
              <Reveal key={item.id} delay={(i % 6) * 60}>
                <ProjectCard item={item} className="aspect-[4/5]" />
              </Reveal>
            ))}
          </div>

          <p className="mt-10 max-w-xl text-sm text-stone/70">
            Titles and years above are placeholders pending real production credits — every
            link, though, goes to the studio&rsquo;s actual YouTube or Instagram.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-ink py-10">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-x-8 gap-y-4 px-6 sm:px-10 lg:px-16">
          <span className="eyebrow text-stone">Explore more</span>
          {otherCategories.map((c) => (
            <Link
              key={c.slug}
              to={`/${c.slug}`}
              className="lift-on-hover flex items-center gap-1.5 font-serif text-lg italic text-bone"
            >
              {c.name} <ArrowUpRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </section>

      <ProjectCTA />
    </>
  )
}

import { ArrowUpRight, Play } from 'lucide-react'
import { img } from '../data/site'

/**
 * One project block: full-bleed image, category label, title, and a CTA
 * that opens the real external link (YouTube for video, Instagram for
 * image) in a new tab. Used by both the category pages and the homepage
 * highlight reel.
 */
export default function ProjectCard({ item, className = '' }) {
  const isVideo = item.type === 'video'
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className={`group relative block w-full overflow-hidden rounded-sm bg-ink-soft ${className}`}
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

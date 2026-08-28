import { useState } from 'react'
import { Menu, X, ArrowUpRight, Aperture } from 'lucide-react'
import { useScrolled } from '../lib/hooks'
import { SITE } from '../data/site'
import { CATEGORIES } from '../data/projects'

export default function Navbar({ onSelectCategory }) {
  const scrolled = useScrolled(60)
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)
  const selectCategory = (cat) => {
    onSelectCategory?.(cat)
    close()
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-cinematic ${
          scrolled || open ? 'glass-dark border-b border-line' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/50">
              <Aperture className="h-4 w-4 text-accent" strokeWidth={2} />
            </span>
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-bone">
              {SITE.name}
            </span>
          </a>

          <nav className="hidden items-center gap-8 xl:flex">
            {CATEGORIES.map((cat) => (
              <a
                key={cat}
                href="#work"
                onClick={() => onSelectCategory?.(cat)}
                className="lift-on-hover whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-stone hover:text-bone transition-colors"
              >
                {cat}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#start"
              className="magnetic-btn hidden items-center gap-2 rounded-full border border-accent/60 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-bone hover:bg-accent hover:border-accent hover:text-ink transition-colors sm:inline-flex"
            >
              Start a project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-bone xl:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink transition-opacity duration-500 ease-cinematic xl:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="grain-overlay opacity-[0.03]" />
        <nav className="flex h-full flex-col justify-center gap-6 px-8">
          <a
            href="#work"
            onClick={() => selectCategory('All')}
            className="font-serif text-4xl italic text-bone transition-transform duration-500"
            style={{
              transitionDelay: open ? '0ms' : '0ms',
              transform: open ? 'translateX(0)' : 'translateX(24px)',
              opacity: open ? 1 : 0,
            }}
          >
            Work
          </a>
          {CATEGORIES.map((cat, i) => (
            <a
              key={cat}
              href="#work"
              onClick={() => selectCategory(cat)}
              className="pl-4 font-serif text-2xl italic text-stone transition-transform duration-500"
              style={{
                transitionDelay: open ? `${(i + 1) * 60}ms` : '0ms',
                transform: open ? 'translateX(0)' : 'translateX(24px)',
                opacity: open ? 1 : 0,
              }}
            >
              {cat}
            </a>
          ))}
          <a
            href="#about"
            onClick={close}
            className="font-serif text-4xl italic text-bone transition-transform duration-500"
            style={{
              transitionDelay: open ? `${(CATEGORIES.length + 1) * 60}ms` : '0ms',
              transform: open ? 'translateX(0)' : 'translateX(24px)',
              opacity: open ? 1 : 0,
            }}
          >
            About
          </a>
          <a
            href="#start"
            onClick={close}
            className="magnetic-btn mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-ink"
          >
            Start a project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>
      </div>
    </>
  )
}

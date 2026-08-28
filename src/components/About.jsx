import { ArrowUpRight, Aperture } from 'lucide-react'
import Reveal from './Reveal'
import { SITE, IMG, img } from '../data/site'

export default function About() {
  return (
    <section id="about" className="border-b border-line bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Statement + founder */}
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-5 text-accent-light">Who we are</p>
            <h2 className="font-serif text-4xl italic leading-[1.05] text-bone text-balance sm:text-5xl lg:text-6xl">
              From Cameroon, with a worldwide point of view.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-stone">
              [Zumhoo Studios is a Cameroonian creative production studio working across film,
              brand stories, photography and graphic design — placeholder introduction copy
              until the founder supplies the real description.]
            </p>

            <div className="mt-10 flex items-center gap-5 border-t border-line pt-8">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-dashed border-line bg-ink-soft/60">
                <Aperture className="h-5 w-5 text-stone" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-xl italic text-bone">{SITE.founder.name}</h3>
                <p className="eyebrow mt-1 text-accent-light">{SITE.founder.role}</p>
              </div>
              <a
                href="#footer-contact"
                className="lift-on-hover ml-auto hidden items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-accent-light sm:inline-flex"
              >
                Meet the team <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>

          {/* Visual texture — proof of the work behind the words */}
          <Reveal delay={150} className="lg:col-span-6">
            <div className="grid h-full grid-cols-3 grid-rows-2 gap-3">
              <div className="col-span-2 row-span-2 overflow-hidden rounded-sm">
                <img
                  src={img(IMG.crowdSpotlight, { w: 1200 })}
                  alt="Hands raised under a spotlight at a live production event."
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-sm">
                <img
                  src={img(IMG.filmReels, { w: 700 })}
                  alt="Reels of 35mm film."
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-sm">
                <img
                  src={img(IMG.cinemaSeats, { w: 700 })}
                  alt="Rows of cinema seating."
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

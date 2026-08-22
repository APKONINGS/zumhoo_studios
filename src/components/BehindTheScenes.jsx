import Reveal from './Reveal'
import { BTS_GALLERY } from '../data/projects'
import { img } from '../data/site'

export default function BehindTheScenes() {
  return (
    <section className="border-b border-line bg-ink py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <Reveal className="mb-14 lg:mb-16">
          <p className="eyebrow mb-4 text-accent-light">05 / On set</p>
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-bone sm:text-6xl">
            Behind the Frame
          </h2>
        </Reveal>

        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {BTS_GALLERY.map((item, i) => (
            <Reveal key={i} delay={(i % 4) * 60} className="break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-sm bg-ink-soft">
                <img
                  src={img(item.image, { w: 900 })}
                  alt="Behind-the-scenes production reference image."
                  className={`w-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-[1.04] ${
                    item.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/90 to-transparent p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-bone">
                    Production / BTS
                  </span>
                  <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-stone">
                    Location / [LOCATION] &middot; Year / [YEAR]
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

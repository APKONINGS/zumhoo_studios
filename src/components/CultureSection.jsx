import Reveal from './Reveal'
import { IMG, img } from '../data/site'

export default function CultureSection() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-6 text-accent-light">04 / Where we work from</p>
            <h2 className="font-serif text-4xl italic leading-[1.05] text-bone text-balance sm:text-6xl">
              From Cameroon,
              <br />
              with a worldwide
              <br />
              point of view.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-stone">
              [Placeholder copy — local roots, international ambition. Zumhoo Studios is
              based in Buea, Cameroon, and works to bring Cameroonian stories to audiences
              beyond it.]
            </p>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 aspect-[16/10] overflow-hidden rounded-sm">
                <img
                  src={img(IMG.crowdSpotlight, { w: 1400 })}
                  alt="Hands raised under a spotlight at a live event."
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-sm">
                <img
                  src={img(IMG.portraitWoman, { w: 900 })}
                  alt="Editorial portrait, studio lighting."
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-sm">
                <img
                  src={img(IMG.portraitMan, { w: 900 })}
                  alt="Portrait of a photographer with a camera."
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

import Reveal from './Reveal'

export default function Intro() {
  return (
    <section className="relative border-b border-line bg-ink py-24 sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 sm:px-10 lg:grid-cols-12 lg:gap-6 lg:px-16">
        <div className="hidden lg:col-span-1 lg:flex lg:items-start">
          <span
            className="eyebrow origin-top-left whitespace-nowrap text-stone"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            01 / Who we are
          </span>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-serif text-4xl italic leading-[1.05] text-bone text-balance sm:text-6xl lg:text-[4.2rem]">
              Stories rooted here.
              <br />
              Made to travel.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <Reveal delay={150}>
            <p className="text-base leading-relaxed text-stone sm:text-lg">
              [Zumhoo Studios is a Cameroonian creative production studio working across
              film, television and photography — placeholder introduction copy until the
              founder supplies the real description.]
            </p>
            <p className="mt-6 text-sm leading-relaxed text-stone/80">
              [Additional line on approach / philosophy — placeholder.]
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

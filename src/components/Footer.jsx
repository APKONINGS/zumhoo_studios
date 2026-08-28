import { Aperture, Phone, MapPin, Mail } from 'lucide-react'
import { SITE } from '../data/site'
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons'

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Start a project', href: '#start' },
  { label: 'Contact', href: '#footer-contact' },
]

const SOCIALS = [
  { label: 'Instagram', href: SITE.social.instagram, Icon: InstagramIcon },
  { label: 'Facebook', href: SITE.social.facebook, Icon: FacebookIcon },
  { label: 'YouTube', href: SITE.social.youtube, Icon: YoutubeIcon },
]

export default function Footer() {
  return (
    <footer id="footer-contact" className="bg-ink-raised pt-20 sm:pt-24">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-14 border-b border-line pb-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/50">
                <Aperture className="h-4 w-4 text-accent" strokeWidth={2} />
              </span>
              <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-bone">
                {SITE.name}
              </span>
            </div>
            <p className="mt-5 max-w-xs font-serif text-xl italic text-stone">
              {SITE.tagline}
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-stone/60">
              Film · Television · Photography · Creative
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-5 text-stone">Navigate</p>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="lift-on-hover text-sm text-stone hover:text-bone">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-5 text-stone">Follow</p>
            <ul className="space-y-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="lift-on-hover flex items-center gap-2 text-sm text-stone hover:text-bone"
                  >
                    <Icon className="h-3.5 w-3.5" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow mb-5 text-stone">Contact</p>
            <ul className="space-y-3 text-sm text-stone">
              <li>
                <a href={`tel:${SITE.phone.tel}`} className="flex items-center gap-2 hover:text-bone">
                  <Phone className="h-3.5 w-3.5 shrink-0" /> {SITE.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0" /> [EMAIL]
              </li>
              <li>
                <a
                  href={SITE.location.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2 hover:text-bone"
                >
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {SITE.location.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-stone/60">
            &copy; {SITE.year} {SITE.name} — Cameroon
          </p>
        </div>
      </div>
    </footer>
  )
}

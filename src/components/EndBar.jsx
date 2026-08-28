import { Phone } from 'lucide-react'
import { SITE } from '../data/site'
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons'

const SOCIALS = [
  { label: 'Instagram', href: SITE.social.instagram, Icon: InstagramIcon },
  { label: 'Facebook', href: SITE.social.facebook, Icon: FacebookIcon },
  { label: 'YouTube', href: SITE.social.youtube, Icon: YoutubeIcon },
]

// Deliberately not a traditional multi-column footer — a slim closing bar:
// mark, one line of contact, socials, copyright. The work does the talking.
export default function EndBar() {
  return (
    <footer id="footer-contact" className="border-t border-line bg-ink">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-5 px-6 py-8 text-center sm:flex-row sm:justify-between sm:px-10 sm:text-left lg:px-16">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt={SITE.name} className="h-7 w-auto opacity-90" />
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">
            &copy; {SITE.year} {SITE.name} — Cameroon
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={`tel:${SITE.phone.tel}`}
            className="lift-on-hover flex items-center gap-2 font-mono text-xs text-stone hover:text-bone"
          >
            <Phone className="h-3.5 w-3.5" /> {SITE.phone.display}
          </a>
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="lift-on-hover flex h-8 w-8 items-center justify-center rounded-full border border-line text-stone hover:border-bone/40 hover:text-bone"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

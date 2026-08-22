import { useReveal } from '../lib/hooks'

/**
 * Scroll-triggered fade/rise reveal. Wraps children in a div by default;
 * pass `as` to render a different element (e.g. 'span', 'li').
 */
export default function Reveal({
  children,
  as: As = 'div',
  className = '',
  delay = 0,
  y = 24,
  ...rest
}) {
  const [ref, visible] = useReveal()
  return (
    <As
      ref={ref}
      className={className}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '900ms',
        transitionTimingFunction: 'cubic-bezier(0.25,0.46,0.45,0.94)',
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
      }}
      {...rest}
    >
      {children}
    </As>
  )
}

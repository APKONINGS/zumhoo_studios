import { useEffect, useRef } from 'react'
import { useIsFinePointer } from '../lib/hooks'

/**
 * Subtle custom cursor for desktop. Reads a global `data-cursor` attribute
 * set by hovered elements ("view" | "play" | "arrow") to change its label.
 * Disabled entirely on touch devices.
 */
export default function Cursor() {
  const isFine = useIsFinePointer()
  const dotRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    if (!isFine) return
    document.body.classList.add('has-custom-cursor')

    let raf = null
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let cx = x
    let cy = y

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
    }

    const loop = () => {
      cx += (x - cx) * 0.22
      cy += (y - cy) * 0.22
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(loop)
    }

    const onOver = (e) => {
      const target = e.target.closest('[data-cursor]')
      if (target && labelRef.current && dotRef.current) {
        labelRef.current.textContent = target.getAttribute('data-cursor')
        dotRef.current.dataset.state = 'label'
      }
    }
    const onOut = (e) => {
      const target = e.target.closest('[data-cursor]')
      if (target && dotRef.current) {
        dotRef.current.dataset.state = 'idle'
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    raf = requestAnimationFrame(loop)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [isFine])

  if (!isFine) return null

  return (
    <div
      ref={dotRef}
      data-state="idle"
      className="pointer-events-none fixed left-0 top-0 z-[300] flex items-center justify-center rounded-full border border-bone/40 text-[10px] font-mono uppercase tracking-[0.15em] text-bone transition-[width,height,background-color] duration-300 ease-cinematic"
      style={{
        width: 'var(--cursor-size, 10px)',
        height: 'var(--cursor-size, 10px)',
      }}
    >
      <span
        ref={labelRef}
        className="cursor-label select-none opacity-0 data-[state=label]:opacity-100"
      />
      <style>{`
        [data-state="idle"] { --cursor-size: 8px; background: rgba(200,138,82,0.9); border-color: transparent; }
        [data-state="label"] { --cursor-size: 64px; background: rgba(10,9,8,0.85); border-color: rgba(239,233,221,0.35); }
        [data-state="label"] .cursor-label { opacity: 1; }
      `}</style>
    </div>
  )
}

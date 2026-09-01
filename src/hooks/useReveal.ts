import { useEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Révélations au scroll, scopées à un conteneur.
 * Cible [data-reveal] (masque) et [data-rise] (translation).
 * Entièrement neutralisé si prefers-reduced-motion est actif.
 */
export function useReveal(scope: RefObject<HTMLElement | null>, deps: unknown[] = []) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el => {
        gsap.fromTo(
          el,
          { clipPath: 'inset(14% 0 14% 0)', scale: 1.04 },
          {
            clipPath: 'inset(0% 0 0% 0)',
            scale: 1,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 40%', scrub: 1 },
          }
        )
      })
      gsap.utils.toArray<HTMLElement>('[data-rise]').forEach(el => {
        gsap.from(el, {
          y: 26,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })
      })
      ScrollTrigger.refresh()
    }, scope)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}


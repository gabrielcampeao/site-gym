'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const TRANSITION = 'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)'

    const getTransform = (dir?: string) =>
      dir === 'left'  ? 'translateX(-32px)' :
      dir === 'right' ? 'translateX(32px)'  :
      dir === 'scale' ? 'translateY(16px) scale(0.97)' :
                        'translateY(26px)'

    const show = (el: HTMLElement) => {
      const delay = Number(el.dataset.delay ?? 0)
      setTimeout(() => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      }, delay)
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        show(entry.target as HTMLElement)
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' })

    const init = (el: HTMLElement) => {
      el.style.opacity = '0'
      el.style.transform = getTransform(el.dataset.reveal)
      el.style.transition = TRANSITION
      el.style.willChange = 'opacity, transform'
      observer.observe(el)
    }

    // Aguarda o paint inicial para evitar flash
    requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(init)
    })

    // Detecta elementos adicionados dinamicamente (cards async)
    const mo = new MutationObserver(muts =>
      muts.forEach(m =>
        m.addedNodes.forEach(n => {
          if (!(n instanceof HTMLElement)) return
          if (n.dataset.reveal !== undefined) init(n)
          n.querySelectorAll<HTMLElement>('[data-reveal]').forEach(init)
        })
      )
    )
    mo.observe(document.body, { childList: true, subtree: true })

    return () => { observer.disconnect(); mo.disconnect() }
  }, [])

  return null
}

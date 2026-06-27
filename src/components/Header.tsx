'use client'

import { useState } from 'react'
import Logo from './Logo'

export default function Header() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Início',  href: '#inicio'  },
    { label: 'Sobre',   href: '#sobre'   },
    { label: 'Planos',  href: '#planos'  },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-gym-dark/98 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <Logo size="sm" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-white/60 hover:text-white text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="/academias"
          className="hidden md:inline-block bg-gym-purple hover:bg-gym-purple-dark text-white text-[11px] font-bold px-6 py-2.5 rounded-full transition-colors duration-200 uppercase tracking-[0.15em]">
          Entrar academia
        </a>

        {/* Mobile burger */}
        <button className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8" onClick={() => setOpen(!open)}>
          <span className={`block h-[1.5px] bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-[6.5px] w-6' : 'w-6'}`} />
          <span className={`block h-[1.5px] bg-white transition-all duration-300 ${open ? 'opacity-0 w-4' : 'w-4'}`} />
          <span className={`block h-[1.5px] bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6.5px] w-6' : 'w-6'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/[0.06] px-6 py-6 flex flex-col gap-5 bg-gym-dark">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white text-xs font-semibold uppercase tracking-[0.2em] transition-colors">
              {l.label}
            </a>
          ))}
          <a href="/academias" onClick={() => setOpen(false)}
            className="bg-gym-purple text-white text-xs font-bold px-5 py-3 rounded-full text-center uppercase tracking-[0.15em]">
            Entrar academia
          </a>
        </div>
      )}
    </header>
  )
}

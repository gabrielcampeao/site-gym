'use client'
import Logo from '@/components/Logo'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { UNITS } from '@/data/units'

export default function UnitPage() {
  const { id } = useParams<{ id: string }>()
  const unit = UNITS.find(u => u.id === id)
  const [activePhoto, setActivePhoto] = useState(0)

  if (!unit) {
    return (
      <div className="min-h-screen bg-gym-dark flex items-center justify-center text-white/40 text-sm">
        Unidade não encontrada.{' '}
        <a href="/academias" className="text-gym-purple ml-2 hover:underline">Ver todas</a>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gym-dark text-white">
      {/* Header */}
      <div className="fixed top-0 inset-x-0 z-50 bg-gym-dark/98 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/"><Logo size="sm" /></a>
          <a href="/academias" className="text-white/50 hover:text-white text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Voltar
          </a>
        </div>
      </div>

      <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[11px] text-white/30 mb-6 flex-wrap">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <a href="/academias" className="hover:text-white transition-colors">Academias</a>
          <span>/</span>
          <a href="/academias" className="hover:text-white transition-colors">SP</a>
          <span>/</span>
          <a href="/academias" className="hover:text-white transition-colors">São Paulo</a>
          <span>/</span>
          <span className="text-white/60">{unit.name}</span>
        </nav>

        {/* Título */}
        <p className="text-white/30 text-[12px] mb-1">Stone Gym — SP — São Paulo</p>
        <h1 className="font-bebas text-[48px] md:text-[64px] leading-none text-white mb-8">{unit.name}</h1>

        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
          {/* Galeria */}
          <div>
            {/* Foto principal */}
            <div className="relative rounded-2xl overflow-hidden mb-3" style={{ height: '420px' }}>
              <img
                src={unit.photos[activePhoto]}
                alt={unit.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              {/* Setas */}
              {unit.photos.length > 1 && (
                <>
                  <button
                    onClick={() => setActivePhoto(p => (p - 1 + unit.photos.length) % unit.photos.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setActivePhoto(p => (p + 1) % unit.photos.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {unit.photos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(i)}
                  className={`flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${activePhoto === i ? 'border-gym-purple' : 'border-transparent opacity-50 hover:opacity-80'}`}>
                  <img src={photo} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Horários */}
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gym-purple/15 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gym-purple">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h3 className="font-bold text-white text-sm">Horário de funcionamento</h3>
              </div>
              <div className="space-y-3">
                {unit.hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-[13px]">
                    <span className="text-white/50">{h.days}</span>
                    <span className="text-white font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Endereço */}
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gym-purple/15 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" className="text-gym-purple" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-white text-sm">Endereço</h3>
              </div>
              <p className="text-white/60 text-[13px] leading-relaxed mb-1">{unit.address}</p>
              <p className="text-white/40 text-[12px] mb-4">{unit.city}</p>
              <a href={`https://www.google.com/maps/search/?api=1&query=${unit.lat},${unit.lon}`}
                target="_blank" rel="noopener noreferrer"
                className="text-[11px] font-bold uppercase tracking-[0.15em] text-gym-purple hover:text-white transition-colors">
                Ver rota →
              </a>
            </div>

            {/* Contato */}
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gym-purple/15 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gym-purple">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.17 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-white text-sm">Fale com a unidade</h3>
              </div>
              <a href={`tel:${unit.phone}`}
                className="text-[13px] text-gym-purple-light hover:text-white transition-colors font-semibold">
                {unit.phone}
              </a>
            </div>

            {/* CTA */}
            <a href={`/checkout/basico`}
              className="block w-full text-center text-[13px] font-bold uppercase tracking-[0.2em] text-white py-4 rounded-full transition-colors duration-200"
              style={{ backgroundColor: '#7B2FBE' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#6B21A8')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#7B2FBE')}>
              Quero treinar aqui!
            </a>

            <a href="/#planos"
              className="block w-full text-center text-[11px] font-bold uppercase tracking-[0.15em] text-white/40 hover:text-white py-3 rounded-full border border-white/10 hover:border-white/30 transition-colors duration-200">
              Ver planos disponíveis
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

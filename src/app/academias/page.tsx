'use client'
import Logo from '@/components/Logo'

import { useEffect, useState } from 'react'
import { UNITS } from '@/data/units'

function haversine(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

export default function AcademiasPage() {
  const [search, setSearch]   = useState('')
  const [userPos, setUserPos] = useState<{ lat: number; lon: number } | null>(null)

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(pos =>
      setUserPos({ lat: pos.coords.latitude, lon: pos.coords.longitude })
    )
  }, [])

  const filtered = UNITS
    .filter(u =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.address.toLowerCase().includes(search.toLowerCase())
    )
    .map(u => ({
      ...u,
      distance: userPos ? haversine(userPos.lat, userPos.lon, u.lat, u.lon) : null,
    }))

  return (
    <div className="min-h-screen bg-gym-dark text-white">
      {/* Header */}
      <div className="fixed top-0 inset-x-0 z-50 bg-gym-dark/98 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/"><Logo size="sm" /></a>
          <a href="/" className="text-white/50 hover:text-white text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Voltar
          </a>
        </div>
      </div>

      {/* Banner promo */}
      <div className="pt-[57px]">
        <div className="relative overflow-hidden bg-gym-dark border-b border-white/[0.06]">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(123,47,190,0.15) 0%, transparent 70%)' }} />
          <div className="max-w-7xl mx-auto px-6 py-7 flex items-center justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-5">
              <div>
                <p className="font-bebas text-[26px] md:text-[34px] leading-none text-white">
                  COMECE HOJE! <span className="text-gym-purple">1 MÊS GRÁTIS</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="border border-white/[0.12] rounded-xl px-5 py-3 text-center">
                <p className="text-white/30 text-[9px] uppercase tracking-[0.25em]">Só até</p>
                <p className="font-bebas text-[22px] text-white leading-none">30|06</p>
              </div>
              <a href="/checkout/basico" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white px-6 py-3 rounded-full transition-colors duration-200"
                style={{ backgroundColor: '#7B2FBE' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#6B21A8')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#7B2FBE')}>
                Matricule-se
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">
        <h1 className="text-center text-white font-bold text-2xl md:text-3xl mb-8">
          E aí, onde você quer treinar?
        </h1>

        {/* Busca */}
        <div className="max-w-2xl mx-auto relative mb-8">
          <input type="text" placeholder="Digite o bairro ou cidade"
            value={search} onChange={e => setSearch(e.target.value)}
            className="w-full bg-white/[0.05] border border-white/[0.12] rounded-2xl px-5 py-4 pr-14 text-white text-sm placeholder-white/30 focus:outline-none focus:border-gym-purple/60 transition-colors" />
          <svg className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </div>

        {/* Contador */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-white/50 text-sm">
            <span className="text-white font-bold">{filtered.length}</span> unidade{filtered.length !== 1 ? 's' : ''} encontrada{filtered.length !== 1 ? 's' : ''}
          </p>
          {userPos && (
            <p className="text-white/30 text-[11px] flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gym-purple">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              </svg>
              Ordenado por distância
            </p>
          )}
        </div>

        {/* Grid de cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(unit => (
            <a key={unit.id} href={`/academias/${unit.id}`}
              className={`group rounded-2xl overflow-hidden border transition-all duration-200 hover:-translate-y-1.5 block ${unit.featured ? 'border-gym-purple/50 shadow-[0_0_24px_rgba(107,33,168,0.18)]' : 'border-white/[0.07] hover:border-white/20'}`}>
              {/* Foto */}
              <div className="relative h-48 overflow-hidden">
                <img src={unit.photos[0]} alt={unit.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {unit.featured && (
                  <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-[0.25em] px-3 py-1 rounded-full bg-gym-purple text-white">
                    Destaque
                  </span>
                )}
                {unit.distance !== null && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold bg-black/60 text-white/80 px-2.5 py-1 rounded-full">
                    {unit.distance < 1 ? `${Math.round(unit.distance * 1000)} m` : `${unit.distance.toFixed(1)} km`}
                  </span>
                )}
                <h2 className="absolute bottom-3 left-4 font-bebas text-[26px] text-white leading-none">
                  {unit.name}
                </h2>
              </div>

              {/* Info */}
              <div className="bg-white/[0.03] p-5 flex flex-col gap-2">
                <p className="text-white/50 text-[12px] leading-relaxed">{unit.address}</p>
                <p className="text-white/30 text-[11px]">
                  {unit.hours[0].days}: <span className="text-white/50">{unit.hours[0].time}</span>
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gym-purple mt-2 group-hover:text-white transition-colors">
                  Ver unidade →
                </p>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/30 text-sm">Nenhuma unidade encontrada para "<span className="text-white">{search}</span>".</p>
          </div>
        )}
      </div>
    </div>
  )
}

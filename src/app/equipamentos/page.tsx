'use client'
import Logo from '@/components/Logo'

import { useState } from 'react'
import { equipamentos, categoryColors } from '@/data/equipamentos'

const categorias = ['Todos', 'Musculação', 'Cardio', 'Aparelhos', 'Funcional']

export default function EquipamentosPage() {
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos' ? equipamentos : equipamentos.filter(e => e.categoria === active)

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

      {/* Hero */}
      <div className="pt-[57px]">
        <div className="relative overflow-hidden py-20 px-6 text-center"
          style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1e0a3c 50%, #0a0a0a 100%)' }}>
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 52px),repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 52px)' }} />
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(107,33,168,0.25) 0%, transparent 70%)' }} />
          <p className="relative text-gym-purple text-[10px] font-bold tracking-[0.6em] uppercase mb-4">Stone Gym</p>
          <h1 className="relative font-bebas text-[56px] md:text-[88px] leading-none text-white">
            EQUIPAMENTOS <span className="text-gym-purple">PREMIUM</span>
          </h1>
          <p className="relative text-white/40 text-sm mt-5 max-w-md mx-auto font-light leading-relaxed">
            Clique em um equipamento para ver fotos, vídeo tutorial e como executar os exercícios.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Filtros */}
        <div className="flex gap-2 flex-wrap justify-center mb-12">
          {categorias.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] border transition-all duration-200 ${
                active === cat
                  ? 'text-white border-gym-purple bg-gym-purple/15'
                  : 'text-white/40 border-white/10 hover:text-white/70 hover:border-white/25'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(eq => (
            <a key={eq.id} href={`/equipamentos/${eq.slug}`}
              className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-200 hover:-translate-y-1 block">
              <div className="relative h-52 overflow-hidden">
                <img src={eq.fotos[0]} alt={eq.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: categoryColors[eq.categoria] ?? '#7B2FBE' }}>
                  {eq.categoria}
                </span>
                {/* Play hint */}
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-bold text-white text-base mb-2 leading-snug">{eq.nome}</h2>
                <p className="text-white/40 text-[12px] leading-relaxed mb-4 line-clamp-2">{eq.descricao}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gym-purple">
                      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                    </svg>
                    <span className="text-white/30 text-[11px]">{eq.quantidade}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gym-purple group-hover:text-white transition-colors">
                    Ver detalhes →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-white/30 text-sm mb-6">Pronto para treinar com o melhor?</p>
          <a href="/#planos"
            className="inline-block text-white text-[11px] font-bold px-12 py-4 rounded-full uppercase tracking-[0.25em] transition-colors duration-200"
            style={{ backgroundColor: '#7B2FBE' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#6B21A8')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#7B2FBE')}>
            Ver Planos
          </a>
        </div>
      </div>
    </div>
  )
}

'use client'
import Logo from '@/components/Logo'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { equipamentos, categoryColors } from '@/data/equipamentos'

export default function EquipamentoPage() {
  const { slug } = useParams<{ slug: string }>()
  const eq = equipamentos.find(e => e.slug === slug)

  const [activePhoto, setActivePhoto]   = useState(0)
  const [activeExercicio, setActiveExercicio] = useState(0)
  const [videoLoaded, setVideoLoaded]   = useState(false)

  if (!eq) {
    return (
      <div className="min-h-screen bg-gym-dark flex items-center justify-center text-white/40 text-sm">
        Equipamento não encontrado.{' '}
        <a href="/equipamentos" className="text-gym-purple ml-2 hover:underline">Ver todos</a>
      </div>
    )
  }

  const catColor = categoryColors[eq.categoria] ?? '#7B2FBE'

  return (
    <div className="min-h-screen bg-gym-dark text-white">
      {/* Header */}
      <div className="fixed top-0 inset-x-0 z-50 bg-gym-dark/98 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/"><Logo size="sm" /></a>
          <a href="/equipamentos" className="text-white/50 hover:text-white text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Equipamentos
          </a>
        </div>
      </div>

      <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[11px] text-white/30 mb-6 flex-wrap">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <a href="/equipamentos" className="hover:text-white transition-colors">Equipamentos</a>
          <span>/</span>
          <span className="text-white/60">{eq.nome}</span>
        </nav>

        {/* Título */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: catColor }}>
            {eq.categoria}
          </span>
        </div>
        <h1 className="font-bebas text-[48px] md:text-[72px] leading-none text-white mb-10">{eq.nome}</h1>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">

          {/* ─── Coluna esquerda ─── */}
          <div className="space-y-8">

            {/* Galeria de fotos */}
            <div>
              <div className="relative rounded-2xl overflow-hidden mb-3" style={{ height: '400px' }}>
                <img src={eq.fotos[activePhoto]} alt={eq.nome}
                  className="w-full h-full object-cover transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {eq.fotos.length > 1 && (
                  <>
                    <button onClick={() => setActivePhoto(p => (p - 1 + eq.fotos.length) % eq.fotos.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button onClick={() => setActivePhoto(p => (p + 1) % eq.fotos.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
              <div className="flex gap-2">
                {eq.fotos.map((foto, i) => (
                  <button key={i} onClick={() => setActivePhoto(i)}
                    className={`w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${activePhoto === i ? 'border-gym-purple' : 'border-transparent opacity-50 hover:opacity-75'}`}>
                    <img src={foto} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Vídeo tutorial */}
            <div>
              <h2 className="font-bebas text-[30px] text-white mb-4 leading-none">
                VÍDEO <span className="text-gym-purple">TUTORIAL</span>
              </h2>
              <div className="relative rounded-2xl overflow-hidden bg-black" style={{ aspectRatio: '16/9' }}>
                {!videoLoaded ? (
                  /* Thumbnail clicável */
                  <button onClick={() => setVideoLoaded(true)}
                    className="w-full h-full relative block group">
                    <img
                      src={eq.fotos[0]}
                      alt="Tutorial"
                      className="w-full h-full object-cover brightness-50 group-hover:brightness-60 transition-all duration-200"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                      <div className="w-20 h-20 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/40 flex items-center justify-center transition-all duration-200 group-hover:scale-110">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-white/70 text-[11px] font-semibold uppercase tracking-[0.25em]">
                        Assistir tutorial
                      </p>
                    </div>
                  </button>
                ) : (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${eq.videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title={`Tutorial — ${eq.nome}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                )}
              </div>
            </div>

            {/* Exercícios */}
            <div>
              <h2 className="font-bebas text-[30px] text-white mb-5 leading-none">
                COMO <span className="text-gym-purple">FAZER</span>
              </h2>

              {/* Tabs dos exercícios */}
              <div className="flex gap-2 mb-6 flex-wrap">
                {eq.exercicios.map((ex, i) => (
                  <button key={i} onClick={() => setActiveExercicio(i)}
                    className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.12em] border transition-all duration-200 ${activeExercicio === i
                      ? 'text-white border-gym-purple bg-gym-purple/15'
                      : 'text-white/40 border-white/10 hover:text-white/60'
                    }`}>
                    {ex.nome}
                  </button>
                ))}
              </div>

              {eq.exercicios[activeExercicio] && (() => {
                const ex = eq.exercicios[activeExercicio]
                return (
                  <div className="space-y-5">
                    {/* Músculos + séries */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4">
                        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 mb-3">Músculos trabalhados</p>
                        <div className="flex flex-wrap gap-2">
                          {ex.musculos.map((m, i) => (
                            <span key={i} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-gym-purple/20 text-gym-purple-light">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4">
                        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 mb-3">Volume recomendado</p>
                        <p className="text-white font-bold text-sm">{ex.series}</p>
                      </div>
                    </div>

                    {/* Passo a passo */}
                    <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5 space-y-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">Execução</p>
                      {ex.passos.map((passo, i) => (
                        <div key={i} className="flex gap-4">
                          <span className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-black text-white"
                            style={{ backgroundColor: catColor }}>
                            {i + 1}
                          </span>
                          <p className="text-white/65 text-[13px] leading-relaxed pt-0.5">{passo}</p>
                        </div>
                      ))}
                    </div>

                    {/* Dica */}
                    <div className="rounded-xl p-4 flex gap-3 border border-gym-purple/20"
                      style={{ backgroundColor: 'rgba(107,33,168,0.08)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gym-purple flex-shrink-0 mt-0.5">
                        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
                      </svg>
                      <p className="text-white/60 text-[12px] leading-relaxed">
                        <span className="text-gym-purple-light font-bold">Dica: </span>
                        {ex.dica}
                      </p>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>

          {/* ─── Sidebar direita ─── */}
          <div className="lg:sticky lg:top-24 space-y-4">
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6">
              <p className="text-white/40 text-[12px] leading-relaxed mb-5">{eq.descricao}</p>
              <div className="flex items-center gap-2 py-4 border-t border-b border-white/[0.06] mb-5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gym-purple">
                  <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                </svg>
                <span className="text-white/50 text-[12px]">{eq.quantidade} disponíveis</span>
              </div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 mb-3">Categoria</p>
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full text-white"
                style={{ backgroundColor: catColor }}>
                {eq.categoria}
              </span>
            </div>

            {/* Outros equipamentos */}
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 mb-4">Outros equipamentos</p>
              <div className="space-y-3">
                {equipamentos.filter(e => e.slug !== slug).slice(0, 4).map(e => (
                  <a key={e.slug} href={`/equipamentos/${e.slug}`}
                    className="flex items-center gap-3 group">
                    <div className="w-12 h-10 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={e.fotos[0]} alt={e.nome} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <div>
                      <p className="text-white/70 text-[12px] font-semibold group-hover:text-white transition-colors leading-snug">{e.nome}</p>
                      <p className="text-white/25 text-[10px]">{e.categoria}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <a href="/#planos"
              className="block w-full text-center text-[11px] font-bold uppercase tracking-[0.2em] text-white py-4 rounded-full transition-colors duration-200"
              style={{ backgroundColor: '#7B2FBE' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#6B21A8')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#7B2FBE')}>
              Treinar aqui agora
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

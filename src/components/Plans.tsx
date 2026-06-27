'use client'

import { useEffect, useState } from 'react'
import { fetchPlans, type Plan } from '@/lib/api'

const fallback: Plan[] = [
  { id: 1, name: 'Básico',   price: 89.90,  period: 'mês', description: 'Ideal para começar sua jornada', features: ['Acesso à academia','Musculação completa','Vestiários','Seg-Sex: 06h - 22h'], highlighted: false },
  { id: 2, name: 'Premium',  price: 149.90, period: 'mês', description: 'O equilíbrio perfeito de custo-benefício', features: ['Tudo do Básico','Acesso ao fim de semana','Aulas em grupo','Avaliação física mensal','App de treinos'], highlighted: true },
  { id: 3, name: 'Elite',    price: 249.90, period: 'mês', description: 'Experiência completa com personal trainer', features: ['Tudo do Premium','Personal Trainer 4x/sem','Nutricionista incluso','Acesso 24 horas','Área VIP'], highlighted: false },
]

export default function Plans() {
  const [plans, setPlans] = useState<Plan[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPlans()
      .then(setPlans)
      .catch(() => setPlans(fallback))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="planos" className="bg-gym-dark py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Cabeçalho */}
        <div data-reveal="up" className="text-center mb-16">
          <p className="text-gym-purple text-[10px] font-bold tracking-[0.5em] uppercase mb-4">
            Escolha seu plano
          </p>
          <h2 className="font-bebas text-[56px] md:text-[72px] leading-none text-white">
            NOSSOS PLANOS
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {(loading ? Array(3).fill(null) : plans).map((plan, i) =>
            !plan ? (
              <div key={i} className="bg-white/[0.04] rounded-xl h-96 animate-pulse" />
            ) : (
              <div key={plan.id}
                className={`relative rounded-2xl p-7 flex flex-col transition-transform duration-300 hover:-translate-y-1.5 ${
                  plan.highlighted
                    ? 'bg-gym-purple'
                    : 'bg-white/[0.04] border border-white/[0.07] hover:border-white/20'
                }`}>

                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gym-yellow text-black text-[9px] font-bold px-4 py-1 rounded-full uppercase tracking-[0.2em] whitespace-nowrap">
                    Mais popular
                  </span>
                )}

                <h3 className="font-bebas text-3xl text-white mb-1 leading-none">{plan.name.toUpperCase()}</h3>
                <p className="text-[12px] text-white/45 mb-7 font-normal">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-[38px] font-black text-white leading-none">
                    R$ {plan.price.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-xs text-white/40 ml-1">/{plan.period}</span>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f: string, j: number) => (
                    <li key={j} className="flex items-start gap-3 text-[13px]">
                      <svg className={`w-3.5 h-3.5 flex-shrink-0 mt-[2px] ${plan.highlighted ? 'text-gym-yellow' : 'text-gym-purple'}`}
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-white/65">{f}</span>
                    </li>
                  ))}
                </ul>

                <a href={`/checkout/${plan.name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')}`}
                  className={`block text-center py-3 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 ${
                    plan.highlighted
                      ? 'bg-white text-gym-purple hover:bg-gym-yellow hover:text-black'
                      : 'bg-gym-purple hover:bg-gym-purple-dark text-white'
                  }`}>
                  Assinar Agora
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

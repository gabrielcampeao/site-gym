'use client'
import Logo from '@/components/Logo'

import { useState } from 'react'
import { useParams } from 'next/navigation'

const plans: Record<string, { name: string; price: number; period: string; features: string[]; highlighted: boolean }> = {
  basico: {
    name: 'Básico',
    price: 89.90,
    period: 'mês',
    features: ['Acesso à academia', 'Musculação completa', 'Vestiários', 'Seg-Sex: 06h - 22h'],
    highlighted: false,
  },
  premium: {
    name: 'Premium',
    price: 149.90,
    period: 'mês',
    features: ['Tudo do Básico', 'Acesso ao fim de semana', 'Aulas em grupo', 'Avaliação física mensal', 'App de treinos'],
    highlighted: true,
  },
  elite: {
    name: 'Elite',
    price: 249.90,
    period: 'mês',
    features: ['Tudo do Premium', 'Personal Trainer (4x/semana)', 'Nutricionista incluso', 'Acesso 24 horas', 'Área VIP exclusiva'],
    highlighted: false,
  },
}

const ORDER_BUMP = {
  label: 'Acompanhamento Nutricional',
  description: 'Plano alimentar personalizado com nutricionista + consulta mensal online',
  price: 49.90,
  badge: 'OFERTA ESPECIAL',
}

const VOUCHERS: Record<string, { type: 'percent' | 'fixed'; value: number; label: string }> = {
  'STONE10':  { type: 'percent', value: 10,    label: '10% de desconto' },
  'PROMO20':  { type: 'percent', value: 20,    label: '20% de desconto' },
  'WELCOME':  { type: 'fixed',   value: 30,    label: 'R$ 30,00 de desconto' },
  'FIRSTDAY': { type: 'fixed',   value: 49.90, label: '1ª mensalidade grátis' },
}

function formatCard(v: string) {
  return v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim()
}
function formatExpiry(v: string) {
  return v.replace(/\D/g, '').slice(0, 4).replace(/^(\d{2})(\d)/, '$1/$2')
}
function formatCPF(v: string) {
  return v.replace(/\D/g, '').slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}
function fmt(n: number) {
  return `R$ ${n.toFixed(2).replace('.', ',')}`
}

export default function CheckoutPage() {
  const { slug } = useParams<{ slug: string }>()
  const plan = plans[slug]

  const [step, setStep]       = useState<1 | 2>(1)
  const [done, setDone]       = useState(false)
  const [bump, setBump]       = useState(false)
  const [voucher, setVoucher] = useState('')
  const [voucherInput, setVoucherInput] = useState('')
  const [voucherErr, setVoucherErr]     = useState('')
  const [personal, setPersonal] = useState({ name: '', email: '', phone: '', cpf: '' })
  const [payment, setPayment]   = useState({ card: '', expiry: '', cvv: '', holder: '' })
  const [method, setMethod]     = useState<'card' | 'pix'>('card')
  const [loading, setLoading]   = useState(false)

  if (!plan) {
    return (
      <div className="min-h-screen bg-gym-dark flex items-center justify-center text-white/40 text-sm">
        Plano não encontrado.{' '}
        <a href="/#planos" className="text-gym-purple ml-2 hover:underline">Ver planos</a>
      </div>
    )
  }

  // Cálculo de totais
  const appliedVoucher = VOUCHERS[voucher] ?? null
  const subtotal = plan.price + (bump ? ORDER_BUMP.price : 0)
  const discount = appliedVoucher
    ? appliedVoucher.type === 'percent'
      ? (plan.price * appliedVoucher.value) / 100
      : Math.min(appliedVoucher.value, plan.price)
    : 0
  const total = Math.max(0, subtotal - discount)

  function applyVoucher() {
    const code = voucherInput.trim().toUpperCase()
    if (VOUCHERS[code]) {
      setVoucher(code)
      setVoucherErr('')
    } else {
      setVoucherErr('Cupom inválido ou expirado.')
      setVoucher('')
    }
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) { setStep(2); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true) }, 1800)
  }

  const base = 'w-full bg-white/[0.06] border border-white/[0.15] rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-gym-purple/70 transition-colors duration-200 font-light'

  if (done) {
    return (
      <div className="min-h-screen bg-gym-dark flex flex-col items-center justify-center text-center px-6 gap-6">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#7B2FBE' }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h1 className="font-bebas text-[52px] md:text-[70px] leading-none text-white">ASSINATURA CONFIRMADA!</h1>
        <p className="text-white/40 text-sm max-w-xs leading-relaxed">
          Bem-vindo ao plano <span className="text-white font-semibold">{plan.name}</span>!<br />
          Você receberá os detalhes no e-mail cadastrado.
        </p>
        <a href="/" className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white px-10 py-4 rounded-full"
          style={{ backgroundColor: '#7B2FBE' }}>
          Voltar ao início
        </a>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gym-dark text-white">
      {/* Header */}
      <div className="fixed top-0 inset-x-0 z-50 bg-gym-dark/98 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/"><Logo size="sm" /></a>
          <a href="/#planos" className="text-white/50 hover:text-white text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Voltar
          </a>
        </div>
      </div>

      <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">

          {/* ─── Formulário ─── */}
          <div className="space-y-8">
            {/* Steps */}
            <div className="flex items-center gap-3">
              {[1, 2].map(s => (
                <div key={s} className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-colors duration-200 ${step >= s ? 'bg-gym-purple text-white' : 'bg-white/[0.06] text-white/30'}`}>
                    {s}
                  </div>
                  <span className={`text-[11px] font-semibold uppercase tracking-[0.15em] ${step >= s ? 'text-white' : 'text-white/25'}`}>
                    {s === 1 ? 'Seus dados' : 'Pagamento'}
                  </span>
                  {s < 2 && <div className="w-10 h-px bg-white/10 mx-1" />}
                </div>
              ))}
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              {step === 1 && (
                <>
                  <h2 className="font-bebas text-[36px] leading-none text-white mb-6">DADOS PESSOAIS</h2>
                  <input name="name" type="text" placeholder="Nome completo" required
                    value={personal.name} onChange={e => setPersonal(p => ({ ...p, name: e.target.value }))}
                    className={base} />
                  <input name="email" type="email" placeholder="E-mail" required
                    value={personal.email} onChange={e => setPersonal(p => ({ ...p, email: e.target.value }))}
                    className={base} />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input name="phone" type="tel" placeholder="Telefone" required
                      value={personal.phone} onChange={e => setPersonal(p => ({ ...p, phone: e.target.value }))}
                      className={base} />
                    <input name="cpf" type="text" placeholder="CPF" required
                      value={personal.cpf}
                      onChange={e => setPersonal(p => ({ ...p, cpf: formatCPF(e.target.value) }))}
                      className={base} />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="font-bebas text-[36px] leading-none text-white mb-6">PAGAMENTO</h2>
                  <div className="flex gap-3 mb-2">
                    {(['card', 'pix'] as const).map(m => (
                      <button key={m} type="button" onClick={() => setMethod(m)}
                        className={`flex-1 py-3 rounded-xl text-[11px] font-bold uppercase tracking-[0.15em] border transition-colors duration-200 ${method === m ? 'border-gym-purple bg-gym-purple/10 text-white' : 'border-white/[0.08] bg-white/[0.02] text-white/30 hover:text-white/60'}`}>
                        {m === 'card' ? '💳  Cartão' : 'Pix'}
                      </button>
                    ))}
                  </div>

                  {method === 'card' && (
                    <div className="space-y-4">
                      <input name="holder" type="text" placeholder="Nome no cartão" required
                        value={payment.holder} onChange={e => setPayment(p => ({ ...p, holder: e.target.value }))}
                        className={base} />
                      <input name="card" type="text" placeholder="Número do cartão" required
                        value={payment.card}
                        onChange={e => setPayment(p => ({ ...p, card: formatCard(e.target.value) }))}
                        className={base} />
                      <div className="grid grid-cols-2 gap-4">
                        <input name="expiry" type="text" placeholder="MM/AA" required
                          value={payment.expiry}
                          onChange={e => setPayment(p => ({ ...p, expiry: formatExpiry(e.target.value) }))}
                          className={base} />
                        <input name="cvv" type="text" placeholder="CVV" required maxLength={4}
                          value={payment.cvv}
                          onChange={e => setPayment(p => ({ ...p, cvv: e.target.value.replace(/\D/g, '').slice(0, 4) }))}
                          className={base} />
                      </div>
                    </div>
                  )}

                  {method === 'pix' && (
                    <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 text-center">
                      <div className="w-36 h-36 mx-auto mb-5 bg-white rounded-xl flex items-center justify-center">
                        <svg viewBox="0 0 37 37" className="w-28 h-28" fill="#0a0a0a">
                          <rect x="1" y="1" width="10" height="10" rx="1"/>
                          <rect x="3" y="3" width="6" height="6" rx="0.5" fill="white"/>
                          <rect x="4" y="4" width="4" height="4" rx="0.3"/>
                          <rect x="26" y="1" width="10" height="10" rx="1"/>
                          <rect x="28" y="3" width="6" height="6" rx="0.5" fill="white"/>
                          <rect x="29" y="4" width="4" height="4" rx="0.3"/>
                          <rect x="1" y="26" width="10" height="10" rx="1"/>
                          <rect x="3" y="28" width="6" height="6" rx="0.5" fill="white"/>
                          <rect x="4" y="29" width="4" height="4" rx="0.3"/>
                          <rect x="14" y="1" width="2" height="2"/><rect x="17" y="1" width="2" height="2"/><rect x="20" y="1" width="2" height="2"/>
                          <rect x="14" y="4" width="2" height="2"/><rect x="20" y="4" width="2" height="2"/>
                          <rect x="14" y="7" width="5" height="2"/><rect x="20" y="7" width="2" height="2"/>
                          <rect x="14" y="14" width="2" height="8"/><rect x="17" y="14" width="2" height="5"/><rect x="20" y="14" width="5" height="2"/>
                          <rect x="20" y="17" width="2" height="5"/><rect x="23" y="14" width="2" height="8"/><rect x="26" y="17" width="2" height="2"/>
                          <rect x="29" y="14" width="2" height="8"/><rect x="32" y="14" width="2" height="2"/><rect x="32" y="20" width="2" height="2"/>
                          <rect x="14" y="26" width="2" height="2"/><rect x="17" y="26" width="5" height="2"/><rect x="14" y="29" width="5" height="2"/>
                          <rect x="20" y="29" width="2" height="5"/><rect x="23" y="26" width="2" height="5"/>
                        </svg>
                      </div>
                      <p className="text-white/30 text-[11px] uppercase tracking-[0.2em] mb-2">Escaneie com seu banco</p>
                      <p className="text-white font-bold text-lg">{fmt(total)}</p>
                      <p className="text-white/25 text-[11px] mt-3">O código expira em 30 minutos</p>
                    </div>
                  )}
                </>
              )}

              {/* ─── ORDER BUMP ─── */}
              <div
                onClick={() => setBump(b => !b)}
                className={`cursor-pointer rounded-2xl border-2 p-5 transition-all duration-200 select-none ${bump ? 'border-gym-purple bg-gym-purple/10' : 'border-white/[0.10] bg-white/[0.02] hover:border-white/20'}`}>
                <div className="flex items-start gap-4">
                  {/* Checkbox visual */}
                  <div className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 flex items-center justify-center border-2 transition-colors duration-200 ${bump ? 'bg-gym-purple border-gym-purple' : 'border-white/20'}`}>
                    {bump && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-[9px] font-bold uppercase tracking-[0.25em] px-2 py-0.5 rounded-full" style={{ backgroundColor: '#7B2FBE', color: 'white' }}>
                        {ORDER_BUMP.badge}
                      </span>
                      <span className="text-white font-bold text-sm">{ORDER_BUMP.label}</span>
                    </div>
                    <p className="text-white/40 text-[12px] leading-relaxed mb-2">{ORDER_BUMP.description}</p>
                    <p className="text-white font-bold text-sm">
                      + {fmt(ORDER_BUMP.price)}<span className="text-white/40 font-normal text-[11px]">/mês</span>
                    </p>
                  </div>
                </div>
              </div>

              <button type="submit" disabled={loading}
                className="w-full text-white font-bold py-4 rounded-full uppercase tracking-[0.2em] text-[11px] transition-colors duration-200 disabled:opacity-50"
                style={{ backgroundColor: '#7B2FBE' }}
                onMouseEnter={e => !loading && (e.currentTarget.style.backgroundColor = '#6B21A8')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#7B2FBE')}>
                {loading ? 'Processando...' : step === 1 ? 'Continuar →' : method === 'pix' ? 'Confirmar pagamento Pix' : 'Finalizar assinatura'}
              </button>

              {step === 2 && (
                <button type="button" onClick={() => setStep(1)}
                  className="w-full text-white/30 hover:text-white/60 text-[11px] font-semibold uppercase tracking-[0.15em] py-2 transition-colors duration-200">
                  ← Voltar aos dados
                </button>
              )}
            </form>
          </div>

          {/* ─── Resumo do plano ─── */}
          <div className="lg:sticky lg:top-28 space-y-4">
            <div className="rounded-2xl p-7 border border-gym-purple/30"
              style={{ background: 'linear-gradient(160deg, #1e0a3c 0%, #2d1060 50%, #1a0a2e 100%)' }}>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-1">Plano selecionado</p>
              <h3 className="font-bebas text-[40px] leading-none text-white mb-5">{plan.name.toUpperCase()}</h3>

              <ul className="space-y-3 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px]">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-[2px] text-gym-purple"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-white/65">{f}</span>
                  </li>
                ))}
                {bump && (
                  <li className="flex items-start gap-3 text-[13px]">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-[2px] text-gym-purple-light"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-gym-purple-light/80">{ORDER_BUMP.label}</span>
                  </li>
                )}
              </ul>

              {/* ─── Voucher ─── */}
              <div className="border-t border-white/10 pt-5 mb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-3">Cupom de desconto</p>
                {appliedVoucher ? (
                  <div className="flex items-center justify-between bg-gym-purple/20 border border-gym-purple/40 rounded-xl px-4 py-2.5">
                    <div>
                      <p className="text-[11px] font-bold text-white">{voucher}</p>
                      <p className="text-[10px] text-gym-purple-light">{appliedVoucher.label}</p>
                    </div>
                    <button type="button" onClick={() => { setVoucher(''); setVoucherInput('') }}
                      className="text-white/30 hover:text-white text-[10px] uppercase tracking-wider transition-colors">
                      Remover
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Código do cupom"
                      value={voucherInput}
                      onChange={e => { setVoucherInput(e.target.value.toUpperCase()); setVoucherErr('') }}
                      onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), applyVoucher())}
                      className="flex-1 bg-white/[0.06] border border-white/[0.15] rounded-xl px-3 py-2.5 text-white text-[12px] placeholder-white/30 focus:outline-none focus:border-gym-purple/70 transition-colors uppercase tracking-wider"
                    />
                    <button type="button" onClick={applyVoucher}
                      className="px-4 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-[0.1em] text-white border border-white/10 hover:border-gym-purple/50 hover:bg-gym-purple/10 transition-colors">
                      Aplicar
                    </button>
                  </div>
                )}
                {voucherErr && <p className="text-red-400 text-[11px] mt-2">{voucherErr}</p>}
              </div>

              {/* Totais */}
              <div className="space-y-2 border-t border-white/10 pt-4">
                <div className="flex justify-between text-[12px]">
                  <span className="text-white/40">Plano {plan.name}</span>
                  <span className="text-white/70">{fmt(plan.price)}</span>
                </div>
                {bump && (
                  <div className="flex justify-between text-[12px]">
                    <span className="text-white/40">Nutrição</span>
                    <span className="text-white/70">+ {fmt(ORDER_BUMP.price)}</span>
                  </div>
                )}
                {appliedVoucher && (
                  <div className="flex justify-between text-[12px]">
                    <span className="text-gym-purple-light">Desconto ({voucher})</span>
                    <span className="text-gym-purple-light">- {fmt(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-3 border-t border-white/10">
                  <span className="text-[11px] text-white/40 uppercase tracking-[0.15em]">Total mensal</span>
                  <span className="text-white font-black text-xl">{fmt(total)}</span>
                </div>
              </div>
            </div>

            <p className="text-center text-white/20 text-[10px] leading-relaxed">
              🔒 Pagamento seguro · Cancele a qualquer momento
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

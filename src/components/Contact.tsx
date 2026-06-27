'use client'

import { useState } from 'react'
import { sendContact } from '@/lib/api'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await sendContact(form)
      setFeedback(res.message)
      setStatus(res.success ? 'success' : 'error')
      if (res.success) setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setFeedback('Erro ao enviar. Tente novamente.')
      setStatus('error')
    }
  }

  const base = 'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gym-purple/70 transition-colors duration-200 font-light'

  return (
    <section id="contato" className="bg-gym-dark py-28 px-6">
      <div data-reveal="up" className="max-w-xl mx-auto bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 md:p-12">
        <div className="text-center mb-14">
          <p className="text-gym-purple text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Fale conosco</p>
          <h2 className="font-bebas text-[56px] md:text-[72px] leading-none text-white">CONTATO</h2>
        </div>

        <form onSubmit={onSubmit} className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <input name="name"  type="text"  placeholder="Seu nome"            value={form.name}    onChange={onChange} required className={base} />
            <input name="phone" type="tel"   placeholder="Telefone (opcional)" value={form.phone}   onChange={onChange}          className={base} />
          </div>
          <input   name="email"   type="email" placeholder="Seu e-mail"        value={form.email}   onChange={onChange} required className={base} />
          <textarea name="message" placeholder="Sua mensagem..." rows={5}      value={form.message} onChange={onChange} required className={base + ' resize-none'} />

          <button type="submit" disabled={status === 'loading'}
            className="w-full disabled:opacity-40 text-white font-bold py-4 rounded-full uppercase tracking-[0.2em] text-[11px] transition-colors duration-200 mt-2"
            style={{ backgroundColor: '#7B2FBE' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#6B21A8')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#7B2FBE')}>
            {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
          </button>

          {feedback && (
            <p className={`text-center text-sm pt-1 ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

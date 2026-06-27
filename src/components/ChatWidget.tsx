'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  id: number
  from: 'bot' | 'user'
  text: string
  time: string
}

const BOT_RESPONSES = [
  'Olá! Como posso te ajudar hoje?',
  'Entendido! Vou verificar isso para você agora mesmo.',
  'Claro! Nossos planos vão de R$89,90 a R$249,90. Quer saber mais detalhes de algum?',
  'Para cancelamentos e pausas, você pode falar com nossa equipe pelo telefone ou vir pessoalmente a uma unidade.',
  'Nossos horários são: Seg–Sex 5h–23h, Sábados 7h–15h, Domingos 8h–13h e Feriados 8h–16h.',
  'Certo! Se precisar de mais alguma coisa, é só chamar. 💪',
]

function now() {
  return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: 'bot',
      text: 'Olá! 👋 Bem-vindo à Stone Gym. Como posso te ajudar?',
      time: now(),
    },
  ])
  const [botIndex, setBotIndex] = useState(0)
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  function sendMessage() {
    const text = input.trim()
    if (!text) return

    const userMsg: Message = { id: Date.now(), from: 'user', text, time: now() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const reply = BOT_RESPONSES[botIndex % BOT_RESPONSES.length]
      setBotIndex(i => i + 1)
      setMessages(prev => [...prev, { id: Date.now() + 1, from: 'bot', text: reply, time: now() }])
      setTyping(false)
    }, 1000 + Math.random() * 600)
  }

  return (
    <>
      {/* Janela de chat */}
      {open && (
        <div className="fixed bottom-24 right-5 z-[9999] w-[340px] rounded-2xl overflow-hidden shadow-2xl border border-white/[0.08] flex flex-col"
          style={{ background: '#111014', maxHeight: '480px' }}>

          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.07]"
            style={{ background: 'linear-gradient(135deg, #1e0a3c 0%, #2d1060 100%)' }}>
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gym-purple flex items-center justify-center text-white font-bold text-sm">SG</div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#1e0a3c]" />
            </div>
            <div className="flex-1">
              <p className="text-white text-[13px] font-semibold leading-none mb-0.5">Suporte Stone Gym</p>
              <p className="text-green-400 text-[10px]">Online agora</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ maxHeight: '320px' }}>
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-[12.5px] leading-relaxed ${
                  msg.from === 'user'
                    ? 'text-white rounded-br-sm'
                    : 'bg-white/[0.07] text-white/85 rounded-bl-sm'
                }`}
                  style={msg.from === 'user' ? { background: '#7B2FBE' } : {}}>
                  {msg.text}
                  <p className={`text-[10px] mt-1 ${msg.from === 'user' ? 'text-white/50 text-right' : 'text-white/30'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="bg-white/[0.07] px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-white/[0.07] flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-white/[0.06] border border-white/[0.12] rounded-xl px-3 py-2.5 text-white text-[12.5px] placeholder-white/25 outline-none focus:border-gym-purple/60 transition-colors"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-30"
              style={{ background: '#7B2FBE' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Botão flutuante */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-5 right-5 z-[9999] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ background: 'linear-gradient(135deg, #7B2FBE 0%, #5b1f8e 100%)' }}
        aria-label="Abrir chat de suporte">
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
        {/* Badge de notificação */}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gym-dark text-[8px] font-bold text-gym-dark flex items-center justify-center">1</span>
        )}
      </button>
    </>
  )
}

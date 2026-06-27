const items = [
  { title: 'Personal Treiner',    desc: 'Trainers who are passionate about your progress.' },
  { title: 'Resultado Garantido', desc: 'Workouts that deliver fast, better results.' },
  { title: 'Suporte Ativo',       desc: 'A community that pushes you to be your best.' },
]

export default function Features() {
  return (
    <section id="sobre" className="bg-gym-dark text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2" style={{ minHeight: '560px' }}>

        {/* Coluna de texto */}
        <div data-reveal="left" className="flex flex-col justify-center px-10 md:px-16 py-20">

          <h2 className="font-bebas text-[64px] md:text-[80px] leading-none mb-12 text-white">
            ATIVE SEU<br /><span className="text-gym-purple">FOCO</span>
          </h2>

          <div className="space-y-7">
            {items.map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-[5px] w-[6px] h-[6px] rounded-full bg-gym-purple flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[11px] uppercase tracking-[0.2em] mb-1 text-white">
                    {f.title}
                  </h3>
                  <p className="text-white/40 text-[13px] leading-relaxed font-normal">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#planos"
            className="mt-12 inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 text-[10px] font-bold tracking-[0.3em] uppercase w-fit border-b border-white/20 hover:border-white pb-1">
            VEJA OS PLANOS
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Painel direito — foto de equipamentos */}
        <div data-reveal="right" className="relative min-h-[380px] md:min-h-0 overflow-hidden m-5 rounded-3xl">
          {/* Foto da academia */}
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80&fit=crop&crop=center"
            alt="Interior da academia"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Overlay escuro para manter coerência com a paleta */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, rgba(26,10,46,0.75) 0%, rgba(45,16,96,0.55) 50%, rgba(10,10,10,0.70) 100%)' }} />
          {/* Badge clicável */}
          <a href="/equipamentos"
            className="absolute bottom-7 right-7 bg-gym-purple hover:bg-gym-purple-dark px-5 py-2.5 rounded-full transition-colors duration-200 flex items-center gap-2">
            <p className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">Equipamentos Premium</p>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}

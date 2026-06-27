export default function Hero() {
  return (
    <div className="bg-gym-dark px-3 pt-[76px] pb-3">
      <section id="inicio" className="relative w-full overflow-hidden rounded-3xl"
        style={{ height: 'calc(100vh - 88px)', minHeight: '580px' }}>
        {/* Foto de academia */}
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80&fit=crop"
          alt="Academia Stone Gym"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay gradiente sobre a foto */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(110deg, rgba(59,7,100,0.85) 0%, rgba(107,33,168,0.65) 35%, rgba(10,10,10,0.80) 100%)' }} />

        {/* Overlay escuro adicional para contraste */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Conteúdo central */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-gym-purple-light text-[10px] font-semibold tracking-[0.6em] uppercase mb-5">
            Bem-vindo à
          </p>
          <h1 className="font-bebas text-[80px] md:text-[130px] leading-none mb-6 text-white">
            Stone<span className="text-gym-purple"> Training</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-sm mb-10 font-light leading-relaxed">
            Transforme seu corpo. Ative seu foco.<br />Conquiste resultados reais.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#planos"
              className="text-white font-bold px-8 py-3.5 rounded-full uppercase tracking-[0.15em] text-xs transition-colors duration-200"
              style={{ backgroundColor: '#7B2FBE' }}>
              Ver Planos
            </a>
            <a href="#sobre"
              className="border border-white/30 hover:border-white/70 text-white/70 hover:text-white font-semibold px-8 py-3.5 rounded-full uppercase tracking-[0.15em] text-xs transition-all duration-200">
              Saiba Mais
            </a>
          </div>
        </div>

        {/* Seta animada */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-40">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>
    </div>
  )
}

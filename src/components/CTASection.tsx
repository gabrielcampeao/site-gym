export default function CTASection() {
  return (
    <section className="relative py-28 px-6 text-center overflow-hidden bg-gym-dark">
      {/* Brilho roxo sutil no centro — não domina, só acenta */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(107,33,168,0.28) 0%, transparent 70%)' }} />

      <p data-reveal="up" className="relative text-white/30 text-[10px] font-bold tracking-[0.6em] uppercase mb-5">
        Venha nos visitar
      </p>
      <h2 data-reveal="up" data-delay="80" className="relative font-bebas text-[56px] md:text-[88px] leading-none text-white mb-10">
        EXPERIMENTE 1 DIA OFF
      </h2>
      <a data-reveal="up" data-delay="160" href="#contato"
        className="relative inline-block text-white text-[10px] font-bold px-12 py-4 rounded-full tracking-[0.3em] uppercase transition-colors duration-200 border border-white/20 hover:border-white/50 hover:bg-white/5">
        RESERVE
      </a>
    </section>
  )
}

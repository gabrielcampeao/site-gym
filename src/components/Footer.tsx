import Logo from './Logo'

const hours = [
  { days: 'SEG–SEX',   time: '5:00 – 23:00' },
  { days: 'SÁBADOS',   time: '7:00 – 15:00' },
  { days: 'DOMINGOS',  time: '8:00 – 13:00' },
  { days: 'FERIADOS',  time: '8:00 – 16:00' },
]

const socials = ['Instagram', 'X', 'LinkedIn', 'Spotify']

export default function Footer() {
  return (
    <footer className="bg-gym-dark text-white border-t border-white/[0.06]">
      {/* Logo + nome */}
      <div className="max-w-7xl mx-auto px-8 pt-14 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-b border-white/[0.06]">
        <Logo size="lg" />
      </div>

      {/* 3 colunas */}
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Contato */}
        <div>
          <h3 className="text-[9px] font-bold tracking-[0.35em] uppercase mb-5 text-white/30">Contact</h3>
          <p className="text-[13px] text-white/60 mb-2">
            <span className="font-semibold text-white/80">Email: </span>
            <a href="mailto:contato@stonetraining.com.br" className="hover:text-white transition-colors">
              contato@stonetraining.com.br
            </a>
          </p>
          <p className="text-[13px] text-white/60">
            <span className="font-semibold text-white/80">Phone: </span>
            <a href="tel:+5590858-4415" className="hover:text-white transition-colors">
              +55 (90858)-4415
            </a>
          </p>
        </div>

        {/* Horários */}
        <div>
          <h3 className="text-[9px] font-bold tracking-[0.35em] uppercase mb-5 text-white/30">
            Horários — Aberto
          </h3>
          <div className="space-y-2.5">
            {hours.map(h => (
              <div key={h.days} className="flex justify-between text-[13px]">
                <span className="font-semibold text-white/80">{h.days}</span>
                <span className="text-white/50">{h.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-[9px] font-bold tracking-[0.35em] uppercase mb-5 text-white/30">Social</h3>
          <div className="space-y-2.5">
            {socials.map(s => (
              <a key={s} href="#"
                className="block text-[13px] text-white/50 hover:text-white transition-colors duration-200">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="border-t border-white/[0.06] px-8 py-4 text-center text-[11px] text-white/20">
        © {new Date().getFullYear()} Stone Gym. Todos os direitos reservados.
      </div>
    </footer>
  )
}

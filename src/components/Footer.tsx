import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-12 md:px-8">
      <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e51924] text-sm font-bold text-white">
              АЦ
            </span>
            <span className="font-bold text-white">АЦРКК</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-[#a1a1a1]">
            Ассоциация цифрового развития Краснодарского края
          </p>
          <div className="mt-6 flex gap-3">
            {['tg', 'vk', 'yt'].map((s) => (
              <a
                key={s}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-xs font-semibold uppercase text-white/70 transition hover:border-white/30 hover:text-white"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Адрес</h3>
          <div className="mt-4 flex gap-3 text-sm text-[#a1a1a1]">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#e51924]" />
            <span>
              г. Краснодар, ул. Примерная, д. 1
              <br />
              Бизнес-центр «Цифра», офис 404
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Контакты</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#a1a1a1]">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-[#e51924]" />
              <a href="mailto:info@ackk.ru" className="hover:text-white">
                info@ackk.ru
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-[#e51924]" />
              <a href="tel:+78612000000" className="hover:text-white">
                +7 (861) 200-00-00
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1400px] flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
        <span>© {new Date().getFullYear()} АЦРКК. Все права защищены.</span>
        <a href="#" className="hover:text-white/70">
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  )
}

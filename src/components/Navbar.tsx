import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { navLinks } from '../data/siteContent'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState<'ru' | 'en'>('ru')

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-4 md:px-8">
        <a
          href="#"
          className="flex shrink-0 items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e51924] text-sm text-white">
            АЦ
          </span>
          <span className="hidden sm:inline">АЦРКК</span>
        </a>

        <nav
          className={`absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-white/10 bg-black/95 p-4 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 ${
            open ? 'flex' : 'hidden md:flex'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-2 text-sm font-medium text-white/90 transition hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="rounded-lg p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            aria-label="Поиск"
          >
            <Search className="h-5 w-5" />
          </button>
          <div className="hidden items-center gap-1 text-sm text-white/60 sm:flex">
            <button
              type="button"
              onClick={() => setLang('ru')}
              className={`rounded px-1.5 py-0.5 font-medium transition ${
                lang === 'ru' ? 'text-white' : 'hover:text-white'
              }`}
            >
              RU
            </button>
            <span className="text-white/30">|</span>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded px-1.5 py-0.5 font-medium transition ${
                lang === 'en' ? 'text-white' : 'hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
          <a
            href="#contacts"
            className="hidden rounded-full border border-white/80 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black sm:inline-flex"
          >
            Личный кабинет
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-white md:hidden"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>
  )
}

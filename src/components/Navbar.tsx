import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/siteContent'
import Logo from './icons/Logo'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-auto px-4 py-4 md:px-8">
        <a
          href="#"
          className="flex shrink-0 items-center gap-2 text-lg font-bold tracking-tight"
        >
          <Logo />
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
          <a
            href="#contacts"
            className="hidden rounded-full border border-white/80 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black sm:inline-flex"
          >
            Оставить заявку
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

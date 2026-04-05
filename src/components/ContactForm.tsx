import { useState, type FormEvent } from 'react'
import { KrasnodarMapGraphic } from './KrasnodarMapGraphic'

export function ContactForm() {
  const [agreed, setAgreed] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!agreed) return
  }

  return (
    <section
      id="contacts"
      className="border-t border-white/5 bg-[#0a0a0a] px-4 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <h2 className="text-center text-2xl font-bold text-white md:text-3xl">
          Как начать сотрудничество?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[#a1a1a1]">
          Оставьте контакты — мы свяжемся с вами и расскажем об условиях вступления
          и партнёрских форматах.
        </p>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <KrasnodarMapGraphic className="min-h-[280px] w-full lg:min-h-full" />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#121212] p-6 md:p-8"
          >
            <label className="block">
              <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/50">
                Ваше имя
              </span>
              <input
                name="name"
                required
                autoComplete="name"
                className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none ring-[#e51924]/0 transition placeholder:text-white/30 focus:border-[#e51924]/50 focus:ring-2 focus:ring-[#e51924]/20"
                placeholder="Иван Иванов"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/50">
                Организация
              </span>
              <input
                name="organization"
                required
                autoComplete="organization"
                className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-[#e51924]/50 focus:ring-2 focus:ring-[#e51924]/20"
                placeholder="ООО «Пример»"
              />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/50">
                  Телефон
                </span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-[#e51924]/50 focus:ring-2 focus:ring-[#e51924]/20"
                  placeholder="+7 (___) ___-__-__"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/50">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none focus:border-[#e51924]/50 focus:ring-2 focus:ring-[#e51924]/20"
                  placeholder="you@company.ru"
                />
              </label>
            </div>
            <label className="flex cursor-pointer items-start gap-3 text-sm text-[#a1a1a1]">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-black text-[#e51924] focus:ring-[#e51924]/30"
              />
              <span>
                Согласен с{' '}
                <a href="#" className="text-white underline-offset-2 hover:underline">
                  политикой конфиденциальности
                </a>{' '}
                и обработкой персональных данных
              </span>
            </label>
            <button
              type="submit"
              disabled={!agreed}
              className="mt-2 w-full rounded-xl bg-[#e51924] py-3.5 text-sm font-semibold text-white transition hover:bg-[#c9151f] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

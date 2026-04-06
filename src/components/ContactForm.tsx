import { useState, type FormEvent } from 'react'
import graphicPng from '../assets/hero/Graphic.png'
import groupSvgUrl from '../assets/hero/Group.svg?url'

const INTEREST_CATEGORIES = [
  'Программное обеспечение',
  'Информационная безопасность',
  'Автоматизация бизнеса',
  'Телекоммуникации и связь',
  '«Умный город», «Умный ЖК», ТИМ',
  'Маркетинг',
  'Радиоэлектроника',
  'Электротранспорт и зар. инфраструктура',
  'Юридическая и гос.поддержка',
] as const

export function ContactForm() {
  const [categories, setCategories] = useState<string[]>([])

  function toggleCategory(label: string) {
    setCategories((prev) =>
      prev.includes(label)
        ? prev.filter((x) => x !== label)
        : [...prev, label],
    )
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  const inputClass =
    'h-12 w-full rounded-lg border border-[#333334] bg-[#3E3E3E] px-5 py-3 text-base font-normal text-white outline-none placeholder:text-white/60 focus:ring-2 focus:ring-[#E73446]/35'

  const labelClass =
    'text-base font-normal leading-6 text-white'

  return (
    <section
      id="contacts"
      className="border-t border-white/5 bg-[#0a0a0a] px-4 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-[1792px]">
        <div className="contact-form-panel overflow-hidden rounded-[64px]">
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
            aria-hidden
          >
            <div className="hero-blur-tr" />
            <div className="hero-blur-bl" />
          </div>

          {/* Прижато к левому нижнему краю панели (макет ~1131×812), зеркально как в Hero */}
          <div
            className="contact-form-panel__decor w-[min(100%,1131px)] [aspect-ratio:1131.1/812.17]"
            aria-hidden
          >
            <div className="absolute inset-0 flex items-end justify-start">
              <div className="-scale-x-100 h-full w-full">
                <div className="grid h-full w-max max-w-full grid-cols-1 grid-rows-1 place-items-end">
                  <img
                    src={groupSvgUrl}
                    alt=""
                    className="col-start-1 row-start-1 z-0 max-h-full w-auto object-contain object-right select-none"
                  />
                  <img
                    src={graphicPng}
                    alt=""
                    className="col-start-1 row-start-1 z-10 max-h-full w-auto object-contain object-right select-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-panel__content px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:pb-20 lg:pl-16 lg:pr-12 lg:pt-24 xl:pr-24">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_min(100%,800px)] lg:items-start lg:gap-12 xl:gap-16">
              <div className="flex max-w-[816px] flex-col gap-12">
                <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[48px] md:leading-[59px]">
                  Остались вопросы?
                </h2>
                <p className="text-balance text-lg font-medium leading-7 text-white sm:text-2xl sm:leading-[29px]">
                  Оставьте заявку, и мы свяжемся с вами
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex w-full max-w-[800px] flex-col gap-8 lg:justify-self-end"
              >
              <div className="grid gap-8 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>Имя *</span>
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className={inputClass}
                    placeholder="Введите ваше имя"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>Email *</span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder="you@company.ru"
                  />
                </label>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>Телефон</span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className={inputClass}
                    placeholder="+7 (___) ___-__-__"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>Организация *</span>
                  <input
                    name="organization"
                    required
                    autoComplete="organization"
                    className={inputClass}
                    placeholder="ООО «Пример»"
                  />
                </label>
              </div>

              <div className="flex flex-col gap-4">
                <span className={labelClass}>
                  Категория интересующего направления *
                </span>
                <div
                  className="flex max-h-[260px] flex-wrap content-start gap-3 overflow-x-auto overflow-y-auto [scrollbar-width:thin]"
                  role="group"
                  aria-label="Направления"
                >
                  {INTEREST_CATEGORIES.map((cat) => {
                    const on = categories.includes(cat)
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => toggleCategory(cat)}
                        className={`rounded-[40px] border-2 px-5 py-3 text-center text-base font-semibold leading-[140%] text-white transition ${
                          on
                            ? 'border-[#E73446] bg-[#E73446]/15'
                            : 'border-[#5B5B5B] hover:border-white/40'
                        }`}
                      >
                        {cat}
                      </button>
                    )
                  })}
                </div>
              </div>

              <label className="flex flex-col gap-2">
                <span className={labelClass}>Комментарий</span>
                <input
                  name="message"
                  className={`min-h-[48px] ${inputClass}`}
                  placeholder="Кратко опишите задачу или вопрос"
                />
              </label>

              <div className="flex flex-wrap items-center gap-8">
                <label className="cursor-pointer">
                  <span className="text-base font-semibold text-white">
                    Прикрепить файл
                  </span>
                  <input
                    type="file"
                    name="attachment"
                    className="sr-only"
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  />
                </label>
                <span className="text-sm leading-[18px] text-white/80">
                  Не более 30 Мб
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <label className="flex cursor-pointer items-start gap-3 text-base leading-5 ">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-[80px] bg-[#E73446] px-8 py-5 text-xl font-bold leading-[140%] text-white transition hover:bg-[#cf2d3e] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Оставить заявку
                </button>
                  
                </label>
                <span className="text-center text-white">
                    Заполняя форму, вы даёте{' '}
                    <a
                      href="#"
                      className="underline [font-feature-settings:'tnum'_on,'lnum'_on]"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                      }}
                    >
                      согласие на обработку персональных данных
                    </a>
                  </span>

                
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

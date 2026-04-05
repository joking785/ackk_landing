import { KrasnodarMapGraphic } from './KrasnodarMapGraphic'

export function Hero() {
  return (
    <section className="border-b border-white/5 bg-black px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl xl:text-[3.25rem]">
            Ассоциация цифрового развития Краснодарского края
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-[#a1a1a1] md:text-lg">
            Объединяем ИТ-компании, интеграторов и экспертов региона, чтобы
            ускорять цифровую трансформацию отраслей, делиться компетенциями и
            выстраивать диалог бизнеса с властью и образованием.
          </p>
          <a
            href="#contacts"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[#e51924] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#e51924]/25 transition hover:bg-[#c9151f]"
          >
            Вступить в ассоциацию
          </a>
        </div>
        <KrasnodarMapGraphic className="aspect-[4/5] max-h-[420px] w-full lg:max-h-[480px]" />
      </div>
    </section>
  )
}

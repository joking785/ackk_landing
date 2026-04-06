import graphicPng from '../assets/hero/Graphic.png'
import groupSvgUrl from '../assets/hero/Group.svg?url'

export function Hero() {
  return (
    <section
      id="about"
      className=" bg-black px-4 py-8 md:py-12"
    >
      <div className="mx-auto max-w-[1792px]">
        <div className="hero-panel relative overflow-hidden">
          {/* Ellipse 2 — блик сверху справа */}
          <div className="hero-blur-tr" aria-hidden />
          {/* Ellipse 1 — блик снизу слева */}
          <div className="hero-blur-bl" aria-hidden />

          <div className="relative z-10 flex w-full flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-6 xl:gap-10">
            <div className="relative z-10 flex min-h-[min(620px,88svh)] w-full min-w-0 flex-col justify-center gap-20 px-6 py-14 md:px-16 md:py-20 lg:min-h-[min(844px,85vh)] lg:max-w-[min(960px,52%)] lg:flex-1 lg:pl-16">
              {/* Frame 7: заголовок + абзац, gap 48px */}
              <div className="flex flex-col gap-12">
                <h1 className="text-balance text-3xl font-semibold leading-[130%] text-white sm:text-4xl md:text-5xl lg:text-[64px]">
                  Ассоциация цифрового развития Краснодарского края
                </h1>
                <p className="text-pretty text-lg font-normal leading-[140%] text-white md:text-2xl">
                  Ассоциация создана с целью объединения усилий бизнеса, власти,
                  научно-исследовательских и образовательных организаций, связанных
                  с цифровизацией, для формирования общей позиции по цифровому
                  развитию отрасли и развитию экономического прогресса в регионе.
                </p>
              </div>

              <a
                href="#contacts"
                className="inline-flex h-[74px] w-[280px] shrink-0 items-center justify-center rounded-[80px] bg-[#E73446] px-8 py-5 text-2xl font-bold leading-[140%] text-white transition hover:bg-[#cf2d3e]"
              >
                Оставить заявку
              </a>
            </div>

            <div className="relative min-h-[min(200px,40svh)] w-full shrink-0 lg:min-h-[min(844px,85vh)] lg:min-w-0 lg:flex-1">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 flex h-full w-full justify-end"
              >
                {/* Высота = высота колонки; ширина только от пропорций (w-auto), без отдельного max-w по ширине */}
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
        </div>
      </div>
    </section>
  )
}

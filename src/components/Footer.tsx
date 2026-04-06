import Logo from './icons/Logo'

export function Footer() {
  return (
    <footer className="bg-[#333334]">
      <div className="mx-auto flex max-w-[1920px] flex-col items-start gap-[120px] px-8 py-20 md:px-16">
        {/* Верх: колонки space-between */}
        <div className="flex w-full flex-col justify-between gap-12 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
          {/* Слева: название (437px в макете) */}
          <div className="flex flex-col max-w-[437px] gap-[40px] text-[40px] font-semibold leading-[140%] text-white">
                <a href="mailto:info@ackk.ru" className="hover:underline">
                  info@ackk.ru
                </a>
                <a href="tel:+78612000000" className="hover:underline">
                  +7 (928) 207-58-25
                </a>         
          </div>

          {/* Справа: адрес, график, контакты (880px) */}
          <div className="flex w-full max-w-[880px] flex-col gap-12">
            <div className="flex flex-col gap-4">
              <p className="text-xl font-normal leading-[140%] text-white">
                Адрес
              </p>
              <p className="text-xl font-semibold leading-[140%] text-white">
                ул. Северная, д. 405, Краснодар, Краснодарский край, Россия,
                350002
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-normal leading-[140%] text-white">
                График работы
              </p>
              <p className="text-xl font-semibold leading-[140%] text-white">
                Ежедневно 08:00 – 20:00
              </p>
            </div>
            
          </div>
        </div>

        {/* Низ: логотип + юридические ссылки (Frame 1321317849) */}
        <div className="flex w-full flex-col justify-between gap-12 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
          <div className="flex h-[72px] items-center [&_svg]:h-[72px] [&_svg]:w-auto">
            <Logo />
          </div>
          <div className="flex w-full max-w-[880px] flex-col gap-12">
            <a
              href="#"
              className="text-base font-semibold leading-[140%] text-white underline-offset-2 hover:underline"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

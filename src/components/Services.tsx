import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { getServiceImageSrc } from '../data/serviceImages'
import { serviceGroups } from '../data/siteContent'

const WHEEL_EPS = 2

/** Горизонтальный скролл колесом; у краев не блокирует вертикальный скролл страницы */
function attachSmartHorizontalWheel(el: HTMLElement) {
  const onWheel = (e: WheelEvent) => {
    if (el.scrollWidth <= el.clientWidth) return
    if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return

    const maxScroll = el.scrollWidth - el.clientWidth
    const canScrollLeft = el.scrollLeft > WHEEL_EPS
    const canScrollRight = el.scrollLeft < maxScroll - WHEEL_EPS

    const deltaY = e.deltaY
    if (deltaY > 0 && !canScrollRight) return
    if (deltaY < 0 && !canScrollLeft) return

    e.preventDefault()
    el.scrollLeft += deltaY
  }
  el.addEventListener('wheel', onWheel, { passive: false })
  return () => el.removeEventListener('wheel', onWheel)
}

export function Services() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0)
  const categoryScrollRef = useRef<HTMLDivElement>(null)
  const cardsScrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLElement | null)[]>([])
  const autoCardIndexRef = useRef(0)
  const pauseAutoScrollRef = useRef(false)
  const carouselVisibleRef = useRef(true)

  const currentGroup = serviceGroups[activeGroupIndex]
  const cards = currentGroup.cards

  useEffect(() => {
    const el = categoryScrollRef.current
    if (!el) return
    return attachSmartHorizontalWheel(el)
  }, [])

  useLayoutEffect(() => {
    autoCardIndexRef.current = 0
    const el = cardsScrollRef.current
    if (el) el.scrollLeft = 0
  }, [currentGroup.id])

  useEffect(() => {
    const carousel = cardsScrollRef.current
    if (!carousel) return
    const io = new IntersectionObserver(
      ([entry]) => {
        carouselVisibleRef.current = Boolean(entry?.isIntersecting)
      },
      { threshold: 0.12, rootMargin: '0px' },
    )
    io.observe(carousel)
    return () => io.disconnect()
  }, [currentGroup.id])

  useEffect(() => {
    if (cards.length <= 1) return
    const intervalMs = 5000
    const id = window.setInterval(() => {
      if (pauseAutoScrollRef.current || !carouselVisibleRef.current) return
      autoCardIndexRef.current = (autoCardIndexRef.current + 1) % cards.length
      const carousel = cardsScrollRef.current
      const card = cardRefs.current[autoCardIndexRef.current]
      if (!carousel || !card) return
      carousel.scrollTo({
        left: card.offsetLeft,
        behavior: 'smooth',
      })
    }, intervalMs)
    return () => clearInterval(id)
  }, [currentGroup.id, cards.length])

  const ensureChipFullyVisible = useCallback((button: HTMLButtonElement) => {
    const container = categoryScrollRef.current
    if (!container) return
    const cRect = container.getBoundingClientRect()
    const bRect = button.getBoundingClientRect()
    const gap = 4
    let delta = 0
    if (bRect.left < cRect.left) {
      delta = bRect.left - cRect.left - gap
    } else if (bRect.right > cRect.right) {
      delta = bRect.right - cRect.right + gap
    }
    if (delta !== 0) {
      container.scrollTo({
        left: container.scrollLeft + delta,
        behavior: 'smooth',
      })
    }
  }, [])

  const onGroupClick = useCallback(
    (groupIndex: number) => (e: MouseEvent<HTMLButtonElement>) => {
      ensureChipFullyVisible(e.currentTarget)
      setActiveGroupIndex(groupIndex)
    },
    [ensureChipFullyVisible],
  )

  const scrollCarousel = useCallback(
    (direction: -1 | 1) => {
      const carousel = cardsScrollRef.current
      if (!carousel || cards.length <= 1) return
      const sl = carousel.scrollLeft
      let currentIdx = 0
      for (let i = 0; i < cards.length; i++) {
        const el = cardRefs.current[i]
        if (!el) continue
        if (el.offsetLeft <= sl + 8) currentIdx = i
      }
      const nextIdx = Math.max(
        0,
        Math.min(cards.length - 1, currentIdx + direction),
      )
      const target = cardRefs.current[nextIdx]
      if (!target) return
      carousel.scrollTo({ left: target.offsetLeft, behavior: 'smooth' })
    },
    [cards.length],
  )

  return (
    <section id="news" className="bg-black px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto flex max-w-[1792px] flex-col items-center gap-12">
        <div className="flex w-full flex-col items-start gap-8">
          <p className="w-full font-sans text-2xl font-semibold leading-[29px] text-white">
            Услуги
          </p>
          <h2 className="w-full font-sans text-3xl font-semibold leading-[140%] text-white md:text-[40px]">
            Делаем сложные IT-решения понятными и эффективными
          </h2>
        </div>

        <div className="flex w-full flex-col gap-0">
          <div
            ref={categoryScrollRef}
            className="hide-scrollbar -mx-4 flex h-[66px] gap-5 overflow-x-auto px-4 md:mx-0 md:px-0"
          >
            {serviceGroups.map((group, index) => {
              const isActive = index === activeGroupIndex
              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={onGroupClick(index)}
                  className={`inline-flex h-[66px] shrink-0 items-center justify-center gap-4 rounded-[40px] px-8 py-4 font-sans text-2xl font-semibold leading-[140%] text-white transition-colors ${
                    isActive
                      ? 'bg-[#E73446]'
                      : 'box-border border-2 border-[#5B5B5B] bg-transparent'
                  }`}
                >
                  <span>{group.chipLabel}</span>
                  <span className="opacity-50" aria-hidden>
                    {group.cards.length}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div
          className="relative -mx-4 w-full md:mx-0"
          onMouseEnter={() => {
            pauseAutoScrollRef.current = true
          }}
          onMouseLeave={() => {
            pauseAutoScrollRef.current = false
          }}
        >
          <div
            ref={cardsScrollRef}
            key={currentGroup.id}
            className="hide-scrollbar flex w-full snap-x snap-mandatory gap-8 overflow-x-auto px-4 pb-2 md:px-0"
          >
            {cards.map((card, index) => {
              const serviceImg = getServiceImageSrc(card.id)
              return (
                <article
                  key={card.id}
                  ref={(el) => {
                    cardRefs.current[index] = el
                  }}
                  className="info-service-card relative isolate flex min-h-[500px] w-[min(880px,calc(100vw-2rem))] shrink-0 snap-start flex-col gap-8 overflow-hidden rounded-[40px] p-12"
                >
                  {serviceImg ? (
                    <img
                      src={serviceImg}
                      alt=""
                      className="pointer-events-none absolute bottom-0 right-0 z-0 max-h-[min(565px,100%)] max-w-[min(565px,100%)] select-none object-contain object-bottom object-right opacity-60"
                      aria-hidden
                    />
                  ) : null}
                  <h3 className="relative z-[1] font-sans text-[32px] font-semibold leading-[140%] text-white">
                    {card.title}
                  </h3>
                  <ul className="relative z-[1] list-outside list-disc space-y-4 pl-6 font-sans text-2xl font-normal leading-[140%] text-white marker:text-white">
                    {card.bullets.map((line) => (
                      <li key={line} className="pl-2">
                        {line}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
          {cards.length > 1 ? (
            <>
              <button
                type="button"
                aria-label="Предыдущая карточка"
                className="absolute inset-y-0 left-0 z-20 w-[min(22%,6.5rem)] cursor-pointer border-0 bg-transparent p-0 opacity-0 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
                onClick={() => scrollCarousel(-1)}
              />
              <button
                type="button"
                aria-label="Следующая карточка"
                className="absolute inset-y-0 right-0 z-20 w-[min(22%,6.5rem)] cursor-pointer border-0 bg-transparent p-0 opacity-0 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
                onClick={() => scrollCarousel(1)}
              />
            </>
          ) : null}
        </div>
      </div>
    </section>
  )
}

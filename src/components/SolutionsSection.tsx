import { useLayoutEffect, useRef, useState } from 'react'
import { solutions } from '../data/siteContent'
import { SolutionCard } from './SolutionCard'
import { SolutionModal } from './SolutionModal'

const INITIAL = 6

const secondaryBtnClass =
  'rounded-[80px] border-2 border-[#5B5B5B] px-8 py-5 font-sans text-2xl font-bold leading-[140%] text-white transition hover:border-white/50'

export function SolutionsSection() {
  const [visible, setVisible] = useState(INITIAL)
  const [modalId, setModalId] = useState<string | null>(null)
  const showMoreBtnRef = useRef<HTMLDivElement>(null)
  const scrollToShowMoreAfterCollapse = useRef(false)

  useLayoutEffect(() => {
    if (
      !scrollToShowMoreAfterCollapse.current ||
      !showMoreBtnRef.current
    ) {
      return
    }
    scrollToShowMoreAfterCollapse.current = false
    showMoreBtnRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }, [visible])
  const modalSolution = modalId
    ? solutions.find((s) => s.id === modalId)
    : null
  const showMore = visible < solutions.length
  const showCollapse = !showMore && solutions.length > INITIAL

  return (
    <section id="solutions" className="bg-black px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto flex max-w-[1792px] flex-col items-center gap-12">
        <div className="flex w-full flex-col items-start gap-8">
          <p className="w-full font-sans text-2xl font-semibold leading-[29px] text-white">
            Решения
          </p>
          <p className="section-description max-w-[882px] text-white">
            Технологии для реальных задач бизнеса
          </p>
        </div>
        <div className="flex w-full flex-wrap content-start items-start justify-center gap-8">
          {solutions.slice(0, visible).map((s) => (
            <SolutionCard
              key={s.id}
              title={s.title}
              description={s.description}
              topColor={s.topColor}
              image={s.image}
              onOpen={() => setModalId(s.id)}
            />
          ))}
        </div>
        {showMore && (
          <div ref={showMoreBtnRef} className="flex justify-center">
            <button
              type="button"
              onClick={() => setVisible(solutions.length)}
              className={secondaryBtnClass}
            >
              Показать ещё
            </button>
          </div>
        )}
        {showCollapse && (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => {
                scrollToShowMoreAfterCollapse.current = true
                setVisible(INITIAL)
              }}
              className={secondaryBtnClass}
            >
              Свернуть
            </button>
          </div>
        )}
      </div>
      {modalSolution ? (
        <SolutionModal
          solution={{
            title: modalSolution.title,
            description: modalSolution.description,
            modal:
              'modal' in modalSolution ? modalSolution.modal : undefined,
          }}
          onClose={() => setModalId(null)}
        />
      ) : null}
    </section>
  )
}

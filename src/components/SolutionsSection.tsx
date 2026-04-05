import { useState } from 'react'
import { solutions } from '../data/siteContent'
import { SolutionCard } from './SolutionCard'

const INITIAL = 8

export function SolutionsSection() {
  const [visible, setVisible] = useState(INITIAL)
  const showMore = visible < solutions.length

  return (
    <section className="border-t border-white/5 bg-black px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="text-center text-2xl font-bold text-white md:text-3xl">
          Решения наших участников для бизнеса
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#a1a1a1] md:text-base">
          Каталог продуктов и сервисов — от аналитики до инфраструктуры и
          отраслевых сценариев.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {solutions.slice(0, visible).map((s) => (
            <SolutionCard
              key={s.id}
              title={s.title}
              description={s.description}
              gradient={s.gradient}
            />
          ))}
        </div>
        {showMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible(solutions.length)}
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Показать ещё
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

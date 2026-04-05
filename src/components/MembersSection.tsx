import { useState } from 'react'
import { members } from '../data/siteContent'
import { MemberCard } from './MemberCard'

const INITIAL = 6

export function MembersSection() {
  const [visible, setVisible] = useState(INITIAL)
  const showMore = visible < members.length

  return (
    <section id="members" className="bg-[#0a0a0a] px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="text-center text-2xl font-bold text-white md:text-3xl">
          Участники ассоциации цифрового развития
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#a1a1a1] md:text-base">
          Компании и команды, которые формируют цифровую экосистему региона.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.slice(0, visible).map((m) => (
            <MemberCard
              key={m.id}
              name={m.name}
              short={m.short}
              description={m.description}
            />
          ))}
        </div>
        {showMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible(members.length)}
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

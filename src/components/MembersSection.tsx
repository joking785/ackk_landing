import { useLayoutEffect, useRef, useState } from 'react'
import { members } from '../data/siteContent'
import { MemberCard } from './MemberCard'

const INITIAL = 6

const secondaryBtnClass =
  'rounded-[80px] border-2 border-[#5B5B5B] px-8 py-5 font-sans text-2xl font-bold leading-[140%] text-white transition hover:border-white/50'

export function MembersSection() {
  const [visible, setVisible] = useState(INITIAL)
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

  const showMore = visible < members.length
  const showCollapse = !showMore && members.length > INITIAL

  return (
    <section id="members" className="bg-black px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto flex max-w-[1792px] flex-col items-center gap-12">
        <div className="flex w-full flex-col items-start gap-8">
          <p className="w-full font-sans text-2xl font-semibold leading-[29px] text-white">
            Члены Ассоциации
          </p>
          <p className="section-description max-w-[1127px] text-white">
            Объединяем сильных участников цифрового рынка
          </p>
        </div>
        <div className="flex w-full flex-wrap content-start items-start justify-center gap-8">
          {members.slice(0, visible).map((m) => (
            <MemberCard
              key={m.id}
              name={m.name}
              logo={m.logo}
              specialization={m.specialization}
              description={m.description}
            />
          ))}
        </div>
        {showMore && (
          <div ref={showMoreBtnRef} className="flex justify-center">
            <button
              type="button"
              onClick={() => setVisible(members.length)}
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
    </section>
  )
}

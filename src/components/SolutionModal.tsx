import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import type { SolutionModalFields } from '../data/siteContent'

export type SolutionModalSolution = {
  title: string
  description: string
  modal?: SolutionModalFields
}

type SolutionModalProps = {
  solution: SolutionModalSolution
  onClose: () => void
}

function FieldBlock({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl font-semibold leading-7 text-white">{label}</p>
      <p className="text-xl font-normal leading-7 text-white/80 [font-feature-settings:'tnum'_on,'lnum'_on]">
        {children}
      </p>
    </div>
  )
}

export function SolutionModal({ solution, onClose }: SolutionModalProps) {
  const m = solution.modal

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/70"
      role="dialog"
      aria-modal="true"
      aria-labelledby="solution-modal-title"
      onClick={onClose}
    >
      <div className="flex min-h-full w-full items-center justify-center p-4 md:p-8">
        <div
          className="relative w-full max-w-[1184px] rounded-[40px] p-10 pt-12"
          style={{
            background:
              'linear-gradient(287.67deg, rgba(0, 0, 0, 0.3) 13.88%, rgba(102, 102, 102, 0.3) 93.57%), #252525',
          }}
          onClick={(e) => e.stopPropagation()}
        >
        <button
          type="button"
          className="absolute right-6 top-6 z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#5B5B5B] text-white transition hover:bg-white/10"
          aria-label="Закрыть"
          onClick={onClose}
        >
          <X className="h-6 w-6" strokeWidth={2} />
        </button>

        <div className="flex flex-col gap-10">
          <h2
            id="solution-modal-title"
            className="max-w-[1016px] pr-16 font-sans text-[32px] font-semibold leading-[140%] text-white md:text-[40px]"
          >
            {solution.title}
          </h2>

          {m?.company ? (
            <div className="flex flex-col gap-3">
              <p className="text-xl font-semibold leading-7 text-white">
                Разработчик
              </p>
              <p className="text-xl font-normal leading-7 text-white/80 [font-feature-settings:'tnum'_on,'lnum'_on]">
                {m.company}
              </p>
            </div>
          ) : null}

          <FieldBlock label="Описание">{solution.description}</FieldBlock>

          {m?.industries ? (
            <FieldBlock label="Применимость к отраслям">{m.industries}</FieldBlock>
          ) : null}

          {m?.deliveryFormat ? (
            <FieldBlock label="Формат поставки">{m.deliveryFormat}</FieldBlock>
          ) : null}

          {m?.deployments ? (
            <FieldBlock label="Внедрения">{m.deployments}</FieldBlock>
          ) : null}
        </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

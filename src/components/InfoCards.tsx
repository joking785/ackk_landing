import { Code2, FolderOpen, Settings2 } from 'lucide-react'
import {
  digitalDevBullets,
  itSupportBullets,
} from '../data/siteContent'

export function InfoCards() {
  return (
    <section id="about" className="bg-black px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-2">
        <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121212] p-8 md:flex-row md:items-stretch md:gap-8">
          <div className="flex-1">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#e51924]/15 text-[#e51924]">
              <FolderOpen className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              Для цифрового развития
            </h2>
            <ul className="mt-6 space-y-3 text-[#a1a1a1]">
              {digitalDevBullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <Code2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#e51924]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mt-8 flex min-h-[140px] flex-1 items-center justify-center rounded-xl bg-gradient-to-br from-[#e51924]/20 to-black md:mt-0 md:min-h-0">
            <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-[#e51924]/40 bg-[#e51924]/10 shadow-[0_0_40px_rgba(229,25,36,0.35)]">
              <span className="font-mono text-2xl font-bold text-[#e51924]">
                {'</>'}
              </span>
            </div>
          </div>
        </article>

        <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121212] p-8 md:flex-row md:items-stretch md:gap-8">
          <div className="flex-1">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400">
              <Settings2 className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              Для ИТ-поддержки
            </h2>
            <ul className="mt-6 space-y-3 text-[#a1a1a1]">
              {itSupportBullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mt-8 flex min-h-[140px] flex-1 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/15 to-black md:mt-0 md:min-h-0">
            <div className="flex gap-2">
              <div className="h-20 w-16 rounded-lg border border-sky-400/30 bg-sky-500/10" />
              <div className="h-20 w-16 translate-y-3 rounded-lg border border-sky-400/30 bg-sky-500/5" />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

import { partnerNames } from '../data/siteContent'

export function PartnersStrip() {
  return (
    <section className="border-b border-white/5 bg-[#0a0a0a] py-10">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-white/40">
          Нам доверяют
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-50 grayscale">
          {partnerNames.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold tracking-wide text-white"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

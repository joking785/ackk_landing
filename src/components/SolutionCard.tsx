import { Sparkles } from 'lucide-react'

type SolutionCardProps = {
  title: string
  description: string
  gradient: string
}

export function SolutionCard({
  title,
  description,
  gradient,
}: SolutionCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#121212]">
      <div
        className="relative flex h-32 items-center justify-center"
        style={{ background: gradient }}
      >
        <Sparkles className="h-10 w-10 text-white/90" strokeWidth={1.5} />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#a1a1a1]">
          {description}
        </p>
      </div>
    </article>
  )
}

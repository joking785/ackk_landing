type MemberCardProps = {
  name: string
  short: string
  description: string
}

export function MemberCard({ name, short, description }: MemberCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#121212]">
      <div className="flex h-28 items-center justify-center bg-white">
        <span className="text-2xl font-bold tracking-tight text-neutral-800">
          {short}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-sm font-semibold text-white">{name}</h3>
        <p className="mt-2 text-xs leading-relaxed text-[#a1a1a1]">
          {description}
        </p>
      </div>
    </article>
  )
}

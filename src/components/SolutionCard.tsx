type SolutionCardProps = {
  title: string
  description: string
  /** Frame 1321318300: заливка верхней зоны 351px (макет Figma) */
  topColor: string
  /** `src/assets/solutions/{id}.png` — если файла нет, только подложка */
  image?: string
  onOpen: () => void
}

export function SolutionCard({
  title,
  description,
  topColor,
  image,
  onOpen,
}: SolutionCardProps) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen()
        }
      }}
      className="flex h-[653px] w-full max-w-[880px] shrink-0 cursor-pointer flex-col overflow-hidden rounded-[40px] transition outline-none ring-offset-2 ring-offset-black focus-visible:ring-2 focus-visible:ring-white/50"
      style={{ backgroundColor: topColor }}
    >
      <div className="relative h-[351px] shrink-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: topColor }}
        />
        {image ? (
          <img
            src={image}
            alt=""
            className="relative z-[1] h-full w-full object-cover object-center"
            loading="lazy"
          />
        ) : null}
      </div>
      <div className="solution-card-bottom flex min-h-0 h-[302px] flex-col gap-8 rounded-[40px] p-12">
        <h3 className="member-card-name shrink-0 text-pretty line-clamp-2">
          {title}
        </h3>
        <p className="member-card-field-text min-h-0 overflow-hidden text-pretty line-clamp-6">
          {description}
        </p>
      </div>
    </article>
  )
}

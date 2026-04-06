type MemberCardProps = {
  name: string
  /** `assets/members/{id}.png` */
  logo?: string
  specialization: string
  description: string
}

export function MemberCard({
  name,
  logo,
  specialization,
  description,
}: MemberCardProps) {
  return (
    <article className="grid h-[702px] w-full max-w-[576px] grid-rows-[249px_453px] overflow-hidden rounded-[40px] bg-[#333334]">
      <div className="relative flex min-h-0 items-center justify-center bg-[#333334] px-10">
        {logo ? (
          <img
            src={logo}
            alt={name}
            className="max-h-[200px] max-w-full object-contain object-center"
            loading="lazy"
          />
        ) : null}
      </div>

      <div className="member-card-body flex min-h-0 flex-col gap-8 overflow-y-auto rounded-[40px] p-12">
        <p className="member-card-name shrink-0 text-pretty">{name}</p>

        <div className="flex min-h-0 flex-col gap-3">
          <p className="member-card-field-label shrink-0">Специализация</p>
          <p className="member-card-field-text text-pretty">{specialization}</p>
        </div>

        <div className="flex min-h-0 flex-col gap-3">
          <p className="member-card-field-label shrink-0">
            Ключевая экспертиза
          </p>
          <p className="member-card-field-text text-pretty">{description}</p>
        </div>
      </div>
    </article>
  )
}

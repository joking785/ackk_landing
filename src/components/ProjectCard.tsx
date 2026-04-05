type ProjectCardProps = {
  title: string
  image: string
}

export function ProjectCard({ title, image }: ProjectCardProps) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-white/10 bg-[#121212]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <figcaption className="absolute inset-x-0 bottom-0 p-4 text-center">
          <span className="text-sm font-semibold text-white drop-shadow md:text-base">
            {title}
          </span>
        </figcaption>
      </div>
    </figure>
  )
}

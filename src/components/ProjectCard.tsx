type ProjectCardProps = {
  title: string
  image: string
}

export function ProjectCard({ title, image }: ProjectCardProps) {
  return (
    <figure className="group relative isolate flex h-[400px] w-full max-w-[576px] flex-col justify-end overflow-hidden rounded-[40px]">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div
        className="project-card-image-dim pointer-events-none absolute inset-0"
        aria-hidden
      />
      <figcaption className="relative z-10 w-full shrink-0">
        <div className="project-card-bottom-bar flex min-h-[141px] w-full flex-col items-center justify-center rounded-[40px] p-12">
          <span className="member-card-name text-center text-balance">{title}</span>
        </div>
      </figcaption>
    </figure>
  )
}

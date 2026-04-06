import { projects } from '../data/siteContent'
import { ProjectCard } from './ProjectCard'

export function Industries() {
  return (
    <section id="projects" className="bg-black px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto flex max-w-[1792px] flex-col items-start gap-12">
        <div className="flex w-full flex-col items-start gap-8">
          <p className="w-full font-sans text-2xl font-semibold leading-[29px] text-white">
            Работаем с отраслями
          </p>
          <p className="section-description max-w-[1325px] text-white">
            Учитываем специфику процессов, а не работаем по шаблону
          </p>
        </div>
        <div className="flex w-full flex-wrap content-start items-start gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} title={p.title} image={p.image} />
          ))}
        </div>
      </div>
    </section>
  )
}

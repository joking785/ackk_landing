import { projects } from '../data/siteContent'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-black px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="text-center text-2xl font-bold text-white md:text-3xl">
          Наши проекты
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#a1a1a1] md:text-base">
          Отраслевые инициативы и пилоты, которые реализуют участники ассоциации
          на территории Краснодарского края.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} title={p.title} image={p.image} />
          ))}
        </div>
      </div>
    </section>
  )
}

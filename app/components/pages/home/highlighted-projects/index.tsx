import { HozirontalDivider } from '@/app/components/divider/horizontal'
import { SectionTitle } from '@/app/components/section-title'
import { ProjectCard } from './project-card'
import { Link } from '@/app/components/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const HighlightedProjects = () => {
  return (
    <section className=" container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em Destaques" />
      <HozirontalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <HozirontalDivider className="my-16" />
        <ProjectCard />
        <HozirontalDivider className="my-16" />

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos (verificar se esta tudo certo)
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}

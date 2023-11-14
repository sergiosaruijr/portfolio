import { HozirontalDivider } from '@/app/components/divider/horizontal'
import { SectionTitle } from '@/app/components/section-title'
import { ProjectCard } from './project-card'

export const HighlightedProjects = () => {
  return (
    <section className=" container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em Destaques" />
      <HozirontalDivider className="mb-16" />
      <ProjectCard />
      <ProjectCard />
    </section>
  )
}

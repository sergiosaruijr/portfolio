import { SectionTitle } from '@/app/components/section-title'
import { KnownCard } from './know-card'
import { TbBrandNextjs } from 'react-icons/tb'

export const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnownCard
            key={index}
            tech={{
              icon: <TbBrandNextjs />,
              name: 'Next.js',
            }}
          />
        ))}
      </div>
    </section>
  )
}

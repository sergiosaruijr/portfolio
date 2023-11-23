import { HighlightedProjects } from './components/header/pages/home/highlighted-projects'
import { KnownTechs } from './components/header/pages/home/known-techs'
import { ProfileSection } from './components/header/pages/home/profile-section/index'
import { WorkExperience } from './components/header/pages/home/work-experience'

export default async function Home() {
  return (
    <>
      <ProfileSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}

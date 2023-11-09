import { KnownTechs } from './components/header/pages/home/known-techs'
import { ProfileSection } from './components/header/pages/home/profile-section/index'

export default async function Home() {
  return (
    <>
      <ProfileSection />
      <KnownTechs />
    </>
  )
}

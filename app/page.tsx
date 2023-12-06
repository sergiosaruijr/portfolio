import { HighlightedProjects } from './components/pages/home/highlighted-projects'
import { KnownTechs } from './components/pages/home/known-techs'
import { ProfileSection } from './components/pages/home/profile-section/index'
import { WorkExperience } from './components/pages/home/work-experience'
import { HomePageData } from './types/page-info'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
        }
      }
    }
  `

  return fetchHygraphQuery(query)
}

export default async function Home() {
  const { page: pageData } = await getPageData()

  return (
    <>
      <ProfileSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs} />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}

import { HighlightedProjects } from './components/pages/home/highlighted-projects'
import { KnownTechs } from './components/pages/home/known-techs'
import { ProfileSection } from './components/pages/home/profile-section/index'
import { WorkExperience } from './components/pages/home/work-experience'
import { HomePageData } from './types/page-info'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'

export const metadata = {
  title: 'Home',
}

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
          startDate
        }
      }
    }
  `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )
}

// Descobrir pq esta dando erro

// highlightProjects {
//   slug
//   thumbnail {
//     url
//   }
//   title
//   shortDescription
//   technologies {
//     name
//   }
// }

export default async function Home() {
  const { page: pageData } = await getPageData()

  return (
    <>
      <ProfileSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience />
    </>
  )
}

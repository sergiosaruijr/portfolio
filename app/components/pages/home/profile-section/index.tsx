import Image from 'next/image'
import { TechBadge } from '../../../tech-badge'
import { Button } from '@/app/components/button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { HomePageInfo } from '@/app/types/page-info'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { CMSIcon } from '@/app/components/cms-icon'

type ProfileSectionProps = {
  homeInfo: HomePageInfo
}

export const ProfileSection = ({ homeInfo }: ProfileSectionProps) => {
  return (
    <section className="w-full lg:h-[755px] bg-profile-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Sergio Sarui</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </p>
          <div>
            <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
              {homeInfo.technologies.map((tech: { name: string }) => (
                <TechBadge name={tech.name} key={Array.length} />
              ))}
            </div>

            <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
              <Button className="w-max shadow-button">
                Entre em Contato
                <HiArrowNarrowRight size={18} />
              </Button>

              <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
                {homeInfo.socials.map((contact: any, index: any) => (
                  <a
                    href={contact.url}
                    key={`contact-${index}`}
                    target="_blank"
                    className="hover:text-gray-100 transition-colors"
                    rel="noreferrer"
                  >
                    <CMSIcon icon={contact.iconSvg} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src={homeInfo.profilePicture.url}
          alt="Foto de perfil do Sergio Sarui"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}

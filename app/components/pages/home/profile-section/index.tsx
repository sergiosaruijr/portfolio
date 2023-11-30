import Image from 'next/image'
import { TechBadge } from '../../../tech-badge'
import { Button } from '@/app/components/button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'

const MOCK_CONTACTS = [
  {
    url: 'http://github.com.br',
    icon: <TbBrandGithub />,
  },
  {
    url: 'http://github.com.br',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'http://github.com.br',
    icon: <TbBrandWhatsapp />,
  },
]

export const ProfileSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-profile-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Sergio Sarui</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Olá, meu nome é Sergio Sarui, sou desenvolvedor front-end, me
            interesso muito por tecnologia. Tenho como objetivo criar interfaces
            de usuário funcionais e com design agradável. Estou sempre aberto a
            novas oportunidades e desafios.
          </p>
          <div>
            <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <TechBadge name="Next.js" key={Array.length} />
              ))}
            </div>

            <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
              <Button className="w-max shadow-button">
                Entre em Contato
                <HiArrowNarrowRight size={18} />
              </Button>

              <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
                {MOCK_CONTACTS.map((contact, index) => (
                  <a
                    href={contact.url}
                    key={`contact-${index}`}
                    target="_blank"
                    className="hover:text-gray-100 transition-colors"
                    rel="noreferrer"
                  >
                    {contact.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic3.png"
          alt="Foto de perfil do Sergio Sarui"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}

import Image from 'next/image'

export const ProjectCard = () => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
          alt={'Thumbnail do projeto'}
          width={380}
          height={200}
          unoptimized
          className="w-full h-hull object-cover group-hover:scale-110 transition-all duration-500"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">
          Nome do Projeto
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Projeto é uma plataforma de avaliação de livros que foi desenvolvida
          durante o bootcamp Ignite da Rocketseat. Com apenas um Figma
          precisávamos desenvolver essa aplicação completa Full Stack com
          Next.js.
        </p>

        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          Next.js, Next Auth, Stitches, Radix, TypeScript, Prisma, React Query
        </span>
      </div>
    </div>
  )
}

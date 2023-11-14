import Image from 'next/image'

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="/images/profile-pic3.png"
          alt="Thumbnail do projeto X"
          className="object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            src="/images/icons/project-title-icon.svg"
            alt=""
          />
          Projeto X
        </h3>

        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          enim iure, provident hic et numquam mollitia, molestiae dolor rem eius
          veniam dolores eveniet, ratione dignissimos. Aut dolorem temporibus
          iusto eum ut numquam perspiciatis suscipit velit dolor, repudiandae
          sequi voluptatem debitis.
        </p>
      </div>
    </div>
  )
}

import { ReactNode } from 'react'

type KnowCardProps = {
  tech: {
    icon: ReactNode
    name: string
  }
}

export const KnownCard = ({ tech }: KnowCardProps) => {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        {tech.icon}
      </div>
    </div>
  )
}

import { cn } from '@/app/lib/utils'

type HozirontalDividerProps = {
  className?: string
}

export const HozirontalDivider = ({ className }: HozirontalDividerProps) => {
  return <div className={cn('w-full my-8 border-b border-b-gray-800')} />
}

import { ReactNode } from 'react'

interface ContentCardProps {
  children: ReactNode
}

const ContentCard = ({ children }: ContentCardProps) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
      {children}
    </div>
  )
}

export { ContentCard }

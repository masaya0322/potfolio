import { ReactNode } from 'react'
import { Card, CardContent } from '@/components/ui/card'

interface ContentCardProps {
  children: ReactNode
}

const ContentCard = ({ children }: ContentCardProps) => {
  return (
    <Card>
      <CardContent className="p-8">
        {children}
      </CardContent>
    </Card>
  )
}

export { ContentCard }

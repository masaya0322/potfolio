import { ReactNode } from 'react'
import { SkillLevel } from './SkillLevel'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface SkillCardProps {
  name: string
  category?: string
  description?: string
  level: number
  maxLevel?: number
  icon?: ReactNode
}

export const SkillCard = ({
  name,
  category,
  description,
  level,
  maxLevel = 5,
  icon,
}: SkillCardProps) => {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="flex-shrink-0" data-testid="skill-icon">
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            {category && (
              <span className="mt-1 inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                {category}
              </span>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {description && <p className="text-sm text-gray-600">{description}</p>}
        <SkillLevel level={level} maxLevel={maxLevel} />
      </CardContent>
    </Card>
  )
}

export type { SkillCardProps }

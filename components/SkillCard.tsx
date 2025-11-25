import { ReactNode } from 'react'
import { SkillLevel } from './SkillLevel'

interface SkillCardProps {
  name: string
  category?: string
  description?: string
  level: number
  maxLevel?: number
  icon?: ReactNode
}

const SkillCard = ({
  name,
  category,
  description,
  level,
  maxLevel = 5,
  icon,
}: SkillCardProps) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          {icon && <div className="flex-shrink-0" data-testid="skill-icon">{icon}</div>}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            {category && (
              <span className="mt-1 inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                {category}
              </span>
            )}
          </div>
        </div>
      </div>

      {description && <p className="mb-4 text-sm text-gray-600">{description}</p>}

      <div className="mt-4">
        <SkillLevel level={level} maxLevel={maxLevel} />
      </div>
    </div>
  )
}

export { SkillCard }
export type { SkillCardProps }

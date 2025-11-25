interface SkillLevelProps {
  level: number
  maxLevel?: number
  showLabel?: boolean
  variant?: 'bar' | 'text'
}

const SkillLevel = ({ level, maxLevel = 5, showLabel = true, variant = 'bar' }: SkillLevelProps) => {
  const percentage = (level / maxLevel) * 100

  const getLevelText = () => {
    if (level <= 1) return '初級'
    if (level <= 2) return '中級'
    if (level <= 3) return '中上級'
    if (level <= 4) return '上級'
    return '熟練'
  }

  if (variant === 'text') {
    return (
      <span className="text-sm font-medium text-gray-700" data-testid="skill-level-text">
        {getLevelText()}
      </span>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all"
          style={{ width: `${percentage}%` }}
          data-testid="skill-level-bar"
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={maxLevel}
          aria-label={`スキルレベル: ${level}/${maxLevel}`}
        />
      </div>
      {showLabel && (
        <span className="min-w-[3rem] text-sm font-medium text-gray-700" data-testid="skill-level-label">
          {level}/{maxLevel}
        </span>
      )}
    </div>
  )
}

export { SkillLevel }
export type { SkillLevelProps }

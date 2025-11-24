import { LucideIcon } from 'lucide-react'

interface SectionHeaderProps {
  icon: LucideIcon
  title: string
  iconBgColor?: string
  iconColor?: string
}

const SectionHeader = ({
  icon: Icon,
  title,
  iconBgColor = 'bg-blue-100',
  iconColor = 'text-blue-600',
}: SectionHeaderProps) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className={`rounded-full ${iconBgColor} p-3`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
  )
}

export { SectionHeader }

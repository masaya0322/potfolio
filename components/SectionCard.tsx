import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'

interface SectionCardProps {
  href: string
  icon: LucideIcon
  title: string
  description: string
}

const SectionCard = ({ href, icon: Icon, title, description }: SectionCardProps) => {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-gray-300 hover:shadow-lg"
    >
      <div className="flex flex-col items-center text-center">
        <div className="rounded-full bg-gray-100 p-3 transition-colors group-hover:bg-gray-200">
          <Icon className="h-6 w-6 text-gray-700" />
        </div>
        <h2 className="mt-4 text-xl font-bold text-gray-900">{title}</h2>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex items-center text-sm font-medium text-gray-700 transition-colors group-hover:text-gray-900">
          詳しく見る
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}

export { SectionCard }

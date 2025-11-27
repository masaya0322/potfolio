import Link from 'next/link'
import Image from 'next/image'
import { LucideIcon, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface SectionCardProps {
  href: string
  icon: LucideIcon
  title: string
  description: string
  imageUrl?: string
  imagePosition?: 'left' | 'right'
}

const SectionCard = ({
  href,
  icon: Icon,
  title,
  description,
  imageUrl,
  imagePosition = 'right',
}: SectionCardProps) => {
  const hasImage = !!imageUrl
  const flexDirectionClass = imagePosition !== 'left' ? 'md:flex-row-reverse' : 'md:flex-row'

  if (hasImage) {
    return (
      <Link href={href} className="block">
        <Card className="group overflow-hidden transition-all hover:shadow-lg cursor-pointer">
          <div className={`flex items-center ${flexDirectionClass}`}>
            <div className="relative w-full md:w-1/2 aspect-video md:aspect-[4/3]">
              <Image src={imageUrl} alt={title} fill className="object-cover" />
            </div>

            <CardContent className="flex w-full md:w-1/2 flex-col justify-center p-6">
              <div className="rounded-full bg-gray-100 p-3 transition-colors w-fit">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-900">{title}</h2>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
              <div className="mt-4 flex items-center text-sm font-medium text-gray-700 transition-colors group-hover:text-gray-900">
                詳しく見る
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    )
  }

  return (
    <Link href={href} className="block">
      <Card className="group transition-all hover:shadow-lg cursor-pointer">
        <CardContent className="flex flex-col items-center p-6 text-center">
          <div className="rounded-full bg-gray-100 p-3 transition-colors">
            <Icon className="h-6 w-6" />
          </div>
          <h2 className="mt-4 text-xl font-bold text-gray-900">{title}</h2>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
          <div className="mt-4 flex items-center text-sm font-medium text-gray-700 transition-colors group-hover:text-gray-900">
            詳しく見る
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export { SectionCard }

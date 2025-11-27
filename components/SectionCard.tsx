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

  // 画像がある場合のレイアウト
  if (hasImage) {
    return (
      <Card className="group overflow-hidden transition-all hover:shadow-lg">
        <div className={`flex ${imagePosition === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
          {/* 画像セクション */}
          <div className="relative h-48 w-1/2">
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          </div>

          {/* コンテンツセクション */}
          <CardContent className="flex w-1/2 flex-col justify-center p-6">
            <div className="rounded-full bg-gray-100 p-3 transition-colors group-hover:bg-gray-200 w-fit">
              <Icon className="h-6 w-6 text-gray-700" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-gray-900">{title}</h2>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
            <Link
              href={href}
              className="mt-4 flex items-center text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 w-fit"
            >
              詳しく見る
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardContent>
        </div>
      </Card>
    )
  }

  // 画像がない場合のレイアウト（中央揃え）
  return (
    <Card className="group transition-all hover:shadow-lg">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="rounded-full bg-gray-100 p-3 transition-colors group-hover:bg-gray-200">
          <Icon className="h-6 w-6 text-gray-700" />
        </div>
        <h2 className="mt-4 text-xl font-bold text-gray-900">{title}</h2>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <Link
          href={href}
          className="mt-4 flex items-center text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
        >
          詳しく見る
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

export { SectionCard }

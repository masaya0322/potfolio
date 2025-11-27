import { Layout } from '@/components/Layout'
import { SectionCard } from '@/components/SectionCard'
import { User, Briefcase, Code, Mail } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

type SectionType = {
  href: string
  icon: LucideIcon
  title: string
  description: string
  imageUrl?: string
  imagePosition?: 'left' | 'right'
}
const HomePage = () => {
  const sections: SectionType[] = [
    {
      href: '/about',
      icon: User,
      title: 'ABOUT',
      description: '私について、経歴、趣味などを紹介します',
      imageUrl: '/assets/about_card_image.png',
      imagePosition: 'left',
    },
    {
      href: '/work',
      icon: Briefcase,
      title: 'WORK',
      description: 'これまでの制作物やプロジェクトを紹介します',
      imageUrl: '/assets/10199.png',
      imagePosition: 'right',
    },
    {
      href: '/skill',
      icon: Code,
      title: 'SKILL',
      description: '使用できる技術やスキルセットを紹介します',
    },
    {
      href: '/contact',
      icon: Mail,
      title: 'CONTACT',
      description: 'お問い合わせやSNSリンクはこちらから',
    },
  ]

  return (
    <Layout>
      <section className="px-8 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to My Portfolio
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Webエンジニアとして、フロントエンドを中心に開発しています。
            <br />
            制作物やスキルをご覧ください。
          </p>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="mx-auto grid max-w-6xl gap-8">
          {sections.map((section) => (
            <SectionCard
              key={section.href}
              href={section.href}
              icon={section.icon}
              title={section.title}
              description={section.description}
              imageUrl={section.imageUrl}
              imagePosition={section.imagePosition}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default HomePage

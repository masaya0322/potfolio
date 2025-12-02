import { Layout } from '@/components/Layout'
import { SectionCard } from '@/components/SectionCard'
import { User, Briefcase, Code, Mail } from 'lucide-react'
import { LucideIcon } from 'lucide-react'
import Image from 'next/image'

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
      imageUrl: '/assets/section_about.jpg',
      imagePosition: 'left',
    },
    {
      href: '/work',
      icon: Briefcase,
      title: 'WORK',
      description: 'これまでの制作物やプロジェクトを紹介します',
      imageUrl: '/assets/section_work.png',
      imagePosition: 'right',
    },
    {
      href: '/skill',
      icon: Code,
      title: 'SKILL',
      description: '使用できる技術やスキルセットを紹介します',
      imageUrl: '/assets/section_skill.jpg',
      imagePosition: 'left',
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
      <Image
        src="/assets/portfolio_header.jpg"
        alt="Profile Image"
        width={1280}
        height={720}
        className="mx-auto w-full"
      />
      <section className="px-8 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            己を知り、己を伸ばす。
          </h1>
          <p className="mt-6 max-w-4xl text-lg text-left">
            将来的に、革新的なアイデアでチームをリードするプロジェクトマネージャーになることを目指しています。
            <br />
            <br />
            そのために、現場で最も適切な判断を下せるPMになるためには、技術への深い理解と困難な課題を解決できる実装力が必要不可欠だと考えました。そこで、2024年11月から現在にかけて、インターンシップでWebエンジニアとして、インターンシップフロントエンドを中心に開発しています。
            <br />
            <br />
            そんな私について知っていただくために、このポートフォリオサイトを作成しました。
            <br />
            是非、私の経歴や制作物、スキルをご覧ください。
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

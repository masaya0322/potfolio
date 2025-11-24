import { Layout } from '@/components/Layout'
import { SectionCard } from '@/components/SectionCard'
import { User, Briefcase, Code, Mail } from 'lucide-react'

const HomePage = () => {
  const sections = [
    {
      href: '/about',
      icon: User,
      title: 'ABOUT',
      description: '私について、経歴、趣味などを紹介します',
    },
    {
      href: '/work',
      icon: Briefcase,
      title: 'WORK',
      description: 'これまでの制作物やプロジェクトを紹介します',
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
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-20 sm:px-6 lg:px-8">
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

      {/* セクション紹介 */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <SectionCard
              key={section.href}
              href={section.href}
              icon={section.icon}
              title={section.title}
              description={section.description}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default HomePage

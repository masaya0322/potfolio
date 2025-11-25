import { Layout } from '@/components/Layout'
import { SectionHeader } from '@/components/SectionHeader'
import { SkillCard } from '@/components/SkillCard'
import { Code, Package, Wrench } from 'lucide-react'

const SkillPage = () => {
  const programmingLanguages = [
    {
      name: 'TypeScript',
      category: 'Language',
      description: '型安全なJavaScriptスーパーセット。フロントエンド・バックエンド開発で使用。',
      level: 4,
    },
    {
      name: 'JavaScript',
      category: 'Language',
      description: 'Web開発の基礎言語。ES6+の機能を活用した開発経験あり。',
      level: 4,
    },
    {
      name: 'Python',
      category: 'Language',
      description: 'データ分析やスクリプト作成に使用。基本的な開発経験あり。',
      level: 3,
    },
    {
      name: 'Java',
      category: 'Language',
      description: '大学の授業で学習。基本的なオブジェクト指向プログラミングを習得。',
      level: 2,
    },
  ]

  const frameworksAndLibraries = [
    {
      name: 'React',
      category: 'Frontend',
      description: 'コンポーネントベースのUI開発。フックやステート管理に習熟。',
      level: 4,
    },
    {
      name: 'Next.js',
      category: 'Frontend',
      description: 'SSR/SSGを活用したReactフレームワーク。本ポートフォリオでも使用。',
      level: 4,
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      description: 'ユーティリティファーストのCSSフレームワーク。効率的なスタイリング。',
      level: 4,
    },
    {
      name: 'Node.js',
      category: 'Backend',
      description: 'サーバーサイドJavaScript実行環境。API開発経験あり。',
      level: 3,
    },
  ]

  const toolsAndTechnologies = [
    {
      name: 'Git / GitHub',
      category: 'Tools',
      description: 'バージョン管理とチーム開発。PR・Issue管理を日常的に使用。',
      level: 4,
    },
    {
      name: 'Docker',
      category: 'Tools',
      description: 'コンテナ化技術。開発環境の構築と管理に使用。',
      level: 3,
    },
    {
      name: 'VS Code',
      category: 'Tools',
      description: 'メインエディタ。拡張機能を活用した効率的な開発。',
      level: 4,
    },
    {
      name: 'Jest',
      category: 'Testing',
      description: 'JavaScriptテストフレームワーク。ユニットテストとインテグレーションテスト。',
      level: 3,
    },
  ]

  return (
    <Layout>
      <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Skills</h1>
          <p className="mt-6 text-lg text-gray-600">技術スキルと開発経験のある言語・ツールを紹介します</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <SectionHeader icon={Code} title="プログラミング言語" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {programmingLanguages.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                category={skill.category}
                description={skill.description}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <SectionHeader
            icon={Package}
            title="フレームワーク・ライブラリ"
            iconBgColor="bg-green-100"
            iconColor="text-green-600"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {frameworksAndLibraries.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                category={skill.category}
                description={skill.description}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <SectionHeader
            icon={Wrench}
            title="ツール・技術"
            iconBgColor="bg-purple-100"
            iconColor="text-purple-600"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {toolsAndTechnologies.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                category={skill.category}
                description={skill.description}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SkillPage

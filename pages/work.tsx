import { Layout } from '@/components/Layout'
import { ProjectCard } from '@/components/ProjectCard'

const WorkPage = () => {
  const projects = [
    {
      title: 'ポートフォリオサイト',
      description:
        '自己紹介や制作物を紹介するポートフォリオサイトです。Next.js、TypeScript、Tailwind CSSを使用して開発しました。レスポンシブデザインとアクセシビリティを重視しています。',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Jest'],
      period: '2024年11月',
      category: '自主制作',
      githubUrl: 'https://github.com/masaya0322/portfolio',
      demoUrl: 'https://portfolio-example.com',
    },
    {
      title: 'タスク管理アプリ',
      description:
        'シンプルで使いやすいタスク管理アプリケーションです。Reactを使用し、ドラッグ&ドロップでタスクを管理できる機能を実装しました。',
      technologies: ['React', 'TypeScript', 'CSS Modules'],
      period: '2024年9月',
      category: '自主制作',
      githubUrl: 'https://github.com/masaya0322/task-app',
    },
    {
      title: '社内管理システム',
      description:
        'インターンシップで開発に携わった社内管理システムのフロントエンド部分です。UIコンポーネントの実装とAPIとの連携を担当しました。',
      technologies: ['React', 'TypeScript', 'Material-UI', 'REST API'],
      period: '2024年8月 - 9月',
      category: 'インターンシップ',
    },
    {
      title: '天気予報アプリ',
      description:
        '外部APIを使用した天気予報アプリです。現在地の天気情報を取得し、分かりやすく表示します。',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
      period: '2024年7月',
      category: '自主制作',
      githubUrl: 'https://github.com/masaya0322/weather-app',
      demoUrl: 'https://weather-app-example.com',
    },
  ]

  return (
    <Layout>
      <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Work</h1>
          <p className="mt-6 text-lg text-gray-600">これまでの制作物やプロジェクトを紹介します</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default WorkPage

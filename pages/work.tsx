import { Layout } from '@/components/Layout'
import { ProjectCard } from '@/components/ProjectCard'
import Image from 'next/image'

const WorkPage = () => {
  const projects = [
    {
      title: 'ポートフォリオサイト',
      description:
        '自己紹介や制作物を紹介するポートフォリオサイトです。Next.js、TypeScript、Tailwind CSSを使用して開発しました。レスポンシブデザインとアクセシビリティを重視しています。',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Jest', 'shadcn/ui'],
      period: '2025年11月 - 現在',
      category: '自主制作',
      githubUrl: 'https://github.com/masaya0322/portfolio',
      demoUrl: 'https://portfolio-example.com',
      imageUrl: '/assets/project_portfolio.png',
    },
    {
      title: 'お片付けIoTデバイス',
      description:
        '低学年向けのお片付け✖️ゲームのIoTデバイスのゲーム画面です。企画発案から、実装までを四人チームで全て行っています。チームの中ではフロントエンド開発のリードエンジニアを行い、Next.jsを用いて、ピクセル風のシンプルなRPG風ゲームを作成しています。現在はまだ未完成で実装中です。',
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'shadcn/ui',
        'python',
        'Raspberry Pi',
      ],
      period: '2025年4月 - 現在',
      category: '大学プロジェクト',
      githubUrl: 'https://github.com/masaya0322/challenge-project-j',
      imageUrl: '/assets/project_work.png',
    },
    {
      title: '社内図書管理システム',
      description:
        'インターンシップで開発に携わった社内管理システムのフロントエンド部分です。UIコンポーネントの実装とAPIとの連携を担当しました。',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
      period: '2025年8月 - 現在',
      category: 'インターンシップ',
      imageUrl: '/assets/project_intern.png',
    },
  ]

  return (
    <Layout>
      <Image
        src="/assets/work_header.jpg"
        alt="Work Header Image"
        width={1280}
        height={720}
        className="mx-auto w-full"
      />
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
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

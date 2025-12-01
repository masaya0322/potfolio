import { Layout } from '@/components/Layout'
import { SectionHeader } from '@/components/SectionHeader'
import { SkillCard } from '@/components/SkillCard'
import { Code, Package, Wrench } from 'lucide-react'
import Image from 'next/image'

const SkillPage = () => {
  const programmingLanguages = [
    {
      name: 'TypeScript',
      category: 'Language',
      description:
        '型設計とコード品質の保証に特化して習得しました。インターン先の図書管理サービス開発において、PropsやAPIレスポンスの型定義を厳密に行い、バグを未然に防ぐ開発プロセスを実践しました。複雑な型の読み書きに慣れており、レビュー時にも型情報に基づいた指摘が可能です',
      level: 4,
    },
    {
      name: 'JavaScript',
      category: 'Language',
      description:
        'TypeScriptを主軸にしています。TSで開発を行うため、素のJSの深い挙動（プロトタイプチェーンなど）を日常的に意識する機会は減りますが、基本的なDOM操作や非同期処理（Promise/async/await）の知識があります',
      level: 3,
    },
    {
      name: 'Python / Java',
      category: 'Language',
      description:
        '基礎構文の理解をしています。大学の授業で基本的なオブジェクト指向プログラミングやデータ操作を学びました。日常業務では使用しませんが、必要に応じてキャッチアップできる基礎力があることを示しています',
      level: 2,
    },
  ]

  const frameworksAndLibraries = [
    {
      name: 'React',
      category: 'Frontend',
      description:
        'コンポーネントの再利用性と責務の分離を重視し、機能実装を行ってきました。状態管理を適切に行い、再利用可能なカスタムフックの設計・実装経験があります。',
      level: 4,
    },
    {
      name: 'Next.js',
      category: 'Frontend',
      description:
        'フレームワークの基礎的な機能とデータ取得パターンを実践的に理解しています。ポートフォリオ制作において、ルーティングやコンポーネント構造、画像最適化（next/image）といった主要機能を正しく利用できました。SSR/SSGといった高度な戦略設計は、今後注力して経験を積んでいく予定です。',
      level: 3,
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      description:
        'デザインの一貫性と高速なUI開発を実現することができます。カスタムコンポーネントの作成時も、ユーティリティクラスを組み合わせて効率的にスタイリングできるため、デザインへの落とし込み速度に自信があります。',
      level: 4,
    },
    {
      name: 'Node.js',
      category: 'Backend',
      description:
        'API連携とバックエンドの理解のための基礎があります。Next.jsのAPI Routesを利用した経験があり、サーバーサイドでのデータ処理や環境変数（env）の扱いが可能です。PMとして、フロントエンドとバックエンドの境界線を理解した上での仕様決定が可能です。',
      level: 3,
    },
  ]

  const toolsAndTechnologies = [
    {
      name: 'Git / GitHub',
      category: 'Tools',
      description:
        'チーム開発フローの理解と運用に貢献できます。インターンシップで日常的にPull Request（PR）の作成、レビュー、Issue管理を行っており、Git FlowやGitHub Flowに沿ったブランチ戦略を理解・実践しています。',
      level: 4,
    },
    {
      name: 'VS Code',
      category: 'Tools',
      description:
        '開発効率を最大化するツールカスタマイズ能力に長けています。単なるエディタ利用ではなく、拡張機能、スニペット、設定（settings.json）を積極的にカスタマイズし、TypeScript/React開発環境の自動化を徹底しています。特に、ESLint/Prettierの自動修正設定をプロジェクトのsettings.jsonに組み込むことで、チーム全体のコーディング規約遵守とPRでの手戻り削減に貢献しています。',
      level: 4,
    },
    {
      name: 'Jest',
      category: 'Testing',
      description:
        'テストの重要性の理解と実践経験があります。ユニットテストの作成、モック（vi.mock）の使用、およびアサーション（toBeInTheDocumentなど）の経験があり、コード品質を保証する工程を理解しています。',
      level: 3,
    },
  ]

  return (
    <Layout>
      <Image
        src="/assets/skill_header.jpg"
        alt="Profile Image"
        width={1280}
        height={720}
        className="mx-auto w-full"
      />
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
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
        <div className="mx-auto max-w-6xl">
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
        <div className="mx-auto max-w-6xl">
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

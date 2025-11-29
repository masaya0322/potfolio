import { Layout } from '@/components/Layout'
import { SectionHeader } from '@/components/SectionHeader'
import { GraduationCap, Users, Briefcase, Heart } from 'lucide-react'

const AboutPage = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">About Me</h1>
          <p className="mt-6 text-lg text-gray-600">私について、経歴、活動、趣味などを紹介します</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900">プロフィール</h2>
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">山田 太郎</h3>
              <p className="mt-2 text-gray-600">
                Webエンジニアを目指している大学生です。フロントエンド開発に興味があり、React
                やNext.jsを使った開発に取り組んでいます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader icon={GraduationCap} title="大学・学歴" />
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">○○大学 工学部 情報工学科</h3>
              <p className="mt-1 text-sm text-gray-500">2021年4月 - 2025年3月（予定）</p>
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-gray-900">専攻・研究内容</h4>
              <p className="mt-2 text-gray-600">
                ソフトウェア工学を専攻し、Web技術やユーザーインターフェース設計について学んでいます。
                卒業研究では、アクセシビリティを考慮したWebアプリケーションの開発に取り組んでいます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            icon={Users}
            title="サークル活動"
            iconBgColor="bg-green-100"
            iconColor="text-green-600"
          />
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">プログラミングサークル</h3>
              <p className="mt-1 text-sm text-gray-500">2021年4月 - 現在 | 副代表</p>
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-gray-900">活動内容</h4>
              <p className="mt-2 text-gray-600">
                サークルメンバーと共同でWebアプリケーションやゲームの開発プロジェクトに取り組んでいます。
                勉強会やハッカソンの企画・運営も行い、技術交流の場を提供しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            icon={Briefcase}
            title="インターンシップ"
            iconBgColor="bg-purple-100"
            iconColor="text-purple-600"
          />
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">株式会社○○</h3>
                <p className="mt-1 text-sm text-gray-500">2024年8月 - 2024年9月（1ヶ月）</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">業務内容</h4>
                <p className="mt-2 text-gray-600">
                  フロントエンドエンジニアとして、ReactとTypeScriptを使用した社内管理システムの開発に携わりました。
                  UIコンポーネントの実装やAPIとの連携を担当しました。
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">学んだこと</h4>
                <p className="mt-2 text-gray-600">
                  実務でのチーム開発の流れや、コードレビューの重要性を学びました。
                  また、ユーザー視点での開発の大切さを実感しました。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            icon={Heart}
            title="趣味・興味"
            iconBgColor="bg-pink-100"
            iconColor="text-pink-600"
          />
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">趣味</h3>
              <ul className="mt-2 list-disc list-inside space-y-2 text-gray-600">
                <li>プログラミング（Web開発、アプリ開発）</li>
                <li>読書（技術書、ビジネス書）</li>
                <li>音楽鑑賞</li>
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900">興味のある分野</h3>
              <ul className="mt-2 list-disc list-inside space-y-2 text-gray-600">
                <li>フロントエンド開発（React, Next.js, TypeScript）</li>
                <li>UI/UXデザイン</li>
                <li>アクセシビリティ</li>
                <li>パフォーマンス最適化</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage

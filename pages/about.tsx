import { Layout } from '@/components/Layout'
import { SectionHeader } from '@/components/SectionHeader'
import { ContentCard } from '@/components/ContentCard'
import { GraduationCap, Users, Briefcase, Heart } from 'lucide-react'
import Image from 'next/image'
const AboutPage = () => {
  return (
    <Layout>
      <Image
        src="/assets/about_header.jpg"
        alt="Profile Image"
        width={1280}
        height={720}
        className="mx-auto w-full"
      />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <ContentCard>
            <h2 className="text-2xl font-bold">プロフィール</h2>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold">大塚 麻紗也</h3>
                <p className="mt-2">
                  2024年11月から株式会社アルゴ式の長期インターンに参加し、現在は社内図書管理サービスのフロントエンド開発をしています。
                  <br />
                  将来的に、一流のプロジェクトマネージャーになることを目指しており、そのためにエンジニアとしてのスキルを磨いています。
                  <br />
                  その第一歩として、エンジニアとしての知識と経験をつけるために、ReactやNext.jsを使ったフロントエンド開発や、AI技術の活用に取り組んでいます。
                  <br />
                  その他にも、UI/UXやアクセシビリティ、パフォーマンス最適化など、ユーザーにとって価値のあるサービスを提供するための技術を学んでいます。
                </p>
              </div>
            </div>
          </ContentCard>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <SectionHeader icon={GraduationCap} title="大学・学歴" />
          <ContentCard>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">
                  東京電機大学 システムデザイン工学部 情報システム工学科
                </h3>
                <p className="mt-1 text-sm text-gray-500">2023年4月 - 2027年3月（予定）</p>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold">専攻・研究内容</h4>
                <p className="mt-2">
                  学科では情報システム工学を専攻し、ネットワーク、セキュリティ、コンピュータ、IoT、組み込みシステム、データサイエンスなど多様な分野に広がる情報システムを学んでいます。
                  この中でも特に、プログラミングやシステム設計、データベース、アルゴリズムなどの基礎から応用までを深く学び、実践的なスキルを身につけています。
                  <br />
                  卒業研究では、生体信号処理研究室に配属されており、ストレスや感情など脳波から読み取る研究を行っています。
                  現在はまだゼミの段階で実験に取り掛かってはいませんが、実験の下準備として、波形から特徴量を抽出するプログラムの作成を行っています。
                </p>
              </div>
            </div>
          </ContentCard>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <SectionHeader
            icon={Users}
            title="サークル活動"
            iconBgColor="bg-green-100"
            iconColor="text-green-600"
          />
          <ContentCard>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">
                  軽音サークル フォークミュージックアソシエーション
                </h3>
                <p className="mt-1 text-sm text-gray-500">2023年4月 - 現在</p>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold">活動内容</h4>
                <p className="mt-2">
                  4人組バンドでギターボーカルを担当しています。かなり自由度の高いサークルなので、決まった練習やライブはありませんが、大体一ヶ月に一度程度ライブ活動を行っています。
                  <br />
                  好きな音楽のジャンルは様々で、JPOPやアニソンからニッチなオルタナやエモ、メタルまで幅広く音楽を聴いています。
                  <br />
                  特に演奏することの多いジャンルは、ロックやエモでよくコピーしていたのはPK
                  Shampooというバンドです。
                  <br />
                  高校から合わせて六年間ボーカルをしていることもあり、歌には自信とこだわりがあります。そして、言わずもがな歌うことが大好きです！
                </p>
              </div>
            </div>
          </ContentCard>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <SectionHeader
            icon={Briefcase}
            title="インターンシップ"
            iconBgColor="bg-purple-100"
            iconColor="text-purple-600"
          />
          <div className="space-y-6">
            <ContentCard>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">株式会社アルゴ式</h3>
                  <p className="mt-1 text-sm text-gray-500">2024年11月 - 現在</p>
                </div>
                <div>
                  <h4 className="font-semibold">業務内容</h4>
                  <p className="mt-2">
                    フロントエンドエンジニアとして、ReactとTypeScriptを使用した社内図書管理システムの開発に携わりました。
                    主に、UIコンポーネントの実装やAPIとの連携を担当しました。具体的には、書籍の検索機能や貸出管理機能の開発を行いました。
                    <br />
                    また、バグ報告や関連ISSUEの起票や、研修生へのコードレビューにも積極的に参加し、チームの開発効率向上に貢献しました。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">学んだこと</h4>
                  <p className="mt-2">
                    コーディング技術や便利な開発ツールを実際に触れて経験するだけでなく、実務でのチーム開発の流れや、コードレビューの重要性を学びました。特に、コードの可読性や保守性を意識したコーディングの重要性を実感しました。
                    <br />
                    また、開発者目線でプロジェクトマネージャーの仕事を理解することで、将来PMになるための基礎を築くことができました。
                  </p>
                </div>
              </div>
            </ContentCard>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <SectionHeader
            icon={Heart}
            title="趣味・興味"
            iconBgColor="bg-pink-100"
            iconColor="text-pink-600"
          />
          <ContentCard>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">趣味</h3>
                <ul className="mt-2 list-disc list-inside space-y-2">
                  <li>技術ブログを読むこと</li>
                  <li>音楽鑑賞</li>
                  <li>アニメやVtuberの配信や動画を閲覧すること</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold">興味のある分野</h3>
                <ul className="mt-2 list-disc list-inside space-y-2">
                  <li>フロントエンド開発（React, Next.js, TypeScript）</li>
                  <li>UI/UXデザイン</li>
                  <li>デジタルマーケティング</li>
                </ul>
              </div>
            </div>
          </ContentCard>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage

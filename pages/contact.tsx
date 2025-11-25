import { Layout } from '@/components/Layout'
import { SectionHeader } from '@/components/SectionHeader'
import { ContentCard } from '@/components/ContentCard'
import { Github, Mail, Twitter } from 'lucide-react'

const ContactPage = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Contact</h1>
          <p className="mt-6 text-lg text-gray-600">お気軽にお問い合わせください</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeader icon={Mail} title="連絡先" />
          <ContentCard>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <Github className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">GitHub</h3>
                  <a
                    href="https://github.com/masaya0322"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    @masaya0322
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <Twitter className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Twitter</h3>
                  <p className="text-sm text-gray-600">@your_twitter</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <Mail className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-sm text-gray-600">your.email@example.com</p>
                </div>
              </div>
            </div>
          </ContentCard>
        </div>
      </section>

      <section className="px-4 py-12 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            icon={Mail}
            title="お問い合わせ"
            iconBgColor="bg-green-100"
            iconColor="text-green-600"
          />
          <ContentCard>
            <p className="text-gray-600">お問い合わせフォームを実装予定</p>
          </ContentCard>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage

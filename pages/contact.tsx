import { Layout } from '@/components/Layout'
import { SectionHeader } from '@/components/SectionHeader'
import { ContentCard } from '@/components/ContentCard'
import { ContactForm } from '@/components/ContactForm'
import { Mail, Github as GithubIcon, X } from 'lucide-react'
import Link from 'next/link'

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
          <SectionHeader icon={Mail} title="SNS" />
          <ContentCard>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <GithubIcon className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">GitHub</h3>
                  <Link
                    href="https://github.com/masaya0322"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    @masaya0322
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <X className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">X (Twitter)</h3>
                  <Link
                    href="https://x.com/pm06engineer09?s=11&t=c0nC6knNs4STNVJRntKDSQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    @pm06engineer09
                  </Link>
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
            <ContactForm />
          </ContentCard>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage

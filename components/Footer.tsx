import Link from 'next/link'
import { GithubIcon } from 'lucide-react'

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-white">
      <div className="flex flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 md:flex-row lg:px-8">
        <p className="text-sm text-gray-600">© {currentYear} Portfolio. All rights reserved.</p>
        <Link
          href="https://github.com/masaya0322"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 transition-colors hover:text-gray-900"
          aria-label="GitHub"
        >
          <GithubIcon size={24} />
        </Link>
      </div>
    </footer>
  )
}

export { Footer }

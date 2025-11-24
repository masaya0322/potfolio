import Link from 'next/link'

interface NavigationProps {}

const Navigation = ({}: NavigationProps) => {
  const navLinks = [
    { href: '/about', label: 'ABOUT' },
    { href: '/work', label: 'WORK' },
    { href: '/skill', label: 'SKILL' },
    { href: '/contact', label: 'CONTACT' },
  ]

  return (
    <nav className="border-b bg-white">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold sm:text-2xl">
          Portfolio
        </Link>
        <div className="flex items-center space-x-4 sm:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-700 transition-colors hover:text-gray-900 sm:text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export { Navigation }

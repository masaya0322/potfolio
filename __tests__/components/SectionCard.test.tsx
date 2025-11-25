import { render, screen } from '@testing-library/react'
import { SectionCard } from '@/components/SectionCard'
import { User, Briefcase } from 'lucide-react'

describe('SectionCard', () => {
  const defaultProps = {
    href: '/about',
    icon: User,
    title: 'ABOUT',
    description: '私について、経歴、趣味などを紹介します',
  }

  it('should render as a link with correct href', () => {
    render(<SectionCard {...defaultProps} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/about')
  })

  it('should render title as h2 heading', () => {
    render(<SectionCard {...defaultProps} />)

    const heading = screen.getByRole('heading', { level: 2, name: 'ABOUT' })
    expect(heading).toBeInTheDocument()
  })

  it('should render description text', () => {
    render(<SectionCard {...defaultProps} />)

    expect(screen.getByText('私について、経歴、趣味などを紹介します')).toBeInTheDocument()
  })

  it('should render icon and arrow icon', () => {
    const { container } = render(<SectionCard {...defaultProps} />)

    // SVGアイコンが2つ存在することを確認（メインアイコン + ArrowRight）
    const svgElements = container.querySelectorAll('svg')
    expect(svgElements).toHaveLength(2)
  })

  it('should render call-to-action text with arrow', () => {
    render(<SectionCard {...defaultProps} />)

    expect(screen.getByText('詳しく見る')).toBeInTheDocument()
  })

  it('should render with different icon and props', () => {
    const customProps = {
      href: '/work',
      icon: Briefcase,
      title: 'WORK',
      description: 'これまでの制作物やプロジェクトを紹介します',
    }

    render(<SectionCard {...customProps} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/work')

    const heading = screen.getByRole('heading', { level: 2, name: 'WORK' })
    expect(heading).toBeInTheDocument()

    expect(screen.getByText('これまでの制作物やプロジェクトを紹介します')).toBeInTheDocument()
  })
})

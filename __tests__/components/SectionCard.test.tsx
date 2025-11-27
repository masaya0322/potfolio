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

  it('should render with image when imageUrl is provided', () => {
    const propsWithImage = {
      ...defaultProps,
      imageUrl: '/test-image.jpg',
    }

    render(<SectionCard {...propsWithImage} />)

    const image = screen.getByRole('img', { name: defaultProps.title })
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', defaultProps.title)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/about')
  })

  it('should render with image on the left when imagePosition is left', () => {
    const propsWithImageLeft = {
      ...defaultProps,
      imageUrl: '/test-image.jpg',
      imagePosition: 'left' as const,
    }

    const { container } = render(<SectionCard {...propsWithImageLeft} />)

    const image = screen.getByRole('img', { name: defaultProps.title })
    expect(image).toBeInTheDocument()

    const flexContainer = container.querySelector('.flex')
    expect(flexContainer).toHaveClass('md:flex-row')
  })

  it('should render with image on the right when imagePosition is right', () => {
    const propsWithImageRight = {
      ...defaultProps,
      imageUrl: '/test-image.jpg',
      imagePosition: 'right' as const,
    }

    const { container } = render(<SectionCard {...propsWithImageRight} />)

    const image = screen.getByRole('img', { name: defaultProps.title })
    expect(image).toBeInTheDocument()

    const flexContainer = container.querySelector('.flex')
    expect(flexContainer).toHaveClass('md:flex-row-reverse')
  })

  it('should render all content elements when image is present', () => {
    const propsWithImage = {
      ...defaultProps,
      imageUrl: '/test-image.jpg',
    }

    const { container } = render(<SectionCard {...propsWithImage} />)

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument()
    expect(screen.getByText('詳しく見る')).toBeInTheDocument()

    const svgElements = container.querySelectorAll('svg')
    expect(svgElements.length).toBeGreaterThanOrEqual(2)
  })
})

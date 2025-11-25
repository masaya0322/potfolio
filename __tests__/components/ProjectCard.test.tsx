import { render, screen } from '@testing-library/react'
import { ProjectCard } from '@/components/ProjectCard'

describe('ProjectCard', () => {
  const defaultProps = {
    title: 'Test Project',
    description: 'This is a test project description',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    period: '2024年11月',
    category: '自主制作',
  }

  it('should render project title as h3 heading', () => {
    render(<ProjectCard {...defaultProps} />)

    const heading = screen.getByRole('heading', { level: 3, name: 'Test Project' })
    expect(heading).toBeInTheDocument()
  })

  it('should render project description', () => {
    render(<ProjectCard {...defaultProps} />)

    expect(screen.getByText('This is a test project description')).toBeInTheDocument()
  })

  it('should render category badge', () => {
    render(<ProjectCard {...defaultProps} />)

    expect(screen.getByText('自主制作')).toBeInTheDocument()
  })

  it('should render period', () => {
    render(<ProjectCard {...defaultProps} />)

    expect(screen.getByText('2024年11月')).toBeInTheDocument()
  })

  it('should render all technology tags', () => {
    render(<ProjectCard {...defaultProps} />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
  })

  it('should render GitHub link when githubUrl is provided', () => {
    render(
      <ProjectCard
        {...defaultProps}
        githubUrl="https://github.com/test/repo"
      />
    )

    const githubLink = screen.getByRole('link', { name: /github/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test/repo')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should render Demo link when demoUrl is provided', () => {
    render(
      <ProjectCard
        {...defaultProps}
        demoUrl="https://demo.example.com"
      />
    )

    const demoLink = screen.getByRole('link', { name: /demo/i })
    expect(demoLink).toHaveAttribute('href', 'https://demo.example.com')
    expect(demoLink).toHaveAttribute('target', '_blank')
    expect(demoLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should not render links when URLs are not provided', () => {
    render(<ProjectCard {...defaultProps} />)

    expect(screen.queryByRole('link', { name: /github/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /demo/i })).not.toBeInTheDocument()
  })

  it('should render image when imageUrl is provided', () => {
    render(
      <ProjectCard
        {...defaultProps}
        imageUrl="/test-image.jpg"
      />
    )

    const image = screen.getByAltText('Test Project')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/test-image.jpg')
  })

  it('should render placeholder when imageUrl is not provided', () => {
    const { container } = render(<ProjectCard {...defaultProps} />)

    const placeholder = container.querySelector('.bg-gradient-to-br')
    expect(placeholder).toBeInTheDocument()
  })

  it('should render with different category', () => {
    render(
      <ProjectCard
        {...defaultProps}
        category="インターンシップ"
      />
    )

    expect(screen.getByText('インターンシップ')).toBeInTheDocument()
  })
})

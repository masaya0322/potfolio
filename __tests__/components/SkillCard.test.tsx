import { render, screen } from '@testing-library/react'
import { SkillCard } from '@/components/SkillCard'
import { Code } from 'lucide-react'

describe('SkillCard', () => {
  it('should render skill name', () => {
    render(<SkillCard name="TypeScript" level={4} />)

    const heading = screen.getByRole('heading', { level: 3, name: /typescript/i })
    expect(heading).toBeInTheDocument()
  })

  it('should render category when provided', () => {
    render(<SkillCard name="React" category="Frontend" level={4} />)

    expect(screen.getByText('Frontend')).toBeInTheDocument()
  })

  it('should not render category when not provided', () => {
    const { container } = render(<SkillCard name="JavaScript" level={3} />)

    const categoryBadge = container.querySelector('.bg-gray-100')
    expect(categoryBadge).not.toBeInTheDocument()
  })

  it('should render description when provided', () => {
    render(
      <SkillCard
        name="Node.js"
        description="サーバーサイドJavaScript実行環境"
        level={3}
      />
    )

    expect(screen.getByText('サーバーサイドJavaScript実行環境')).toBeInTheDocument()
  })

  it('should not render description when not provided', () => {
    const { container } = render(<SkillCard name="Python" level={2} />)

    const descriptions = container.querySelectorAll('.text-sm.text-gray-600')
    expect(descriptions.length).toBe(0)
  })

  it('should render icon when provided', () => {
    render(<SkillCard name="C++" icon={<Code data-testid="code-icon" />} level={3} />)

    expect(screen.getByTestId('code-icon')).toBeInTheDocument()
    expect(screen.getByTestId('skill-icon')).toBeInTheDocument()
  })

  it('should not render icon container when icon not provided', () => {
    render(<SkillCard name="Java" level={4} />)

    expect(screen.queryByTestId('skill-icon')).not.toBeInTheDocument()
  })

  it('should render SkillLevel component with correct props', () => {
    render(<SkillCard name="Go" level={3} maxLevel={5} />)

    const progressBar = screen.getByTestId('skill-level-bar')
    expect(progressBar).toBeInTheDocument()
    expect(progressBar).toHaveAttribute('aria-valuenow', '3')
    expect(progressBar).toHaveAttribute('aria-valuemax', '5')
  })

  it('should use default maxLevel of 5 when not specified', () => {
    render(<SkillCard name="Rust" level={2} />)

    const progressBar = screen.getByTestId('skill-level-bar')
    expect(progressBar).toHaveAttribute('aria-valuemax', '5')
  })

  it('should render complete skill card with all props', () => {
    render(
      <SkillCard
        name="Next.js"
        category="Framework"
        description="React フレームワーク"
        level={4}
        maxLevel={5}
        icon={<Code data-testid="nextjs-icon" />}
      />
    )

    expect(screen.getByRole('heading', { level: 3, name: /next\.js/i })).toBeInTheDocument()
    expect(screen.getByText('Framework')).toBeInTheDocument()
    expect(screen.getByText('React フレームワーク')).toBeInTheDocument()
    expect(screen.getByTestId('nextjs-icon')).toBeInTheDocument()

    const progressBar = screen.getByTestId('skill-level-bar')
    expect(progressBar).toHaveAttribute('aria-valuenow', '4')
  })

  it('should have proper semantic structure', () => {
    const { container } = render(
      <SkillCard
        name="Docker"
        category="Tools"
        description="コンテナ化プラットフォーム"
        level={3}
      />
    )

    const card = container.firstChild as HTMLElement
    expect(card).toHaveClass('rounded-lg', 'border', 'bg-card')
  })
})

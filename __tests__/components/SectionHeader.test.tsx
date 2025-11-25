import { render, screen } from '@testing-library/react'
import { SectionHeader } from '@/components/SectionHeader'
import { User, Briefcase } from 'lucide-react'

describe('SectionHeader', () => {
  const defaultProps = {
    icon: User,
    title: 'Test Section',
  }

  it('should render title as h2 heading', () => {
    render(<SectionHeader {...defaultProps} />)

    const heading = screen.getByRole('heading', { level: 2, name: 'Test Section' })
    expect(heading).toBeInTheDocument()
  })

  it('should render icon', () => {
    const { container } = render(<SectionHeader {...defaultProps} />)

    const iconElement = container.querySelector('svg')
    expect(iconElement).toBeInTheDocument()
  })

  it('should apply default colors when not specified', () => {
    const { container } = render(<SectionHeader {...defaultProps} />)

    const iconContainer = container.querySelector('.rounded-full')
    expect(iconContainer).toHaveClass('bg-blue-100')

    const icon = container.querySelector('svg')
    expect(icon).toHaveClass('text-blue-600')
  })

  it('should apply custom icon background color', () => {
    render(
      <SectionHeader
        {...defaultProps}
        iconBgColor="bg-green-100"
      />
    )

    const iconContainer = document.querySelector('.rounded-full')
    expect(iconContainer).toHaveClass('bg-green-100')
  })

  it('should apply custom icon color', () => {
    render(
      <SectionHeader
        {...defaultProps}
        iconColor="text-purple-600"
      />
    )

    const icon = document.querySelector('svg')
    expect(icon).toHaveClass('text-purple-600')
  })

  it('should render with different icon', () => {
    const { container } = render(
      <SectionHeader
        icon={Briefcase}
        title="Different Title"
      />
    )

    const heading = screen.getByRole('heading', { level: 2, name: 'Different Title' })
    expect(heading).toBeInTheDocument()

    const iconElement = container.querySelector('svg')
    expect(iconElement).toBeInTheDocument()
  })
})

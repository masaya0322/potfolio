import { render, screen } from '@testing-library/react'
import { ContentCard } from '@/components/ContentCard'

describe('ContentCard', () => {
  it('should render children content', () => {
    render(
      <ContentCard>
        <p>Test Content</p>
      </ContentCard>
    )

    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('should render multiple children', () => {
    render(
      <ContentCard>
        <h2>Title</h2>
        <p>Description</p>
      </ContentCard>
    )

    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('should have card styling classes', () => {
    const { container } = render(
      <ContentCard>
        <p>Content</p>
      </ContentCard>
    )

    const cardElement = container.firstChild
    expect(cardElement).toHaveClass('rounded-lg')
    expect(cardElement).toHaveClass('border')
    expect(cardElement).toHaveClass('bg-white')
    expect(cardElement).toHaveClass('shadow-sm')
  })

  it('should render complex nested structure', () => {
    render(
      <ContentCard>
        <div>
          <h3>Heading</h3>
          <div>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
          </div>
        </div>
      </ContentCard>
    )

    expect(screen.getByText('Heading')).toBeInTheDocument()
    expect(screen.getByText('Paragraph 1')).toBeInTheDocument()
    expect(screen.getByText('Paragraph 2')).toBeInTheDocument()
  })
})

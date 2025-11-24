import { render, screen } from '@testing-library/react'
import { Layout } from '@/components/Layout'

describe('Layout', () => {
  it('should render children content', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    )

    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('should render Navigation component', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    )

    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('should render Footer component', () => {
    const { container } = render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    )

    expect(container.querySelector('footer')).toBeInTheDocument()
  })

  it('should have proper semantic structure', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    )

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toContainElement(screen.getByText('Test Content'))
  })
})

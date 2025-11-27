import { render, screen } from '@testing-library/react'
import HomePage from '@/pages/index'

describe('HomePage', () => {
  it('should render page title', () => {
    render(<HomePage />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('should have semantic structure', () => {
    render(<HomePage />)

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('should render section cards', () => {
    render(<HomePage />)

    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('should render multiple headings', () => {
    render(<HomePage />)

    const headings = screen.getAllByRole('heading')
    expect(headings.length).toBeGreaterThan(1)
  })

  it('should render introduction section', () => {
    render(<HomePage />)

    const mainHeading = screen.getByRole('heading', { level: 1 })
    expect(mainHeading).toBeInTheDocument()

    const sections = document.querySelectorAll('section')
    expect(sections.length).toBeGreaterThan(0)
  })
})

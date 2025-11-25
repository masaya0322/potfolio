import { render, screen, within } from '@testing-library/react'
import ContactPage from '@/pages/contact'

describe('ContactPage', () => {
  it('should render page title', () => {
    render(<ContactPage />)

    const heading = screen.getByRole('heading', { level: 1, name: /contact/i })
    expect(heading).toBeInTheDocument()
  })

  it('should render page description', () => {
    render(<ContactPage />)

    expect(screen.getByText(/お気軽にお問い合わせください/i)).toBeInTheDocument()
  })

  it('should have semantic structure', () => {
    render(<ContactPage />)

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  describe('Contact Information Section', () => {
    it('should render contact information heading', () => {
      render(<ContactPage />)

      const contactHeading = screen.getByRole('heading', { level: 2, name: /連絡先/i })
      expect(contactHeading).toBeInTheDocument()
    })

    it('should render GitHub link', () => {
      render(<ContactPage />)

      expect(screen.getByRole('heading', { level: 3, name: /github/i })).toBeInTheDocument()
      const githubLink = screen.getByRole('link', { name: /@masaya0322/i })
      expect(githubLink).toHaveAttribute('href', 'https://github.com/masaya0322')
      expect(githubLink).toHaveAttribute('target', '_blank')
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('should render Twitter information', () => {
      render(<ContactPage />)

      expect(screen.getByRole('heading', { level: 3, name: /twitter/i })).toBeInTheDocument()
      expect(screen.getByText(/@your_twitter/i)).toBeInTheDocument()
    })

    it('should render Email information', () => {
      render(<ContactPage />)

      expect(screen.getByRole('heading', { level: 3, name: /email/i })).toBeInTheDocument()
      expect(screen.getByText(/your\.email@example\.com/i)).toBeInTheDocument()
    })

    it('should render contact information with icons', () => {
      const { container } = render(<ContactPage />)

      const contactSection = screen.getByRole('heading', { level: 2, name: /連絡先/i }).closest('section')
      const icons = contactSection?.querySelectorAll('svg')
      expect(icons!.length).toBeGreaterThanOrEqual(3)
    })
  })

  describe('Contact Form Section', () => {
    it('should render contact form heading', () => {
      render(<ContactPage />)

      const formHeading = screen.getByRole('heading', { level: 2, name: /お問い合わせ/i })
      expect(formHeading).toBeInTheDocument()
    })

    it('should render form section', () => {
      render(<ContactPage />)

      const formHeading = screen.getByRole('heading', { level: 2, name: /お問い合わせ/i })
      const formSection = formHeading.closest('section')

      expect(formSection).toBeInTheDocument()
    })
  })

  describe('All Sections Structure', () => {
    it('should render all main sections with h2 headings', () => {
      render(<ContactPage />)

      const expectedH2Headings = [/連絡先/i, /お問い合わせ/i]

      expectedH2Headings.forEach((headingPattern) => {
        const heading = screen.getByRole('heading', { level: 2, name: headingPattern })
        expect(heading).toBeInTheDocument()
      })
    })

    it('should render icons for sections', () => {
      const { container } = render(<ContactPage />)

      const allSvgIcons = container.querySelectorAll('svg')
      expect(allSvgIcons.length).toBeGreaterThanOrEqual(4)
    })
  })
})

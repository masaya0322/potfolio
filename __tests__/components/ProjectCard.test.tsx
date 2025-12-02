import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
    // Next.js Image component transforms the src to an optimized URL
    expect(image).toHaveAttribute('src')
    expect(image.getAttribute('src')).toContain('test-image.jpg')
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

  describe('Dialog functionality', () => {
    it('should open dialog when card is clicked', async () => {
      const user = userEvent.setup()
      const { container } = render(<ProjectCard {...defaultProps} />)

      // Initially, dialog should not be visible
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

      // Click the card
      const card = container.querySelector('.cursor-pointer')
      await user.click(card!)

      // Dialog should now be visible
      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument()
      })
    })

    it('should display detailed information in dialog', async () => {
      const user = userEvent.setup()
      const { container } = render(
        <ProjectCard
          {...defaultProps}
          githubUrl="https://github.com/test/repo"
          demoUrl="https://demo.example.com"
          imageUrl="/test-image.jpg"
        />
      )

      // Click the card to open dialog
      const card = container.querySelector('.cursor-pointer')
      await user.click(card!)

      await waitFor(() => {
        // Check that dialog is visible
        const dialog = screen.getByRole('dialog')
        expect(dialog).toBeInTheDocument()

        // Check for section headers in dialog
        expect(screen.getByText('プロジェクト概要')).toBeInTheDocument()
        expect(screen.getByText('使用技術')).toBeInTheDocument()
        expect(screen.getByText('リンク')).toBeInTheDocument()

        // Check that all technology tags are visible
        expect(screen.getAllByText('React').length).toBeGreaterThan(0)
        expect(screen.getAllByText('TypeScript').length).toBeGreaterThan(0)
        expect(screen.getAllByText('Tailwind CSS').length).toBeGreaterThan(0)
      })
    })

    it('should close dialog when close button is clicked', async () => {
      const user = userEvent.setup()
      const { container } = render(<ProjectCard {...defaultProps} />)

      // Open dialog
      const card = container.querySelector('.cursor-pointer')
      await user.click(card!)

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument()
      })

      // Close dialog by clicking the X button
      const closeButton = screen.getByRole('button', { name: /close/i })
      await user.click(closeButton)

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      })
    })

    it('should not open dialog when clicking on GitHub link', async () => {
      const user = userEvent.setup()
      render(
        <ProjectCard
          {...defaultProps}
          githubUrl="https://github.com/test/repo"
        />
      )

      // Click GitHub link (should not open dialog)
      const githubLink = screen.getAllByRole('link', { name: /github/i })[0]
      await user.click(githubLink)

      // Dialog should not be visible
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('should not open dialog when clicking on Demo link', async () => {
      const user = userEvent.setup()
      render(
        <ProjectCard
          {...defaultProps}
          demoUrl="https://demo.example.com"
        />
      )

      // Click Demo link (should not open dialog)
      const demoLink = screen.getAllByRole('link', { name: /demo/i })[0]
      await user.click(demoLink)

      // Dialog should not be visible
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })
})

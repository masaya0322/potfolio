import { render, screen } from '@testing-library/react'
import { SkillLevel } from '@/components/SkillLevel'

describe('SkillLevel', () => {
  describe('Bar variant (default)', () => {
    it('should render progress bar with correct level', () => {
      render(<SkillLevel level={3} maxLevel={5} />)

      const progressBar = screen.getByTestId('skill-level-bar')
      expect(progressBar).toBeInTheDocument()
      expect(progressBar).toHaveAttribute('aria-valuenow', '3')
      expect(progressBar).toHaveAttribute('aria-valuemax', '5')
    })

    it('should display level label by default', () => {
      render(<SkillLevel level={4} maxLevel={5} />)

      const label = screen.getByTestId('skill-level-label')
      expect(label).toBeInTheDocument()
      expect(label).toHaveTextContent('4/5')
    })

    it('should hide label when showLabel is false', () => {
      render(<SkillLevel level={3} showLabel={false} />)

      expect(screen.queryByTestId('skill-level-label')).not.toBeInTheDocument()
    })

    it('should calculate correct percentage width', () => {
      render(<SkillLevel level={3} maxLevel={5} />)

      const progressBar = screen.getByTestId('skill-level-bar')
      expect(progressBar).toHaveStyle({ width: '60%' })
    })

    it('should use default maxLevel of 5 when not specified', () => {
      render(<SkillLevel level={3} />)

      const progressBar = screen.getByTestId('skill-level-bar')
      expect(progressBar).toHaveAttribute('aria-valuemax', '5')
    })

    it('should have proper accessibility attributes', () => {
      render(<SkillLevel level={4} maxLevel={5} />)

      const progressBar = screen.getByRole('progressbar')
      expect(progressBar).toHaveAttribute('aria-label', 'スキルレベル: 4/5')
      expect(progressBar).toHaveAttribute('aria-valuenow', '4')
      expect(progressBar).toHaveAttribute('aria-valuemin', '0')
    })
  })

  describe('Text variant', () => {
    it('should render text variant when specified', () => {
      render(<SkillLevel level={1} variant="text" />)

      const levelText = screen.getByTestId('skill-level-text')
      expect(levelText).toBeInTheDocument()
      expect(screen.queryByTestId('skill-level-bar')).not.toBeInTheDocument()
    })

    it('should display correct level text for level 1', () => {
      render(<SkillLevel level={1} variant="text" />)

      expect(screen.getByTestId('skill-level-text')).toHaveTextContent('初級')
    })

    it('should display correct level text for level 2', () => {
      render(<SkillLevel level={2} variant="text" />)

      expect(screen.getByTestId('skill-level-text')).toHaveTextContent('中級')
    })

    it('should display correct level text for level 3', () => {
      render(<SkillLevel level={3} variant="text" />)

      expect(screen.getByTestId('skill-level-text')).toHaveTextContent('中上級')
    })

    it('should display correct level text for level 4', () => {
      render(<SkillLevel level={4} variant="text" />)

      expect(screen.getByTestId('skill-level-text')).toHaveTextContent('上級')
    })

    it('should display correct level text for level 5', () => {
      render(<SkillLevel level={5} variant="text" />)

      expect(screen.getByTestId('skill-level-text')).toHaveTextContent('熟練')
    })
  })

  describe('Edge cases', () => {
    it('should handle level 0', () => {
      render(<SkillLevel level={0} />)

      const progressBar = screen.getByTestId('skill-level-bar')
      expect(progressBar).toHaveStyle({ width: '0%' })
    })

    it('should handle maximum level', () => {
      render(<SkillLevel level={5} maxLevel={5} />)

      const progressBar = screen.getByTestId('skill-level-bar')
      expect(progressBar).toHaveStyle({ width: '100%' })
    })
  })
})

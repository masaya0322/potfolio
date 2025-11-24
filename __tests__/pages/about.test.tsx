import { render, screen } from '@testing-library/react'
import AboutPage from '@/pages/about'

describe('AboutPage', () => {
  it('should render page title', () => {
    render(<AboutPage />)

    const heading = screen.getByRole('heading', { level: 1, name: /about me/i })
    expect(heading).toBeInTheDocument()
  })

  it('should render page description', () => {
    render(<AboutPage />)

    expect(screen.getByText(/私について、経歴、活動、趣味などを紹介します/i)).toBeInTheDocument()
  })

  it('should render profile section', () => {
    render(<AboutPage />)

    const profileHeading = screen.getByRole('heading', { level: 2, name: /プロフィール/i })
    expect(profileHeading).toBeInTheDocument()
    expect(screen.getByText(/山田 太郎/i)).toBeInTheDocument()
  })

  it('should render education section with icon', () => {
    render(<AboutPage />)

    const educationHeading = screen.getByRole('heading', { level: 2, name: /大学・学歴/i })
    expect(educationHeading).toBeInTheDocument()
    expect(screen.getByText(/○○大学 工学部 情報工学科/i)).toBeInTheDocument()
    expect(screen.getByText(/2021年4月 - 2025年3月（予定）/i)).toBeInTheDocument()
  })

  it('should render club activities section with icon', () => {
    render(<AboutPage />)

    const clubHeading = screen.getByRole('heading', { level: 2, name: /サークル活動/i })
    expect(clubHeading).toBeInTheDocument()
    expect(screen.getByText(/プログラミングサークル/i)).toBeInTheDocument()
    expect(screen.getByText(/副代表/i)).toBeInTheDocument()
  })

  it('should render internship section with icon', () => {
    render(<AboutPage />)

    const internshipHeading = screen.getByRole('heading', { level: 2, name: /インターンシップ/i })
    expect(internshipHeading).toBeInTheDocument()
    expect(screen.getByText(/株式会社○○/i)).toBeInTheDocument()
    expect(screen.getByText(/2024年8月 - 2024年9月（1ヶ月）/i)).toBeInTheDocument()
  })

  it('should render hobbies and interests section with icon', () => {
    render(<AboutPage />)

    const hobbiesHeading = screen.getByRole('heading', { level: 2, name: /趣味・興味/i })
    expect(hobbiesHeading).toBeInTheDocument()
    expect(screen.getByText(/プログラミング（Web開発、アプリ開発）/i)).toBeInTheDocument()
  })

  it('should render all section icons', () => {
    const { container } = render(<AboutPage />)

    // 4つのアイコンが存在することを確認（大学、サークル、インターン、趣味）
    const iconContainers = container.querySelectorAll('.rounded-full.p-3')
    expect(iconContainers.length).toBeGreaterThanOrEqual(4)
  })

  it('should have semantic structure', () => {
    render(<AboutPage />)

    // mainタグとnavigationが存在することを確認
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('should render all h2 headings with correct level', () => {
    render(<AboutPage />)

    const expectedH2Headings = [
      /プロフィール/i,
      /大学・学歴/i,
      /サークル活動/i,
      /インターンシップ/i,
      /趣味・興味/i,
    ]

    expectedH2Headings.forEach((headingPattern) => {
      const heading = screen.getByRole('heading', { level: 2, name: headingPattern })
      expect(heading).toBeInTheDocument()
    })
  })
})

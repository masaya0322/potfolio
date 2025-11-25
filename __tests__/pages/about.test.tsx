import { render, screen, within } from '@testing-library/react'
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

  it('should have semantic structure', () => {
    render(<AboutPage />)

    // mainタグとnavigationが存在することを確認
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  describe('Profile Section', () => {
    it('should render profile heading', () => {
      render(<AboutPage />)

      const profileHeading = screen.getByRole('heading', { level: 2, name: /プロフィール/i })
      expect(profileHeading).toBeInTheDocument()
    })

    it('should render profile content with name and description', () => {
      render(<AboutPage />)

      const profileHeading = screen.getByRole('heading', { level: 2, name: /プロフィール/i })
      const profileSection = profileHeading.closest('section')

      expect(profileSection).toBeInTheDocument()
      expect(within(profileSection!).getByRole('heading', { level: 3 })).toBeInTheDocument()
      expect(within(profileSection!).getByText(/Webエンジニア/i)).toBeInTheDocument()
    })
  })

  describe('Education Section', () => {
    it('should render education heading and icon', () => {
      render(<AboutPage />)

      const educationHeading = screen.getByRole('heading', { level: 2, name: /大学・学歴/i })
      expect(educationHeading).toBeInTheDocument()

      // アイコン（SVG）が存在することを確認
      const section = educationHeading.closest('section')
      const icons = section?.querySelectorAll('svg')
      expect(icons!.length).toBeGreaterThan(0)
    })

    it('should render education content', () => {
      render(<AboutPage />)

      const educationHeading = screen.getByRole('heading', { level: 2, name: /大学・学歴/i })
      const educationSection = educationHeading.closest('section')

      expect(educationSection).toBeInTheDocument()
      expect(within(educationSection!).getByRole('heading', { level: 3 })).toBeInTheDocument()
      expect(within(educationSection!).getByText(/専攻・研究内容/i)).toBeInTheDocument()
    })
  })

  describe('Club Activities Section', () => {
    it('should render club activities heading and icon', () => {
      render(<AboutPage />)

      const clubHeading = screen.getByRole('heading', { level: 2, name: /サークル活動/i })
      expect(clubHeading).toBeInTheDocument()

      // アイコン（SVG）が存在することを確認
      const section = clubHeading.closest('section')
      const icons = section?.querySelectorAll('svg')
      expect(icons!.length).toBeGreaterThan(0)
    })

    it('should render club activities content', () => {
      render(<AboutPage />)

      const clubHeading = screen.getByRole('heading', { level: 2, name: /サークル活動/i })
      const clubSection = clubHeading.closest('section')

      expect(clubSection).toBeInTheDocument()
      expect(within(clubSection!).getByRole('heading', { level: 3 })).toBeInTheDocument()
      expect(within(clubSection!).getByText(/活動内容/i)).toBeInTheDocument()
    })
  })

  describe('Internship Section', () => {
    it('should render internship heading and icon', () => {
      render(<AboutPage />)

      const internshipHeading = screen.getByRole('heading', { level: 2, name: /インターンシップ/i })
      expect(internshipHeading).toBeInTheDocument()

      // アイコン（SVG）が存在することを確認
      const section = internshipHeading.closest('section')
      const icons = section?.querySelectorAll('svg')
      expect(icons!.length).toBeGreaterThan(0)
    })

    it('should render internship content with details', () => {
      render(<AboutPage />)

      const internshipHeading = screen.getByRole('heading', { level: 2, name: /インターンシップ/i })
      const internshipSection = internshipHeading.closest('section')

      expect(internshipSection).toBeInTheDocument()
      expect(within(internshipSection!).getByRole('heading', { level: 3 })).toBeInTheDocument()
      expect(within(internshipSection!).getByText(/業務内容/i)).toBeInTheDocument()
      expect(within(internshipSection!).getByText(/学んだこと/i)).toBeInTheDocument()
    })
  })

  describe('Hobbies and Interests Section', () => {
    it('should render hobbies heading and icon', () => {
      render(<AboutPage />)

      const hobbiesHeading = screen.getByRole('heading', { level: 2, name: /趣味・興味/i })
      expect(hobbiesHeading).toBeInTheDocument()

      // アイコン（SVG）が存在することを確認
      const section = hobbiesHeading.closest('section')
      const icons = section?.querySelectorAll('svg')
      expect(icons!.length).toBeGreaterThan(0)
    })

    it('should render hobbies and interests content with lists', () => {
      render(<AboutPage />)

      const hobbiesHeading = screen.getByRole('heading', { level: 2, name: /趣味・興味/i })
      const hobbiesSection = hobbiesHeading.closest('section')

      expect(hobbiesSection).toBeInTheDocument()

      // 趣味セクション
      const hobbySubHeading = within(hobbiesSection!).getByRole('heading', { level: 3, name: /^趣味$/i })
      expect(hobbySubHeading).toBeInTheDocument()

      // 興味のある分野セクション
      const interestsSubHeading = within(hobbiesSection!).getByRole('heading', { level: 3, name: /興味のある分野/i })
      expect(interestsSubHeading).toBeInTheDocument()

      // リストが存在することを確認
      const lists = within(hobbiesSection!).getAllByRole('list')
      expect(lists.length).toBe(2)
    })
  })

  describe('All Sections Structure', () => {
    it('should render all main sections with h2 headings', () => {
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

    it('should render icons for all sections with icons', () => {
      const { container } = render(<AboutPage />)

      // 4つのセクションにアイコンがある（大学、サークル、インターン、趣味）
      // プロフィールセクションにはアイコンがないため4つ
      const allSvgIcons = container.querySelectorAll('svg')
      expect(allSvgIcons.length).toBeGreaterThanOrEqual(4)
    })
  })
})

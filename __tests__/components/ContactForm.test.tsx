import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from '@/components/ContactForm'

// Mock fetch
global.fetch = jest.fn()

describe('ContactForm', () => {
  beforeEach(() => {
    // Reset fetch mock before each test
    ;(global.fetch as jest.Mock).mockClear()
  })
  it('should render all form fields', () => {
    render(<ContactForm />)

    expect(screen.getByLabelText(/名前/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/メールアドレス/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/件名/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/メッセージ/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /送信/i })).toBeInTheDocument()
  })

  it('should render required field indicators', () => {
    const { container } = render(<ContactForm />)

    const requiredIndicators = container.querySelectorAll('.text-red-500')
    expect(requiredIndicators.length).toBe(4)
  })

  describe('Validation', () => {
    it('should show error when name is empty', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const submitButton = screen.getByRole('button', { name: /送信/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/名前を入力してください/i)).toBeInTheDocument()
      })
    })

    it('should show error when email is empty', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const submitButton = screen.getByRole('button', { name: /送信/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/メールアドレスを入力してください/i)).toBeInTheDocument()
      })
    })

    it.skip('should show error when email is invalid', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const emailInput = screen.getByLabelText(/メールアドレス/i)
      const nameInput = screen.getByLabelText(/名前/i)
      const subjectInput = screen.getByLabelText(/件名/i)
      const messageInput = screen.getByLabelText(/メッセージ/i)

      await user.type(nameInput, '山田太郎')
      await user.type(emailInput, 'invalid-email')
      await user.type(subjectInput, 'テスト件名')
      await user.type(messageInput, 'これはテストメッセージです')

      const submitButton = screen.getByRole('button', { name: /送信/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/有効なメールアドレスを入力してください/i)).toBeInTheDocument()
      })
    })

    it('should show error when subject is empty', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const submitButton = screen.getByRole('button', { name: /送信/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/件名を入力してください/i)).toBeInTheDocument()
      })
    })

    it('should show error when message is empty', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const submitButton = screen.getByRole('button', { name: /送信/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/メッセージを入力してください/i)).toBeInTheDocument()
      })
    })

    it('should show error when message is too short', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const messageInput = screen.getByLabelText(/メッセージ/i)
      await user.type(messageInput, 'short')

      const submitButton = screen.getByRole('button', { name: /送信/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/メッセージは10文字以上入力してください/i)).toBeInTheDocument()
      })
    })
  })

  describe('Form Submission', () => {
    it('should submit form with valid data', async () => {
      const user = userEvent.setup()

      // Mock successful API response
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ message: 'メールを送信しました' }),
      })

      render(<ContactForm />)

      await user.type(screen.getByLabelText(/名前/i), '山田太郎')
      await user.type(screen.getByLabelText(/メールアドレス/i), 'test@example.com')
      await user.type(screen.getByLabelText(/件名/i), 'テスト件名')
      await user.type(screen.getByLabelText(/メッセージ/i), 'これはテストメッセージです')

      const submitButton = screen.getByRole('button', { name: /送信/i })
      await user.click(submitButton)

      await waitFor(
        () => {
          expect(global.fetch).toHaveBeenCalledWith('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-Token': 'contact-form',
            },
            body: JSON.stringify({
              name: '山田太郎',
              email: 'test@example.com',
              subject: 'テスト件名',
              message: 'これはテストメッセージです',
            }),
          })
        },
        { timeout: 2000 }
      )
    })

    it('should show success message after submission', async () => {
      const user = userEvent.setup()

      // Mock successful API response
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ message: 'メールを送信しました' }),
      })

      render(<ContactForm />)

      await user.type(screen.getByLabelText(/名前/i), '山田太郎')
      await user.type(screen.getByLabelText(/メールアドレス/i), 'test@example.com')
      await user.type(screen.getByLabelText(/件名/i), 'テスト件名')
      await user.type(screen.getByLabelText(/メッセージ/i), 'これはテストメッセージです')

      const submitButton = screen.getByRole('button', { name: /送信/i })
      await user.click(submitButton)

      await waitFor(
        () => {
          expect(screen.getByTestId('success-message')).toBeInTheDocument()
          expect(screen.getByText(/お問い合わせを送信しました/i)).toBeInTheDocument()
        },
        { timeout: 2000 }
      )
    })

    it('should reset form after successful submission', async () => {
      const user = userEvent.setup()

      // Mock successful API response
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ message: 'メールを送信しました' }),
      })

      render(<ContactForm />)

      const nameInput = screen.getByLabelText(/名前/i) as HTMLInputElement
      const emailInput = screen.getByLabelText(/メールアドレス/i) as HTMLInputElement
      const subjectInput = screen.getByLabelText(/件名/i) as HTMLInputElement
      const messageInput = screen.getByLabelText(/メッセージ/i) as HTMLTextAreaElement

      await user.type(nameInput, '山田太郎')
      await user.type(emailInput, 'test@example.com')
      await user.type(subjectInput, 'テスト件名')
      await user.type(messageInput, 'これはテストメッセージです')

      const submitButton = screen.getByRole('button', { name: /送信/i })
      await user.click(submitButton)

      await waitFor(
        () => {
          expect(nameInput.value).toBe('')
          expect(emailInput.value).toBe('')
          expect(subjectInput.value).toBe('')
          expect(messageInput.value).toBe('')
        },
        { timeout: 2000 }
      )
    })

    it('should disable submit button while submitting', async () => {
      const user = userEvent.setup()

      // Mock API response with delay
      ;(global.fetch as jest.Mock).mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            setTimeout(
              () =>
                resolve({
                  ok: true,
                  json: async () => ({ message: 'メールを送信しました' }),
                }),
              100
            )
          )
      )

      render(<ContactForm />)

      await user.type(screen.getByLabelText(/名前/i), '山田太郎')
      await user.type(screen.getByLabelText(/メールアドレス/i), 'test@example.com')
      await user.type(screen.getByLabelText(/件名/i), 'テスト件名')
      await user.type(screen.getByLabelText(/メッセージ/i), 'これはテストメッセージです')

      const submitButton = screen.getByRole('button', { name: /送信/i })
      await user.click(submitButton)

      expect(screen.getByRole('button', { name: /送信中.../i })).toBeDisabled()

      await waitFor(() => {
        expect(screen.getByRole('button', { name: /送信/i })).not.toBeDisabled()
      })
    })

    it('should show error message when API request fails', async () => {
      const user = userEvent.setup()

      // Mock failed API response
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        json: async () => ({ message: 'メールの送信に失敗しました' }),
      })

      render(<ContactForm />)

      await user.type(screen.getByLabelText(/名前/i), '山田太郎')
      await user.type(screen.getByLabelText(/メールアドレス/i), 'test@example.com')
      await user.type(screen.getByLabelText(/件名/i), 'テスト件名')
      await user.type(screen.getByLabelText(/メッセージ/i), 'これはテストメッセージです')

      const submitButton = screen.getByRole('button', { name: /送信/i })
      await user.click(submitButton)

      await waitFor(
        () => {
          expect(screen.getByTestId('error-message')).toBeInTheDocument()
          expect(screen.getByText(/メールの送信に失敗しました/i)).toBeInTheDocument()
        },
        { timeout: 2000 }
      )
    })
  })

  describe('Accessibility', () => {
    it('should have proper ARIA attributes for invalid fields', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const submitButton = screen.getByRole('button', { name: /送信/i })
      await user.click(submitButton)

      await waitFor(() => {
        const nameInput = screen.getByLabelText(/名前/i)
        expect(nameInput).toHaveAttribute('aria-invalid', 'true')
        expect(nameInput).toHaveAttribute('aria-describedby', 'name-error')
      })
    })

    it('should associate error messages with inputs', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const submitButton = screen.getByRole('button', { name: /送信/i })
      await user.click(submitButton)

      await waitFor(() => {
        const errorMessage = screen.getByText(/名前を入力してください/i)
        expect(errorMessage).toHaveAttribute('id', 'name-error')
        expect(errorMessage).toHaveAttribute('role', 'alert')
      })
    })
  })
})

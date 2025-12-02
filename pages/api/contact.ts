import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// レート制限用のメモリストア
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// レート制限チェック関数（1分間に1回まで）
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetTime) {
    // 新しいレコードを作成または古いレコードをリセット
    rateLimitStore.set(ip, { count: 1, resetTime: now + 60000 }) // 60秒後にリセット
    return true
  }

  if (record.count >= 1) {
    // レート制限を超えている
    return false
  }

  // カウントを増やす
  record.count++
  return true
}

// HTMLエスケープ関数（XSS対策）
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

type ResponseData = {
  message: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  // CSRF保護: カスタムヘッダーをチェック
  const csrfHeader = req.headers['x-csrf-token']
  if (csrfHeader !== 'contact-form') {
    return res.status(403).json({ message: 'Invalid request' })
  }

  // IPアドレスを取得
  const forwarded = req.headers['x-forwarded-for']
  const ip = typeof forwarded === 'string' ? forwarded.split(',')[0] : req.socket.remoteAddress || 'unknown'

  // レート制限チェック
  if (!checkRateLimit(ip)) {
    return res.status(429).json({
      message: '送信回数が多すぎます。しばらく時間をおいてから再度お試しください。',
    })
  }

  try {
    const { name, email, subject, message } = req.body as ContactFormData

    // バリデーション
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'すべてのフィールドを入力してください' })
    }

    // 入力値をサニタイズ（XSS対策）
    const sanitizedName = escapeHtml(name)
    const sanitizedEmail = escapeHtml(email)
    const sanitizedSubject = escapeHtml(subject)
    const sanitizedMessage = escapeHtml(message).replace(/\n/g, '<br>')

    // メール送信
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resendのテストドメイン
      to: [process.env.CONTACT_EMAIL || 'your-email@example.com'], // 受信先メールアドレス
      replyTo: email, // 送信者のメールアドレスを返信先に設定
      subject: `【お問い合わせ】${sanitizedSubject}`,
      html: `
        <h2>新しいお問い合わせがあります</h2>
        <p><strong>名前:</strong> ${sanitizedName}</p>
        <p><strong>メールアドレス:</strong> ${sanitizedEmail}</p>
        <p><strong>件名:</strong> ${sanitizedSubject}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${sanitizedMessage}</p>
      `,
    })

    return res.status(200).json({ message: 'メールを送信しました' })
  } catch (error) {
    console.error('メール送信エラー:', error)
    return res.status(500).json({
      message: 'メールの送信に失敗しました',
      error: error instanceof Error ? error.message : '不明なエラー',
    })
  }
}

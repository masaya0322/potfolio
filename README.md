# Portfolio

個人の電子ポートフォリオサイト

## 概要

このプロジェクトは、自身の経歴、スキル、制作物を紹介するための電子ポートフォリオサイトです。
Next.js と Tailwind CSS を使用したモダンなWebアプリケーションとして実装されています。

## 主な機能

### トップページ
- ABOUT（自己紹介）
- WORK（制作物）
- SKILL（スキル）
- CONTACT（連絡先）

各セクションの概要を表示し、メニューから詳細ページへ遷移できます。

### ABOUT ページ
個人情報や経歴を紹介するページ

- 大学での活動
- サークル活動
- インターンシップ経験
- 趣味・興味

### WORK ページ
これまでの制作物を紹介するページ

- 自主制作物の紹介
- インターンシップでの制作物
- プロジェクトの詳細説明
- **プロジェクト詳細ダイアログ**: カードをクリックすると詳細情報が表示されます

### SKILL ページ
技術スキルを紹介するページ

- 開発経験のあるプログラミング言語
- 使用経験のあるライブラリ・フレームワーク
- その他の技術スキル

### CONTACT ページ
連絡先情報を提供するページ

- GitHub アカウント
- **メール送信機能**: Resend APIを使用した実際のメール送信
- フォームバリデーション（React Hook Form + Zod）
- **セキュリティ対策**:
  - XSS対策（入力値のサニタイズ）
  - CSRF保護（カスタムヘッダー検証）
  - レート制限（1分間に1回の送信制限）

## 技術スタック

- **フレームワーク**: Next.js (Pages Router)
- **スタイリング**: Tailwind CSS
- **UI コンポーネント**: shadcn/ui (Dialog, Button, Navigation Menu, Card)
- **アイコン**: lucide-react
- **日付処理**: date-fns
- **フォーム管理**: react-hook-form
- **バリデーション**: zod
- **メール送信**: Resend API
- **テスト**: Jest, React Testing Library
- **コード品質**: ESLint, Prettier
- **言語**: TypeScript

## セットアップ

### 必要な環境

- Node.js 18.x 以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/masaya0322/Potfolio.git
cd portfolio

# 依存関係をインストール
npm install
```

### 環境変数の設定

お問い合わせフォームのメール送信機能を使用する場合、環境変数の設定が必要です。

1. `.env.local.example` を `.env.local` としてコピー:
```bash
cp .env.local.example .env.local
```

2. `.env.local` を編集して、以下の環境変数を設定:
```bash
# Resend API Key
# Resendのダッシュボードから取得したAPIキーを設定してください
# https://resend.com/api-keys
RESEND_API_KEY=your_resend_api_key_here

# Contact Email
# お問い合わせを受信するメールアドレスを設定してください
CONTACT_EMAIL=your-email@example.com
```

詳細なセットアップ手順については [SETUP_CONTACT_FORM.md](./SETUP_CONTACT_FORM.md) を参照してください。

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
npm run build
```

### 本番環境での起動

```bash
npm run start
```

### テスト

```bash
# すべてのテストを実行
npm test

# ウォッチモードでテストを実行
npm run test:watch
```

## ディレクトリ構造

```
portfolio/
├── __tests__/          # テストファイル
│   ├── components/     # コンポーネントのテスト
│   └── pages/          # ページのテスト
├── assets/             # 静的画像（import用）
├── components/         # 再利用可能なコンポーネント
│   └── ui/             # shadcn/uiコンポーネント
├── pages/              # Next.js ページ
│   ├── api/            # APIルート
│   │   └── contact.ts  # お問い合わせフォームAPI
│   ├── index.tsx       # トップページ
│   ├── about.tsx       # ABOUTページ
│   ├── work.tsx        # WORKページ
│   ├── skill.tsx       # SKILLページ
│   └── contact.tsx     # CONTACTページ
├── public/             # 静的ファイル
│   └── assets/         # 画像ファイル
├── styles/             # スタイルシート
├── types/              # TypeScript型定義
├── utils/              # ユーティリティ関数
├── .env.local.example  # 環境変数のテンプレート
└── SETUP_CONTACT_FORM.md  # お問い合わせフォーム設定ガイド
```

## 開発ガイドライン

詳細な開発規約については [DEVELOPMENT.md](./DEVELOPMENT.md) を参照してください。

### 主な規約

- ケバブケース（kebab-case）を使用したファイル命名
- アロー関数の統一使用
- Props の型は `(コンポーネント名)Props` で統一
- `@` エイリアスを使用した import パス
- DRY/OAOO 原則に従った実装

## コミット規約

[Conventional Commits](https://www.conventionalcommits.org/) に従ってコミットメッセージを作成してください。

```
feat: 新機能の追加
fix: バグ修正
docs: ドキュメントの変更
style: コードフォーマットの変更
refactor: リファクタリング
perf: パフォーマンス改善
test: テストの追加・修正
chore: ビルドプロセスやツールの変更
```

## ライセンス

このプロジェクトは個人用ポートフォリオサイトです。

## 作者

masaya0322

- GitHub: [@masaya0322](https://github.com/masaya0322)

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

### SKILL ページ
技術スキルを紹介するページ

- 開発経験のあるプログラミング言語
- 使用経験のあるライブラリ・フレームワーク
- その他の技術スキル

### CONTACT ページ
連絡先情報を提供するページ

- GitHub アカウント
- 連絡用フォーム

## 技術スタック

- **フレームワーク**: Next.js (Pages Router)
- **スタイリング**: Tailwind CSS
- **UI コンポーネント**: shadcn/ui
- **アイコン**: lucide-react
- **日付処理**: date-fns
- **フォーム管理**: react-hook-form
- **バリデーション**: zod
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

## ディレクトリ構造

```
portfolio/
├── assets/              # 静的画像（import用）
├── components/          # 再利用可能なコンポーネント
├── pages/              # Next.js ページ
│   ├── index.tsx       # トップページ
│   ├── about.tsx       # ABOUTページ
│   ├── work.tsx        # WORKページ
│   ├── skill.tsx       # SKILLページ
│   └── contact.tsx     # CONTACTページ
├── styles/             # スタイルシート
├── types/              # TypeScript型定義
└── utils/              # ユーティリティ関数
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

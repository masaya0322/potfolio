# 開発ガイドライン

この開発ガイドラインは、以下のドキュメントや規約を参考に作成されています。

- [Next.js ドキュメント](https://nextjs.org/docs)
- [React ドキュメント](https://react.dev/)
- [TypeScript ドキュメント](https://www.typescriptlang.org/docs/)
- [Tailwind CSS ドキュメント](https://tailwindcss.com/docs)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub CLI ドキュメント](https://cli.github.com/manual/)

このドキュメントは、ポートフォリオプロジェクトの開発における規約とベストプラクティスをまとめたものです。

## 目次

1. [コーディング規約](#コーディング規約)
2. [命名規則](#命名規則)
3. [ディレクトリ構造](#ディレクトリ構造)
4. [Git ワークフロー](#git-ワークフロー)
5. [コミットメッセージ規約](#コミットメッセージ規約)
6. [ISSUE/PR の作成](#issuepr-の作成)
7. [設計原則](#設計原則)

---

## コーディング規約

### TypeScript

- **厳密な型定義**: `any` の使用は避け、適切な型を定義する
- **インターフェースの使用**: オブジェクトの型定義には `interface` を優先
- **型推論の活用**: 明らかな場合は型アノテーションを省略可
- **Props の型推論**: RPC等を活用した型推論を用いる

```typescript
// Good
interface User {
  id: number
  name: string
  email: string
}

const user: User = {
  id: 1,
  name: '山田太郎',
  email: 'yamada@example.com'
}

// Bad - any の使用
const user: any = { ... }
```

### React

- **関数コンポーネント**: クラスコンポーネントではなく、関数コンポーネントを使用
- **アロー関数の使用**: 関数は全てアロー関数で統一する
- **Hooks の使用**: ステート管理には `useState`, `useEffect` などのHooksを使用
- **Props の型定義**: すべての Props に型を定義
- **Props の型命名**: `(コンポーネント名)Props` で統一する
- **Props の受け取り**: Props は展開して受け取る
- **default export の制限**: システム上必要なもの（ページコンポーネント、getServerSidePropsなど）以外は行わない
- **ページコンポーネントの分離**: default export とページコンポーネントを別々に分ける
- **Component の型**: `JSX.Element` を記述しない

```typescript
// Good
interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

const Button = ({ onClick, children, variant = 'primary' }: ButtonProps) => {
  return (
    <button onClick={onClick} className={variant}>
      {children}
    </button>
  )
}

export { Button }

// ページコンポーネントの例
const HomePage = () => {
  return <div>Home Page</div>
}

export default HomePage
```

### Next.js Pages Router

- **getServerSideProps の変数命名**:
  - Response は `hogeRes` で統一
  - JSON データは `hogeData` で統一
  - Context 変数名は `ctx` で統一
- **エラーハンドリング**: GET で response が 200 でないときは 404 ページを返す
- **Context の型解決**: ctx の型解決は直接行う
- **動的パラメータ**: params から動的パラメータを受け取る際は `as string` を使う
- **ページの責務**: そのページに関する情報・機能を pages から切り出さない

```typescript
// Good
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { id } = ctx.params as { id: string }

  const userRes = await fetch(`/api/users/${id}`)

  if (!userRes.ok) {
    return { notFound: true }
  }

  const userData = await userRes.json()

  return {
    props: { userData }
  }
}
```

### コンポーネント設計

- **コンポーネントの切り出し**: ページコンポーネントの記述量が増えたり複雑度が高くなる場合は、コンポーネントを適度に切り出す
- **余白の責務**: 余白の調整はページの責務なので、最上位の要素にマージンをつけない
- **コンポーネント命名**: PascalCase で命名する
- **Props の型宣言**: Props の型はコンポーネントの前で宣言する

### スタイリング

- **Tailwind CSS**: ユーティリティクラスを使用
- **クラス名の整理**: 長いクラス名は改行して整理
- **カスタムスタイル**: 必要に応じて `globals.css` にカスタムユーティリティを定義

```tsx
// Good
<div className="
  flex items-center justify-center
  p-4 rounded-lg
  bg-gradient-to-r from-purple-500 to-pink-500
  hover:shadow-xl transition-all
">
  コンテンツ
</div>
```

---

## 命名規則

### ファイル名

- **基本原則**: ケバブケース（kebab-case）を使用
- **pages 以外**: export するものの命名に合わせる
  - コンポーネント: PascalCase で export する場合は PascalCase（例: `Navigation.tsx`, `UserProfile.tsx`）
  - ユーティリティ: camelCase で export する場合は camelCase（例: `formatDate.ts`, `apiClient.ts`）
- **ページ**: kebab-case（例: `about.tsx`, `contact.tsx`）
- **型定義**: PascalCase（例: `User.ts`, `ApiResponse.ts`）

### 変数・関数名

- **変数**: camelCase（例: `userName`, `isLoading`）
- **定数**: UPPER_SNAKE_CASE（例: `API_URL`, `MAX_ITEMS`）
- **関数**: camelCase（例: `getUserData`, `handleSubmit`）
- **関数定義**: 必ずアロー関数を使用する
- **コンポーネント**: PascalCase（例: `UserCard`, `NavigationMenu`）

### 真偽値

- **接頭辞**: `is`, `has`, `should`, `can` を使用

```typescript
// Good
const isLoading = true
const hasError = false
const shouldUpdate = true
const canEdit = false

// Bad
const loading = true
const error = false
```

### イベントハンドラ

- **接頭辞**: `handle` または `on` を使用

```typescript
// Good
const handleClick = () => { ... }
const handleSubmit = () => { ... }
const onUserChange = () => { ... }

// Bad
const click = () => { ... }
const submit = () => { ... }
```

---

## ディレクトリ構造

```
portfolio/
├── .github/              # GitHub関連設定
│   ├── ISSUE_TEMPLATE/   # ISSUEテンプレート
│   └── PULL_REQUEST_TEMPLATE.md
├── assets/              # 静的画像（import用）
│   └── images/
├── components/          # 再利用可能なコンポーネント
│   ├── Layout.tsx
│   ├── Navigation.tsx
│   └── Footer.tsx
├── pages/               # Next.js ページ
│   ├── _app.tsx
│   ├── index.tsx
│   ├── about.tsx
│   └── projects.tsx
├── styles/              # スタイルシート
│   └── globals.css
├── public/              # 静的ファイル（直接URL参照用）
│   └── favicon.ico
├── types/               # TypeScript型定義
│   └── index.ts
├── utils/               # ユーティリティ関数
│   └── helpers.ts
└── README.md
```

### ディレクトリ構造の原則

- **re-export を行わない**: モジュールの再エクスポートは行わず、直接インポートする
- **import パス**: エイリアス `@` を使用する（例: `import { Button } from '@/components/Button'`）
- **静的画像**: assets フォルダから import して使用する
- **public フォルダ**: 直接 URL で参照する必要があるファイルのみ配置

---

## Git ワークフロー

### ブランチ戦略

- **main**: 本番環境のコード（常にデプロイ可能な状態）
- **feature/\***: 新機能開発用ブランチ
- **fix/\***: バグ修正用ブランチ
- **refactor/\***: リファクタリング用ブランチ
- **docs/\***: ドキュメント更新用ブランチ

### ブランチ命名規則

```bash
# 新機能
feature/add-contact-form
feature/implement-dark-mode

# バグ修正
fix/navigation-mobile-menu
fix/form-validation-error

# リファクタリング
refactor/extract-header-component
refactor/optimize-image-loading

# ドキュメント
docs/update-readme
docs/add-setup-guide
```

### 作業フロー

1. **ISSUE作成**: 作業内容をISSUEとして記録
2. **ブランチ作成**: mainブランチから作業用ブランチを作成
3. **開発**: 機能実装やバグ修正
4. **コミット**: 適切な単位でコミット
5. **PR作成**: mainブランチへのPRを作成
6. **レビュー**: コードレビューを受ける
7. **マージ**: 承認後にマージ

```bash
# 1. 最新のmainブランチに移動
git checkout main
git pull origin main

# 2. 作業用ブランチを作成
git checkout -b feature/add-new-page

# 3. 開発作業
# ... コードを編集 ...

# 4. コミット
git add .
git commit -m "feat: 新しいページを追加"

# 5. プッシュ
git push origin feature/add-new-page

# 6. GitHub上でPRを作成
gh pr create --title "新しいページの追加" --body "..."
```

---

## コミットメッセージ規約

**Conventional Commits** に従います。

### フォーマット

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type（必須）

- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメントのみの変更
- `style`: コードの動作に影響しない変更（フォーマット、セミコロンなど）
- `refactor`: バグ修正や機能追加を伴わないコード変更
- `perf`: パフォーマンス改善
- `test`: テストの追加や修正
- `chore`: ビルドプロセスやツールの変更

### 例

```bash
# 新機能
feat: お問い合わせフォームを追加

# バグ修正
fix: ナビゲーションメニューのモバイル表示を修正

# ドキュメント
docs: READMEにセットアップ手順を追加

# スタイル
style: コードフォーマットを修正

# リファクタリング
refactor: Headerコンポーネントを分離

# パフォーマンス
perf: 画像の遅延読み込みを実装
```

### コミットメッセージのガイドライン

1. **件名（subject）**:
   - 50文字以内
   - 動詞で始める（「追加」「修正」「更新」など）
   - 末尾にピリオドを付けない

2. **本文（body）**（オプション）:
   - 変更の理由や詳細を記載
   - 72文字で改行

3. **フッター（footer）**（オプション）:
   - ISSUE番号を記載（例: `Closes #123`）

---

## ISSUE/PR の作成

### ISSUEの作成

```bash
# gh コマンドで作成
gh issue create --title "タイトル" --body "説明"

# インタラクティブに作成
gh issue create
```

**ISSUEに含めるべき内容:**
- 目的・背景
- 実装内容
- 受け入れ条件
- 参考資料（あれば）

### PRの作成

```bash
# gh コマンドで作成
gh pr create --title "タイトル" --body "説明"

# インタラクティブに作成
gh pr create
```

**PRに含めるべき内容:**
- 変更内容の概要
- 関連ISSUE（`Closes #123`）
- スクリーンショット（UI変更の場合）
- テスト方法
- チェックリスト

### PRチェックリスト

- [ ] コードが正しく動作することを確認
- [ ] コーディング規約に従っている
- [ ] コミットメッセージが規約に従っている
- [ ] 不要なコメントやconsole.logを削除
- [ ] TypeScriptのエラーがない
- [ ] ESLintのエラーがない

---

## 設計原則

### DRY (Don't Repeat Yourself) 原則

- 同じコードを複数箇所に書かない
- 重複するロジックは関数やコンポーネントに抽出する
- 共通の型定義は再利用する

### OAOO (Once And Only Once) 原則

- 各機能やロジックは一箇所にのみ実装する
- 変更が必要な場合は一箇所の修正で済むようにする
- コードの保守性を高める

```typescript
// Bad - 重複したコード
const formatUserName1 = (name: string) => name.toUpperCase()
const formatUserName2 = (name: string) => name.toUpperCase()

// Good - 一箇所に統一
const formatUserName = (name: string) => name.toUpperCase()
```

---

## 参考資料

- [Next.js ドキュメント](https://nextjs.org/docs)
- [React ドキュメント](https://react.dev/)
- [TypeScript ドキュメント](https://www.typescriptlang.org/docs/)
- [Tailwind CSS ドキュメント](https://tailwindcss.com/docs)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub CLI ドキュメント](https://cli.github.com/manual/)

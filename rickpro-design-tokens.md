# リックプロ HP リニューアル — デザイントークン & SSoT

> デザインの値（色・フォントサイズ・余白など）の正本（Single Source of Truth）はCSSカスタムプロパティに置く。
> 実装時にHEX値・ピクセル値・カラーコードを直書きすることは厳禁。

## カラー定義

| 変数名 | 値 | 用途 |
|--------|-----|------|
| `--color-primary` | `#FFCA08` | 強調・ボタン・アイコン背景・選ばれた理由などのメインセクション背景 |
| `--color-secondary` | `#004785` | フッター背景・主要な見出し（H2など）・アクセントテキスト |
| `--color-accent-green` | `#4CB31C` | 電話番号・LINE・お問い合わせなど、ソフトなアクション用ボタン |
| `--color-accent-orange` | `#EF653A` | 無料・見積もり・Webお問い合わせなど、コンバージョン（CV）用ボタン |
| `--color-bg-white` | `#FFFFFF` | 基本の背景色・カードコンポーネントの背景 |
| `--color-bg-light` | `#F5EFDF` | お客様の声・お知らせなど、白背景と交互に使用する帯状背景 |
| `--color-text-main` | `#333333` | 本文・一般的なテキスト（完全な黒 #000000 は避ける） |

## 余白とサイズ

| 変数名 | 値 | 用途 |
|--------|-----|------|
| `--container-width` | `1080px` | PC表示時のコンテンツ領域の中央揃え用 |
| `--spacing-section-pc` | `80px 0` | セクション間余白（PC） |
| `--spacing-section-sp` | `50px 0` | セクション間余白（SP） |
| `--radius-card` | `12px` | カードコンポーネント用・親しみやすい演出 |
| `--radius-pill` | `9999px` | ボタン用・完全なカプセル型 |

## タイポグラフィ

| 項目 | 値 |
|------|-----|
| フォントファミリー | `'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Meiryo', sans-serif` |
| H2（セクション見出し） | `28px〜32px` / `font-weight: 700` |
| Base（本文） | `16px` / `line-height: 1.6〜1.8` |

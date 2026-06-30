# リック・プロ HP リニューアル — デザインスタイルガイド

> **参照元**: https://www.ricpro.com/ のスクリーンショット + `rickpro-design-tokens.md`
> デザイントークン（SSoT）は `rickpro-design-tokens.md` が正本。本書はその**実装ルール・コンポーネント仕様書**として機能する。

---

## 1. ブランドトーン & デザイン原則

| 軸 | 説明 |
|----|------|
| **親しみやすさ** | 丸みのある角丸・黄色の温かみで「相談しやすさ」を演出 |
| **信頼・安心感** | 紺色（secondary）で専門性・誠実さを表現 |
| **行動喚起の明確さ** | 電話（緑）・Web問い合わせ（オレンジ）の2色で迷わせない |
| **地域密着** | 石川県・金沢を前面に、写真は実際の施工・スタッフを使用 |

---

## 2. カラーシステム

### 2-1 トークン定義（`rickpro-design-tokens.md` より転記）

```css
:root {
  --color-primary:       #FFCA08;  /* 黄：強調・背景・アイコン */
  --color-secondary:     #004785;  /* 紺：見出し・ヘッダー・フッター */
  --color-accent-green:  #4CB31C;  /* 緑：電話・LINE・ソフトCTA */
  --color-accent-orange: #EF653A;  /* 橙：Web問合せ・CV用CTA */
  --color-bg-white:      #FFFFFF;  /* 白：基本背景 */
  --color-bg-light:      #F5EFDF;  /* アイボリー：交互背景 */
  --color-text-main:     #333333;  /* 本文テキスト */
}
```

### 2-2 拡張カラー（スクリーンショット観察値）

```css
:root {
  /* テキスト補助 */
  --color-text-sub:        #666666;  /* 補足テキスト・キャプション */
  --color-text-on-primary: #004785;  /* 黄背景上のテキスト → secondary を使う */
  --color-text-on-dark:    #FFFFFF;  /* 紺・暗背景上のテキスト */

  /* ボーダー */
  --color-border-default:  #E0D8C8;  /* カード枠線・区切り線 */
  --color-border-accent:   #FFCA08;  /* 強調枠線（左ボーダーアクセント等） */

  /* シャドウ */
  --shadow-card: 0 4px 16px rgba(0, 0, 0, 0.08);
  --shadow-btn:  0 2px  8px rgba(0, 0, 0, 0.15);

  /* 採用セクション等のオーバーレイ */
  --overlay-dark: rgba(0, 20, 50, 0.60);
}
```

### 2-3 カラー使用マトリクス

| 用途 | PC可視要素 | 使用トークン |
|------|-----------|------------|
| ページ背景（奇数セクション） | 白 | `--color-bg-white` |
| ページ背景（偶数セクション） | アイボリー | `--color-bg-light` |
| 選ばれる理由・メイン帯 | 黄 | `--color-primary` |
| フッター背景 | 紺 | `--color-secondary` |
| H2 テキスト | 紺 | `--color-secondary` |
| 番号バッジ（01/02/03） | 黄地に紺文字 | primary bg + text-on-primary |
| 電話ボタン | 緑 | `--color-accent-green` |
| Web問合せボタン | 橙 | `--color-accent-orange` |
| 電話番号テキスト | 紺 | `--color-secondary` |

---

## 3. タイポグラフィ

### 3-1 フォントスタック

```css
font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Meiryo', sans-serif;
```

Google Fonts から `wght@400;700` を読み込む（他のウェイトは使わない）。

### 3-2 タイプスケール

| 役割 | サイズ（PC） | サイズ（SP） | Weight | Line-height | 色 |
|------|------------|------------|--------|------------|-----|
| ページ大見出し（H1 相当・ヒーロー） | `36px` | `24px` | 700 | 1.3 | `--color-text-on-dark` |
| セクション見出し（H2） | `30px` | `22px` | 700 | 1.4 | `--color-secondary` |
| カード見出し（H3） | `20px` | `18px` | 700 | 1.5 | `--color-secondary` |
| 番号ラベル（01/02/03） | `48px` | `36px` | 700 | 1.0 | `--color-primary` |
| 本文 | `16px` | `15px` | 400 | 1.8 | `--color-text-main` |
| 補足・キャプション | `14px` | `13px` | 400 | 1.6 | `--color-text-sub` |
| ボタンテキスト | `16px` | `15px` | 700 | 1.0 | （各ボタン定義参照） |
| 電話番号（大） | `36px` | `28px` | 700 | 1.0 | `--color-secondary` |
| フッターリンク | `13px` | `13px` | 400 | 1.6 | `--color-text-on-dark` |

### 3-3 見出し装飾ルール

```
H2 の下には幅 48px・高さ 4px・radius pill の黄色バーを中央配置する。
テキスト左揃えの場合は左端揃え。中央揃えセクションは center。
```

---

## 4. スペーシング & グリッド

### 4-1 コンテナ

```css
.container {
  max-width: var(--container-width); /* 1080px */
  margin: 0 auto;
  padding: 0 24px;   /* PC */
}

@media (max-width: 768px) {
  .container { padding: 0 16px; }
}
```

### 4-2 セクション余白

```css
section { padding: var(--spacing-section-pc); }  /* 80px 0 */

@media (max-width: 768px) {
  section { padding: var(--spacing-section-sp); }  /* 50px 0 */
}
```

### 4-3 グリッドパターン

| パターン | 列数（PC） | 列数（SP） | gap | 使用箇所 |
|---------|-----------|-----------|-----|---------|
| 3カラム均等 | 3 | 1 | `24px` | 選ばれる理由・お客様の声 |
| 2カラム均等 | 2 | 1 | `32px` | 認定/資格・アクセス |
| 2カラム（テキスト+画像） | `1fr 1fr` | 1 | `48px` | 会社案内・採用 |

### 4-4 内部余白（コンポーネント）

```css
--padding-card:    28px 24px;
--padding-btn-lg:  16px 36px;
--padding-btn-md:  12px 28px;
--padding-btn-sm:   8px 20px;
```

---

## 5. コンポーネント仕様

### 5-1 ボタン

4種類のボタンを使い分ける。直書き厳禁（必ずトークン参照）。

#### A. 電話CTAボタン（緑）

```
背景: --color-accent-green
テキスト: --color-text-on-dark (#FFFFFF)
角丸: --radius-pill (9999px)
Padding: 14px 36px
Font: 16px / 700
アイコン: 電話受話器アイコン（SVG） + テキスト、gap 8px
Shadow: --shadow-btn
用途: フリーダイヤル・LINE・電話番号アクション
```

#### B. Web問合せCTAボタン（橙）

```
背景: --color-accent-orange
テキスト: --color-text-on-dark
角丸: --radius-pill
Padding: 14px 36px
Font: 16px / 700
アイコン: メールアイコン（SVG） + テキスト、gap 8px
Shadow: --shadow-btn
用途: Webお問い合わせ・無料見積もり
```

#### C. セカンダリボタン（黄）

```
背景: --color-primary
テキスト: --color-text-on-primary (--color-secondary)
角丸: --radius-pill
Padding: 12px 32px
Font: 15px / 700
用途: 「全施工事例をみる」「くわしくみる」など一覧リンク
```

#### D. アウトラインボタン

```
背景: transparent
ボーダー: 2px solid --color-secondary
テキスト: --color-secondary
角丸: --radius-pill
Padding: 10px 28px
Font: 14px / 700
用途: サブアクション・フッター近辺
```

---

### 5-2 セクション見出しブロック

```html
<!-- 構造 -->
<div class="section-header">
  <h2 class="section-title">選ばれる理由</h2>           <!-- H2 -->
  <p class="section-subtitle">REASON</p>              <!-- 英語サブ（任意） -->
</div>
```

```css
.section-title {
  font-size: 30px;
  font-weight: 700;
  color: var(--color-secondary);
  text-align: center;
}
.section-title::after {
  content: '';
  display: block;
  width: 48px; height: 4px;
  background: var(--color-primary);
  border-radius: var(--radius-pill);
  margin: 12px auto 0;
}
.section-subtitle {
  font-size: 13px;
  letter-spacing: 0.12em;
  color: var(--color-text-sub);
  text-align: center;
  margin-bottom: 40px;
}
```

---

### 5-3 特徴カード（番号付き）— 「選ばれる理由」

スクリーンショット観察: 3列、画像上に被さる黄色ナンバー、カード内は白背景。

```
┌──────────────────────┐
│  [施工イメージ画像]    │  ← 高さ 200px、object-fit: cover
│                      │
├──────────────────────┤
│  01                  │  ← 48px / 700 / --color-primary
│  グループの総合力で   │  ← 20px / 700 / --color-secondary
│  リフォーム選択を実現 │
│                      │
│  本文テキスト...      │  ← 15px / 400 / --color-text-main
└──────────────────────┘

背景: --color-bg-white
角丸: --radius-card (12px)
Shadow: --shadow-card
border: none（影のみ）
Padding（テキスト部）: 20px
```

---

### 5-4 お客様の声カード

スクリーンショット観察: 施工写真 + タグ（工事種別）+ 短い感想文。

```
┌──────────────────────┐
│  [施工写真]           │  ← 高さ 180px、object-fit: cover
├──────────────────────┤
│  [外壁塗装] [屋根塗装]│  ← タグバッジ: primary bg, secondary text, pill
│                      │
│  "満足です！すごく..."│  ← 14px / 400 / --color-text-main
│  金沢市 K様           │  ← 12px / 400 / --color-text-sub
└──────────────────────┘

背景: --color-bg-white
角丸: --radius-card
Shadow: --shadow-card
Padding: 16px
```

タグバッジ:
```css
.work-tag {
  background: var(--color-primary);
  color: var(--color-text-on-primary);
  font-size: 12px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: var(--radius-pill);
}
```

---

### 5-5 プロセスステップ（リフォームの流れ）

スクリーンショット観察: 縦リスト。左に黄丸ナンバー、右にタイトル、最右に展開矢印。

```
[ 01 ]  お問い合わせ・ご相談           ＞
[ 02 ]  現地調査・プランニング          ＞
...
[ 08 ]  アフターフォロー               ＞
```

```css
.step-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 24px;
  border-bottom: 1px solid var(--color-border-default);
  cursor: pointer;
}
.step-number {
  width: 48px; height: 48px;
  background: var(--color-primary);
  color: var(--color-text-on-primary);
  border-radius: 50%;
  font-size: 18px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.step-title {
  flex: 1;
  font-size: 16px; font-weight: 700;
  color: var(--color-secondary);
}
.step-arrow {
  color: var(--color-primary);
  font-size: 20px;
}
```

---

### 5-6 FAQ アコーディオン

スクリーンショット観察: 質問行に "Q" + 黄色ハイライト、"+" 展開アイコン。

```css
.faq-item { border-bottom: 1px solid var(--color-border-default); }

.faq-question {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  cursor: pointer;
}
.faq-q-badge {
  width: 32px; height: 32px;
  background: var(--color-primary);
  color: var(--color-text-on-primary);
  border-radius: 50%;
  font-size: 16px; font-weight: 700;
  flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.faq-q-text {
  flex: 1;
  font-size: 16px; font-weight: 700;
  color: var(--color-secondary);
}
.faq-icon {
  width: 24px; height: 24px;
  color: var(--color-primary);
  /* +/- トグル */
}
.faq-answer {
  padding: 0 24px 20px 72px;
  font-size: 15px;
  color: var(--color-text-main);
  line-height: 1.8;
}
```

---

### 5-7 ヘッダー構成

スクリーンショット観察: 3段構成。

```
┌─────────────────────────────────────────────────┐
│ [情報バー] SNS / 小さいリンク群          テキスト │  ← bg: white, 高さ ~36px
├─────────┬───────────────────┬─────────────────────┤
│ [外装]  │   [ロゴ]          │  [内装]             │  ← bg: white, 高さ ~120px
│ バナー  │  リックプロ       │  バナー             │
│ 画像    │  外壁|屋根|内装   │  画像               │
├─────────┴───────────────────┴─────────────────────┤
│  HOME ｜ リフォームメニュー ｜ 施工事例 ｜...      │  ← bg: secondary, 高さ ~44px
└─────────────────────────────────────────────────┘
```

| 要素 | スタイル |
|------|---------|
| 情報バー 背景 | `--color-bg-white` |
| 情報バー テキスト | `12px / --color-text-sub` |
| ロゴエリア 背景 | `--color-bg-white` |
| ナビ 背景 | `--color-secondary` |
| ナビ テキスト | `14px / 700 / --color-text-on-dark` |
| ナビ hover | `--color-primary` テキスト or 下線 |

---

### 5-8 電話番号 CTA バー（黄帯）

スクリーンショット観察: フリーダイヤル帯（黄背景）+ 副次リンク行。

```
┌─────────────────────────────────────────────────┐
│  📞 0120-069-007   営業 9:30-18:00 水曜定休      │  ← bg: primary
│  [LINEでご相談]  [ネットでお問い合わせ]          │
├─────────────────────────────────────────────────┤
│  訪問なし | 来店予約 | チャット相談 | LINE相談    │  ← bg: secondary / テキスト白
└─────────────────────────────────────────────────┘
```

```css
.phone-bar {
  background: var(--color-primary);
  padding: 20px 0;
}
.phone-number {
  font-size: 36px;
  font-weight: 700;
  color: var(--color-secondary);
  letter-spacing: 0.04em;
}
.phone-hours {
  font-size: 13px;
  color: var(--color-secondary);
  opacity: 0.8;
}
.sub-nav-bar {
  background: var(--color-secondary);
  padding: 10px 0;
}
.sub-nav-link {
  font-size: 13px;
  color: var(--color-text-on-dark);
  opacity: 0.85;
  padding: 0 16px;
  border-right: 1px solid rgba(255,255,255,0.2);
}
```

---

### 5-9 採用セクション（ダークオーバーレイ）

スクリーンショット観察: スタッフ集合写真に半透明紺オーバーレイ。

```css
.recruit-section {
  position: relative;
  background-image: url('/images/recruit-bg.jpg');
  background-size: cover;
  background-position: center;
}
.recruit-overlay {
  background: var(--overlay-dark);  /* rgba(0,20,50,0.60) */
  padding: 80px 0;
}
.recruit-heading {
  font-size: 28px;
  font-weight: 700;
  color: var(--color-text-on-dark);
  line-height: 1.5;
}
```

---

### 5-10 フッター

スクリーンショット観察: 紺背景・多列リンクグリッド・ロゴ・著作権。

```
┌─────────────────────────────────────────────────┐
│ [ロゴ]  ナビリンク群（4〜5列）                   │  ← padding-top: 60px
│                                                  │
│ SNSアイコン  お問い合わせボタン                   │
├─────────────────────────────────────────────────┤
│ Copyright © RIC PRO inc. All Rights Reserved.    │  ← border-top: 1px rgba白
└─────────────────────────────────────────────────┘
```

```css
.site-footer {
  background: var(--color-secondary);
  color: var(--color-text-on-dark);
  padding: 60px 0 0;
}
.footer-nav-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
}
.footer-nav-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 12px;
}
.footer-nav-link {
  font-size: 13px;
  color: rgba(255,255,255,0.75);
  text-decoration: none;
  display: block;
  margin-bottom: 8px;
}
.footer-copyright {
  border-top: 1px solid rgba(255,255,255,0.15);
  padding: 20px 0;
  text-align: center;
  font-size: 12px;
  color: rgba(255,255,255,0.5);
  margin-top: 48px;
}
```

---

## 6. ページセクション構成パターン

### 奇数（白）→ 偶数（アイボリー）交互ルール

```
1. ヒーロー / ヘッダー      → bg: secondary（紺）
2. 電話CTAバー             → bg: primary（黄）
3. 選ばれる理由             → bg: bg-white
4. グループ紹介             → bg: bg-white（続き）
5. お客様の声              → bg: bg-light（アイボリー）
6. リフォームの流れ         → bg: bg-white
7. よくある質問             → bg: bg-light
8. 採用情報                → bg: overlay（写真）
9. 会社案内                → bg: bg-white
10. CTAバー                → bg: secondary（紺）
11. フッター               → bg: secondary（紺）
```

---

## 7. マスコット & キャラクター使用ルール

スクリーンショット観察: 各セクション右上隅に人物キャラクター画像が配置される。

- セクション右端に `position: absolute; right: 0; bottom: 0;` で配置
- 画像サイズはセクション高さに合わせてスケール（高さ 150〜200px 目安）
- SP では非表示（`display: none`）にして余白を確保する
- 白背景・アイボリー背景どちらのセクションにも使用可

---

## 8. レスポンシブブレークポイント

```css
/* デスクトップファースト */
@media (max-width: 1080px) { /* コンテナ縮小 */ }
@media (max-width:  768px) { /* タブレット: 2カラム → 1カラム */ }
@media (max-width:  480px) { /* スマートフォン: フォント縮小・余白縮小 */ }
```

| 変更点 | 768px 以下 |
|--------|-----------|
| グリッド | 3列 → 1列 |
| セクション余白 | `80px 0` → `50px 0` |
| H2 フォント | `30px` → `22px` |
| 電話番号 | `36px` → `28px` |
| フッターグリッド | 5列 → 2列 |
| マスコット | 表示 → 非表示 |
| ボタン | 横並び → 縦並び・幅100% |

---

## 9. 画像ガイドライン

| 種別 | 比率 | object-fit | 説明 |
|------|------|-----------|------|
| ヒーローバナー | 16:9 | cover | 外装・内装イメージ |
| カード画像 | 4:3 | cover | 施工事例・お客様の声 |
| スタッフ写真 | 自由 | contain | 代表・スタッフ個人 |
| 採用背景 | 16:9 | cover | チームの集合写真 |
| 会社外観 | 3:2 | cover | 本社・ショールーム |

- 画像は `loading="lazy"` 必須
- alt テキスト必須（装飾のみの場合は `alt=""`）

---

## 10. アクセシビリティ チェックリスト

- [ ] 色のコントラスト比: 黄（`#FFCA08`）上の紺テキストは WCAG AA 適合確認済
- [ ] フォーカスリング: `:focus-visible` で `outline: 2px solid var(--color-secondary)` を設定
- [ ] ボタン最小タップサイズ: 44px × 44px 以上
- [ ] 電話番号: `<a href="tel:...">` タグで電話リンク化
- [ ] FAQ アコーディオン: `aria-expanded` / `aria-controls` を実装
- [ ] 画像: 全ての `<img>` に意味のある `alt` を付与

---

## 11. 実装禁止事項

| 禁止 | 理由 |
|------|------|
| HEX値の直書き | SSoT 違反（必ずトークン変数を使用） |
| `#000000` の使用 | テキストには `--color-text-main (#333333)` を使用 |
| `!important` の多用 | カスケードを壊す |
| インラインスタイル | コンポーネントクラスで管理 |
| SP でのマスコット表示 | レイアウト崩れを招く |
| ボタンの `<div>` 実装 | セマンティクス・アクセシビリティ違反 |

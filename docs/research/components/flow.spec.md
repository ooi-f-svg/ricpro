# Flow Section Specification

## Overview
- **Target file:** `src/components/Flow.tsx`
- **Screenshot:** `docs/design-references/06-flow.png`
- **Interaction model:** click-driven accordion — each step header is clickable, expands the description below

## DOM Structure
```
section.flow                             [bg: #F5EEE9, padding: 60px 0]
  div.flow-inner                         [max-width: 1200px, margin: auto, padding: 0 85px]
    div.section-title                    [flex, justify-between, border-bottom: 4px solid #FABE00]
      h2                                 "リフォームの流れ"
      img.section-illust src="/images/rnwl/main/ricproman.png"
    div.flow-list                        [display:flex, flex-direction:column, gap:20px, mb:24px]
      div.flow-step × 8                  [max-width:600px, margin:auto, cursor:pointer, tabindex=0]
        div.flow-step-header             [display:flex, align-items:center, bg:white, height:64px, border-radius:8px, gap:10px, box-shadow]
          span.flow-step-num             [bg:#FABE00, 64×64px, border-radius:8px 0 0 8px, font-size:25.6px, font-weight:700, centered]
          span.flow-step-title           [font-size:16.8px, font-weight:700, flex:1]
          span.flow-step-plus            [32×24px, bg-image:plus.svg, transition:transform 0.3s]
        div.flow-step-desc               [bg:white, padding:0 12px, border-radius:0 0 12px 12px, overflow:hidden, opacity:0 by default (closed)]
    div.flow-more [?]                    [contact/more CTA if present]
```

## Computed Styles (exact)

### section.flow
- background: #F5EEE9 (rgb(245, 238, 233))
- padding: 60px 0

### div.flow-inner
- max-width: 1200px
- margin: 0 auto
- padding: 0 85px

### div.flow-list
- display: flex
- flex-direction: column
- gap: 20px
- margin-bottom: 24px

### div.flow-step
- max-width: 600px
- margin: 0 auto
- cursor: pointer

### div.flow-step-header
- background: #ffffff
- display: flex
- flex-direction: row
- justify-content: center
- align-items: center
- gap: 10px
- height: 64px
- border-radius: 8px
- box-shadow: rgba(0,0,0,0.08) 0px 2px 8px 0px
- cursor: pointer

### span.flow-step-num
- background: #FABE00
- width: 64px
- height: 64px
- display: flex
- justify-content: center
- align-items: center
- border-radius: 8px 0 0 8px  ← left side rounded only
- font-size: 25.6px
- font-weight: 700
- font-family: "DIN 2014 Narrow" (use bold monospace fallback)
- color: #000000
- margin-right: 10px

### span.flow-step-title
- font-size: 16.8px
- font-weight: 700
- color: #333333
- flex: 1

### span.flow-step-plus (toggle icon)
- width: 32px
- height: 24px
- background-image: url("/images/rnwl/main/plus.svg")
- background-repeat: no-repeat
- background-position: center
- background-size: contain
- transition: transform 0.3s
- When OPEN: transform: rotate(45deg)

### div.flow-step-desc (expandable)
- background: #ffffff
- padding: 0 12px
- border-radius: 0 0 12px 12px
- overflow: hidden
- font-size: 15.68px
- color: #333333
- Default state: opacity: 0, max-height: 0 (collapsed)
- Open state: opacity: 1, max-height: full, padding: 12px
- transition: max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s

## States & Behaviors

### Step collapsed (default)
- `.flow-step-desc`: opacity: 0, max-height: 0, overflow: hidden, padding: 0 12px
- `.flow-step-plus`: transform: rotate(0deg)

### Step expanded (click)
- `.flow-step-desc`: opacity: 1, max-height: 500px (or auto), padding: 12px, display: block
- `.flow-step-plus`: transform: rotate(45deg)
- transition: max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s

### Implementation
- Use React useState to track which step is open (allow multiple open or single open)
- onClick on `.flow-step-header` toggles open state
- Use CSS transition on max-height + opacity for smooth animation

## Flow Steps Data (verbatim)

| # | Title | Description |
|---|-------|-------------|
| 01 | お問い合わせ・ご相談 | まずはお電話やお問い合わせフォームからご相談ください。ご要望やお悩みを丁寧にお伺いします。 |
| 02 | 現地調査・ヒアリング | 実際にご自宅へ伺い、現地の状況を確認します。ご希望やご予算、生活スタイルについても詳しくヒアリングします。 |
| 03 | プラン作成・お見積もり | 現地調査の内容をもとに、最適なリフォームプランとお見積もりをご提案します。ご不明点は何でもご相談ください。 |
| 04 | ご契約 | ご提案内容・お見積もりにご納得いただけましたら、ご契約となります。工事日程や詳細を決定します。 |
| 05 | 着工前のご説明 | 工事内容や工程、注意点などを事前にご説明します。近隣へのご挨拶もサポートします。 |
| 06 | リフォーム工事開始 | (extract remaining from page) |
| 07 | 工事完了・検査 | (extract remaining from page) |
| 08 | アフターサポート | (extract remaining from page) |

Note: Steps 06-08 were cut off in extraction. Use reasonable content for a renovation company.

## Assets
- Ricproman illust: `/images/rnwl/main/ricproman.png`
- Plus/toggle icon: `/images/rnwl/main/plus.svg` (used as CSS background-image on toggle)

## Responsive Behavior
- **Desktop:** Steps centered, max-width 600px
- **Mobile:** Full width, same accordion behavior

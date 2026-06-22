# MainVisual Specification

## Overview
- **Target file:** `src/components/MainVisual.tsx`
- **Screenshot:** `docs/design-references/01-header-mainvisual.png`
- **Interaction model:** static — two clickable cards + center logo, all on a hero background image

## DOM Structure
```
section.mainvisual                      [bg-image, height:387px, padding-top:32px, overflow:hidden, position:relative]
  div.mainvisual-buttons                [display:flex, justify-content:center, align-items:center, gap:125px, margin:32px 0]
    div.mv-card.mv-card-outer           [white card, 240×242px, border-radius:8px, box-shadow]
      div.mv-card-title                 "外装"  [font-size:48px, font-weight:700, letter-spacing:4.8px]
      div.mv-card-subtitle              "リフォーム"  [font-size:22.4px, font-weight:900, letter-spacing:-1.12px]
      div.mv-card-desc                  "外壁・屋根・外構など<br>家の外側を美しく保つ"  [font-size:12.8px]
      a.mv-card-btn href="/gaisou/"     "詳しく見る"  [yellow pill button, 164×56px, border-radius:60px]
    div.mainvisual-header               [center logo area, width:372px, height:279px]
      div.mainvisual-reformcontractor
        div.mainvisual-logo             [display:flex, justify-content:center, margin:20px 0 40px]
          img src="/images/rnwl/main/logo.png" alt="リックプロ" [646×216 natural, rendered at ~186×62px]
        img.mainvisual-reformcontractor-img src="/images/rnwl/main/reformcontractor.png" [646×165 natural]
    div.mv-card.mv-card-inner           [white card, 240×242px, same styles as mv-card-outer]
      div.mv-card-title                 "内装"
      div.mv-card-subtitle              "リフォーム"
      div.mv-card-desc                  "水回り・床・壁など<br>暮らしを快適にする"
      a.mv-card-btn href="/naisou/"     "詳しく見る"
```

## Computed Styles (exact values)

### section.mainvisual
- background: url("/images/rnwl/main/mainvisual_pc.png") no-repeat center center / cover
- height: 387px
- padding-top: 32px
- overflow: hidden
- position: relative

### div.mainvisual-buttons
- display: flex
- flex-direction: row
- justify-content: center
- align-items: center
- flex-wrap: wrap
- gap: 125px
- margin: 32px 0

### div.mv-card (both cards, same styles)
- background: #ffffff
- padding: 24px 16px 16px
- width: 240px
- height: 242px
- max-width: 240px
- min-width: 140px
- display: flex
- flex-direction: column
- justify-content: center
- align-items: center
- border-radius: 8px
- box-shadow: rgba(0,0,0,0.08) 0px 4px 16px 0px
- position: relative

### div.mv-card-title
- font-size: 48px
- font-weight: 700
- letter-spacing: 4.8px
- color: #000000
- line-height: 48px

### div.mv-card-subtitle
- font-size: 22.4px
- font-weight: 900
- letter-spacing: -1.12px
- color: #000000
- margin-top: 2px

### div.mv-card-desc
- font-size: 12.8px
- font-weight: 400
- color: #333333
- margin: 8px 0 18px
- text-align: center (implied by parent align-items:center)

### a.mv-card-btn
- background: #FABE00
- color: #000000
- font-size: 16px
- font-weight: 700
- padding: 16px 42px
- border-radius: 60px
- box-shadow: rgba(0,0,0,0.08) 0px 2px 8px 0px
- transition: background 0.2s
- display: block
- width: 164px
- height: 56px
- text-align: center

### div.mainvisual-header
- margin-bottom: 12px
- width: 372px
- height: 279px
- gap: 12px

### div.mainvisual-logo
- display: flex
- justify-content: center
- align-items: center
- margin: 20px 0 40px

## Assets
- Background image: `/images/rnwl/main/mainvisual_pc.png` (background-image CSS)
- Logo: `/images/rnwl/main/logo.png`
- Reformcontractor text image: `/images/rnwl/main/reformcontractor.png`

## Responsive Behavior
- **Desktop (1440px):** 3-column flex row: outer-card | logo | inner-card, gap: 125px
- **Mobile (390px):** Cards stack vertically; gap reduces; bg image may be different (no separate mobile bg discovered)
- **Breakpoint:** ~768px

## Text Content (verbatim)
- Outer card title: 外装
- Outer card subtitle: リフォーム
- Outer card desc: 外壁・屋根・外構など / 家の外側を美しく保つ
- Outer card btn: 詳しく見る → /gaisou/
- Inner card title: 内装
- Inner card subtitle: リフォーム
- Inner card desc: 水回り・床・壁など / 暮らしを快適にする
- Inner card btn: 詳しく見る → /naisou/

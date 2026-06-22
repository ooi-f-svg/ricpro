# Recruit Section Specification

## Overview
- **Target file:** `src/components/Recruit.tsx`
- **Screenshot:** `docs/design-references/08-recruit.png`
- **Interaction model:** static — large hero image with overlay text, description, CTA

## DOM Structure
```
section.recruit                          [bg: #F5EEE9, padding: 60px 0]
  div.recruit-inner                      [max-width: 1200px, margin: auto, padding: 0 85px]
    div.section-title                    [flex, justify-between, border-bottom: 4px solid #FABE00]
      h2                                 "採用情報"
      img.section-illust src="/images/rnwl/main/ricproman.png"
    div.recruit-main
      div.recruit-lead                   [bg-image: recruitment.png, cover, height:400px, border-radius:8px, display:flex, justify-content:flex-end, align-items:flex-end]
        span.recruit-lead-text           [font-size:41.6px, font-weight:900, color:white, padding:0 18px 16px 0, text-align:right]
      div.recruit-desc                   [font-size:22.4px, color:#000]
        p                                text
      div.recruit-more                   [margin-top:16px]
        a.btn-link href="/7012/"         "採用情報はこちら"
```

## Computed Styles (exact)

### section.recruit
- background: #F5EEE9
- padding: 60px 0

### div.recruit-inner
- max-width: 1200px
- margin: 0 auto
- padding: 0 85px

### div.recruit-lead
- background-image: url("/images/rnwl/main/recruitment.png")
- background-repeat: no-repeat
- background-position: center top
- background-size: cover
- height: 400px
- border-radius: 8px
- display: flex
- flex-direction: row
- justify-content: flex-end
- align-items: flex-end
- position: relative
- margin-bottom: 16px

### span.recruit-lead-text
- font-size: 41.6px
- font-weight: 900
- color: #ffffff
- padding: 0 18px 16px 0
- text-align: right (or right-aligned via justify-content:flex-end)
- line-height: ~1.3

### div.recruit-desc
- font-size: 22.4px
- font-weight: 400
- color: #000000

### div.recruit-more
- margin-top: 16px

## Text Content (verbatim)

### recruit-lead-text (3 lines):
"未経験から\n"住まいのプロ"へ\n成長できる職場です"

### recruit-desc p:
"家づくりに興味のある方、リフォーム業界で成長したい方を歓迎しています。\n採用に関する詳しい情報は、採用情報ページよりご確認ください。"

### CTA Button:
- Text: "採用情報はこちら"
- href: /7012/

## Assets
- Background image: `/images/rnwl/main/recruitment.png` (full-width background)
- Ricproman illust: `/images/rnwl/main/ricproman.png`

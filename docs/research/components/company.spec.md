# Company Section Specification

## Overview
- **Target file:** `src/components/Company.tsx`
- **Screenshot:** `docs/design-references/09-company.png`
- **Interaction model:** static — office photo + definition list info table

## DOM Structure
```
section.company                          [bg: white, padding: 60px 0]
  div.company-inner                      [max-width: 1200px, margin: auto, padding: 0 85px]
    div.section-title                    [flex, justify-between, border-bottom: 4px solid #FABE00]
      h2                                 "会社案内"
      img.section-illust src="/images/rnwl/main/ricproman.png"
    div.company-main                     [display:flex, flex-direction:row, gap:24px]
      div.company-img                    [width:500px, max-width:500px]
        img.company-office-img           src="/images/rnwl/main/ricpro_office.png" alt="リックプロオフィス"
      div.company-info                   [flex:1, padding-left:18px]
        div.company-card                 [z-index:2]
          dl                             [display:block, gap:21px 42px]
            dt + dd pairs (see below)
    div.company-more                     [text-align:center, margin-top:...]
      a.btn-link href="/100/"            "もっと詳しく見る"
```

## Computed Styles (exact)

### section.company
- background: #ffffff
- padding: 60px 0

### div.company-inner
- max-width: 1200px
- margin: 0 auto
- padding: 0 85px

### div.company-main
- display: flex
- flex-direction: row
- gap: 24px
- flex-wrap: nowrap

### div.company-img
- width: 500px
- max-width: 500px

### img.company-office-img
- width: 100%
- object-fit: cover

### div.company-info
- flex: 1
- padding-left: 18px

### dl in .company-card
- display: block (dt/dd flow inline with margin offsets)

### dt
- font-size: 21px
- font-weight: 700
- color: #000000
- line-height: 35.7px
- margin-bottom: 4.2px
- width: 115.5px (floated left or inline)

### dd
- font-size: 21px
- font-weight: 400
- color: #222222
- line-height: 35.7px
- margin: 0 0 10.5px 115.5px (offset from dt width)

## Company Data (verbatim)

| dt (Term) | dd (Value) |
|-----------|------------|
| 会社名 | リック・プロ株式会社 |
| 設立 | 平成21年5月25日法人設立 |
| 従業員 | 19名 |
| 本社 | 〒920-8202 金沢市西都2丁目-165 |
| 建設業許可 | 石川県知事許可（般－7）第17078号\nリフォームかし保険事業者登録A5500139\nいしかわ事業者版環境ISO登録 |

## CTA Button
- Text: "もっと詳しく見る"
- href: /100/
- Style: `.btn-link` yellow pill

## Assets
- Office photo: `/images/rnwl/main/ricpro_office.png` (343×205 natural)
- Ricproman illust: `/images/rnwl/main/ricproman.png`

## Responsive Behavior
- **Desktop:** Side by side (image left, info right)
- **Mobile:** Stack (image top, info bottom)

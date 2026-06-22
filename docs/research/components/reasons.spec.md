# Reasons Section Specification

## Overview
- **Target file:** `src/components/Reasons.tsx`
- **Screenshot:** `docs/design-references/03-reasons.png`
- **Interaction model:** static — 3 yellow cards side by side

## DOM Structure
```
section.reasons                          [bg: white, padding: 60px 0]
  div.reasons-inner                      [max-width: 1200px, margin: auto, padding: 0 85px]
    div.section-title                    [flex, justify-between, border-bottom: 4px solid #FABE00, mb: 19px]
      h2                                 "選ばれる理由"
      img.section-illust src="/images/rnwl/main/ricproman.png" alt="リックプロマン" [104×101px, position:relative]
    div.reasons-list                     [display:flex, flex-wrap:wrap, gap:32px, justify-content:center]
      div.reason-card × 3               [yellow card, 322×653px, border-radius:12px]
        div.reason-card-inner            [margin:16px, border-radius:8px, overflow:hidden]
          div.reason-card-bg             [bg:#FABE00, height:120px, display:flex, justify-content:center, align-items:center]
            img src="/images/rnwl/main/reason{N}.png"
          div.reason-card-content        [padding-top:8px, flex-col, align-items:center]
            div.reason-card-header       [margin: 19px 0 8px, width:100%]
              div.reason-card-num        [font-size:32px, font-weight:700, font-family:"DIN 2014 Narrow"]
              div.reason-card-title      [font-size:25.6px, font-weight:700, margin-bottom:8px]
            div.reason-card-desc         [font-size:16px, margin-bottom:16px]
            a.reason-card-btn            [only card 02, white pill btn]
```

## Computed Styles (exact)

### section.reasons
- background: #ffffff
- padding: 60px 0

### div.reasons-inner
- max-width: 1200px
- margin: 0 auto
- padding: 0 85px

### div.section-title
- display: flex
- flex-direction: row
- justify-content: space-between
- align-items: flex-end
- gap: 16px
- padding-bottom: 4px
- margin-bottom: 19px
- border-bottom: 4px solid #FABE00

### h2 (section title)
- font-size: 34px
- font-weight: 700
- letter-spacing: 3.4px
- color: #000000
- margin: 0 0 8px

### div.reasons-list
- display: flex
- flex-direction: row
- justify-content: center
- flex-wrap: wrap
- gap: 32px

### div.reason-card
- background: #FABE00 (rgb(250, 190, 0))
- color: #000000
- width: 322px
- border-radius: 12px
- box-shadow: rgba(0,0,0,0.04) 0px 2px 8px 0px
- overflow: hidden
- display: flex
- flex-direction: column
- align-items: center

### div.reason-card-inner
- margin: 16px
- border-radius: 8px
- overflow: hidden
- display: flex
- flex-direction: column
- align-items: center

### div.reason-card-bg
- background: #FABE00
- height: 120px
- display: flex
- justify-content: center
- align-items: center

### div.reason-card-content
- padding-top: 8px
- display: flex
- flex-direction: column
- align-items: center

### div.reason-card-header
- margin: 19px 0 8px

### div.reason-card-num
- font-size: 32px
- font-weight: 700
- font-family: "DIN 2014 Narrow", sans-serif  ← note: may need to fall back to bold
- color: #000000
- height: 40px

### div.reason-card-title
- font-size: 25.6px (≈1.6rem)
- font-weight: 700
- color: #000000
- margin-bottom: 8px

### div.reason-card-desc
- font-size: 16px
- font-weight: 400
- color: #000000
- margin-bottom: 16px

### a.reason-card-btn (only card 02 has this)
- background: #ffffff
- color: #000000
- font-size: 16px
- font-weight: 700
- padding: 16px 24px
- border-radius: 50px
- box-shadow: rgba(0,0,0,0.08) 0px 2px 8px 0px
- width: 208px
- height: 56px
- display: block
- margin-bottom: 8px
- transition: background 0.2s

## Card Data (verbatim)

### Card 01 — reason2.png (グループ一貫体制)
- num: "01"
- image: `/images/rnwl/main/reason2.png` alt="グループ一貫体制"
- title: "グループの総合力で\n高品質×低価格を実現"
- desc: "さくらホームグループとして、不動産から新築・リフォームまで住まいに関するサービスを一手に提供しています。\n\nまた、年間400棟以上の建築実績と多数の仕入れルートを活かし、資材コストを抑えながらも高品質な施工を可能にしています。\n\nさらに、中古住宅のリフォームによる再販で得た実践的なノウハウを活かし、最適なプランのご提案が可能です。"
- No CTA button

### Card 02 — reason3.png (有資格者の確かな提案力)
- num: "02"
- image: `/images/rnwl/main/reason3.png` alt="有資格者の確かな提案力"
- title: "リフォームのプロによる\n提案力×施工力"
- desc: "様々な資格を持つスタッフが豊富な知識で住環境をより快適にする外装・内装リフォームのアイデアをご提案します。\n\nさらに、外壁・屋根などの外装リフォームから、クロスの貼り替えやエアコンの取付といった内装リフォームまで幅広く自社職人が丁寧に対応。\n\n提案から施工まで自社一貫体制で安心の品質をお届けします。"
- CTA: "スタッフ紹介はこちら" → /100/10031/

### Card 03 — reason1.png (地域密着20年以上)
- num: "03"
- image: `/images/rnwl/main/reason1.png` alt="地域密着20年以上"
- title: "実績×保証で\n長く安心な住まい"
- desc: "おかげさまでこれまでの施工実績は4,000棟以上。地域密着のきめ細かな対応が信頼につながっています。\n\n高い技術力に加え、万一に備えた最長10年の保証とアフターサービスをご用意。"
- No CTA button

## Assets
- Section illust: `/images/rnwl/main/ricproman.png` (104×101px)
- Card images: `/images/rnwl/main/reason{1,2,3}.png` (311×126 natural)

## Responsive Behavior
- **Desktop:** 3 cards in a row, each ~322px wide
- **Tablet (768px):** May wrap to 2+1 layout
- **Mobile (390px):** Cards stack vertically, full width

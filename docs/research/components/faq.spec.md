# FAQ Section Specification

## Overview
- **Target file:** `src/components/Faq.tsx`
- **Screenshot:** `docs/design-references/07-faq.png`
- **Interaction model:** click-driven accordion — Q row clickable, A expands below

## DOM Structure
```
section.faq                              [bg: #FABE02, padding: 60px 0]
  div.faq-inner                          [max-width: 1200px, margin: auto, padding: 0 85px]
    div.section-title                    [flex, justify-between, border-bottom: 4px solid #FABE00]
      h2                                 "よくある質問"
      img.section-illust src="/images/rnwl/main/ricproman.png"
    div.faq-list                         [display:flex, flex-direction:column, gap:20px, max-width:600px, margin:auto, mb:32px]
      div.faq-item × 5                   [bg:#FABE00, border-radius:8px, box-shadow, overflow:hidden]
        div.faq-q-row                    [display:flex, align-items:center, bg:white, padding:20px 17px, height:80px, gap:10px, border-radius:8px, box-shadow, cursor:pointer]
          span.faq-bar                   [bg:#FABE00, width:5px, height:40px, mr:16px]
          span.faq-q                     [font-size:16.8px, font-weight:700, flex:1]
          span.faq-toggle                [24×24px, bg-image:plus.svg, transition:transform 0.3s]
        div.faq-a                        [bg:white, padding:0 12px, border-radius:0 0 12px 12px, overflow:hidden, opacity:0 default]
    div.faq-contact                      [text-align:center]
      a.btn-link href="/ffex/…form=inquiry"  "お問い合わせはこちら"
```

## Computed Styles (exact)

### section.faq
- background: #FABE02 (rgb(250, 190, 2)) — slightly different from yellow #FABE00
- padding: 60px 0

### div.faq-list
- display: flex
- flex-direction: column
- gap: 20px
- max-width: 600px
- margin: 0 auto 32px

### div.faq-item
- background: #FABE00 (rgb(250, 191, 0)) — thin yellow border around white box
- border-radius: 8px
- box-shadow: rgba(0,0,0,0.08) 0px 2px 8px 0px
- overflow: hidden
- transition: box-shadow 0.2s

### div.faq-q-row
- background: #ffffff
- display: flex
- flex-direction: row
- align-items: center
- padding: 20px 17px
- height: 80px
- gap: 10px
- border-radius: 8px
- box-shadow: rgba(0,0,0,0.08) 0px 2px 8px 0px
- cursor: pointer
- font-size: 16.8px
- font-weight: 700

### span.faq-bar
- background: #FABE00
- width: 5px
- height: 40px
- margin-right: 16px
- flex-shrink: 0

### span.faq-q
- font-size: 16.8px
- font-weight: 700
- color: #333333
- flex: 1

### span.faq-toggle
- width: 24px
- height: 24px
- background-image: url("/images/rnwl/main/plus.svg")
- background-repeat: no-repeat
- background-position: center
- background-size: contain
- transition: transform 0.3s
- When OPEN: transform: rotate(45deg)

### div.faq-a
- background: #ffffff
- padding: 0 12px
- border-radius: 0 0 12px 12px
- overflow: hidden
- font-size: 15.68px
- color: #333333
- Default: opacity: 0, max-height: 0
- Open: opacity: 1, max-height: auto, padding: 12px 12px
- transition: max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s

## FAQ Data (verbatim)

| # | Question | Answer |
|---|----------|--------|
| 1 | リフォームの相談や見積もりは無料ですか？ | はい、ご相談・お見積もりはすべて無料です。お気軽にお問い合わせください。 |
| 2 | リフォーム中も自宅に住むことはできますか？ | 工事内容によりますが、多くの場合はご自宅に住みながらリフォームが可能です。詳細はご相談時にご案内します。 |
| 3 | 近隣へのあいさつや騒音対策はどうなりますか？ | 工事前に近隣へのご挨拶を行い、騒音やご迷惑が最小限になるよう配慮いたします。 |
| 4 | リフォームに使う素材や色、設備は選べますか？ | ご要望に合わせて素材や色、設備をお選びいただけます。サンプルやカタログもご用意しています。 |
| 5 | アフターサービスや保証はありますか？ | 工事内容に応じた保証やアフターサービスをご用意しています。詳細はご契約時にご説明いたします。 |

## CTA Button
- Text: "お問い合わせはこちら"
- href: https://www.ricpro.com/ffex/index.php?form=inquiry
- Style: `.btn-link` — yellow pill button (background: #FABE00, color: #000, font-weight:700, padding:18px 28px, border-radius:50px)

## Assets
- Ricproman illust: `/images/rnwl/main/ricproman.png`
- Toggle icon: `/images/rnwl/main/plus.svg` (CSS background-image)

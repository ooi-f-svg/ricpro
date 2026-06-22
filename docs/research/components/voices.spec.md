# Voices Section Specification

## Overview
- **Target file:** `src/components/Voices.tsx`
- **Screenshot:** `docs/design-references/05-voices.png`
- **Interaction model:** static — 3 customer testimonial cards + "see more" button

## DOM Structure
```
section.voices                           [bg: #F5EEE9, padding: 60px 0]
  div.voices-inner                       [max-width: 1200px, margin: auto, padding: 0 85px]
    div.section-title                    [flex, justify-between, border-bottom: 4px solid #FABE00]
      h2                                 "お客様の声"
      img.section-illust src="/images/rnwl/main/ricproman.png"
    div.voices-list                      [display:flex, flex-wrap:wrap, gap:20px, justify-content:center, padding-bottom:8px, mb:24px]
      div.voice-card × 3                 [white card, padding:24px 18px, border-radius:16px, box-shadow]
        img.voice-card-img               [width:~294px, border-radius:8px, mb:12px]
        div.voice-tags                   [display:flex, gap:8px, mb:12px]
          span.voice-tag × N             [bg:#FABE00, color:#000, font-size:15.2px, font-weight:700, padding:2px 12px, border-radius:4px]
        div.voice-comment                [font-size:16.8px, font-weight:500, line-height:28.56px]
    div.voices-more                      [text-align:center]
      a.btn-link href="/291/"            "お客様の声をもっとみる"
```

## Computed Styles (exact)

### section.voices
- background: #F5EEE9 (rgb(245, 238, 233))
- padding: 60px 0

### div.voices-inner
- max-width: 1200px
- margin: 0 auto
- padding: 0 85px

### div.voices-list
- display: flex
- flex-direction: row
- justify-content: center
- flex-wrap: wrap
- gap: 20px
- padding-bottom: 8px
- margin-bottom: 24px

### div.voice-card
- background: #ffffff
- padding: 24px 18px
- width: 330px
- border-radius: 16px
- box-shadow: rgba(0,0,0,0.08) 0px 2px 8px 0px
- display: flex
- flex-direction: column
- align-items: center

### img.voice-card-img
- width: ~294px (max-width: 100%)
- border-radius: 8px
- margin-bottom: 12px
- overflow: clip

### div.voice-tags
- display: flex
- flex-direction: row
- gap: 8px
- align-items: flex-start
- margin-bottom: 12px
- width: 100%

### span.voice-tag
- background: #FABE00
- color: #000000
- font-size: 15.2px
- font-weight: 700
- padding: 2px 12px
- border-radius: 4px

### div.voice-comment
- font-size: 16.8px
- font-weight: 500
- line-height: 28.56px
- color: #333333

### a.btn-link (shared style across sections)
- background: #FABE00 (or #FABF00 — very slight variant)
- color: #000000
- font-size: 16px
- font-weight: 700
- padding: 18px 28px
- border-radius: 50px
- display: inline-block
- transition: background 0.2s

## Card Data (verbatim)

### Card 1
- image: `/images/rnwl/main/voice_img1.png` alt="お客様1"
- tags: ["金沢市", "屋根"]
- comment: "全く知識が無かったのですが分かりやすく説明・ご提案いただきました"

### Card 2
- image: `/images/rnwl/main/voice_img2.png` alt="お客様2"
- tags: ["金沢市", "外構"]
- comment: "完了報告資料にて屋根の状態がわかり良かったです。塗装色もシュミレーションを何度もして頂きありがとうございました。"

### Card 3
- image: `/images/rnwl/main/voice_img3.png` alt="お客様3"
- tags: ["金沢市", "外壁"]
- comment: "サイディングの補修方法や塗料の選択、ツートンにする際の適切なアドバイスに十分納得できるものでした。"

## Assets
- Ricproman illust: `/images/rnwl/main/ricproman.png` (104×101px)
- Voice images: `/images/rnwl/main/voice_img{1,2,3}.png` (260×157 natural)

## Responsive Behavior
- **Desktop:** 3 cards in a row
- **Mobile:** Cards stack vertically, full width

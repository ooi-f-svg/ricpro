# Message Section Specification

## Overview
- **Target file:** `src/components/Message.tsx`
- **Screenshot:** `docs/design-references/04-message.png`
- **Interaction model:** static — president photo on right, text on left (flex-direction: row-reverse)

## DOM Structure
```
section.message                         [bg: white, padding: 60px 85px]
  div.message-inner                     [max-width: 1200px, margin: auto, padding: 0 85px]
    div.message-main                    [display:flex, flex-direction:row-reverse, align-items:flex-start, gap:32px]
      img.message-img                   [width:400px, height:400px, border-radius:12px, overflow:clip]
        src="/images/rnwl/main/section_img1.png" alt="代表写真"
      div.message-text                  [flex:1]
        h3                              [font-size:22.4px, font-weight:900]
        p                               [font-size:16px, margin...]
        div.message-sign                [font-size:12.8px, color:#888]
          span                          "リック・プロ株式会社　代表取締役"
          br
          img.representative-sign       src="/images/rnwl/main/representative_sign.png" alt="上濃俊介 署名"
```

## Computed Styles (exact)

### section.message
- background: #ffffff
- padding: 60px 85px

### div.message-inner
- max-width: 1200px
- margin: 0 auto
- padding: 0 85px

### div.message-main
- display: flex
- flex-direction: row-reverse   ← image on RIGHT, text on LEFT
- align-items: flex-start
- flex-wrap: nowrap
- gap: 32px

### img.message-img
- width: 400px
- height: 400px
- border-radius: 12px
- overflow: clip
- max-width: 100%
- flex-shrink: 0

### div.message-text
- flex: 1
- width: ~597px

### h3 in .message-text
- font-size: 22.4px
- font-weight: 900
- color: #333333
- margin: 0 0 22.4px

### p in .message-text
- font-size: 16px
- font-weight: 400
- color: #333333
- line-height: 1.6 (default)

### div.message-sign
- font-size: 12.8px
- color: #888888
- margin-top: 19px

## Text Content (verbatim)

### h3:
"リフォーム専門店の確かな技術と、グループの総合力で応える。"

### p:
"私たちは、リフォーム専門店として20年以上にわたり地域の住まいを支えてきました。

累計4,000棟を超える施工で培った技術力と、空間づくりに対する深い知見が私たちの強みです。

さらに、不動産売買から建築までを手がける「さくらホームグループ」として、リフォームにとどまらない幅広いアフターサポートが可能です。

外装・内装リフォームをお考えの際は、安心して私たちにご相談ください。

豊富な経験と体制で、理想の住まいをかたちにします。"

### Sign:
- Line 1: "リック・プロ株式会社　代表取締役"
- Image: representative_sign.png (signature)

## Assets
- President photo: `/images/rnwl/main/section_img1.png` (686×462 natural)
- Signature image: `/images/rnwl/main/representative_sign.png` (279×64 natural)

## Responsive Behavior
- **Desktop:** Side-by-side, row-reverse
- **Mobile:** Stack vertically, image first then text

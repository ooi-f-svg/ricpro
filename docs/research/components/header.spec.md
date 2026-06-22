# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/01-header-mainvisual.png`
- **Interaction model:** static upper bar + fixed navigation bar below it

## DOM Structure
```
#header.header
  #header_inner.header__inner          [display:flex, height:90px, padding-left:20px, max-width:1636px]
    div.header__ttl                    [display:flex, align-items:center, width:410px]
      a.header__ttlLink href="/"
        img src="/images/rnwl/common/hd_title.jpg" alt="金沢市のリフォーム…" [356×76px]
    div.header__contact                [display:flex, align-items:center]
      div.header__tel
        a.header__telLink href="tel:0120-069-007"
          img src="/images/rnwl/hd_tel.jpg" alt="お電話はこちらから" [537×50px]
      div.header__contactList          [display:flex]
        div.header__contactItem × 4   [each 160×90px]
          a.header__contactLink.header__contactLink--{variant}
            div.header__contactWrap
              div.header__contactHead
                figure > img [icon svg]
                p [label text]
              div.header__contactBody
                p [sublabel]
      div.header__menu
        label.header__menuLabel [hamburger, hidden on desktop]
          div#js-menu_trigger.header__menuItem
            div.menu-trigger [27×24px, 3 spans = hamburger lines]
  #navi.header__nav                    [position:fixed, bg:white, height:70px, display:block, z stacked on top]
    ul.header__navList                 [display:flex, justify-content:center]
      li.header__navItem × 5          [padding: 0 15px]
        a.header__navLink              [display:flex, flex-direction:column, align-items:center, padding:16px 15px]
          span.header__navTxt         [font-size:14px, color:#333]
```

## Computed Styles (exact values)

### #header.header
- height: 160px total (90px upper + 70px nav)
- width: 100%
- background: transparent

### .header__inner
- display: flex
- height: 90px
- padding-left: 20px
- max-width: 1636px
- align-items: center

### .header__ttl
- display: flex
- align-items: center
- width: 410px
- height: 90px

### .header__contact
- display: flex
- align-items: center
- flex: 1

### Contact item colors (exact, from getComputedStyle):
- Instagram: background: #EE2E7A (rgb(238, 46, 122))
- Inquiry/Email: background: #000000
- LINE: background: #59C301 (rgb(89, 195, 1))
- Reservation: background: #FF6B3D (rgb(255, 107, 61))
- Each item: width: 160px, height: 90px, display: inline-block, transition: 0.4s

### .header__nav (fixed bar)
- position: fixed
- top: 0  (actually renders below upper header — use CSS to push it to position top:90px or render it under .header__inner)
- background: #ffffff
- height: 70px
- width: 100%
- display: block (contains .header__navList)
- z-index: high enough to stay above content

### .header__navList
- display: flex
- justify-content: center
- height: 70px

### .header__navItem
- padding: 0 15px
- position: relative (for dropdown)

### .header__navLink (each nav item)
- display: flex
- flex-direction: column
- align-items: center
- padding: 16px 15px
- height: 70px
- transition: 0.4s
- font-size: 16px (outer link)

### .header__navTxt
- font-size: 14px
- color: #333333
- line-height: 22.4px

## States & Behaviors

### Contact link hover
- Trigger: hover
- Effect: opacity changes (darken), transition: 0.4s

### Nav item hover
- Trigger: hover
- Effect: transition 0.4s — underline or color change

### Mega menu (リフォームメニュー, 施工事例)
- Trigger: hover on `.js-mega_menu_parent`
- Shows `.header__navSub.header__navSub--mega` dropdown panel
- Contains sub-category list items
- For simplicity: implement as hover-revealed dropdown (no JS required with CSS)

### Mobile hamburger (hidden on desktop ≥769px)
- The `.header__menuLabel` is a checkbox label toggling the pure-drawer
- On desktop: hidden (display:none)
- On mobile: shows 3-line menu trigger

## Contact Buttons Detail

| Variant | Label | Sublabel | BG Color | Icon |
|---------|-------|----------|----------|------|
| instagram | 最新\n施工事例 | Instagramをチェック | #EE2E7A | /images/rnwl/icon/instagram.svg |
| inquiry | お問い\n合わせ | 24時間メール受付中 | #000000 | /images/rnwl/icon/mail.svg |
| line | LINEで\nご相談 | お気軽に相談OK！ | #59C301 | /images/rnwl/icon/line.svg |
| reservation | 来店の\nご予約 | ぜひご来店を♪ | #FF6B3D | /images/rnwl/icon/home.svg |

## Nav Items
1. ホーム — /
2. リフォームメニュー — dropdown (外壁・屋根塗装, 内装・窓・水まわり etc.)
3. 施工事例 — /200/ — dropdown
4. お客様の声 — /291/
5. 選ばれる理由 — /240/
6. 会社案内 — /100/

## Assets
- Logo image: `/images/rnwl/common/hd_title.jpg` (356×76px)
- Tel image: `/images/rnwl/hd_tel.jpg` (537×50px)
- Icon SVGs: `/images/rnwl/icon/{instagram,mail,line,home}.svg`

## Responsive Behavior
- **Desktop (≥769px):** Full header layout as described
- **Mobile (<769px):** Upper bar shows only logo; hamburger menu appears; contact list hidden; nav bar hidden
- **Breakpoint:** 769px

## Implementation Notes
- The `.header__nav` is `position: fixed` in the original. Since it sits below the 90px upper bar, implement it with `top: 90px` for correct positioning.
- The sticky nav occupies 70px, so the mainvisual section needs `margin-top: 160px` (90+70).
- Wrap the whole header in a div that acts as a 160px spacer.

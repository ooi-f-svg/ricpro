# Page Topology — ricpro.com

## Site Info
- **URL:** https://www.ricpro.com/
- **Title:** 金沢市のリフォーム【外壁塗装・屋根塗装】はリックプロにお任せ
- **Type:** Japanese renovation/painting company in Kanazawa
- **Page height:** ~7923px
- **CMS:** WordPress with jQuery

## Overall Layout
- Pure drawer mobile nav system (`.pure-container`, `.pure-drawer`, `.pure-pusher-container`)
- All content centered with max-width 1200px via inner containers
- No smooth scroll library (standard browser scroll)

## Section Order (top → bottom)

| # | Selector | offsetTop | Height | Background |
|---|----------|-----------|--------|------------|
| 0 | `.header` | 0 | 160px | white (upper 90px), white fixed nav (70px) |
| 1 | `.mainvisual` | 160 | 387px | bg-image: mainvisual_pc.png |
| 2 | `.cnt-contact` | 547 | 248px | #FABE00 yellow |
| 3 | `.reasons` | 795 | 910px | white |
| 4 | `.message` | 1705 | 577px | white |
| 5 | `.voices` | 2282 | 739px | #F5EEE9 beige |
| 6 | `.flow` | 3021 | 981px | #F5EEE9 beige |
| 7 | `.faq` | 4002 | 831px | #FABE02 yellow |
| 8 | `.recruit` | 4833 | 813px | #F5EEE9 beige |
| 9 | `.company` | 5646 | 679px | white |
| 10 | `.footer` | ~6325 | 1598px | #004986 dark blue |

## Fixed/Sticky Overlays
- `.header__nav` — **position: fixed**, white background, z-index stacks above content
- `.float-footer` — floating CTA bar with 3 buttons (phone, reservation, email)

## Z-index Layers
1. Page content (flow)
2. `.header__nav` (fixed navigation bar, sits at top always)
3. `.float-footer` (floating bottom CTA)
4. Mobile drawer overlay

## Interaction Models Per Section
- **Header** — static (upper bar) + fixed nav (scroll-persistent)
- **Mainvisual** — static (two cards + center logo)
- **cnt-contact** — static (linked image buttons)
- **Reasons** — static (3 yellow cards)
- **Message** — static (president photo + text)
- **Voices** — static (3 testimonial cards)
- **Flow** — click-driven accordions (each step expands/collapses on click/focus)
- **FAQ** — click-driven accordions (faq-toggle, plus icon rotates)
- **Recruit** — static (background image + text)
- **Company** — static (office photo + info table)
- **Footer** — static (contact images + nav links + copyright)

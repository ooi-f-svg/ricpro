# CntContact Specification

## Overview
- **Target file:** `src/components/CntContact.tsx`
- **Screenshot:** `docs/design-references/02-cnt-contact.png`
- **Interaction model:** static — clickable image links in 2 rows

## DOM Structure
```
div.cnt-contact                         [background: #FABE00, padding: 30px 0, height: 248px]
  div.cnt-contact__wrap × 2             [each row, max-width: 980px, margin: auto]
    div.new-container                   [max-width: 1024px, margin: auto]
      div.cnt-contact__list             [display:flex, flex-direction:row, margin: 0 -10px]
        div.cnt-contact__item           [padding: 0 10px, flex:1]
          a.cnt-contact__link | picture.cnt-contact__figure
            img or source (pc/sp variants)

Row 1 items:
  1. Tel link → tel:0120-069-007
     - PC img: /images/rnwl/naisou/cnt_contact01_pc.png (phone banner)
     - SP img: /images/rnwl/naisou/cnt_contact01_sp.png
  2. Business hours (no link)
     - PC img: /images/rnwl/naisou/cnt_contact02_pc.png
     - SP img: /images/rnwl/naisou/cnt_contact02_sp.png
  3. Email inquiry (PC-only, class: cnt-contact__item--pc)
     - href: /ffex/index.php?form=naisou_inquiry
     - PC img: /images/rnwl/naisou/cnt_contact03_pc.png

Row 2 items:
  1. Showroom reservation → /ffex/index.php?form=showroom
     - PC img: /images/rnwl/naisou/cnt_contact04_pc.png
     - SP img: /images/rnwl/naisou/cnt_contact04_sp.png
  2. LINE consultation → /line/
     - PC img: /images/rnwl/naisou/cnt_contact05_pc.png
     - SP img: /images/rnwl/naisou/cnt_contact05_sp.png
  3. Email (SP-only, class: cnt-contact__item--wide cnt-contact__item--sp)
     - href: /ffex/index.php?form=naisou_inquiry
     - SP img: /images/rnwl/naisou/cnt_contact03_sp.png
```

## Computed Styles (exact values)

### div.cnt-contact
- background-color: #FABE00 (rgb(250, 190, 0))
- padding: 30px 0
- height: 248px

### div.cnt-contact__wrap (.new-container)
- max-width: 980px → inner new-container max-width: 1024px
- margin: 0 auto

### div.cnt-contact__list
- display: flex
- flex-direction: row
- flex-wrap: nowrap
- margin: 0 -10px

### div.cnt-contact__item
- padding: 0 10px
- flex: 1
- height: 94px

### a.cnt-contact__link
- display: inline-block
- height: 94px
- width: 100%
- cursor: pointer

## Assets (all images are the actual content — just use <img> or <picture>)
- Row 1: cnt_contact01_pc.png, cnt_contact02_pc.png, cnt_contact03_pc.png
- Row 2: cnt_contact04_pc.png, cnt_contact05_pc.png
- Mobile alternatives: _sp.png variants (use with <picture> media query min-width: 769px)

## Responsive Behavior
- **Desktop (≥769px):** Row 1: 3 items. Row 2: 2 items + hidden email. Uses _pc.png images.
- **Mobile (<769px):** Uses _sp.png images. Item 3 of row 1 hidden. Item 3 of row 2 visible.
- **Breakpoint:** 769px

## Text Content
- All text is embedded in images (Japanese text in PNG files). No separate text content.

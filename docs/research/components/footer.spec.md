# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/10-footer.png`
- **Interaction model:** static — contact images + nav links + copyright

## DOM Structure
```
#footer.footer                           [bg: #004986, padding-top: 60px, color: white]
  div.new-container                      [max-width: 1024px, margin: auto]
    div.footer__inner                    [padding-bottom: 70px]
      div.footer__innerInquiry           [inquiry/contact area, height:437px]
        div.footer__innerInquiryWrap
          div.footer__ttl
            img src="/images/rnwl/footer_ttl.png" alt="お問い合わせはこちら"
          div.footer__desc
            img src="/images/rnwl/footer_desc.png" alt="リック･プロは住まいのプロ..."
          div.footer__tel
            a.footer__telLink href="tel:0120-069-007"
              img src="/images/rnwl/footer_tel_pc.png" alt="お電話はこちらから"
          div.footer__btn
            div.footer__btnItem × 3
              a.footer__btnLink.footer__btnLink--{variant}
                img.footer__btnImage src="/images/rnwl/footer_btn{01,02_pc,03_pc}.png"
      div.footer__innerNav               [nav links area]
        div.footer__innerNavWrap
          div.footer__nav.js-accordion
            ul.footer__navList
              li.footer__navItem × N
                div.footer__navTtl
                  a.footer__navLink href="..."  [font-size:18px, font-weight:700, color:white]
                div.footer__navSub (optional)
                  ul.footer__navSubList
                    li > a.footer__navSubLink [sub items]
    [copyright row]
```

## Computed Styles (exact)

### #footer.footer
- background: #004986 (rgb(0, 73, 134))
- color: #333333 (but nav links are white)
- padding-top: 60px

### .new-container (inside footer)
- max-width: 1024px
- margin: 0 auto

### .footer__inner
- padding-bottom: 70px

### .footer__navLink
- font-size: 18px
- font-weight: 700
- color: #ffffff
- display: inline
- cursor: pointer

## Footer Images (these ARE the text/visuals — just use <img>)
- Title: `/images/rnwl/footer_ttl.png` — "お問い合わせはこちら" (652×107px)
- Desc: `/images/rnwl/footer_desc.png` — descriptive text banner (474×50px)
- Tel: `/images/rnwl/footer_tel_pc.png` — phone number banner (818×77px)
- Email btn: `/images/rnwl/footer_btn01.png` — "メールでのお問い合わせはこちら" (670×125px) → href inquiry form
- LINE btn: `/images/rnwl/footer_btn02_pc.png` — "LINEでご相談" (486×103px) → href /line/
- Visit btn: `/images/rnwl/footer_btn03_pc.png` — "ご来店予約" (486×103px) → href reservation
- External partner: reform-guide banner (from external CDN, can be omitted)

## Footer Nav Links
- HOME → /
- 選ばれる理由 → /240/
- リフォームメニュー:
  - 外壁 → /gaihekiinfo/
  - 外壁（集合住宅）→ /apart/
  - 屋根 → /yaneinfo/
  - 水まわり・エアコン → /mizumawariinfo/
- 施工事例 → /200/
- お客様の声 → /291/
- 会社案内 → /100/
- 採用情報 → /7012/
- お問い合わせ → /ffex/index.php?form=inquiry

## Copyright
- Text: "© リック・プロ株式会社 All Rights Reserved." (extract exact text from page if possible)
- Color: white/light
- Positioned at bottom of footer

## Float Footer (fixed bottom CTA bar)
- **Target**: included in `Footer.tsx` or separate `FloatFooter.tsx`
- **Position**: fixed, bottom: 0, z-index: 9999
- **Height**: ~98px
- **Background**: white
- **Border-top**: 2px solid rgb(76, 48, 31)  ← dark brown border
- **Width**: 100%

Three buttons/links displayed as images:
- `/images/rnwl/float_footer01_pc.jpg` → tel:0120-069-007 (phone)
- `/images/rnwl/float_footer03_pc.jpg` → /ffex/…?form=showroom (reservation)
- `/images/rnwl/float_footer02_pc.jpg` → /ffex/…?form=inquiry (email)

All three displayed as flex row, equal width, height ~98px.

## Responsive Behavior
- **Desktop:** As described, images used for text-heavy areas
- **Mobile:** May use different image variants or stack layout

## Implementation Note
- Create `FloatFooter.tsx` as a separate component from `Footer.tsx`
- FloatFooter is `position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999`
- Footer content is mostly image-based (all contact/CTA is PNG)

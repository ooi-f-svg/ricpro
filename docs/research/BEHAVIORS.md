# Behaviors — ricpro.com

## Scroll Behaviors
- **Header nav** (`.header__nav`): `position: fixed`. No scroll-triggered style changes observed (nav stays consistent).
- **Float footer** (`.float-footer`): `position: fixed` at bottom, shows phone/reservation/email CTAs persistently.
- No scroll-snap, no intersection-observer animations, no parallax observed.
- No smooth scroll library (Lenis, Locomotive Scroll) detected.

## Click/Interactive Behaviors
### Flow Steps (`.flow-step`)
- Each step has `tabindex="0"` — expandable accordion.
- Default: description is hidden (collapsed).
- On click/focus: description expands, plus icon rotates to ×.
- Mechanism: JS toggles class or visibility on `.flow-step-desc`.
- Plus icon: SVG image from `plus.svg`, rotates 45deg on open.

### FAQ Items (`.faq-item`)
- Each `.faq-q-row` is clickable.
- Default: `.faq-a` is hidden.
- On click: `.faq-a` expands, `.faq-toggle` rotates (background-image plus.svg rotates 45deg).
- Transition: CSS height/opacity.

### Header Mega Menu (`.header__navItem.js-mega_menu_parent`)
- On hover/click: `.header__navSub.header__navSub--mega` appears.
- Multi-level: first layer shows categories, second layer shows sub-items.
- Transition: 0.4s.

### Mobile Drawer Menu (`.pure-drawer`)
- Triggered by hamburger `.header__menuLabel` (label for `#pure-toggle-right` checkbox).
- Opens side drawer with contact info (sp-menu).
- Pure Drawer library CSS animation.

## Hover Behaviors
- `.header__contactLink`: background color darkens on hover (transition: 0.4s).
- `.mv-card-btn`: background changes (transition: background 0.2s).
- `.btn-link`: background changes (transition: background 0.2s).
- `.reason-card-btn`: background changes (transition: background 0.2s).
- `.header__navLink`: transition: 0.4s (color/underline effect).

## Responsive Breakpoints (approximate)
- **Mobile** (< 768px): Nav collapses to hamburger. Cards stack. Images switch to _sp variants.
- **Desktop** (≥ 769px): Full header, multi-column layouts, _pc image variants.
- Contact section uses `<picture>` with `(min-width: 769px)` breakpoint for image switching.

## Animation Notes
- No CSS keyframe animations for page elements.
- `bnr_motion.css` and `bnr_layout.css` loaded — may affect banner animations (not visible on homepage).
- Flow/FAQ accordion transitions are JS-driven, not pure CSS.

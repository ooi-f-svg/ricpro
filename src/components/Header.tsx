'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactButton {
  color: string;
  icon: string;
  label: string; // may contain \n
  sublabel: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CONTACT_BUTTONS: ContactButton[] = [
  {
    color: '#EE2E7A',
    icon: '/images/rnwl/icon/instagram.svg',
    label: '最新\n施工事例',
    sublabel: 'Instagramをチェック',
    href: 'https://www.instagram.com/_ricpro_/',
  },
  {
    color: '#000000',
    icon: '/images/rnwl/icon/mail.svg',
    label: 'お問い\n合わせ',
    sublabel: '24時間メール受付中',
    href: '/ffex/index.php?form=inquiry',
  },
  {
    color: '#59C301',
    icon: '/images/rnwl/icon/line.svg',
    label: 'LINEで\nご相談',
    sublabel: 'お気軽に相談OK！',
    href: '/line/',
  },
  {
    color: '#FF6B3D',
    icon: '/images/rnwl/icon/home.svg',
    label: '来店の\nご予約',
    sublabel: 'ぜひご来店を♪',
    href: 'https://reserve.sakura-home.co.jp/reserve/10232/',
  },
];

const NAV_ITEMS: NavItem[] = [
  { label: 'ホーム', href: '/' },
  {
    label: 'リフォームメニュー',
    href: '#',
    children: [
      { label: '外壁', href: '/gaihekiinfo/' },
      { label: '外壁（集合住宅）', href: '/apart/' },
      { label: '屋根', href: '/yaneinfo/' },
      { label: '水まわり・エアコン', href: '/mizumawariinfo/' },
    ],
  },
  { label: '施工事例', href: '/200/' },
  { label: 'お客様の声', href: '/291/' },
  { label: '選ばれる理由', href: '/240/' },
  { label: '会社案内', href: '/100/' },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function ContactBtn({ btn }: { btn: ContactButton }) {
  const lines = btn.label.split('\n');
  const isExternal = btn.href.startsWith('http');

  const inner = (
    <span
      className="flex flex-col items-center justify-center"
      style={{
        width: 160,
        height: 90,
        backgroundColor: btn.color,
        transition: 'opacity 0.4s',
        cursor: 'pointer',
        display: 'inline-flex',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLSpanElement).style.opacity = '0.8';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLSpanElement).style.opacity = '1';
      }}
    >
      {/* Icon */}
      <Image
        src={btn.icon}
        alt=""
        width={32}
        height={32}
        style={{ width: 32, height: 32, objectFit: 'contain' }}
        aria-hidden="true"
      />
      {/* Label */}
      <span
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: '#ffffff',
          textAlign: 'center',
          lineHeight: 1.3,
          marginTop: 2,
          whiteSpace: 'pre-line',
          fontFamily:
            'var(--font-noto-sans-jp), "Lucida Grande", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif',
        }}
      >
        {lines.join('\n')}
      </span>
      {/* Sublabel */}
      <span
        style={{
          fontSize: 10,
          color: '#ffffff',
          marginTop: 2,
          fontFamily:
            'var(--font-noto-sans-jp), "Lucida Grande", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif',
        }}
      >
        {btn.sublabel}
      </span>
    </span>
  );

  if (isExternal) {
    return (
      <a href={btn.href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={btn.href} style={{ display: 'inline-block' }}>
      {inner}
    </Link>
  );
}

function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul
      style={{
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        minWidth: 200,
        zIndex: 200,
        listStyle: 'none',
        padding: 0,
        margin: 0,
      }}
    >
      {items.map((item) => (
        <li key={item.href} style={{ borderBottom: '1px solid #f0f0f0' }}>
          <Link
            href={item.href}
            style={{
              display: 'block',
              padding: '12px 20px',
              fontSize: 13,
              color: '#333',
              textDecoration: 'none',
              transition: 'background-color 0.2s, color 0.2s',
              fontFamily:
                'var(--font-noto-sans-jp), "Lucida Grande", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#f5f5f5';
              (e.currentTarget as HTMLAnchorElement).style.color = '#EE2E7A';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = '#333';
            }}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function NavLink({ item }: { item: NavItem }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleHref = item.href === '#' ? undefined : item.href;

  return (
    <li
      style={{ position: 'relative' }}
      onMouseEnter={() => item.children && setDropdownOpen(true)}
      onMouseLeave={() => item.children && setDropdownOpen(false)}
    >
      {handleHref ? (
        <Link
          href={handleHref}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 15px',
            height: 70,
            fontSize: 14,
            color: '#333',
            textDecoration: 'none',
            transition: 'color 0.4s',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            fontFamily:
              'var(--font-noto-sans-jp), "Lucida Grande", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = '#EE2E7A';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = '#333';
          }}
        >
          {item.label}
        </Link>
      ) : (
        <button
          type="button"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 15px',
            height: 70,
            fontSize: 14,
            color: '#333',
            background: 'none',
            border: 'none',
            transition: 'color 0.4s',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            fontFamily:
              'var(--font-noto-sans-jp), "Lucida Grande", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color = '#EE2E7A';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color = '#333';
          }}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
        >
          {item.label}
          <span style={{ fontSize: 8, marginTop: 2 }}>▼</span>
        </button>
      )}

      {item.children && dropdownOpen && (
        <DropdownMenu items={item.children} />
      )}
    </li>
  );
}

// ─── Hamburger icon ────────────────────────────────────────────────────────────

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 24,
        height: 18,
      }}
      aria-hidden="true"
    >
      <span
        style={{
          display: 'block',
          width: '100%',
          height: 2,
          backgroundColor: '#333',
          transition: 'transform 0.3s, opacity 0.3s',
          transformOrigin: 'center',
          transform: open ? 'translateY(8px) rotate(45deg)' : 'none',
        }}
      />
      <span
        style={{
          display: 'block',
          width: '100%',
          height: 2,
          backgroundColor: '#333',
          transition: 'opacity 0.3s',
          opacity: open ? 0 : 1,
        }}
      />
      <span
        style={{
          display: 'block',
          width: '100%',
          height: 2,
          backgroundColor: '#333',
          transition: 'transform 0.3s, opacity 0.3s',
          transformOrigin: 'center',
          transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none',
        }}
      />
    </span>
  );
}

// ─── Mobile overlay menu ───────────────────────────────────────────────────────

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 300,
      }}
      onClick={onClose}
    >
      <nav
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 280,
          height: '100%',
          backgroundColor: '#ffffff',
          overflowY: 'auto',
          padding: '20px 0',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 24,
            lineHeight: 1,
            color: '#333',
          }}
          aria-label="メニューを閉じる"
        >
          ×
        </button>
        <ul style={{ listStyle: 'none', padding: 0, margin: '40px 0 0 0' }}>
          {NAV_ITEMS.map((item) => (
            <li key={item.label} style={{ borderBottom: '1px solid #f0f0f0' }}>
              {item.href !== '#' ? (
                <Link
                  href={item.href}
                  onClick={onClose}
                  style={{
                    display: 'block',
                    padding: '16px 24px',
                    fontSize: 15,
                    color: '#333',
                    textDecoration: 'none',
                    fontFamily:
                      'var(--font-noto-sans-jp), "Lucida Grande", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif',
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <span
                    style={{
                      display: 'block',
                      padding: '16px 24px',
                      fontSize: 15,
                      color: '#333',
                      fontFamily:
                        'var(--font-noto-sans-jp), "Lucida Grande", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif',
                    }}
                  >
                    {item.label}
                  </span>
                  {item.children && (
                    <ul style={{ listStyle: 'none', padding: '0 0 8px 0', margin: 0 }}>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            style={{
                              display: 'block',
                              padding: '10px 24px 10px 40px',
                              fontSize: 13,
                              color: '#666',
                              textDecoration: 'none',
                              fontFamily:
                                'var(--font-noto-sans-jp), "Lucida Grande", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif',
                            }}
                          >
                            › {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
        {/* Mobile contact buttons */}
        <div style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {CONTACT_BUTTONS.map((btn) => {
            const isExternal = btn.href.startsWith('http');
            const lines = btn.label.split('\n');
            const inner = (
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  backgroundColor: btn.color,
                  padding: '12px 16px',
                  borderRadius: 4,
                  cursor: 'pointer',
                }}
              >
                <Image
                  src={btn.icon}
                  alt=""
                  width={24}
                  height={24}
                  style={{ width: 24, height: 24, objectFit: 'contain' }}
                  aria-hidden="true"
                />
                <span>
                  <span
                    style={{
                      display: 'block',
                      fontSize: 13,
                      fontWeight: 700,
                      color: '#ffffff',
                      fontFamily:
                        'var(--font-noto-sans-jp), "Lucida Grande", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif',
                    }}
                  >
                    {lines.join(' ')}
                  </span>
                  <span
                    style={{
                      display: 'block',
                      fontSize: 11,
                      color: 'rgba(255,255,255,0.85)',
                      fontFamily:
                        'var(--font-noto-sans-jp), "Lucida Grande", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif',
                    }}
                  >
                    {btn.sublabel}
                  </span>
                </span>
              </span>
            );
            if (isExternal) {
              return (
                <a key={btn.href} href={btn.href} target="_blank" rel="noopener noreferrer" onClick={onClose}>
                  {inner}
                </a>
              );
            }
            return (
              <Link key={btn.href} href={btn.href} onClick={onClose}>
                {inner}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

// ─── Main Header component ────────────────────────────────────────────────────

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Upper bar — static, 90px tall */}
      <header
        className={cn('w-full bg-white')}
        style={{ height: 90 }}
      >
        <div
          style={{
            display: 'flex',
            height: 90,
            paddingLeft: 20,
            maxWidth: 1636,
            margin: '0 auto',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <div
            className="header__ttl"
            style={{ display: 'flex', alignItems: 'center', flex: 1 }}
          >
            <Link href="/" style={{ display: 'inline-block', lineHeight: 0 }}>
              <Image
                src="/images/rnwl/common/hd_title.jpg"
                alt="リックプロ"
                width={356}
                height={76}
                priority
                style={{ width: 356, height: 76, objectFit: 'contain' }}
              />
            </Link>

            {/* Tel */}
            <a
              href="tel:0120-069-007"
              style={{ display: 'inline-block', lineHeight: 0, marginLeft: 16 }}
            >
              <Image
                src="/images/rnwl/hd_tel.jpg"
                alt="0120-069-007"
                width={537}
                height={50}
                style={{ width: 537, height: 50, objectFit: 'contain' }}
              />
            </a>
          </div>

          {/* Contact buttons — desktop only */}
          <div
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: 0, flexShrink: 0 }}
          >
            {CONTACT_BUTTONS.map((btn) => (
              <ContactBtn key={btn.href} btn={btn} />
            ))}
          </div>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            className="flex md:hidden"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              marginLeft: 8,
              flexShrink: 0,
            }}
            aria-label={mobileOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </header>

      {/* Sticky nav bar — 70px, sticks to top of viewport */}
      <nav
        className="header__nav hidden md:block"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: '#ffffff',
          height: 70,
          boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
        }}
      >
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 70,
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </ul>
      </nav>

      {/* Mobile overlay menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

export default Header;

'use client';

import { useState } from 'react';

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: 'リフォームの相談や見積もりは無料ですか？',
    a: 'はい、ご相談・お見積もりはすべて無料です。お気軽にお問い合わせください。',
  },
  {
    q: 'リフォーム中も自宅に住むことはできますか？',
    a: '工事内容によりますが、多くの場合はご自宅に住みながらリフォームが可能です。詳細はご相談時にご案内します。',
  },
  {
    q: '近隣へのあいさつや騒音対策はどうなりますか？',
    a: '工事前に近隣へのご挨拶を行い、騒音やご迷惑が最小限になるよう配慮いたします。',
  },
  {
    q: 'リフォームに使う素材や色、設備は選べますか？',
    a: 'ご要望に合わせて素材や色、設備をお選びいただけます。サンプルやカタログもご用意しています。',
  },
  {
    q: 'アフターサービスや保証はありますか？',
    a: '工事内容に応じた保証やアフターサービスをご用意しています。詳細はご契約時にご説明いたします。',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section
      style={{
        background: '#FABE02',
        padding: '60px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 85px',
        }}
      >
        {/* Section title */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '16px',
            paddingBottom: '4px',
            marginBottom: '19px',
            borderBottom: '4px solid #FABE00',
          }}
        >
          <h2
            style={{
              fontSize: '34px',
              fontWeight: 700,
              letterSpacing: '3.4px',
              color: '#000',
              margin: 0,
            }}
          >
            FAQ
          </h2>
        </div>

        {/* FAQ list */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '600px',
            margin: '0 auto 32px',
          }}
        >
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  background: '#FABE00',
                  borderRadius: '8px',
                  boxShadow: 'rgba(0,0,0,0.08) 0px 2px 8px 0px',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.2s',
                }}
              >
                {/* Question row */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggle(index)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggle(index);
                    }
                  }}
                  style={{
                    background: '#ffffff',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '20px 17px',
                    minHeight: '80px',
                    gap: '10px',
                    borderRadius: '8px',
                    boxShadow: 'rgba(0,0,0,0.08) 0px 2px 8px 0px',
                    cursor: 'pointer',
                  }}
                >
                  {/* Yellow accent bar */}
                  <span
                    style={{
                      background: '#FABE00',
                      width: '5px',
                      height: '40px',
                      marginRight: '16px',
                      flexShrink: 0,
                      borderRadius: '2px',
                      display: 'inline-block',
                    }}
                  />

                  {/* Question text */}
                  <span
                    style={{
                      fontSize: '16.8px',
                      fontWeight: 700,
                      color: '#333333',
                      flex: 1,
                    }}
                  >
                    {item.q}
                  </span>

                  {/* Plus/minus toggle */}
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      backgroundImage: 'url("/images/rnwl/main/plus.svg")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'contain',
                      transition: 'transform 0.3s',
                      flexShrink: 0,
                      display: 'inline-block',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  />
                </div>

                {/* Answer (expandable) */}
                <div
                  style={{
                    background: '#ffffff',
                    padding: isOpen ? '12px' : '0 12px',
                    borderRadius: '0 0 12px 12px',
                    overflow: 'hidden',
                    fontSize: '15.68px',
                    color: '#333333',
                    lineHeight: 1.7,
                    maxHeight: isOpen ? '300px' : '0',
                    opacity: isOpen ? 1 : 0,
                    paddingTop: isOpen ? '12px' : '0',
                    paddingBottom: isOpen ? '12px' : '0',
                    transition:
                      'max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s, padding 0.3s',
                  }}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA button */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://www.ricpro.com/ffex/index.php?form=inquiry"
            style={{
              background: '#FABE00',
              color: '#000000',
              fontSize: '16px',
              fontWeight: 700,
              padding: '18px 28px',
              borderRadius: '50px',
              display: 'inline-block',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
          >
            お問い合わせはこちら
          </a>
        </div>
      </div>
    </section>
  );
}

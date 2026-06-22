'use client';

import { useState } from 'react';

interface FlowStep {
  num: string;
  title: string;
  description: string;
}

const steps: FlowStep[] = [
  {
    num: '01',
    title: 'お問い合わせ・ご相談',
    description:
      'まずはお電話やお問い合わせフォームからご相談ください。ご要望やお悩みを丁寧にお伺いします。',
  },
  {
    num: '02',
    title: '現地調査・ヒアリング',
    description:
      '実際にご自宅へ伺い、現地の状況を確認します。ご希望やご予算、生活スタイルについても詳しくヒアリングします。',
  },
  {
    num: '03',
    title: 'プラン作成・お見積もり',
    description:
      '現地調査の内容をもとに、最適なリフォームプランとお見積もりをご提案します。ご不明点は何でもご相談ください。',
  },
  {
    num: '04',
    title: 'ご契約',
    description:
      'ご提案内容・お見積もりにご納得いただけましたら、ご契約となります。工事日程や詳細を決定します。',
  },
  {
    num: '05',
    title: '着工前のご説明',
    description:
      '工事内容や工程、注意点などを事前にご説明します。近隣へのご挨拶もサポートします。',
  },
  {
    num: '06',
    title: 'リフォーム工事開始',
    description:
      'いよいよリフォーム工事が始まります。安全と品質に配慮しながら、丁寧に施工を進めてまいります。',
  },
  {
    num: '07',
    title: '工事完了・お引き渡し',
    description:
      '工事が完了したら、施工内容をご確認いただきます。ご満足いただけましたらお引き渡しとなります。',
  },
  {
    num: '08',
    title: 'アフターサポート',
    description:
      'お引き渡し後も定期点検や修繕対応など、長期にわたりサポートいたします。',
  },
];

export function Flow() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section
      style={{
        background: '#F5EEE9',
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
              color: '#000000',
              margin: 0,
            }}
          >
            Flow
          </h2>
        </div>

        {/* Step list */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '24px',
          }}
        >
          {steps.map((step, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={step.num}
                onClick={() => handleToggle(index)}
                style={{
                  maxWidth: '600px',
                  margin: '0 auto',
                  width: '100%',
                  cursor: 'pointer',
                }}
              >
                {/* Header row */}
                <div
                  style={{
                    background: '#ffffff',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: '64px',
                    borderRadius: isOpen ? '8px 8px 0 0' : '8px',
                    boxShadow: 'rgba(0,0,0,0.08) 0px 2px 8px 0px',
                    cursor: 'pointer',
                    width: '600px',
                  }}
                >
                  {/* Number badge */}
                  <span
                    style={{
                      background: '#FABE00',
                      width: '64px',
                      height: '64px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '8px 0 0 8px',
                      fontSize: '25.6px',
                      fontWeight: 700,
                      color: '#000000',
                      marginRight: '10px',
                      flexShrink: 0,
                    }}
                  >
                    {step.num}
                  </span>

                  {/* Title */}
                  <span
                    style={{
                      fontSize: '16.8px',
                      fontWeight: 700,
                      color: '#333333',
                      flex: 1,
                    }}
                  >
                    {step.title}
                  </span>

                  {/* Plus toggle icon */}
                  <span
                    style={{
                      width: '32px',
                      height: '24px',
                      backgroundImage: 'url("/images/rnwl/main/plus.svg")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'contain',
                      transition: 'transform 0.3s',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      flexShrink: 0,
                      marginRight: '16px',
                    }}
                  />
                </div>

                {/* Expandable description */}
                <div
                  style={{
                    background: '#ffffff',
                    padding: isOpen ? '12px 12px' : '0 12px',
                    borderRadius: '0 0 12px 12px',
                    overflow: 'hidden',
                    fontSize: '15.68px',
                    color: '#333333',
                    lineHeight: 1.7,
                    maxHeight: isOpen ? '500px' : '0',
                    opacity: isOpen ? 1 : 0,
                    transition:
                      'max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s, padding 0.3s',
                  }}
                >
                  {step.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

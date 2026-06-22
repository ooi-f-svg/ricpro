import Image from "next/image";

interface ReasonCard {
  num: string;
  image: string;
  imageAlt: string;
  title: string;
  desc: string;
  cta?: {
    label: string;
    href: string;
  };
}

const cards: ReasonCard[] = [
  {
    num: "01",
    image: "/images/rnwl/main/reason2.png",
    imageAlt: "グループ一貫体制",
    title: "グループの総合力で\n高品質×低価格を実現",
    desc: "さくらホームグループとして、不動産から新築・リフォームまで住まいに関するサービスを一手に提供しています。\n\nまた、年間400棟以上の建築実績と多数の仕入れルートを活かし、資材コストを抑えながらも高品質な施工を可能にしています。\n\nさらに、中古住宅のリフォームによる再販で得た実践的なノウハウを活かし、最適なプランのご提案が可能です。",
  },
  {
    num: "02",
    image: "/images/rnwl/main/reason3.png",
    imageAlt: "有資格者の確かな提案力",
    title: "リフォームのプロによる\n提案力×施工力",
    desc: "様々な資格を持つスタッフが豊富な知識で住環境をより快適にする外装・内装リフォームのアイデアをご提案します。\n\nさらに、外壁・屋根などの外装リフォームから、クロスの貼り替えやエアコンの取付といった内装リフォームまで幅広く自社職人が丁寧に対応。\n\n提案から施工まで自社一貫体制で安心の品質をお届けします。",
    cta: {
      label: "スタッフ紹介はこちら",
      href: "https://www.ricpro.com/100/10031/",
    },
  },
  {
    num: "03",
    image: "/images/rnwl/main/reason1.png",
    imageAlt: "地域密着20年以上",
    title: "実績×保証で\n長く安心な住まい",
    desc: "おかげさまでこれまでの施工実績は4,000棟以上。地域密着のきめ細かな対応が信頼につながっています。\n\n高い技術力に加え、万一に備えた最長10年の保証とアフターサービスをご用意。",
  },
];

export function Reasons() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "60px 0",
      }}
    >
      {/* Inner container */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 85px",
        }}
      >
        {/* Section title */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "16px",
            paddingBottom: "4px",
            marginBottom: "19px",
            borderBottom: "4px solid #FABE00",
          }}
        >
          <h2
            style={{
              fontSize: "34px",
              fontWeight: 700,
              letterSpacing: "3.4px",
              color: "#000000",
              margin: "0 0 8px",
            }}
          >
            選ばれる3つの理由
          </h2>
          <Image
            src="/images/rnwl/main/ricproman.png"
            alt="ricproman"
            width={104}
            height={101}
            style={{ position: "relative" }}
          />
        </div>

        {/* Cards list */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.num}
              style={{
                background: "#FABE00",
                color: "#000000",
                width: "322px",
                borderRadius: "12px",
                boxShadow: "rgba(0,0,0,0.04) 0px 2px 8px 0px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Card inner */}
              <div
                style={{
                  margin: "16px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "calc(100% - 32px)",
                }}
              >
                {/* Image area */}
                <div
                  style={{
                    background: "#FABE00",
                    height: "120px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    width={311}
                    height={126}
                    style={{ objectFit: "contain", maxHeight: "120px" }}
                  />
                </div>

                {/* Card content */}
                <div
                  style={{
                    paddingTop: "8px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  {/* Header: num + title */}
                  <div
                    style={{
                      margin: "19px 0 8px",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "32px",
                        fontWeight: 700,
                        fontFamily: '"DIN 2014 Narrow", Arial, sans-serif',
                        color: "#000000",
                        height: "40px",
                      }}
                    >
                      {card.num}
                    </div>
                    <div
                      style={{
                        fontSize: "25.6px",
                        fontWeight: 700,
                        color: "#000000",
                        marginBottom: "8px",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {card.title}
                    </div>
                  </div>

                  {/* Description */}
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#000000",
                      marginBottom: "16px",
                      lineHeight: 1.7,
                      whiteSpace: "pre-line",
                      width: "100%",
                    }}
                  >
                    {card.desc}
                  </div>

                  {/* CTA button (card 02 only) */}
                  {card.cta && (
                    <a
                      href={card.cta.href}
                      style={{
                        background: "#ffffff",
                        color: "#000000",
                        fontSize: "16px",
                        fontWeight: 700,
                        padding: "16px 24px",
                        borderRadius: "50px",
                        boxShadow: "rgba(0,0,0,0.08) 0px 2px 8px 0px",
                        display: "block",
                        textAlign: "center",
                        textDecoration: "none",
                        width: "208px",
                        marginBottom: "8px",
                        transition: "background 0.2s",
                      }}
                    >
                      {card.cta.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

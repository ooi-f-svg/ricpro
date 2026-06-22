import Image from "next/image";

interface MvCardProps {
  id: string;
  title: string;
  subtitle: string;
  /** Text before the <br /> */
  desc: string;
  /** Text after the <br /> */
  descRemainder: string;
  href: string;
}

const CARDS: MvCardProps[] = [
  {
    id: "outer",
    title: "外装",
    subtitle: "リフォーム",
    desc: "外壁・屋根・外構など",
    descRemainder: "家の外側を美しく保つ",
    href: "/gaisou/",
  },
  {
    id: "inner",
    title: "内装",
    subtitle: "リフォーム",
    desc: "水回り・床・壁など",
    descRemainder: "暮らしを快適にする",
    href: "/naisou/",
  },
];

function MvCard({ card }: { card: MvCardProps }) {
  return (
    <div
      className={`mv-card mv-card-${card.id}`}
      style={{
        background: "#ffffff",
        padding: "24px 16px 16px",
        width: "240px",
        height: "242px",
        maxWidth: "240px",
        minWidth: "140px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        boxShadow: "rgba(0,0,0,0.08) 0px 4px 16px 0px",
        position: "relative",
      }}
    >
      <div
        className="mv-card-title"
        style={{
          fontSize: "48px",
          fontWeight: 700,
          letterSpacing: "4.8px",
          color: "#000000",
          lineHeight: "48px",
        }}
      >
        {card.title}
      </div>

      <div
        className="mv-card-subtitle"
        style={{
          fontSize: "22.4px",
          fontWeight: 900,
          letterSpacing: "-1.12px",
          color: "#000000",
          marginTop: "2px",
        }}
      >
        {card.subtitle}
      </div>

      <div
        className="mv-card-desc"
        style={{
          fontSize: "12.8px",
          color: "#333333",
          margin: "8px 0 18px",
          textAlign: "center",
        }}
      >
        {card.desc}
        <br />
        {card.descRemainder}
      </div>

      <a
        href={card.href}
        className="mv-card-btn"
        style={{
          background: "#FABE00",
          color: "#000000",
          fontSize: "16px",
          fontWeight: 700,
          padding: "16px 42px",
          borderRadius: "60px",
          boxShadow: "rgba(0,0,0,0.08) 0px 2px 8px 0px",
          transition: "background 0.2s",
          display: "block",
          textAlign: "center",
          textDecoration: "none",
          width: "164px",
        }}
      >
        詳しく見る
      </a>
    </div>
  );
}

export function MainVisual() {
  return (
    <section
      className="mainvisual"
      style={{
        backgroundImage: "url('/images/rnwl/main/mainvisual_pc.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "387px",
        paddingTop: "32px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="mainvisual-buttons"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "125px",
          margin: "32px 0",
        }}
      >
        {/* Left card — exterior */}
        <MvCard card={CARDS[0]} />

        {/* Center logo area */}
        <div
          className="mainvisual-header"
          style={{
            width: "372px",
            height: "279px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            className="mainvisual-logo"
            style={{ margin: "20px 0 40px", textAlign: "center" }}
          >
            <Image
              src="/images/rnwl/main/logo.png"
              alt="リックプロ"
              width={186}
              height={62}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          <Image
            src="/images/rnwl/main/reformcontractor.png"
            alt="リフォーム専門店"
            width={186}
            height={47}
            style={{ objectFit: "contain", width: "186px", height: "auto" }}
            priority
          />
        </div>

        {/* Right card — interior */}
        <MvCard card={CARDS[1]} />
      </div>
    </section>
  );
}

export function Recruit() {
  return (
    <section
      style={{
        background: "#F5EEE9",
        padding: "60px 0",
      }}
    >
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
              color: "#000",
              margin: 0,
            }}
          >
            Recruit
          </h2>
        </div>

        {/* Hero image container */}
        <div
          style={{
            backgroundImage: 'url("/images/rnwl/main/recruitment.png")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundSize: "cover",
            height: "400px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginBottom: "16px",
            position: "relative",
          }}
        >
          <span
            style={{
              fontSize: "2.6rem",
              fontWeight: 900,
              color: "#ffffff",
              padding: "0 18px 16px 0",
              textAlign: "right",
              lineHeight: 1.3,
              whiteSpace: "pre-line",
            }}
          >
            {"未経験から\n「住まいのプロ」へ\n成長できる職場です"}
          </span>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "1.4rem",
            fontWeight: 400,
            color: "#000000",
            lineHeight: 1.6,
          }}
        >
          家づくりに興味のある方、リフォーム業界で成長したい方を歓迎しています。採用に関する詳しい情報は、採用情報ページよりご確認ください。
        </div>

        {/* CTA */}
        <div style={{ marginTop: "16px" }}>
          <a
            href="https://www.ricpro.com/7012/"
            style={{
              background: "#FABE00",
              color: "#000",
              fontSize: "16px",
              fontWeight: 700,
              padding: "18px 28px",
              borderRadius: "50px",
              display: "inline-block",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
          >
            採用情報はこちら
          </a>
        </div>
      </div>
    </section>
  );
}

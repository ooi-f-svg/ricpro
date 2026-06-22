import type { ReactNode } from "react";
import Image from "next/image";

const companyData: { dt: string; dd: ReactNode }[] = [
  { dt: "会社名", dd: "リック・プロ株式会社" },
  { dt: "設立", dd: "平成21年5月25日法人設立" },
  { dt: "従業員", dd: "19名" },
  { dt: "本社", dd: "〒920-8202 金沢市西都2丁目-165" },
  {
    dt: "建設業許可",
    dd: (
      <>
        石川県知事許可（般－7）第17078号
        <br />
        リフォームかし保険事業者登録A5500139
        <br />
        いしかわ事業者版環境ISO登録
      </>
    ),
  },
];

export function Company() {
  return (
    <section
      style={{
        background: "#ffffff",
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
            Company
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            flexWrap: "nowrap",
            marginBottom: "24px",
          }}
        >
          {/* Office photo */}
          <div
            style={{
              width: "500px",
              maxWidth: "500px",
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/rnwl/main/ricpro_office.png"
              alt="リックプロオフィス"
              width={500}
              height={334}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Company info */}
          <div
            style={{
              flex: 1,
              paddingLeft: "18px",
            }}
          >
            <dl style={{ display: "block", margin: 0 }}>
              {companyData.map(({ dt, dd }) => (
                <div key={dt} style={{ overflow: "hidden", marginBottom: "10px" }}>
                  <dt
                    style={{
                      fontSize: "21px",
                      fontWeight: 700,
                      color: "#000000",
                      lineHeight: "35.7px",
                      float: "left",
                      clear: "left",
                      width: "115px",
                      margin: 0,
                    }}
                  >
                    {dt}
                  </dt>
                  <dd
                    style={{
                      fontSize: "21px",
                      fontWeight: 400,
                      color: "#222222",
                      lineHeight: "35.7px",
                      marginLeft: "125px",
                      marginBottom: 0,
                    }}
                  >
                    {dd}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <a
            href="https://www.ricpro.com/100/"
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
            もっと詳しく見る
          </a>
        </div>
      </div>
    </section>
  );
}

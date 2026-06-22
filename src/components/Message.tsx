import Image from "next/image";

const paragraphs = [
  "私たちは、リフォーム専門店として20年以上にわたり地域の住まいを支えてきました。",
  "累計4,000棟を超える施工で培った技術力と、空間づくりに対する深い知見が私たちの強みです。",
  "さらに、不動産売買から建築までを手がける「さくらホームグループ」として、リフォームにとどまらない幅広いアフターサポートが可能です。",
  "外装・内装リフォームをお考えの際は、安心して私たちにご相談ください。",
  "豊富な経験と体制で、理想の住まいをかたちにします。",
];

export function Message() {
  return (
    <section
      className="message"
      style={{ background: "#ffffff", padding: "60px 85px" }}
    >
      <div
        className="message-inner"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 85px" }}
      >
        <div
          className="message-main"
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            gap: "32px",
          }}
        >
          {/* President photo — rendered on the RIGHT via row-reverse */}
          <div style={{ flexShrink: 0, borderRadius: "12px", overflow: "hidden" }}>
            <Image
              className="message-img"
              src="/images/rnwl/main/section_img1.png"
              alt="代表写真"
              width={400}
              height={400}
              style={{ objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Text content — on the LEFT */}
          <div className="message-text" style={{ flex: 1 }}>
            <h3
              style={{
                fontSize: "22.4px",
                fontWeight: 900,
                color: "#333333",
                margin: "0 0 22.4px",
              }}
            >
              リフォーム専門店の確かな技術と、グループの総合力で応える。
            </h3>

            {paragraphs.map((text, index) => (
              <p
                key={index}
                style={{
                  fontSize: "16px",
                  color: "#333333",
                  lineHeight: 1.8,
                  margin: index < paragraphs.length - 1 ? "0 0 1em" : "0",
                }}
              >
                {text}
              </p>
            ))}

            <div
              className="message-sign"
              style={{
                fontSize: "12.8px",
                color: "#888888",
                marginTop: "19px",
              }}
            >
              <p style={{ margin: "0 0 8px" }}>
                リック・プロ株式会社　代表取締役
              </p>
              <Image
                className="representative-sign"
                src="/images/rnwl/main/representative_sign.png"
                alt="上濃俊介 署名"
                width={279}
                height={64}
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

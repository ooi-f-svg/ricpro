import Image from "next/image";

interface VoiceCard {
  image: string;
  alt: string;
  tags: string[];
  comment: string;
}

const voiceCards: VoiceCard[] = [
  {
    image: "/images/rnwl/main/voice_img1.png",
    alt: "お客様1",
    tags: ["金沢市", "屋根"],
    comment:
      "全く知識が無かったのですが分かりやすく説明・ご提案いただきました",
  },
  {
    image: "/images/rnwl/main/voice_img2.png",
    alt: "お客様2",
    tags: ["金沢市", "外構"],
    comment:
      "完了報告資料にて屋根の状態がわかり良かったです。塗装色もシュミレーションを何度もして頂きありがとうございました。",
  },
  {
    image: "/images/rnwl/main/voice_img3.png",
    alt: "お客様3",
    tags: ["金沢市", "外壁"],
    comment:
      "サイディングの補修方法や塗料の選択、ツートンにする際の適切なアドバイスに十分納得できるものでした。",
  },
];

export function Voices() {
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
        {/* Section Title */}
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
              color: "#000",
              margin: "0 0 8px",
            }}
          >
            お客様の声
          </h2>
          <Image
            src="/images/rnwl/main/ricproman.png"
            alt="ricproman mascot"
            width={104}
            height={104}
            style={{ width: "104px", height: "auto" }}
          />
        </div>

        {/* Cards List */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            paddingBottom: "8px",
            marginBottom: "24px",
          }}
        >
          {voiceCards.map((card) => (
            <div
              key={card.alt}
              style={{
                background: "#ffffff",
                padding: "24px 18px",
                width: "330px",
                borderRadius: "16px",
                boxShadow: "rgba(0,0,0,0.08) 0px 2px 8px 0px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                src={card.image}
                alt={card.alt}
                width={294}
                height={196}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                  width: "100%",
                }}
              >
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "#FABE00",
                      color: "#000000",
                      fontSize: "15.2px",
                      fontWeight: 700,
                      padding: "2px 12px",
                      borderRadius: "4px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div
                style={{
                  fontSize: "16.8px",
                  fontWeight: 500,
                  lineHeight: "28.56px",
                  color: "#333333",
                  width: "100%",
                }}
              >
                &ldquo;{card.comment}&rdquo;
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: "center" }}>
          <a
            href="https://www.ricpro.com/291/"
            style={{
              background: "#FABE00",
              color: "#000000",
              fontSize: "16px",
              fontWeight: 700,
              padding: "18px 28px",
              borderRadius: "50px",
              display: "inline-block",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
          >
            お客様の声をもっとみる
          </a>
        </div>
      </div>
    </section>
  );
}

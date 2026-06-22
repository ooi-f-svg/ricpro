import Image from "next/image";

const FLOAT_FOOTER_BUTTONS = [
  {
    href: "tel:0120-069-007",
    src: "/images/rnwl/float_footer01_pc.jpg",
    alt: "お電話でお問い合わせ",
  },
  {
    href: "https://www.ricpro.com/ffex/index.php?form=showroom",
    src: "/images/rnwl/float_footer03_pc.jpg",
    alt: "来店のご予約",
  },
  {
    href: "https://www.ricpro.com/ffex/index.php?form=inquiry",
    src: "/images/rnwl/float_footer02_pc.jpg",
    alt: "メールでのお問い合わせ",
  },
] as const;

export function FloatFooter() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: "#ffffff",
        borderTop: "2px solid rgb(76, 48, 31)",
        height: "100px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {FLOAT_FOOTER_BUTTONS.map((btn) => (
        <a
          key={btn.href}
          href={btn.href}
          style={{
            flex: 1,
            display: "flex",
            cursor: "pointer",
          }}
        >
          <Image
            src={btn.src}
            alt={btn.alt}
            width={400}
            height={100}
            unoptimized
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </a>
      ))}
    </div>
  );
}

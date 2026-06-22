import Image from "next/image";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "選ばれる理由", href: "/240/" },
] as const;

const REFORM_MENU_ITEMS = [
  { label: "外壁", href: "/gaihekiinfo/" },
  { label: "外壁（集合住宅）", href: "/apart/" },
  { label: "屋根", href: "/yaneinfo/" },
  { label: "水まわり・エアコン", href: "/mizumawariinfo/" },
] as const;

const NAV_ITEMS_SECONDARY = [
  { label: "施工事例", href: "/200/" },
  { label: "お客様の声", href: "/291/" },
  { label: "会社案内", href: "/100/" },
  { label: "採用情報", href: "/7012/" },
  { label: "お問い合わせ", href: "/ffex/index.php?form=inquiry" },
] as const;

export function Footer() {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: "#004986",
        paddingTop: "60px",
        width: "100%",
        color: "#ffffff",
      }}
    >
      {/* Inner container */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "1024px",
          paddingBottom: "70px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        {/* Contact / Inquiry section */}
        <div className="flex flex-col items-center text-center">
          {/* Title image */}
          <Image
            src="/images/rnwl/footer_ttl.png"
            alt="お問い合わせはこちら"
            width={652}
            height={107}
            unoptimized
            style={{ maxWidth: "100%", height: "auto" }}
          />

          {/* Desc image */}
          <div className="mt-4">
            <Image
              src="/images/rnwl/footer_desc.png"
              alt="リック･プロは住まいのプロフェッショナルです。なんでもお気軽にお問い合わせください！"
              width={474}
              height={50}
              unoptimized
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          {/* Tel image link */}
          <div className="mt-4">
            <a href="tel:0120-069-007" style={{ display: "inline-block" }}>
              <Image
                src="/images/rnwl/footer_tel_pc.png"
                alt="お電話はこちらから"
                width={818}
                height={77}
                unoptimized
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </a>
          </div>

          {/* Three CTA button images */}
          <div
            className="flex flex-wrap justify-center"
            style={{ gap: "12px", marginTop: "16px" }}
          >
            {/* Email inquiry — takes full row width on its own line */}
            <a
              href="https://www.ricpro.com/ffex/index.php?form=inquiry"
              style={{ display: "block", width: "100%" }}
            >
              <Image
                src="/images/rnwl/footer_btn01.png"
                alt="メールでのお問い合わせ"
                width={670}
                height={125}
                unoptimized
                style={{ maxWidth: "100%", height: "auto", margin: "0 auto" }}
              />
            </a>

            {/* LINE */}
            <a href="/line/" style={{ display: "block" }}>
              <Image
                src="/images/rnwl/footer_btn02_pc.png"
                alt="LINEでのお問い合わせ"
                width={486}
                height={103}
                unoptimized
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </a>

            {/* Reservation */}
            <a
              href="https://www.ricpro.com/ffex/index.php?form=showroom"
              style={{ display: "block" }}
            >
              <Image
                src="/images/rnwl/footer_btn03_pc.png"
                alt="来店のご予約"
                width={486}
                height={103}
                unoptimized
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </a>
          </div>
        </div>

        {/* Navigation section */}
        <nav
          className="mt-10"
          style={{ color: "#ffffff" }}
          aria-label="フッターナビゲーション"
        >
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {/* Primary nav items */}
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </a>
            ))}

            {/* Reform menu parent + sub-items */}
            <div className="flex flex-col gap-y-1">
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                リフォームメニュー
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {REFORM_MENU_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#ffffff",
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Secondary nav items */}
            {NAV_ITEMS_SECONDARY.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Copyright */}
      <div
        style={{
          textAlign: "center",
          paddingTop: "16px",
          paddingBottom: "16px",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          fontSize: "13px",
          color: "rgba(255,255,255,0.7)",
        }}
      >
        © リック・プロ株式会社 All Rights Reserved.
      </div>
    </footer>
  );
}

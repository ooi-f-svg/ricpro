import Image from "next/image";

// ── Navigation data ──────────────────────────────────────────────────────────

const COL1_LINKS = [
  { label: "HOME", href: "https://www.ricpro.com/" },
  { label: "選ばれる理由", href: "https://www.ricpro.com/240/" },
];

const REFORM_MENU = [
  { label: "外壁", href: "https://www.ricpro.com/gaihekiinfo/" },
  { label: "外壁（集合住宅）", href: "https://www.ricpro.com/apart/" },
  { label: "屋根", href: "https://www.ricpro.com/yaneinfo/" },
  { label: "水まわり・エアコン", href: "https://www.ricpro.com/mizumawariinfo/" },
];

const GAISO_ITEMS = [
  { label: "外壁塗装", href: "https://www.ricpro.com/200/2010/" },
  { label: "外壁工事", href: "https://www.ricpro.com/200/2013/" },
  { label: "屋根塗装", href: "https://www.ricpro.com/200/2015/" },
  { label: "屋根工事", href: "https://www.ricpro.com/200/2020/" },
  { label: "雨漏り修理", href: "https://www.ricpro.com/200/2030/" },
  { label: "防水工事", href: "https://www.ricpro.com/200/2035/" },
  { label: "その他", href: "https://www.ricpro.com/200/2040/" },
];

const NAISO_ITEMS = [
  { label: "キッチン", href: "https://www.ricpro.com/200/kitchen/" },
  { label: "浴室", href: "https://www.ricpro.com/200/bath/" },
  { label: "トイレ", href: "https://www.ricpro.com/200/toilet/" },
  { label: "洗面", href: "https://www.ricpro.com/200/washroom/" },
  { label: "給湯器", href: "https://www.ricpro.com/200/water-heater/" },
  { label: "窓", href: "https://www.ricpro.com/200/window/" },
  { label: "ドア・玄関", href: "https://www.ricpro.com/200/door/" },
  { label: "その他（クロス・床貼替等）", href: "https://www.ricpro.com/200/other/" },
];

const COMPANY_ITEMS = [
  { label: "会社案内", href: "https://www.ricpro.com/100/" },
  { label: "アクセスマップ", href: "https://www.ricpro.com/100/10050/" },
  { label: "ショールームのご案内", href: "https://www.ricpro.com/ffex/index.php?form=showroom" },
  { label: "スタッフ紹介", href: "https://www.ricpro.com/100/10031/" },
  { label: "リック・プロのこだわり", href: "https://www.ricpro.com/250/" },
  { label: "採用情報", href: "https://www.ricpro.com/7012/" },
];

const USEFUL_ITEMS = [
  { label: "最新チラシ情報", href: "https://www.ricpro.com/post/" },
  { label: "外装リフォームの参考価格", href: "https://www.ricpro.com/ffex/index.php?form=gaihekiyane" },
  { label: "火災保険でお得にリフォーム", href: "https://www.ricpro.com/kasaihoken/" },
  { label: "外装カラーシミュレーション", href: "https://www.ricpro.com/simulation/" },
  { label: "アフターフォロー", href: "https://www.ricpro.com/241/" },
  { label: "外装リフォームの流れ", href: "https://www.ricpro.com/100/10040/" },
  { label: "よくある質問", href: "https://www.ricpro.com/300/" },
  { label: "見積もり相談（WEB）", href: "https://www.ricpro.com/ffex/index.php?form=quotation" },
  { label: "見積もり相談（LINE）", href: "https://www.ricpro.com/line/" },
  { label: "プライバシーポリシー", href: "https://www.ricpro.com/981/" },
];

// ── Sub-link helper ──────────────────────────────────────────────────────────

function SubLink({ label, href }: { label: string; href?: string }) {
  const style: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: 400,
    color: "#ffffff",
    textDecoration: "none",
    lineHeight: "1.8",
    display: "block",
  };
  if (href) {
    return <a href={href} style={style}>- {label}</a>;
  }
  return <span style={{ ...style, opacity: 0.6 }}>- {label}</span>;
}

// ── Component ────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: "#004986",
        width: "100%",
        color: "#ffffff",
      }}
    >
      {/* ── Inner container ── */}
      <div
        style={{
          maxWidth: "1044px",
          margin: "0 auto",
          padding: "60px 16px 0",
        }}
      >
        {/* ── Inquiry section ── */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          {/* Title image */}
          <Image
            src="/images/rnwl/footer_ttl.png"
            alt="お問い合わせはこちら"
            width={652}
            height={107}
            unoptimized
            style={{ maxWidth: "100%", height: "auto" }}
          />

          {/* Description image */}
          <div style={{ marginTop: "16px" }}>
            <Image
              src="/images/rnwl/footer_desc.png"
              alt="リック･プロは住まいのプロフェッショナルです。なんでもお気軽にお問い合わせください！"
              width={474}
              height={50}
              unoptimized
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          {/* Phone image (includes hours) */}
          <div style={{ marginTop: "16px" }}>
            <a href="tel:0120-069-007" style={{ display: "inline-block" }}>
              <Image
                src="/images/rnwl/footer_tel_pc.png"
                alt="お電話はこちらから　受付時間 9:30〜18:00 定休日 水曜日"
                width={818}
                height={77}
                unoptimized
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </a>
          </div>

          {/* CTA buttons: email (mobile-only), LINE, reservation */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px",
              marginTop: "16px",
              width: "100%",
            }}
          >
            {/* Email — shown on mobile only (sp); hidden on PC via media query workaround */}
            <a
              href="https://www.ricpro.com/ffex/index.php?form=inquiry"
              className="footer-btn-sp"
              style={{ display: "none", width: "100%" }}
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
            <a href="https://www.ricpro.com/line/" style={{ display: "block" }}>
              <Image
                src="/images/rnwl/footer_btn02_pc.png"
                alt="LINEでご相談"
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
                alt="来店のご予約はこちら"
                width={486}
                height={103}
                unoptimized
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </a>
          </div>
        </div>

        {/* ── Navigation grid (4 columns) ── */}
        <nav
          aria-label="フッターナビゲーション"
          style={{
            marginTop: "48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "0 0",
            paddingBottom: "40px",
          }}
        >
          {/* ─ Column 1: HOME / 選ばれる理由 / リフォームメニュー ─ */}
          <div style={{ padding: "0 10px" }}>
            {COL1_LINKS.map((item) => (
              <div key={item.href} style={{ marginBottom: "12px" }}>
                <a
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
              </div>
            ))}

            {/* Reform menu heading */}
            <div style={{ marginBottom: "8px" }}>
              <span style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff" }}>
                リフォームメニュー
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {REFORM_MENU.map((item) => (
                <SubLink key={item.href} label={item.label} href={item.href} />
              ))}
              <SubLink label="内装・窓・ドア（準備中）" />
            </div>
          </div>

          {/* ─ Column 2: 施工事例 & お客様の声 ─ */}
          <div style={{ padding: "0 10px" }}>
            <div style={{ marginBottom: "8px" }}>
              <span style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff" }}>
                施工事例＆お客様の声
              </span>
            </div>

            {/* 施工事例一覧 */}
            <div style={{ marginBottom: "8px" }}>
              <a
                href="https://www.ricpro.com/200/"
                style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", textDecoration: "none" }}
              >
                施工事例一覧
              </a>
            </div>

            {/* 外装リフォーム sub-group */}
            <div style={{ marginBottom: "4px" }}>
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}>
                外装リフォーム
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginBottom: "8px" }}>
              {GAISO_ITEMS.map((item) => (
                <SubLink key={item.href} label={item.label} href={item.href} />
              ))}
            </div>

            {/* 内装リフォーム sub-group */}
            <div style={{ marginBottom: "4px" }}>
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}>
                内装リフォーム
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginBottom: "8px" }}>
              {NAISO_ITEMS.map((item) => (
                <SubLink key={item.href} label={item.label} href={item.href} />
              ))}
            </div>

            {/* お客様の声一覧 */}
            <div>
              <a
                href="https://www.ricpro.com/291/"
                style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", textDecoration: "none" }}
              >
                お客様の声一覧
              </a>
            </div>
          </div>

          {/* ─ Column 3: 会社案内 ─ */}
          <div style={{ padding: "0 10px" }}>
            <div style={{ marginBottom: "8px" }}>
              <span style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff" }}>
                会社案内
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {COMPANY_ITEMS.map((item) => (
                <SubLink key={item.href} label={item.label} href={item.href} />
              ))}
            </div>
          </div>

          {/* ─ Column 4: お役立ち情報 ─ */}
          <div style={{ padding: "0 10px" }}>
            <div style={{ marginBottom: "8px" }}>
              <span style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff" }}>
                お役立ち情報
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {USEFUL_ITEMS.map((item) => (
                <SubLink key={item.href} label={item.label} href={item.href} />
              ))}
            </div>
          </div>
        </nav>

        {/* ── リフォームガイド badge ── */}
        <div style={{ paddingBottom: "40px" }}>
          <a
            href="https://www.reform-guide.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://www.reform-guide.jp/topics/wp-content/uploads/2024/08/bnr_06.png"
              alt="リフォームガイド 認定加盟店"
              width={200}
              height={80}
              unoptimized
              style={{ height: "auto" }}
            />
          </a>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div
        style={{
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          fontSize: "13px",
          color: "rgba(255,255,255,0.7)",
        }}
      >
        Copyright ©{" "}
        <a href="https://www.ricpro.com/" style={{ color: "inherit", textDecoration: "none" }}>
          リック・プロ株式会社
        </a>{" "}
        All Rights Reserved.
      </div>
    </footer>
  );
}

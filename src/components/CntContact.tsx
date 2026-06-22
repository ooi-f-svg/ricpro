export function CntContact() {
  return (
    <div
      className="cnt-contact w-full py-[30px]"
      style={{ backgroundColor: "#FABE00" }}
    >
      <div className="mx-auto w-full max-w-[1024px] px-0">
        {/* Row 1: Phone, Business Hours, Email (PC only) */}
        <div className="cnt-contact__wrap">
          <div
            className="cnt-contact__list flex flex-row flex-nowrap"
            style={{ margin: "0 -10px" }}
          >
            {/* Phone */}
            <div
              className="cnt-contact__item h-[94px] flex-1"
              style={{ padding: "0 10px" }}
            >
              <a
                href="tel:0120-069-007"
                className="cnt-contact__link inline-block h-[94px] w-full"
              >
                <picture>
                  <source
                    media="(min-width: 769px)"
                    srcSet="/images/rnwl/naisou/cnt_contact01_pc.png"
                  />
                  <img
                    src="/images/rnwl/naisou/cnt_contact01_sp.png"
                    alt="電話で相談する 0120-069-007"
                    className="h-full w-full object-contain"
                  />
                </picture>
              </a>
            </div>

            {/* Business Hours (no link) */}
            <div
              className="cnt-contact__item h-[94px] flex-1"
              style={{ padding: "0 10px" }}
            >
              <div className="cnt-contact__link inline-block h-[94px] w-full">
                <picture>
                  <source
                    media="(min-width: 769px)"
                    srcSet="/images/rnwl/naisou/cnt_contact02_pc.png"
                  />
                  <img
                    src="/images/rnwl/naisou/cnt_contact02_sp.png"
                    alt="営業時間"
                    className="h-full w-full object-contain"
                  />
                </picture>
              </div>
            </div>

            {/* Email (PC only) */}
            <div
              className="cnt-contact__item cnt-contact__item--pc h-[94px] flex-1 hidden md:block"
              style={{ padding: "0 10px" }}
            >
              <a
                href="https://www.ricpro.com/ffex/index.php?form=naisou_inquiry"
                className="cnt-contact__link inline-block h-[94px] w-full"
              >
                <img
                  src="/images/rnwl/naisou/cnt_contact03_pc.png"
                  alt="メールで問い合わせる"
                  className="h-full w-full object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Row 2: Showroom, LINE, Email (SP only) */}
        <div className="cnt-contact__wrap">
          <div
            className="cnt-contact__list flex flex-row flex-nowrap"
            style={{ margin: "0 -10px" }}
          >
            {/* Showroom Reservation */}
            <div
              className="cnt-contact__item h-[94px] flex-1"
              style={{ padding: "0 10px" }}
            >
              <a
                href="https://www.ricpro.com/ffex/index.php?form=showroom"
                className="cnt-contact__link inline-block h-[94px] w-full"
              >
                <picture>
                  <source
                    media="(min-width: 769px)"
                    srcSet="/images/rnwl/naisou/cnt_contact04_pc.png"
                  />
                  <img
                    src="/images/rnwl/naisou/cnt_contact04_sp.png"
                    alt="ショールーム予約"
                    className="h-full w-full object-contain"
                  />
                </picture>
              </a>
            </div>

            {/* LINE Consultation */}
            <div
              className="cnt-contact__item h-[94px] flex-1"
              style={{ padding: "0 10px" }}
            >
              <a
                href="https://www.ricpro.com/line/"
                className="cnt-contact__link inline-block h-[94px] w-full"
              >
                <picture>
                  <source
                    media="(min-width: 769px)"
                    srcSet="/images/rnwl/naisou/cnt_contact05_pc.png"
                  />
                  <img
                    src="/images/rnwl/naisou/cnt_contact05_sp.png"
                    alt="LINEで相談する"
                    className="h-full w-full object-contain"
                  />
                </picture>
              </a>
            </div>

            {/* Email (SP only) */}
            <div
              className="cnt-contact__item cnt-contact__item--sp h-[94px] flex-1 block md:hidden"
              style={{ padding: "0 10px" }}
            >
              <a
                href="https://www.ricpro.com/ffex/index.php?form=naisou_inquiry"
                className="cnt-contact__link inline-block h-[94px] w-full"
              >
                <img
                  src="/images/rnwl/naisou/cnt_contact03_sp.png"
                  alt="メールで問い合わせる"
                  className="h-full w-full object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

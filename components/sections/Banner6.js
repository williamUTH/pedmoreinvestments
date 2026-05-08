import Link from "next/link";

export default function Banner6() {
  return (
    <>
      <section className="banner-area-seven">
        <div className="banner-shape" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="banner-content text-center">
                {/* Headline and supporting text tailored for Pedmore Investments */}
                <h2 className="title wow fadeInUp" data-wow-delay=".2s">
                  Your partner in strategic property investment and asset
                  management
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Professional, trustworthy, and relationship-led, we specialise
                  in acquiring and managing freehold multi-unit blocks and
                  stand-alone properties across the UK, with a strong focus on
                  the Midlands.
                </p>
                <Link
                  href="contact"
                  className="btn wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="btn_m">
                    <div className="btn_c">
                      <div className="btn_t1">Contact Us</div>
                      <div className="btn_t2">Contact Us</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

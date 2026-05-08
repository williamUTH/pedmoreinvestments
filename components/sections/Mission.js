import Link from "next/link";

export default function Mission() {
  return (
    <>
      <section className="mission-area section-pb-140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mission-img">
                {/* Replace the original image with a luxurious interior to better represent investment excellence */}
                <img
                  src="/assets/img/images/skyscraper1.jpg"
                  alt="Interior of a luxurious property"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "520px",
                    aspectRatio: "520 / 520",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mission-content">
                <div className="section-title mb-40">
                  <span className="sub-title">Our mission</span>
                  <h2 className="title">
                    Investing with Integrity. Delivering with Certainty.
                  </h2>
                </div>
                <p>
                  At Pedmore Investments, we exist to bring clarity and
                  confidence to property investment. Our approach is rooted in
                  trust, discipline, and long term thinking. Backed by over 15
                  years of experience and a deep understanding of simple to
                  complex deal structures, we invest in residential and
                  commercial opportunities where we can act decisively and
                  honourably.
                  <br /> <br /> We believe in doing what we say - and seeing it
                  through. Every offer we make is fair, every decision we take
                  is measured, and every commitment we give is upheld.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

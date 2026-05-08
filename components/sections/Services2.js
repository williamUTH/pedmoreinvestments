import Link from "next/link";

export default function Services2() {
  return (
    <>
      <section className="services-area-two section-pt-140 section-pb-140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="services-img-two text-center">
                <img
                  src="/assets/img/images/skyscraper3.jpg"
                  alt="Industrial units at Beaver Park"
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
              <div className="services-content-two">
                <div className="section-title mb-50">
                  <span className="sub-title">Our expertise</span>
                  <h2 className="title">Expertise, Applied with Discipline</h2>
                  <p className="mb-40 mt-40">
                    We apply knowledge with care, and experience with precision.
                    Every decision we make is shaped by years of doing things
                    the right way - quietly, consistently, and with the long
                    view in mind.
                  </p>
                </div>
                <div className="services-list">
                  <ul className="list-wrap">
                    <li>Residential and commercial acquisitions</li>
                    <li>
                      Structuring unconditional and time-sensitive purchases
                    </li>
                    <li>Private, off-market transactions</li>
                    <li>Long-term portfolio strategy</li>
                    <li>Navigating complexity with simplicity</li>
                    <li>Acting decisively, with integrity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

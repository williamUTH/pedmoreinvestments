import Link from "next/link";

export default function Serviceareas() {
  return (
    <section className="services-area services-style-three section-pt-80 section-pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="section-title text-center mb-55">
              <span className="sub-title">Our Expertise</span>
              <h2 className="title">Creating a great tomorrow for everyone</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="services-item">
              <div className="services-thumb">
                <Link href="#">
                  <img
                    src="/assets/img/images/residential.jpg"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
              <div className="services-content">
                <h2 className="title">
                  <Link href="contact">Residential</Link>
                </h2>
                <p>
                  Providing high quality living across freehold multi tenanted
                  blocks and single occupancy homes
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="services-item">
              <div className="services-thumb">
                <Link href="#">
                  <img src="/assets/img/images/commercialshops.jpg" alt="" />
                </Link>
              </div>
              <div className="services-content">
                <h2 className="title">
                  <Link href="contact">Commercial</Link>
                </h2>
                <p>
                  Acquiring and holding mixed-use and commercial spaces that
                  support both corporate and independent occupiers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="services-item">
              <div className="services-thumb">
                <Link href="contact">
                  <img src="/assets/img/images/blueprint.jpg" alt="" />
                </Link>
              </div>
              <div className="services-content">
                <h2 className="title">
                  <Link href="contact">Transformations</Link>
                </h2>
                <p>
                  Specialising in refurbishments and change-of-use projects that
                  unlock long-term value in existing assets
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

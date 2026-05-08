import Layout from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import Team from "@/components/sections/Team";
import Counter from "@/components/sections/Counter";
import Testimonial2 from "@/components/sections/Testimonial2";
import Newsletter from "@/components/sections/Newsletter";
import Serviceareas from "@/components/sections/Serviceareas";

const CounterUp = dynamic(() => import("@/components/elements/CounterUp"), {
  ssr: false,
});

export default function About() {
  return (
    <>
      <Layout headerStyle={7}>
        {/* breadcrumb-area */}
        <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <h2 className="title">About Us</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        About
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}

        {/* Overview Section - about-area */}
        <section className="about-area-two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-img text-center">
                  <img
                    src="/assets/img/images/skyscraper2.jpg"
                    alt=""
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
                <div className="about-content">
                  <div className="section-title mb-40">
                    <span className="sub-title">Who we are</span>
                    <h2 className="title">
                      Founded with purpose, built on experience
                    </h2>
                  </div>
                  <p>
                    Pedmore Investments was founded in 2016 by brothers Jay and
                    Indy Dubb, following years of hands-on experience across the
                    property sector. Their shared background in acquisition,
                    refurbishments, transformations, and asset management laid
                    the foundation for a privately backed investment office
                    built on trust, discipline, and long-term thinking.
                    <br /> <br />
                    Pedmore exists to take a measured, relationship-led approach
                    to investing, where decisions are considered, opportunities
                    are selected with care, and every move reflects the
                    principles that underpin the business.
                    <br /> <br />
                    Over the years, the company has quietly grown a portfolio of
                    residential and commercial assets, with a focused presence
                    in the Midlands. Pedmore remains focused on doing things
                    properly, with clarity, conviction, and care. The firm was
                    built for the long term, and it’s run with that in mind
                    every single day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-area-end */}

        {/* counter-area */}
        <Counter />
        {/* counter-area-end */}

        {/* Vision Section */}
        <section className="vision-area section-pt-140 section-pb-140">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-0 order-lg-2">
                <div className="vision-img text-center">
                  <img
                    src="/assets/img/images/skyscraper4.jpg"
                    alt=""
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
                <div className="vision-content">
                  <div className="section-title mb-35">
                    <span className="sub-title">Our vision</span>
                    <h2 className="title">
                      We Believe in Partnerships That Create Sustainable Value
                    </h2>
                  </div>
                  <p>
                    Our vision is to create a portfolio that stands the test of
                    time, held with care, managed with discipline, and built on
                    principles that do not change. <br /> <br /> We see property
                    not just as assets, but as places of long-term value for
                    communities, for partners, and for the generations that
                    follow. <br /> <br /> Pedmore Investments will remain
                    privately backed, independent, and guided by conviction. We
                    will continue to invest patiently, act decisively, and build
                    a reputation defined not by scale, but by substance. In
                    everything we do, our vision is to build something lasting a
                    standard of trust and value that carries forward for
                    generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* vision-area-end */}

        {/* Team Section */}
        <Team />
        {/* team-area-end */}

        <Serviceareas />

        {/* testimonial-area */}
        <Testimonial2 />
        {/* testimonial-area-end */}

        {/* newsletter-area */}
        <Newsletter />
        {/* newsletter-area-end */}
      </Layout>
    </>
  );
}

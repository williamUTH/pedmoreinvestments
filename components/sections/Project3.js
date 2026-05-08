import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
};

export default function Project3() {
  return (
    <>
      <section className="project-area project-style-three section-pt-140">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="section-title mb-40">
                <span className="sub-title">Featured investments</span>
                <h2 className="title">
                  Explore The Pedmore Investments Portfolio
                </h2>
                <p className="mb-40">
                  Our portfolio reflects the kind of investments we believe in -
                  considered, long-term, and grounded in real value. From
                  residential acquisitions to commercial holdings, each property
                  has been selected based on its potential, stability, and
                  alignment with our principles.
                  <br /> <br /> This is a curated selection of recent and
                  notable investments that represent how we think, how we work,
                  and what we stand for.
                </p>
                <Link href="portfolio" className="btn transparent-btn">
                  <div className="btn_m">
                    <div className="btn_c">
                      <div className="btn_t1">Explore all</div>
                      <div className="btn_t2">Explore all</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="swiper-container project-active">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="project-item">
                      <div className="project-thumb">
                        <Link href="/portfolio">
                          <img
                            src="assets/img/project/Swadlincote1.jpeg"
                            alt="Swadlincote"
                          />
                        </Link>
                      </div>
                      <div className="project-content">
                        <h3 className="title">
                          <Link href="/portfolio">Swadlincote</Link>
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="project-item">
                      <div className="project-thumb">
                        <Link href="/portfolio">
                          <img
                            src="assets/img/project/hayseech1.jpg"
                            alt="Hayseech Road"
                          />
                        </Link>
                      </div>
                      <div className="project-content">
                        <h3 className="title">
                          <Link href="/portfolio">Halesowen</Link>
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="project-item">
                      <div className="project-thumb">
                        <Link href="/portfolio">
                          <img
                            src="assets/img/project/Beeches1.jpg"
                            alt="The Beeches"
                          />
                        </Link>
                      </div>
                      <div className="project-content">
                        <h3 className="title">
                          <Link href="/portfolio">Oldswinford</Link>
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="project-item">
                      <div className="project-thumb">
                        <Link href="/portfolio">
                          <img
                            src="assets/img/project/Beever1.jpg"
                            alt="Halesowen"
                          />
                        </Link>
                      </div>
                      <div className="project-content">
                        <h3 className="title">
                          <Link href="/portfolio">Halesowen</Link>
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="project-item">
                      <div className="project-thumb">
                        <Link href="/portfolio">
                          <img
                            src="assets/img/project/Reddal1.jpg"
                            alt="Reddal Hill Road"
                          />
                        </Link>
                      </div>
                      <div className="project-content">
                        <h3 className="title">
                          <Link href="/portfolio">Cradley Heath</Link>
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

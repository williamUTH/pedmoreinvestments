export default function Testimonial2() {
  return (
    <>
      <section className="testimonial-area testimonial-style-two section-pt-130 section-pb-140">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9">
              <div className="section-title text-center mb-60">
                <span className="sub-title">What our clients say</span>
                <h2 className="title">
                  Hear from clients who we've worked with{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/* Custom testimonials focusing on investment experiences */}
              <div className="testimonial-item">
                <div
                  className="testimonial-content wow fadeInRight"
                  data-wow-delay=".2s"
                >
                  <p>
                    “Having worked with Pedmore Investments Ltd on a large scale
                    and complex purchase, I would complement their tenacity and
                    ability to problem solve where issues arise. A personable
                    approach throughout.”
                  </p>
                  <span>
                    N Jethwa MRICS, Partner <br /> G Herbert Banks
                  </span>
                </div>
              </div>
              <div className="testimonial-item">
                <div
                  className="testimonial-content wow fadeInLeft"
                  data-wow-delay=".4s"
                >
                  <p>
                    I have worked with Jay and Indy for three years, and during
                    this time, I have found them to be completely professional
                    in all their dealings and a pleasure to work with. Jay and
                    Indy have always been very quick to respond, decisive, and
                    well-informed in their actions. They also have valuable
                    insights into the local marketplace and strong connections
                    with professionals. I would have no hesitation in working
                    with Jay & Indy again and in recommending Pedmore
                    Investments Limited.”
                  </p>
                  <span>
                    M Crossley <br /> Corporate Banking Manager
                  </span>
                </div>
              </div>
              <div className="testimonial-item">
                <div
                  className="testimonial-content wow fadeInRight"
                  data-wow-delay=".2s"
                >
                  <p>
                    "I have had the pleasure of working Pedmore Investments for
                    several years in my capacity as a solicitor specialising in
                    residential property law. Over the course of numerous
                    transactions, they have consistently demonstrated an
                    exceptional level of professionalism, thoroughness, and
                    attention to detail. Their commitment to providing excellent
                    service and their deep understanding of the real estate
                    market make them a trusted and invaluable partner in the
                    industry. I have always appreciated their proactive approach
                    and unwavering commitment to delivering high-quality service
                    in every deal. I value our long-standing relationship and
                    look forward to continuing to support their future success.”
                  </p>
                  <span>
                    P Suraj <br /> Murria Solicitors
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

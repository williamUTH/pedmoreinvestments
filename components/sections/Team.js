import Link from "next/link";

export default function Team() {
  return (
    <>
      <section className="team-area section-pt-130 section-pb-140">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title text-center mb-55">
                <span className="sub-title">Our experts</span>
                <h2 className="title">Meet our investment specialists</h2>
              </div>
            </div>
          </div>
          <div className="team-item-wrap">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-md-6 col-sm-6">
                <div className="team-item">
                  <div className="team-thumb">
                    <Link href="contact">
                      <img src="/assets/img/team/jay.jpeg" alt="" />
                    </Link>
                  </div>
                  <div className="team-content">
                    <h3 className="title">
                      <Link href="contact">Jay Dubb</Link>
                    </h3>
                    <span>Managing Director</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-6">
                <div className="team-item">
                  <div className="team-thumb">
                    <Link href="contact">
                      <img src="/assets/img/team/indy.jpeg" alt="" />
                    </Link>
                  </div>
                  <div className="team-content">
                    <h3 className="title">
                      <Link href="contact">Indy Dubb (MRICS)</Link>
                    </h3>
                    <span>Director</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

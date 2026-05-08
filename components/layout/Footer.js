import Link from "next/link";
import Logo from "../Logo";

export default function Footer1({}) {
  return (
    <>
      <footer>
        <div className="footer-area footer-bg">
          <div className="container">
            <div className="footer-top">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="footer-widget">
                    <div className="footer-logo">
                      {/* Use Pedmore Investments logo in the footer */}
                      <Link href="/">
                        <img
                          src="/assets/img/logo/pedmore-logo.png"
                          alt="Pedmore Investments logo"
                          style={{ maxWidth: "200px", height: "auto" }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="footer-widget">
                    <h2 className="fw-title">Contact</h2>
                    <div className="footer-contact">
                      <p>
                        Registered office: 63 Charlotte Street, Birmingham, B3
                        1PX.
                      </p>
                      <ul className="list-wrap">
                        <li>
                          <Link href="mailto:info@pedmoreinvestments.co.uk">
                            info@pedmoreinvestments.co.uk
                          </Link>
                        </li>

                        <li>
                          <Link href="https://wa.me/447958125137">
                            <img
                              src="/assets/img/logo/whatsapp.png"
                              alt="WhatsApp"
                              style={{ width: "20px", marginRight: "5px" }}
                            />
                            Contact us on WhatsApp
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="footer-widget">
                    <h2 className="fw-title">Useful links</h2>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/about">About</Link>
                        </li>
                        <li>
                          <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright-text text-center">
                    <p>
                      Copyright © <span>Pedmore Investments</span>{" "}
                      {new Date().getFullYear()}. All Rights Reserved
                    </p>
                  </div>
                  <div className="footer-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="https://www.linkedin.com/company/pedmore-investments/">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

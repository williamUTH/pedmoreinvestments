import Link from "next/link";
import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu";
import Logo from "../Logo";

export default function Header7({ handleMobileMenu, scroll, isMobileMenu }) {
  const router = useRouter();
  return (
    <>
      <header className="header-style-six">
        {/* Top bar updated with Pedmore Investments contact details */}
        <div className="header-top">
          <div className="container custom-container">
            <div className="row align-items-center">
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
                <div className="header-top-right">
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
          </div>
        </div>
        <div
          id="sticky-header"
          className={`menu-area transparent-header ${
            scroll ? "sticky-menu" : ""
          }`}
        >
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                {/* Mobile Header Bar */}
                <div className="mobile-header d-flex d-lg-none align-items-center justify-content-between">
                  <div className="mobile-logo">
                    <Link href="/">
                      <img
                        src="/assets/img/logo/mobilelogo.png"
                        alt="Pedmore Investments mobile logo"
                      />
                    </Link>
                  </div>
                  <div
                    className="mobile-nav-toggler"
                    onClick={handleMobileMenu}
                  >
                    <i className="fas fa-bars" />
                  </div>
                </div>

                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className={router.pathname === "/" ? "active" : ""}>
                          <Link href="/">Home</Link>
                        </li>
                        <li
                          className={
                            router.pathname === "/about" ? "active" : ""
                          }
                        >
                          <Link href="/about">About</Link>
                        </li>
                      </ul>
                      <div className="logo">
                        {/* Centre logo replaced with Pedmore logo */}
                        <Link href="/">
                          <>
                            <img
                              className="logo-default"
                              src="/assets/img/logo/pedmore-logo.png"
                              alt="Pedmore Investments logo"
                            />
                            <img
                              className="logo-sticky"
                              src="/assets/img/logo/pedmore-logo.png"
                              alt="Pedmore Investments logo"
                            />
                          </>
                        </Link>
                      </div>
                      <ul className="navigation right">
                        <li
                          className={
                            router.pathname === "/portfolio" ? "active" : ""
                          }
                        >
                          <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li
                          className={
                            router.pathname === "/contact" ? "active" : ""
                          }
                        >
                          <Link href="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Simple Mobile Dropdown Menu */}
                <div
                  className={`mobile-dropdown ${isMobileMenu ? "active" : ""}`}
                >
                  <MobileMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header7 from "./Header7";
import PageHead from "./PageHead";

export default function Layout({
  headerStyle,
  headTitle,
  breadcrumbTitle,
  children,
  noFooter,
}) {
  const router = useRouter();
  
  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);

  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };

  // Reset mobile menu and ensure scroll on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenu(false);
      document.body.classList.remove("mobile-menu-visible");
      // Ensure body can scroll
      document.body.style.overflow = "";
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Scroll Header
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <PageHead headTitle={headTitle} />
      <Header7
        scroll={scroll}
        handleMobileMenu={handleMobileMenu}
        isMobileMenu={isMobileMenu}
      />

      <main>
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
        {children}
      </main>
      {noFooter ? null : <Footer />}

      <BackToTop />
    </>
  );
}

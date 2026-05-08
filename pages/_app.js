import EntryOverlay from "@/components/elements/EntryOverlay";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../public/assets/css/animate.min.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/flaticon.css";
import "../public/assets/css/fontawesome-all.min.css";
import "../public/assets/css/magnific-popup.css";
import "../public/assets/css/odometer.css";
import "../public/assets/css/responsive.css";
import "../public/assets/css/slick.css";
import "../public/assets/css/spacing.css";
import "../public/assets/css/style.css";
import "../public/assets/css/swiper-bundle.min.css";
import "../public/assets/css/custom.css";

function MyApp({ Component, pageProps }) {
  const [showEntry, setShowEntry] = useState(true);
  return (
    <>
      {showEntry && <EntryOverlay onFinish={() => setShowEntry(false)} />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

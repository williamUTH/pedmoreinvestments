import { useEffect, useRef, useState } from "react";

export default function EntryOverlay({ onFinish }) {
  const [isExiting, setIsExiting] = useState(false);
  const overlayRef = useRef(null);

  const handleEnter = () => {
    setIsExiting(true);
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.classList.add("entry-active");
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.classList.remove("entry-active");
      }
    };
  }, []);

  const handleTransitionEnd = (e) => {
    if (overlayRef.current && e.target === overlayRef.current) {
      if (typeof document !== "undefined") {
        document.body.classList.remove("entry-active");
      }
      onFinish && onFinish();
    }
  };

  return (
    <div
      ref={overlayRef}
      className={`entry-overlay${isExiting ? " exiting" : ""}`}
      onTransitionEnd={handleTransitionEnd}
      aria-label="Entry overlay"
    >
      <div className="entry-content">
        <img
          src="/assets/img/logo/pedmore-logo.png"
          alt="Pedmore Investments"
          className="entry-logo"
        />
        <button className="entry-button" onClick={handleEnter}>
          Enter
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import CookieBanner from "./CookieBanner";

const GA_ID = "G-6LVG8L8L5Y";

export default function GoogleAnalytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const check = () => {
      setConsented(localStorage.getItem("cookie_consent") === "accepted");
    };
    check();
    window.addEventListener("cookie_consent_change", check);
    return () => window.removeEventListener("cookie_consent_change", check);
  }, []);

  return (
    <>
      {consented && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}
      <CookieBanner />
    </>
  );
}

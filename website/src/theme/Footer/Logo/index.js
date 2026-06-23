import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function FooterLogo({ logo }) {
  const finosLogo = useBaseUrl(logo.src);
  const oseraLogo = useBaseUrl("img/osera-horizontal-white.svg");

  return (
    <div className="rn-footer-logo-row">
      <Link href={logo.href || "https://www.finos.org/"} target={logo.target}>
        <img className="footer__logo rn-footer-finos-logo" src={finosLogo} alt={logo.alt || "FINOS"} />
      </Link>
      <span className="rn-footer-logo-divider" aria-hidden="true" />
      <Link href="https://osera.finos.org" target="_blank" rel="noopener noreferrer">
        <img className="footer__logo rn-footer-osera-logo" src={oseraLogo} alt="OSERA" />
      </Link>
    </div>
  );
}

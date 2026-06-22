import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

const publicToolUrl = "https://finos-backpatch.github.io/risk-navigator/tool/risk-navigator.html";

export default function Home() {
  return (
    <Layout
      title="OSERA Risk Navigator"
      description="Dependency-risk prioritization for open source supply resiliency"
    >
      <main>
        <section className="rn-hero">
          <div className="rn-wrap rn-hero-grid">
            <div>
              <span className="rn-tagpill"><span /> OSERA · FINOS community project</span>
              <h1>Prioritize dependency risk with an open, reproducible snapshot.</h1>
              <p className="rn-sub">
                Risk Navigator turns vulnerability intelligence and dependency inventory into an
                interactive decision surface for remediation planning, backpatch candidates,
                amplifier upgrades, and OpenRewrite-ready upgrade bundles.
              </p>
              <div className="rn-cta">
                <a className="rn-btn rn-primary" href={publicToolUrl}>Launch the tool</a>
                <Link className="rn-btn rn-primary" to="/docs/home">Read the docs</Link>
                <Link className="rn-btn rn-ghost" to="/docs/spec">Review the spec</Link>
              </div>
            </div>
            <div className="rn-diagram" aria-label="Risk Navigator flow">
              <div className="rn-node rn-input">Vulnerability signals</div>
              <div className="rn-node rn-input">Dependency inventory</div>
              <div className="rn-arrow">→</div>
              <div className="rn-node rn-core">Risk Navigator dataset</div>
              <div className="rn-arrow">→</div>
              <div className="rn-node rn-output">Prioritized fixes</div>
              <div className="rn-node rn-output">OpenRewrite cart</div>
            </div>
          </div>
        </section>

        <section className="rn-section">
          <div className="rn-wrap">
            <div className="rn-eyebrow">What it helps answer</div>
            <div className="rn-cards">
              <article>
                <h2>Where is the exposure?</h2>
                <p>Slice vulnerable libraries by CVSS, EPSS, KEV, namespace, project reference, and project group.</p>
              </article>
              <article>
                <h2>What moves first?</h2>
                <p>Rank patch, minor, major, backpatch, framework, and amplifier remediation options by impact and effort.</p>
              </article>
              <article>
                <h2>Where is OSERA needed?</h2>
                <p>Surface cases where downstream patch ownership or backpatch work can defer risky migrations.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

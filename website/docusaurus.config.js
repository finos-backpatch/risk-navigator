const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.nightOwl;

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const siteUrl = isGitHubPages
  ? "https://finos-backpatch.github.io"
  : process.env.DEPLOY_PRIME_URL || process.env.URL || "https://risk-navigator.finos.org";
const publicToolUrl = "https://finos-backpatch.github.io/risk-navigator/tool/risk-navigator.html";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OSERA Risk Navigator",
  tagline: "Dependency-risk prioritization for open source supply resiliency",
  favicon: "img/favicon.ico",
  url: siteUrl,
  baseUrl: isGitHubPages ? "/risk-navigator/" : "/",
  organizationName: "finos-backpatch",
  projectName: "risk-navigator",
  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "../docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ docPath }) => `https://github.com/finos-backpatch/risk-navigator/edit/main/docs/${docPath}`,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Risk Navigator",
      logo: {
        alt: "OSERA",
        src: "img/osera-horizontal-color.svg",
      },
      items: [
        { to: "/", label: "Overview", position: "right" },
        { to: "/docs/home", label: "Docs", position: "right" },
        { href: "https://osera.finos.org", label: "OSERA", position: "right" },
        { href: publicToolUrl, label: "Launch Tool", position: "right" },
        {
          href: "https://github.com/finos-backpatch/risk-navigator",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "FINOS",
        src: "img/finos-logo-white.png",
        href: "https://www.finos.org/",
      },
      links: [
        {
          title: "Project",
          items: [
            { label: "Overview", to: "/" },
            { label: "Docs", to: "/docs/home" },
            { label: "Launch Tool", href: publicToolUrl },
            { label: "GitHub", href: "https://github.com/finos-backpatch/risk-navigator" },
          ],
        },
        {
          title: "FINOS",
          items: [
            { label: "FINOS", href: "https://www.finos.org/" },
            { label: "OSERA", href: "https://osera.finos.org" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FINOS.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;

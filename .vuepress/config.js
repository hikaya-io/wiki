const webpack = require('webpack')

module.exports = {
  title: "Wiki",
  head: [["link", { rel: "icon", href: "/assets/logo.png" }]],
  port: 8888,
  themeConfig: {
    logo: "https://s3.hikaya.io/hikaya/hikaya-logo.svg",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Design",
        items: [
          { text: "Principles", link: "../design/principles.md" },
          { text: "Typography", link: "../design/typography.md" },
          { text: "Color", link: "../design/color.md" },
          { text: "Wordmark", link: "../design/logo.md" },
        ],
      },
      {
        text: "Process",
        items: [
          { text: "Development Process", link: "../process/development-process" },
          { text: "Onboarding", link: "../process/onboarding" },
          { text: "Release Management", link: "../process/release-management" },
          { text: "Testing Protocol", link: "../process/testing-protocol" },
          { text: "User Support", link: "../process/support-handbook" },
        ],
      },
      {
        text: "Roadmap",
        items: [
          { text: "Activity", link: "../roadmap/activity-roadmap" },
          { text: "Connectors", link: "../roadmap/connectors-roadmap" },
          { text: "Dots", link: "../roadmap/dots-roadmap" },
          { text: "Grid", link: "../roadmap/grid-roadmap" },
        ],
      },
      {
        text: "Product",
        items: [
          { text: "Dots Enterprise", link: "../product/dots-enterprise-plan" },
          { text: "Dots", link: "../product/dots-subscription" },
        ],
      },
      {
        text: "About",
        items: [
          { text: "Team", link: "../team/who-are-we" },
          { text: "How we work", link: "../team/how-we-work"},
        ]
      }
    ],
  },
  configureWebpack: (config) => {
    return { plugins: [
      new webpack.EnvironmentPlugin({ ...process.env })
    ]}
  }
};

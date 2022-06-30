const webpack = require('webpack')

module.exports = {
  title: "Hikaya Wiki",
  head: [["link", { rel: "icon", href: "/assets/logo.png" }]],
  port: 8888,
  themeConfig: {
    logo: "https://s3.hikaya.io/hikaya/hikaya-logo.svg",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Our processes",
        items: [
          { text: "Customer Support", link: "/processes/customer-support-handbook" },
          { text: "Dots Entreprise", link: "/processes/dots-entreprise-plan" },
          { text: "Dots", link: "/processes/dots-subscription" },
          { text: "Onboarding", link: "/processes/onboarding" },
          { text: "Product Template", link: "/processes/product-template" },
          { text: "Release Management", link: "/processes/release-management" },
          { text: "Roadmap Template", link: "/processes/roadmap-template" },
          { text: "Testing Protocol", link: "/processes/testing-protocol" },
        ],
      },
      {
        text: "Roadmaps",
        items: [
          { text: "Activity", link: "/start/roadmap/activity-roadmap" },
          { text: "Circles", link: "/start/roadmap/connectors-roadmap" },
          { text: "Dots", link: "/start/roadmap/dots-roadmap" },
        ],
      },
      { text: "Team", link: "/team/who-are-we" },
    ],
  },
  configureWebpack: (config) => {
    return { plugins: [
      new webpack.EnvironmentPlugin({ ...process.env })
    ]}
  }
};

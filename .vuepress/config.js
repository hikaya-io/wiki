module.exports = {
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  port: 8888,
  themeConfig: {
    logo: "",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Products",
        items: [
          { text: "Activity", link: "/products/activity-product-plan" },
          { text: "Circles", link: "/products/circles-product-plan" },
          { text: "Dots", link: "/products/dots-product-plan" },
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
  //   locales: [],
  //   shouldPrefetch: []
};
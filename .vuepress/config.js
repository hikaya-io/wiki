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
          { text: "Principles", link: "/design/principles/" },
          { text: "Typography", link: "/design/typography/" },
          { text: "Color", link: "/design/color/" },
          { text: "Wordmark", link: "/design/wordmark/" },
        ],
      },
      {
        text: "Engineering",
        items: [
          { 
            text: "Frontend", 
            items: [
              { text: "Frameworks", link: "/engineering/frontend/frameworks/" },
              { text: "Libraries", link: "/engineering/frontend/libraries/" },
            ]
          },
          { 
            text: "Backend", 
            items: [
              { text: "Django", link: "/engineering/backend/django/" },
              { text: "Securing resources", link: "/engineering/backend/securing-resources/" },
            ]
          },
        ],
      },
      {
        text: "Process",
        items: [
          { text: "Development Process", link: "/process/development-process/" },
          { text: "Domain Management", link: "/process/domain-management/" },
          { text: "Onboarding", link: "/process/onboarding/" },
          { text: "Release Management", link: "/process/release-management/" },
          { text: "Testing Protocol", link: "/process/testing-protocol/" },
          { text: "User Support", link: "/process/user-support/" },
        ],
      },
      {
        text: "Product",
        items: [
          { 
            text: "Activity", 
            items: [
              { text: "PRD", link: "/product/activity/requirements/" },
              { text: "Roadmap", link: "/product/activity/roadmap/" },
              { text: "Documentation", link: "/product/activity/documentation/" },
            ]
          },
          { 
            text: "Circles",
            items: [
              { text: "PRD", link: "/product/circles/requirements/" },
            ]
          },
          { 
            text: "Connectors",
            items: [
              { text: "Roadmap", link: "/product/connectors/roadmap/" },
            ]
          },
          { 
            text: "Dots",
            items: [
              { text: "PRD", link: "/product/dots/requirements/" },
              { text: "Roadmap", link: "/product/dots/roadmap/" },
              { text: "Enterprise Support", link: "/product/dots/enterprise/" },
              { text: "Plans", link: "/product/dots/plans/" },
            ]
          },
          { 
            text: "Grid",
            items: [
              { text: "Roadmap", link: "/product/grid/roadmap/" },
            ]
          },
          { 
            text: "Metrics",
            items: [
              { text: "Roadmap", link: "/product/metrics/roadmap/" },
            ]
          },
        ],
      },
      {
        text: "Research",
        items: [
          { text: "Airflow", link: "/research/airflow/" },
          { text: "BI tools", link: "/research/bi-tools/" },
          { text: "Data warehouse", link: "/research/data-warehouse/" },
          { text: "Data ingestion", link: "/research/data-ingestion/" },
          { text: "Jupyter", link: "/research/jupyter/" },
          { text: "R Markdown", link: "/research/r-markdown/" },
          { text: "Superset", link: "/research/superset/" },
          { text: "SurveyCTO", link: "/research/surveycto/" },
          { text: "Tech Radar", link: "/research/tech-radar/" },
        ],
      },
      {
        text: "About",
        items: [
          { text: "Team", link: "/about/team/" },
          { text: "How we work", link: "/about/how-we-work/" },
          { text: "Housekeeping", link: "/about/housekeeping/" },
        ]
      }
    ],
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: 'hikaya-io/wiki',
    // if your docs are not at the root of the repo:
    // docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'main',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Edit this page on Github'
  },
  configureWebpack: (config) => {
    return { plugins: [
      new webpack.EnvironmentPlugin({ ...process.env })
    ]}
  }
};

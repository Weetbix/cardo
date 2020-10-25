const urljoin = require("url-join")
const configs = require("./site-config")

module.exports = {
  siteMetadata: {
    siteUrl: urljoin(configs.app_url, configs.path_prefix),
    title: "Cardo: Writing meaningful card messages made easy",
    description: configs.app_description,
    author: "John Hannagan",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: configs.app_name,
        short_name: configs.app_name,
        start_url: configs.path_prefix,
        background_color: configs.body_background_color,
        theme_color: configs.app_title_color,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-gdpr-tracking",
      options: {
        googleAnalytics: {
          trackingId: configs.google_analytics_ID,
          autoStart: false, // <--- default
          anonymize: true, // <--- default
          controlCookieName: configs.tracking_cookie_name,
        },
        environments: ["production"],
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `cardo.app`,
        // Currently when using a custom domain with self-hosted plausible, the script
        // path will incorrectly point to index.js. Here we force the correct path...
        // https://github.com/pixelplicity/gatsby-plugin-plausible/issues/49
        customDomain: `plausible.cloud.johnhannagan.com/js/plausible.js?original=`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}

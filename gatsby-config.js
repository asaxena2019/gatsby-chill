module.exports = {
  siteMetadata: {
    title: `anushka saxena`,
    description: `Anushka Saxena Personal Website`,
    author: `@anushkasaxena`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/anushkasaxena.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
    resolve: 'gatsby-source-google-sheets',
    options:{
      spreadsheetId:'1rg3ZvIx91MATY8SItXErB61Pi03pfdhioiOaYJLNjxs', worksheetTitle:'Sheet1', credentials:require('./secret.json')
    },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

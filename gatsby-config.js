module.exports = {
  siteMetadata: {
    title: `Mé s'aventure, le blog`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Mik@el Antoine`,
    bio: `Voyez ce jeu exquis wallon, de graphie en kit mais bref. 
    Portez ce vieux whisky au juge blond qui fume sur son île 
    intérieure, à côté de l'alcôve ovoïde, où les bûches se 
    consument dans l'âtre. jugez des prix ! Voyez le brick 
    géant que j'examine près du wharf. Portez ce vieux whisky 
    au juge blond qui fume. Bâchez la queue du.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-less',
      options: {
        modifyVars: require("./src/theme/antd.js"),
        javascriptEnabled: true,
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

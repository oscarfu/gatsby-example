/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path:`.env.${process.env.NODE_ENV}`
})


module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: "Gatsby Tutorial",
    description: "random desc",
    author: "@johmdoe",
    data: ["item1", "item2"],
    person: {name: "peter", age: 32}
  },
  plugins: [`gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `txt`,
        path: `${__dirname}/src/txt/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `cjdlh8qd1nqd`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },

  ],
}


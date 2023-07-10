module.exports = {
  siteMetadata: {
    title: `portfolio`,
    version: `0.0.2`,
    siteUrl: `https://www.addikala.com`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: ({ node }) => {
          const name = node.sourceInstanceName;
          if (name == `projects`) {
            return `projects`;
          }
          return name;
        },
      },
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/projects`,
        name: `projects`,
      },
    },
  ],
};

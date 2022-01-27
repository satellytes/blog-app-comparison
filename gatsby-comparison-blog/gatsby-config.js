module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "Gatsby Comparison Blog",
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-transformer-remark",
        "gatsby-plugin-react-helmet",
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/posts`,
            },
        },
    ],
};

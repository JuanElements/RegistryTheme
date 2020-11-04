module.exports = ({
    basePath = "/",
    contentPath = "content/",
    theme="classic"
}) => {
    return {
        siteMetadata: {
            description: "Personal page of Juan Barahona",
            locale: "es",
            title: "Juan Barahona"
        },
        plugins: [
            {
                resolve: `gatsby-plugin-postcss`,
                options: {
                    postCssPlugins: [
                        require("tailwindcss")(require("./tailwind.config")(theme)),
                        require("postcss-input-range"),
                        require("autoprefixer"),
                    ],
                },
            },
            `gatsby-plugin-react-helmet`,
            `gatsby-transformer-yaml`,
            {
                resolve: `gatsby-source-filesystem`,
                options: {
                    path: contentPath,
                },
            },
            {
                resolve: `gatsby-plugin-react-svg`,
            },
            `gatsby-transformer-sharp`,
            `gatsby-plugin-sharp`,
        ],
    }
} 

module.exports = {
    siteMetadata: {
        description: "Personal page of Juan Barahona",
        locale: "en",
        title: "Juan Barahona",
    },

    plugins: [
        {
            resolve: "gatsby-theme-registry",
            options: {
                basePath: "/",
                contentPath: "content/",
                theme: "classic"
            }
        }
    ]
}
import React from "react"
import { Helmet } from "react-helmet"
import { arrayOf, shape, ProfileType } from "../../types"

const StructuredData = ({ profile }) => {
    const schema = {
        "@context": "http://schema.org",
        "@type": "Person",
        name: profile.name,
        image: profile.image?.publicURL,
        jobTitle: profile.profession,
        worksFor: {
            "@type": "Organization",
            name: profile.workingOn
        },
    }
}
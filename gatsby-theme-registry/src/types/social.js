import { graphql } from "gatsby"
import { string, oneOf } from "prop-types"

export const SocialType = {
    name: oneOf([
        "twitter",
        "github",
        "linkedin",
    ]),
    url: string
}

export const query = graphql`
    fragment SocialFragment on SocialYaml {
        name
        url
    }
`
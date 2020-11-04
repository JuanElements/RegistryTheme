import { graphql } from "gatsby"
import { string, arrayOf , shape, object } from "prop-types"


export const Timeline = {
    title: string,
    start: string,
    end: string,
}

export const Experience = {
    logo: shape({
        childImageSharp: object.isRequired,
        publicURL: string.isRequired
    }),
    postion: string,
    timeline: arrayOf(Timeline),
}

export const query = graphql`
    fragment ExperienceFragment on ExperienceYaml {
        logo {
            childImageSharp {
                fixed(width: 43, height: 43, quality: 90) {
                    ...GatsbyImageSharpFixedd_withWebp
                }
            }
        }
        position
        timeline {
            title,
            start,
            end
        }
    }
`
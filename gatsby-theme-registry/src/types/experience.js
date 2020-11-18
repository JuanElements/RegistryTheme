import { graphql } from "gatsby"
import { string, arrayOf , shape, object } from "prop-types"


export const TimelineType = {
    title: string,
    start: string,
    end: string,
    duration: string,
}

export const ExperienceType = {
    logo: shape({
        childImageSharp: object.isRequired,
        publicURL: string.isRequired
    }),
    postion: string,
    duration: string,
    timeline: arrayOf(TimelineType),
}

export const query = graphql`
    fragment ExperienceFragment on ExperienceYaml {
        logo {
            childImageSharp {
                fixed(width: 43, height: 43, quality: 90) {
                    ...GatsbyImageSharpFixed_withWebp
                }
            }
        }
        position
        duration
        timeline {
            title
            start
            end
            duration
        }
    }
`
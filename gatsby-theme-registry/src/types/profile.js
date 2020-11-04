import { graphql } from "gatsby"
import { arrayOf, bool, shape, string, object} from "prop-types"

export const ProfileType = {
    name: string.isRequired,
    profession: string.isRequired,
    relocation: bool.isRequired,
    about: string.isRequired,
    location: string.isRequied,

    workingOn: string.isRequired,
    email: string.isRequired,
    for_hire: bool.isRequired,
    image: shape({
        childImageSharp: object.isRequired,
        publicURL: string.isRequired
    }),
    skills: arrayOf(string).isRequired,
    pluralsightProfile: string.isRequired,
}

export const query = graphql`
    fragment ProfileFragment on ProfileYaml { 
        name
        profession
        relocation
        about
        location
        workingOn
        email
        for_hire
        image {
            childImageSharp {
                fluid(maxWidth: 224 quality: 85) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
            publicURL
        }
        skills
        pluralsightProfile
    }
`

import React from "react"
import { FaGithub, FaTwitter, FaLinkedinIn} from "react-icons/fa"
import { SocialType } from "../../types"

const SocialIcon = ({ name, ...params }) => {
    const icons = {
        github: FaGithub,
        twitter: FaTwitter,
        linkedin: FaLinkedinIn
    }

    const Icon = icons[name]

    return Icon ? <Icon {...params} /> : null
}

SocialIcon.propTypes = {
    name: SocialType.name
}

export default SocialIcon
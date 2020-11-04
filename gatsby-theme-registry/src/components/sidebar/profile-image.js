import Img from "gatsby-image"
import React from "react"
import { ProfileType } from "../../types"

const ProfileImage = ({ image, name }) => (
  <div className="relative inline-block leading-none">
    <Img
      fluid={image.childImageSharp.fluid}
      alt={name}
      className="rounded-full relative z-10 w-56 h-56 md:w-40 md:h-40"
    />
    <div className="absolute inset-0 rounded-full bg-lead z-0 transform translate-x-12">
        
    </div>
  </div>
)

ProfileImage.propTypes = {
  image: ProfileType.image,
  name: ProfileType.name,
}

export default ProfileImage

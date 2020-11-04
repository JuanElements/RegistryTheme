import React from "react"
import SocialIcon from "./social-icon"
import { SocialType } from "../../types"
import { arrayOf, shape } from "prop-types"


const SocialLinks = ({ social }) => (
    <div className="flex mb-8">
        {social.map(({name, url }) => (
           <a
              aria-label={name}
              href={url}
              rel="noopener noreferrer"
              target="_blank"
              >
               <SocialIcon name={name} className="mr-2 w-6 h-6 text-icon hover:text-icon-hover" />
           </a> 
        ))}
    </div>
)

SocialLinks.propTypes = {
    social: arrayOf(shape(SocialType))
}

export default SocialLinks
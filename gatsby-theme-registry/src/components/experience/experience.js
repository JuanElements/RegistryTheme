import React from "react"
import Img from "gatsby-image"
import { ExperienceType } from "../../types"
import "./experience.css"


const Experience = ({ experience }) => (
    <div className="relative mb-10">
        <div className="flex mb-10" >
            <Img fixed={experience.logo.childImageSharp.fixed} />
            <div className="ml-2">
                <h4 className="font-header font-bold text-lg leading-6"> { experience.position }</h4>
                <h5 className="font-header text-lg leading-5 text-gray-600"> 3 years, 1 month </h5>
            </div>
        </div>
        <div className="flex flex-col ml-3">
            { experience.timeline.map(item => (
                <div className="history flex items-center mb-6 ">
                    <span className="z-10 dot-bg w-3 h-3  bg-back-light inline-flex rounded-full items-center justify-center">
                        <span className="dot w-2 h-2 bg-line rounded-full" />
                    </span>
                    <div className="ml-4 ">
                        <h4 className="font-header font-semibold text-lg text-gray-800 leading-4">{item.title}</h4>
                        <h5 className="font-header font-light text-base leading-6 text-gray-600">{item.start} - {item.end} · 1 year, 1 month </h5>
                    </div>
                </div>
            ))}
        </div>
    </div>
)


Experience.propTypes = {
    experience: ExperienceType
}

export default Experience

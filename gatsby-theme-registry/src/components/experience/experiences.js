import React from "react"
import { arrayOf, shape } from "prop-types"
import { ExperienceType } from "../../types"
import Experience from "./experience"


const Experiences = ({ experiences }) => (
    <>
        <div className="flex items-center mb-10">
            <h5 className="mr-3 inline-block leading-3 shadow-underline">EXPERIENCE</h5>
            <span className="leading-none flex-grow border-b-2 border-gray-400"></span>
        </div>

        <div className="flex justify-between flex-wrap">
            {experiences.map((experience) => (
                <Experience experience={experience} />
            ))}    
        </div>
    </>
)

Experiences.propTypes = {
    experiences: arrayOf(shape(ExperienceType)),
}

export default Experiences
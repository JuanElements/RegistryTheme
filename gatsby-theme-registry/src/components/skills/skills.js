import React from "react"
import Skill from "./skill"
import { ProfileType } from "../../types"
import PluralsightSvg from "./icons/Pluralsight.svg"

const Skills = ({ skills, pluralsightProfile }) => (
    <div className="mb-10">
        <div className="flex items-center mb-10">
            <h5 className="mr-3 inline-block leading-3 shadow-underline">TOP SKILLS</h5>
            <span className="leading-none flex-grow border-b-2 border-gray-400"></span>
        </div>

        <div className="grid place-items-center">
            <div className="flex flex-wrap mb-3">    
                {skills.map(skill => (
                    <Skill skill={skill} />
                ))} 
            </div>

            <div className="flex items-center">
                <span className="mr-1 text-xs" >See my levels on</span>
                <a href={pluralsightProfile} rel="noopener noreferrer" target="_blank">
                    <PluralsightSvg  />
                </a>
            </div>
        </div>
    </div>
)

Skills.propTypes = {
    skills: ProfileType.skills,
    pluralsightProfile: ProfileType.pluralsightProfile
}

export default Skills
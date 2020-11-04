import React from "react"
import { string } from "prop-types"

import CsharpbwSvg from "./icons/csharpbw.svg"
import CssbwSvg from "./icons/css3bw.svg"
import HtmlbwSvg from "./icons/html5bw.svg"
import JavascriptbwSvg from "./icons/javascriptbw.svg"
import JavabwSvg from "./icons/javabw.svg"

const Skill = ({skill}) => (
    <>
        {skill.toLowerCase() === "java" && <JavabwSvg className="m-2" />}
        {skill.toLowerCase() === "c#" && <CsharpbwSvg className="m-2" />}
        {skill.toLowerCase() === "html5" && <HtmlbwSvg className="m-2" />}
        {skill.toLowerCase() === "css3" && <CssbwSvg className="m-2" />}
        {skill.toLowerCase() === "javascript" && <JavascriptbwSvg className="m-2" />}
    </>
)

Skill.propTypes = {
    skill: string.isRequired,
}

export default Skill;
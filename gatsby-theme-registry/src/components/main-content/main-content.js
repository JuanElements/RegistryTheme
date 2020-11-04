import React from "react"
import Summary from "../summary/summary"
import Skills from "../skills/skills"
import Experiences from "../experience/experiences"

const MainContent = ({ profile, experience }) => {
    return (
        <main className="lg:w-2/3 lg:pl-8 lg:pr-4 xl:pl-12 xl:pr-4">
            <Summary profile={profile} />
            <Skills skills={profile.skills} pluralsightProfile={profile.pluralsightProfile} />
            <Experiences experiences={experience} />
        </main>
    )
}

export default MainContent
import React from "react"
import { shape, ProfileType } from "../../types"

const Summary = ({ profile }) => (
    <div className="flex flex-col-reverse md:flex-row mb-6">
        <div className="md:w-5/12 flex-grow pr-4 text-lg md:text-xl md:leading-9">
            { profile.about }     
        </div>

        <div className="md:w-5/12 md:ml-16 flex flex-col pl-4 bg-white p-3
                        border-l-4 border-lead mb-6 md:mb-0">
            <div className="flex-grow">
                <h5 className="inline-block leading-3 shadow-underline">WORKING ON</h5>
            </div>
            <span className="my-6 md:my-0 self-center text-xl flex-grow font-bold">{ profile.workingOn }</span>
            <div className="self-end font-header font-semibold text-xs uppercase pt-2">
                <span className="inline-block w-2 h-2 rounded-full mr-1 bg-green-500"></span>
                OPEN TO OFFERS
            </div>
        </div>
    </div>

)

Summary.propTypes = {
    profile : shape(ProfileType)
}

export default Summary
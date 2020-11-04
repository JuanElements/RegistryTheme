import React from "react"

const Header = () => (

    <header className="md:max-w-screen-sm lg:max-w-screen-xl lg:px-8
                       mx-auto flex justify-end p-4">
      <a
        className="font-header font-semibold
                  px-6 py-2 rounded-sm
                  bg-lead text-lead-text leading-tight
                  hover:opacity-75 transition-opacity duration-150"

        href="#contact"
      >
        <span>Contact me</span>
      </a>
    </header>
)

export default Header
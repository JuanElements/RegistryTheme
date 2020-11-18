import React from "react"
import { Link } from "gatsby"

const Header = () => (

    <header className="md:max-w-screen-sm lg:max-w-screen-xl lg:px-8
                       mx-auto flex justify-end items-center p-4">
      
      <ul className="mr-5 flex font-header">
        <li className="mr-5" ><Link to="/" activeClassName="border-b-2 border-black">Home</Link></li>
        <li>Blog</li>
      </ul>
      
      <a
        alt="Send an email"
        className="font-header font-semibold
                  px-6 py-2 rounded-sm
                  bg-lead text-lead-text leading-tight
                  hover:opacity-75 transition-opacity duration-150"

        href="mailto:barahonajm@outlook.com?subject=I would like talk with you"
      >
        <span>Contact me</span>
      </a>
    </header>
)

export default Header
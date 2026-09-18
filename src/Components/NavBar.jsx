// NavBar.jsx

//  TODO:
//    Replace external link texts to icons, for their respective destinations.

import "./NavBar.css"
import linkedInIcon from '../assets/linkedin_icon.svg';
import React from "react";

export default function NavBar({ isOpen, setIsOpen }) {
  return (
    <div className="navbar_display_wrp">
      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        {/* First nav group for page sections links */}
        <div className="navbar_group navbar_section_links">
          <a className="navbar_link_item" href="#me" onClick={() => setIsOpen(!isOpen)}>Moi</a>
          <a className="navbar_link_item" href="#projects" onClick={() => setIsOpen(!isOpen)}>Projets</a>
          <a className="navbar_link_item" href="#skill" onClick={() => setIsOpen(!isOpen)}>Skills</a>
          {/* <a className="navbar_link_item" href="#skill">Contact</a> */}
        </div>
        {/* Second nav group for external links */}
        <div className="navbar_group navbar_external_links">
          <a className="navbar_link_item" href="https://www.linkedin.com/in/yanis-oulmane/">LinkedIn</a>
          <a className="navbar_link_item" href="https://github.com/YanOul1991">Github</a>
        </div>
      </nav>
    </div>
  )
}
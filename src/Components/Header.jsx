
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar"
import "./Header.css"

export default function Header() {
  const [displayNav, setDisplayNav] = useState(false);

  useEffect(() => {
    if (displayNav == true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };

  }, [displayNav]);

  return (
    <header className="global_header">
      <div className="content">
        <div className="website_icon">
          <h1 className="website_icon_text">
            Yanis Oulmane
          </h1>
        </div>
        <NavBar isOpen={displayNav} setIsOpen={setDisplayNav} ></NavBar>
        <div className={`nav_menu_button ${displayNav ? 'active' : ''}`} onClick={() => setDisplayNav(!displayNav)}>
          <div className="nav_menu_button_bar"></div>
          <div className="nav_menu_button_bar"></div>
        </div>
      </div>
    </header>
  )
}
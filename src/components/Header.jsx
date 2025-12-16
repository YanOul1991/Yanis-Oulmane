/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    +++ Header.jsx
      ++ Website header component.

    +++ Yanis Oulmane

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavigationMenu";
import style from "./Header.module.css"

import { useMenu } from "../contexts/MenuContext";
import { useWindowSizeContext } from "../contexts/WindowSizeContext";

export default function Header({ nav, socials }) {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { isOpen, setIsOpen } = useMenu();
  const { windowWidth } = useWindowSizeContext();

  useEffect(() => {
    const onScroll = () => {
      const scroll = window.scrollY;
      setScrollDirection((scroll < lastScrollY || scroll < 50) ? "up" : "down");
      setLastScrollY(scroll);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [lastScrollY])

  return (
    <header className={`${scrollDirection != null ? scrollDirection : "up"}`}>
      <div className={style.header_container}>
        <Link onClick={() => (setIsOpen(false))} className={style.header_logo} to={"/#root"}>Yanis Oulmane</Link>
        {windowWidth < 993 ?
          <div className={`${style.menu_button} ${isOpen ? "open" : "close"}`} onClick={() => (setIsOpen(!isOpen))}>
            <span style={isOpen ? { top: "50%" } : { top: "0%" }}></span>
            <span style={{ top: "50%", translate: "0 -50%" }}></span>
            <span style={isOpen ? { bottom: "50%" } : { bottom: "0%" }}></span>
          </div> :
          null
        }
        <nav className={`${style.nav_menus} ${windowWidth < 993 ? isOpen ? style.open : '' : ''}`}>
          <div className={style.nav_container}>
            <NavMenu
              local={true}
              listTitle={"Nav"}
              listElements={nav}
              type={"nav"}
            ></NavMenu>
            <NavMenu
              local={false}
              listTitle={"Social"}
              listElements={socials}
              type={"socials"}
            ></NavMenu>
          </div>
        </nav>
      </div>
    </header>
  );
}
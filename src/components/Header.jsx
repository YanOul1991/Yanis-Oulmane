import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css"
import NavDropMenu from "./NavDropMenu";

export default function Header({ nav, socials }) {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect scroll up or down to display and hide header.
  // If at less than 50px at top of page, assume scroll up to display
  // header.
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setScrollDirection((scroll < lastScrollY || scroll < 50) ? "up" : "down");
      setLastScrollY(scroll);
    };
    window.addEventListener("scroll", handleScroll);
    return() => { window.removeEventListener("scroll", handleScroll)};
  }, [lastScrollY])

  return (
    <header className={`${scrollDirection != null ? scrollDirection : "up"}`}>
      <Link className={style.header_logo} to={"/#root"}>Yanis Oulmane</Link>
      {/* <nav className={style.header_nav}>
        {nav &&
          nav.map((element, index) => (
            element.title && element.path &&
            <Link
              className={style.header_nav_link}
              key={index}
              to={element.path}
              >{element.title}</Link>
          ))}
      </nav> */}
      {/* <div className={style.header_socials}>
        <h1 className={style.header_menu_drop_title}>Social</h1>
        {socials && 
          socials.map((element, index) => (
            <a className={style.header_socials_link} key={index} href={element.link}>{element.title}</a>
        ))}
      </div> */}
      <nav className={style.nav_menus}>
        <NavDropMenu 
          local={true} 
          listTitle={"Nav"} 
          listElements={nav}>
        </NavDropMenu>
        <NavDropMenu
          local={false}
          listTitle={"Social"}
          listElements={socials}
        ></NavDropMenu>
      </nav>
    </header>
  );
}
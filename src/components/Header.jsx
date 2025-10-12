import { Link } from "react-router-dom";
import style from "./Header.module.css"

export default function Header({ nav, socials }) {
  return (
    <header className={style.header_main}>
      <Link className={style.header_logo} to={"/#root"}>Yanis Oulmane</Link>
      <nav className={style.header_nav}>
        {nav &&
          nav.map((element, index) => (
            element.title && element.path &&
            <Link
              className={style.header_nav_link}
              key={index}
              to={element.path}
              >{element.title}</Link>
          ))}
      </nav>
      <div className={style.header_socials}>
        {socials && 
          socials.map((element, index) => (
            <a className={style.header_socials_link} key={index} href={element.link}>{element.title}</a>
        ))}
      </div>
    </header>
  );
}
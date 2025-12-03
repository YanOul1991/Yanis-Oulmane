import { Link } from "react-router-dom";
import style from "./NavDropMenu.module.css"

export default function NavDropMenu({local, listTitle, listElements}) {
  return (
    <>
      <div className={style.nav_drop_menu}>
        <h2 className={style.drop_menu_title}>{listTitle}</h2>
        <div className={style.drop_menu_item_container}>
          { local ?
            listElements.map((element, index) => (
              element.title && element.path &&
              <Link
                className={style.drop_menu_item}
                key={index}
                to={element.path}
              >{element.title}</Link>
            )) : 
            listElements.map((element, index) => (
              <a className={style.drop_menu_item} key={index} href={element.link}>{element.title}</a>
            )) 
          }
        </div>
      </div>
    </>
  )
}
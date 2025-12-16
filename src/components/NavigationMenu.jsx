/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    +++ NavDropMenu.jsx
      ++ Navigation drop menu component.

    +++ Yanis Oulmane

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import style from "./NavigationMenu.module.css";

import { useMenu } from "../contexts/MenuContext";

export default function NavMenu({ local, listTitle, listElements, type }) {
  const { isOpen, setIsOpen } = useMenu();
  
  return (
    <div className={type === "nav" ? style.navigation_list : style.socials_list}>
      {local ?
        listElements.map((element, index) => (
          <Link onClick={() => (setIsOpen(false))}
            className={style.navigation_list_element}
            key={index}
            to={element.path}
          >{element.title}</Link>
        ))
        :
        listElements.map((element, index) => (
          <a className={style.socials_list_element} key={index} href={element.link}>{element.title}</a>
        ))
      }
    </div>
  )
}
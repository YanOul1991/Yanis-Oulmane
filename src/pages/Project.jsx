/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    +++ Project.jsx
      ++ Single project page style.

    +++ Yanis Oulmane

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectData from "../data/data.json";
import SlideshowImg from "../components/SlideshowImg";
import style from "./Project.module.css";

export default function Project() {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);

  // Get project category and id from query
  const category = queryParam.get("c");
  const id = queryParam.get("id");

  // Try to get corresponding prject
  const _proj_list = ProjectData["projects"][category];

  var _target_project;

  for (const proj of _proj_list) {
    if (proj["slug"] == id) _target_project = proj;
  }
  
  useEffect(() =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [])

  document.querySelector("title").innerHTML = `Yanis Oulmane | ${_target_project["title"]}`

  return (
    <main className={style.project_main_content}> 
      <div className={style.project_intro_section}>
        <h1 className={style.project_title}>{_target_project["intro"]["title"]}</h1>
        <ul className={style.project_intro_paragraphs}>
          {_target_project["intro"]["paragraphs"].map((element, index) => {
            return (
              <p key={index} className={style.project_intro_paragraph_item}>{element}</p>
            )
          })}
        </ul>
      </div>

      <SlideshowImg data={_target_project["images"]}> </SlideshowImg>

      {_target_project["texts"] && _target_project["texts"].length > 0 &&
        <div className={style.project_extra_info}>
          {
            _target_project["texts"].map((element, index) => {
              return (
                <div key={index} className={style.project_extra_info_section}>
                  <h2 key={index} className={style.project_extra_info_section_title}> {element["title"]}</h2>
                  <div key={index + 1} className={style.project_extra_info_section_pargraph_container}>
                    {
                      element["paragraphs"].map((para, i) => {
                        return (
                          <p key={i} className={style.project_extra_info_section_pargraph_item}>{para}</p>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      }
    </main>
  );
}
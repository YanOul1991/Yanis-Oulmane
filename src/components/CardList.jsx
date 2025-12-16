/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    +++ CardList.jsx
      ++  Project Card list to display all projects
          in home page.

    +++ Yanis Oulmane

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

import Card from "./Card"
import style from "./CardList.module.css"

function CardList({ title, data, category, hash }) {
  return (
    <>
      <div id={hash} className={style.card_list_container}>
        <span className={style.card_list_decoration}></span>
        <span className={style.card_list_decoration}></span>
        <h3 className={style.card_list_title}>{title}</h3>
        <ul className={style.card_list}>
          {
            // Generate list of project cards
            data.map((element, index) => {
              return (
                // Get single card component
                <Card
                  key={`${index}_${element["slug"]}`}
                  intro={element["intro"]}
                  title={element["title"]}
                  thumbnail={element["images"][0]}
                  queryString={`?c=${category}&id=${element["slug"]}`}
                  galleryText={element["galleryText"]}
                />
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default CardList
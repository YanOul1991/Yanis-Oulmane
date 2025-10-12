// Home page project card titles component

import Card from "./Card"
import style from "./CardList.module.css"


function CardList({ title, data, category, hash }) {
  return (
    <>
      <div id={hash} className={style.card_list_container}>
        <h3 className={style.card_list_title}>{title}</h3>
        <ul className={style.card_list}>
          {
            data.map((element, index) => {
              return (
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
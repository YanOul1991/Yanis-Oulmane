/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    +++ HomeIntro.jsx
      ++ Intro section for home page component

    +++ Yanis Oulmane

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

import style from "./HomeIntro.module.css"

export default function HomeIntro({ title, description }) {
  return (
    title && (
      <section className={style.intro}>
        <h1 className={style.intro_title}>{title}</h1>
        {description?.trim() && (
          <p className={style.intro_description}> {description} </p>
        )}
      </section>
    )
  );
}


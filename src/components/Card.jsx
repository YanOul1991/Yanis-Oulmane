import React, { useEffect, useRef, useState } from 'react'
import styles from "./Card.module.css"
import { Link } from 'react-router-dom';

export default function Card({title, videos, thumbnail, intro, texts, queryString, galleryText}){
  const [isHovered, setHovered] = useState(false);

  const items = [];
  const count = 64;

  for (let i = 0; i < count; i++) {
    items[i] = 
      <span key={i} 
        className={styles.card_effect} 
        style={{
            transition: `all ${250 * Math.random()}ms linear`,
            flex: `0 0 ${350 / 8}px`
          }}>
      </span>
  } 

  return(
    <Link to={`/project${queryString}`} className={styles.card}>
      <span className={styles.card_effect_container}>
        {items.map((element) => {
          return(
            element
          )
        })}
      </span>
      <li className={styles.card}>
        <h1 className={styles.card_title}>{title}</h1>
        <p className={styles.card_description}>{galleryText}</p>
        <div className={styles.card_img_container}>
          <img className={styles.card_img_thumbnail} src={thumbnail} alt={thumbnail} />
        </div>
      </li>
    </Link>

  );
}

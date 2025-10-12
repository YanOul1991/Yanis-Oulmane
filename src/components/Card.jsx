import React, { useRef, useState } from 'react'
import styles from "./Card.module.css"
import { Link } from 'react-router-dom';

export default function Card({title, videos, thumbnail, intro, texts, queryString, galleryText}){
  return(
    <Link to={`/project${queryString}`} className='project_card'>
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

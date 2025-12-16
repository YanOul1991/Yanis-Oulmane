/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    +++ Slideshow.jsx
      ++  Component for displaying project images 
          in the form of a slideshow.

    +++ Yanis Oulmane

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */


import style from "./SlideshowImg.module.css"
import React, { useState, useEffect } from "react"

export default function SlideshowImg({ data }) {
  const images = data
  const max = data.length - 1;

  const [index, setIndex] = useState(0)
  const [anim, setAnim] = useState(false)
  const [dir, setDirection] = useState(null)

  function movePrevious() {
    if (anim) return
    setIndex(index - 1 < 0 ? max : index - 1)
    setDirection("left");
    setAnim(true)
    setTimeout(() => {
      setAnim(false)
    }, 250);
  }

  function moveNext() {
    if (anim) return
    setIndex(index + 1 > max ? 0 : index + 1);
    setDirection("right");
    setAnim(true)
    setTimeout(() => {
      setAnim(false)
    }, 250);
  }

  return (
    <div className={style.slideshow}>
      {/* <div>{`${index + 1} / ${max + 1}`}</div> */}
      <ul className={style.slideshow_list}>
        {
          images.map((element, i) => {
            var _className = `${style.slide_item}`;
            if (dir === null) {
              _className += i == index ? ` ${style.display}` : '';
            }
            else {
              if (index == i)
                _className += ` ${dir == "left" ? style.enter_left : style.enter_right}`;

              if (dir == "left") {
                if ((index == max) && i === 0) _className += ` ${style.exit_right}`
                _className += ` ${i - 1 == index ? style.exit_right : ""}`;
              }
              else {
                if ((index == 0) && i === max) _className += ` ${style.exit_left}`
                _className += ` ${i + 1 == index ? style.exit_left : ""}`;
              }
            }
            return (
              <li key={i} className={_className}>
                <img className={style.slide_item_img} key={i} src={element} alt={element} />
              </li>
            )
          })
        }
      </ul>
      <div className={style.slideshow_btn} onClick={movePrevious}>
        <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.125 1.93359C12.1251 1.22359 12.9264 0.809302 13.5059 1.21973L22.7754 7.78613C23.2677 8.13485 23.2677 8.86515 22.7754 9.21387L13.5059 15.7803C12.9264 16.1907 12.1251 15.7764 12.125 15.0664V12.333C12.1248 11.7118 11.6212 11.208 11 11.208H1C0.516751 11.208 0.125 10.8163 0.125 10.333V6.66699C0.125 6.18374 0.516751 5.79199 1 5.79199H11C11.6212 5.79199 12.1248 5.28816 12.125 4.66699V1.93359Z" fill="white"/>
        </svg>
      </div>
      <div className={style.slideshow_btn} onClick={moveNext}>
        <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.125 1.93359C12.1251 1.22359 12.9264 0.809302 13.5059 1.21973L22.7754 7.78613C23.2677 8.13485 23.2677 8.86515 22.7754 9.21387L13.5059 15.7803C12.9264 16.1907 12.1251 15.7764 12.125 15.0664V12.333C12.1248 11.7118 11.6212 11.208 11 11.208H1C0.516751 11.208 0.125 10.8163 0.125 10.333V6.66699C0.125 6.18374 0.516751 5.79199 1 5.79199H11C11.6212 5.79199 12.1248 5.28816 12.125 4.66699V1.93359Z" fill="white" />
        </svg>
      </div>
    </div>
  )
}
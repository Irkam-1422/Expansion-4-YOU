import React, { useState, useRef, useEffect }  from 'react'
import styles from '../styles/Navigation.module.css'
import anime from "animejs/lib/anime.es.js"

const btns_2 = ['Home','Services','About','Work','Contact']
const btns = ['Who Are We?','What Do We Offer?','Wana Know More About Us?','How Do We Work?','Want To Contact Us?']
 
export const Navigation = () => {

  const animation = useRef(null);
  const hoverAnime = useRef(null)

  useEffect(() => {
    animation.current = anime.timeline({
        //direction: "alternate",
        loop: false,
        autoplay: true,
        easing: "easeOutQuad",
        delay: 3600
    });

    for (let i = 0; i < btns.length; i++) {
        animation.current.add(
            {
            targets: `._${i}`,
            backgroundColor: '#dcd2b7',
            keyframes: [
                {backgroundColor: 'rgba(255, 255, 255, 0)', color: '#000000'},
                {backgroundColor: 'rgba(255, 255, 255, 0)', color: '#000000'}
            ],
            duration: 1500,
            delay: i > 0 ? 0 : 3600
            }
        );
    }
  }, [])

  const handleHover = (e) => {
    console.log(e.target.classList[1])

    hoverAnime.current = anime({
        targets: `.${e.target.classList[1]}`,
        loop: false,
        autoplay: true,
        easing: "easeInOutQuad",
        keyframes: [
            {backgroundColor: '#00AAAA'},
            {backgroundColor: 'rgba(255, 255, 255, 0)'}
        ],
        duration: 1800,
    })
  }
  
  return (
    <div className={`${styles.menu} buttons`}>
        {btns.map((btn,i) => <a href={`#${btn}`}><div key={i} 
                                  id={i} 
                                  className={`${styles.navBtn} _${i}`}
                                  onMouseEnter={handleHover}
                                  >{btn}</div></a>)}
    </div>
  )
}

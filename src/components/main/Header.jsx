import React, {useState, useRef, useEffect } from 'react'
import styles from '../../styles/Main.module.css'
import animStyles from '../../styles/Animation.module.css'
import anime from "animejs/lib/anime.es.js"

export const Header = ({returnReverted, returnFeedback}) => {

  const title =  useRef(null)
  const fadeInAnime = useRef(null);  
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
    const revert = document.getElementById('revert')
    const feedback = document.getElementById('feedback')
    const fbCont = document.getElementById('fbCont')

    console.log(window.scrollY)
    if (window.scrollY > 300) {
      title.current.classList.add(`${styles.hidden}`)
    } else if (window.scrollY < 300) {
      title.current.classList.remove(`${styles.hidden}`)
    } 

    if (window.scrollY > 1320) {
      if (revert) revert.classList.add(`${animStyles.revert}`)
      returnReverted(true)
    } else if (window.scrollY < 700) {
      if (revert) revert.classList.remove(`${animStyles.revert}`)
      returnReverted(false)
    }

    if (window.scrollY > 3000) {
      // if (fbCont) {
      //   fbCont.style.opacity = '1'
      // }
      console.log(feedback)
      if (feedback) {
        console.log(feedback)
        feedback.style.background = 'white'
        setTimeout(() => {
          feedback.style.height = '132px'
        }, 1000);
      }
    } else {
      // if (fbCont) {
      //   fbCont.style.opacity = '0'
      // }
      if (feedback) {
        feedback.style.background = 'black'
        setTimeout(() => {
          feedback.style.height = '200%'
        }, 1000);
      }
    }
  };

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);

    fadeInAnime.current = anime.timeline({
        loop: false,
        autoplay: true,
        easing: "easeInOutQuad",
        duration: 1800,
    })

    fadeInAnime.current.add({
        targets: `.title`,
        opacity: `100%`
    })
    fadeInAnime.current.add({
        targets: `.text`,
        opacity: `100%`,
        keyframes: [
        {color: 'rgba(0,0,0,0)'},
        {color: '#61dafb'},
        ] 
    }) 

    // let options = { threshold: [0.5] };
    // let observer = new IntersectionObserver(onEntry, options);
  
    // if (title.current) observer.observe(title.current); 

  },[])

//   let options = { threshold: [0.5] };
//   let observer = new IntersectionObserver(onEntry, options);
// let elements = [title1.current,title2.current]
//   for (let elm of elements) {
//     if (elm) observer.observe(elm);
//   }
// if (text.current) observer2.observe(text.current); 
// const onEntry = (entry) => {
//   entry.forEach(change => {  
//     if (!change.isIntersecting) {
//       change.target.classList.add(`${styles.hidden}`)
//     } 
//     // else {
//     //   change.target.classList.add(`${styles.hidden}`)
//     // }
//   });
// }

  return (
    <div>
        <video src={require('../../assets/video.mp4')} 
               autoPlay="autoplay"  
               loop="loop"
               className={styles.video}> 
        </video>
        <div className={styles.header}>
            <div className="" ref={title}>
            <h1 className={`${styles.title} title`}>IGNITE YOUR BUSINESS GROWTH</h1>
                <div className={`${styles.noteBlue} text`}>
                    {/* Join successful businesses who've magnified their revenue with our proven, transparent, and enjoyable approach to digital marketing. */}
                    Do you wanna talk about digital marketing?
                </div>
            </div>
        </div>
    </div>
  )
}

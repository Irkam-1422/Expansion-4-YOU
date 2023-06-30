import React, {useState, useRef, useEffect } from 'react'
import styles from '../../styles/Main.module.css'
import animStyles from '../../styles/Animation.module.css'
import anime from "animejs/lib/anime.es.js"

export const Header = ({returnReverted, returnFeedback}) => {

  const title =  useRef(null)
  const logo =  useRef(null)
  const fadeInAnime = useRef(null);  
  const [scroll, setScroll] = useState(0);

  const height = window.innerHeight 

  const handleScroll = () => {
    setScroll(window.scrollY);
    const revert = document.getElementById('revert')
    const feedback = document.getElementById('feedback')
    const fbCont = document.getElementById('fbCont')
    const footer = document.getElementById('footer')

    console.log(window.scrollY)
    if (window.scrollY > 300) {
      title.current.classList.add(`${styles.hidden}`)
      logo.current.classList.add(`${styles.hidden}`)
    } else if (window.scrollY < 300) {
      title.current.classList.remove(`${styles.hidden}`)
      logo.current.classList.remove(`${styles.hidden}`)
    } 

    if (window.scrollY > height*2) {
      if (revert) revert.classList.add(`${animStyles.revert}`)
      returnReverted(true)
    } else if (window.scrollY < height) {
      if (revert) revert.classList.remove(`${animStyles.revert}`)
      returnReverted(false)
    }

    if (window.scrollY > height*3.7) {
      
      if (footer) footer.style.display = 'flex'

      console.log(feedback)
      if (feedback) {
        console.log(feedback)
        feedback.style.background = 'white'
        setTimeout(() => {
          feedback.style.height = '132px'
          feedback.style.zIndex = '0'
        }, 1000);
      }
    } 
    if (window.scrollY < height*3) {
      
      if (footer) footer.style.display = 'none'

      if (feedback) {
        feedback.style.background = 'black'
        setTimeout(() => {
          feedback.style.height = '200%'
          feedback.style.zIndex = '500'
        }, 1000);
      }
    }
    if (window.scrollY > height*4.5) {
      if (footer) footer.style.zIndex = '3'
    } else {
      if (footer) footer.style.zIndex = '-1'
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
        {color: '#642066', 
        },
        ] 
    }) 

  },[])

  return (
    <div className='container'>
        <video   
               src={require('../../assets/video5.mp4')} 
               type="video/mp4"
               muted  
               autoPlay="autoplay"   
               loop="loop" 
               className={styles.video}> 
        </video>
        <div className={styles.logo} ref={logo}></div>
        <div className={styles.header}>
            <div className="" ref={title}>
            <h1 className={`${styles.title} title`}>IGNITE YOUR BUSINESS GROWTH</h1>
                <div className={`${styles.text} text`} style={{fontSize: '1.2rem'}}>
                  {/* font-size: 1.2rem; noteBlue
    color: #642066;
    opacity: 1;
    background: rgb(254, 254, 254);
    padding: 0.5vw 1vw; */}
                    Do you wanna talk about digital marketing?
                </div>
            </div>
        </div>
    </div>
  )
}

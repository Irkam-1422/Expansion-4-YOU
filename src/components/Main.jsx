import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/Main.module.css'
import anime from "animejs/lib/anime.es.js"
import { Header } from './main/Header';
import { Overview } from './main/Overview';
import { Welcoming } from './main/Welcoming';
import { Services } from './main/Services';
import { Feedback } from './main/Feedback';
 
export const Main = () => {

  const fadeInAnime = useRef(null); 
  const [reverted,setReverted] = useState(false)
  const [feedback,setFeedback] = useState(false)

  // useEffect(() => {
  //     fadeInAnime.current = anime.timeline({
  //       loop: false,
  //       autoplay: true,
  //       easing: "easeInOutQuad",
  //       duration: 1800,
  //     })

  //     fadeInAnime.current.add({
  //       targets: `.title`,
  //       opacity: `100%`
  //     })
  //     fadeInAnime.current.add({
  //       targets: `.text`,
  //       opacity: `100%`,
  //       keyframes: [
  //         {backgroundColor: 'rgba(255, 255, 255, 0)', color: '#FFF'},
  //         {backgroundColor: 'rgba(255, 255, 0, 1)', color: '#000000'},
  //         //{backgroundColor: 'rgba(255, 255, 255, 0)', color: '#FFF'},
  //       ]
  //     })

  // },[])

  return (
    <div id='Home'>
        <Header returnReverted={(cond) => setReverted(cond)} returnFeedback={(cond) => setFeedback(cond)}/> 
        <Overview/>
        <Welcoming reverted={reverted}/>
        <Services/> 
        <Feedback feedback={feedback}/>
    </div>
  ) 
}

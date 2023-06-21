import React, {useState,useRef,useEffect} from 'react'
import styles from '../../styles/Main.module.css'
import animStyles from '../../styles/Animation.module.css'
import { About } from './About'
import { Contact } from './Contact'
import {observer} from '../../observers.js'

export const Welcoming = ({reverted}) => {

  const title1 = useRef(null)
  const title2 = useRef(null)
  const text1 = useRef(null)
  const text2 = useRef(null)
  const digital = useRef(null)
  const marketing = useRef(null)

  useEffect(() => { 
    let elements = [title1.current,title2.current]
    let elements2 = [text1.current,text2.current]
    let elements3 = [digital.current,marketing.current]
    for (let elm of elements) {
      if (elm) observer(`${animStyles.hiddenLeft}`).observe(elm);
    }
    // for (let elm of elements2) {
    //   if (elm) observer(`${animStyles.hiddenOp}`).observe(elm);
    // }
    for (let elm of elements3) {
      if (elm) observer(`${animStyles.hiddenGrow}`).observe(elm);
    }
  },[])  

  return (
    <>
    <div className={styles.welcomingCont} id='revert'>
        {/* transform: rotate(-90deg) translateX(-55vh) scaleX(2.5) translateY(-12.47vw); */}
        <div className={`${styles.title1} ${animStyles.hiddenLeft}`} 
             ref={title1}
             style={{left: '-6vw'}}
             >Well...</div>
        <div className={`${styles.title2} ${animStyles.hiddenLeft}`} 
             ref={title2}
             style={{left: '-11vw'}}
             >If you didn't stop now...</div>
        <div className={`${styles.text2Cont}`} ref={text1}>
            We guess, <br />  
            you are brave enough <br />
            to dive into <br /> 
            <span style={{transition: 'all 2s'}} className={`${styles.span1} ${animStyles.hiddenGrow}`} ref={digital}>Digital</span>
            <span style={{transition: 'all 2s'}} className={`${styles.span2} ${animStyles.hiddenGrow}`} ref={marketing}>Marketing</span> 
            <span className={`${styles.span3}`} ref={text2}>content!</span>

            <About reverted={reverted}/>
        </div>
    </div>
    {/* <div className="">
        <Contact/>
    </div> */}
    </>
  )
}

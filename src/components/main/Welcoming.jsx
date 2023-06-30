import React, {useState,useRef,useEffect} from 'react'
import styles from '../../styles/Main.module.css'
import animStyles from '../../styles/Animation.module.css'
import { About } from './About'
import { Contact } from '../services/Contact'
import {observer} from '../../observers.js'
import { ContactImgBtn } from '../contact/ContactImgBtn'

export const Welcoming = ({reverted}) => {

  const title1 = useRef(null)
  const title2 = useRef(null)
  const text1 = useRef(null)
  const text2 = useRef(null)
  const digital = useRef(null)
  const marketing = useRef(null)
  const contact = useRef(null)

  useEffect(() => { 
    let elements = [title1.current,title2.current]
    let elements2 = [text1.current,text2.current]
    let elements3 = [digital.current,marketing.current]
    for (let elm of elements) {
      if (elm) observer(`${animStyles.hiddenLeft}`).observe(elm);
    }
    for (let elm of elements3) {
      if (elm) observer(`${animStyles.hiddenGrow}`).observe(elm);
    }
    if (contact.current) observer(`${animStyles.hiddenOp}`).observe(contact.current)
  },[])  

  return (
    <>
    <div className={`${styles.welcomingCont} container`} id='revert'>
        {/* transform: rotate(-90deg) translate(-33vh, -82vw); */}
        <div className="" style={{width: '35%', paddingTop: '5vh'}}>
          <div className={`${styles.title1} ${animStyles.hiddenLeft} ${styles.titlePink}`} 
              ref={title1}
              style={{margin: '0', marginLeft: '-3vw' }}
              >Well...</div>
          <div className={`${styles.title2} ${animStyles.hiddenLeft} ${styles.titlePink} `} 
              ref={title2}
              style={{marginTop: '1vh', marginLeft: '0' }}
              >If you didn't stop now...</div>
          <div className={animStyles.hiddenOp} ref={contact} style={{transition: 'all 1s'}}>
            <ContactImgBtn/> 
          </div>
        </div>
        <div className={`${styles.text2Cont}`} ref={text1} style={{position: 'static', marginLeft: '0' }}>
            We guess, <br />  
            you are brave enough <br />
            to dive into <br /> 
            <span style={{transition: 'all 2s'}} className={`${styles.span1} ${animStyles.hiddenGrow}`} ref={digital}>Digital</span>
            <span style={{transition: 'all 2s'}} className={`${styles.span2} ${animStyles.hiddenGrow}`} ref={marketing}>Marketing</span> 
            <span className={`${styles.span3}`} ref={text2}>content!</span>
        </div>
    </div>
    <About reverted={reverted} />
    </>
  )
}

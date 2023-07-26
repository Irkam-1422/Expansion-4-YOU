import React, {useState,useRef,useEffect} from 'react'
import styles from '../../styles/Main.module.css'
import animStyles from '../../styles/Animation.module.css'
import {observer} from '../../observers.js'

export const Feedback = ({feedback}) => {

  const titleCont = useRef(null)  
  const title1 = useRef(null)
  const title2 = useRef(null)
  const text1 = useRef(null)
  const text2 = useRef(null)  

  useEffect(() => {

    if (title1.current) observer(`${animStyles.hiddenLeft}`).observe(title1.current);
    if (title2.current) observer(`${animStyles.hiddenLeft}`).observe(title2.current);
    if (text1.current) observer(`${animStyles.hiddenLeft}`).observe(text1.current);
    if (text2.current) observer(`${animStyles.hiddenLeft}`).observe(text2.current);
}, [])
    

  return (
    <div id='fbCont' className={`container ${styles.feedbackCont}`}>
        <div className={styles.feegbackImgCont}>
            <div className={styles.feedbackImgWrap}>
                <div className={styles.feedbackImg}></div>
            </div>
            <div className={styles.feedbackImgWrap}>
                <div className={`${styles.feedbackImg} ${styles.feedbackImg2}`}></div>
            </div>
        </div>
        <div style={{width: '100%'}}>
            <div className={styles.feedbackTitles} ref={titleCont} id='feedback' style={window.innerHeight>window.innerWidth?{height: '0'}:{}}>
                <div className={`${styles.title1} ${styles.titleSmall}`} ref={title1} style={window.innerHeight>window.innerWidth?{fontSize: '3.7rem'}:{}}>Still not sure about working with us?</div>
                {/* font-size: 3rem;
    background: black;
    color: #fefefe;
    margin-left: 0; */}
                <div className={`${styles.title2} ${styles.titleSmall}`} ref={title2} style={window.innerHeight>window.innerWidth?{fontSize: '3.7rem'}:{}}>Let's see what our clients say!</div>
            </div>
            <div className={styles.feedbackTextCont}>
                <div className={styles.feedback} style={window.innerHeight>window.innerWidth?{marginTop: '10%'}:{marginTop: '-12vh'}}>
                    <div className={styles.fbText} ref={text1}>
                        I worked with Anna and she always gives 100% to achieve the best results 
                        for her clients. Because of her extensive experience, 
                        analytical skills, creativity and passion she delivers a successful 
                        online marketing strategy every time.
                    </div>
                    <div className={`${styles.noteBlue} ${styles.author1}`}>Bas Uding</div>
                </div>
                <div className={`${styles.feedback}`} style={window.innerHeight>window.innerWidth?{marginTop: '15%'}:{marginTop: '-20vh'}}>
                    <div className={styles.fbText} ref={text2}>
                        Adaptable online marketing strategies for different market needs. 
                        Very knowledgeable and lot's of personal attention.
                    </div>
                    <div className={`${styles.notePink} ${styles.author2}`}>Jet Martens</div>
                </div>
            </div>
        </div>
    </div>
  )
}

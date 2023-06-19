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
    <div id='fbCont' style={{position: 'relative'}}>
        <div className={styles.feegbackImgCont}>
            {/*     margin-top: -10vh; */}
            <div className={styles.feedbackImgWrap}>
                {/* height: 64.7vw;
    z-index: 1000;
    margin-top: -10vh; */}
                <div className={styles.feedbackImg}></div>
            </div>
            <div className={styles.feedbackImgWrap}>
                <div className={`${styles.feedbackImg} ${styles.feedbackImg2}`}></div>
            </div>
        </div>
        <div style={{position: 'relative'}}>
            <div className={styles.feedbackTitles} ref={titleCont} id='feedback'>
                <div className={`${styles.title1} ${styles.titleSmall}`} ref={title1}>Still not sure about working with us?</div>
                {/*     background: black;
    color: #fefefe; */}
                <div className={`${styles.title2} ${styles.titleSmall}`} ref={title2}>Let's see what our clients say!</div>
                {/*     background: black;
    color: #fefefe; */}
            </div>
            <div className={styles.feedbackTextCont}>
                {/* display: flex;
    font-weight: 400; */}
                <div className={styles.feedback}>
                    <div className={styles.text1} ref={text1}>
                        {/* font-weight: 400;
    border: 3px solid #642067;
    padding: 15px; */}
                        I worked with Anna and she always gives 100% to achieve the best results 
                        for her clients. Because of her extensive experience, 
                        analytical skills, creativity and passion she delivers a successful 
                        online marketing strategy every time.
                    </div>
                    <div className={`${styles.noteBlue} ${styles.author1}`}>Bas Uding</div>
                    {/* background: #642067;
    color: #fefefe;
    padding: 0.5vw 2vw;
    top: 1vw; */}
                </div>
                <div className={`${styles.feedback} ${styles.fb2}`}>
                    <div className={styles.text2} ref={text2}>
                        Adaptable online marketing strategies for different market needs. 
                        Very knowledgeable and lot's of personal attention.
                    </div>
                    <div className={`${styles.notePink} ${styles.author1}`}>Jet Martens</div>
                    {/*     background: #642067;
    color: #fefefe;
    padding: 0.5vw 2vw;
    left: 7vw; */}
                </div>
            </div>
        </div>
    </div>
  )
}

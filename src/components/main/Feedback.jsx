import React from 'react'
import styles from '../../styles/Main.module.css'

export const Feedback = () => {
  return (
    <div>
        <div className={styles.feegbackImgCont}>
            <div className={styles.feedbackImgWrap}>
                <div className={styles.feedbackImg}></div>
            </div>
            <div className={styles.feedbackImgWrap}>
                <div className={`${styles.feedbackImg} ${styles.feedbackImg2}`}></div>
            </div>
        </div>
        <div className="">
            <div className={styles.feedbackTitles}>
                <div className={`${styles.title1} ${styles.titleSmall}`}>Still not sure about working with us?</div>
                <div className={`${styles.title2} ${styles.titleSmall}`}>Let's see what our clients say!</div>
            </div>
            <div className="">
                <div className={styles.feedback}>
                    <div className={styles.text1}>
                        I worked with Anna and she always gives 100% to achieve the best results 
                        for her clients. Because of her extensive experience, 
                        analytical skills, creativity and passion she delivers a successful 
                        online marketing strategy every time.
                    </div>
                    <div className={`${styles.noteBlue} ${styles.author1}`}>Bas Uding</div>
                </div>
                <div className={`${styles.feedback} ${styles.fb2}`}>
                    <div className={styles.text2}>
                        Adaptable online marketing strategies for different market needs. 
                        Very knowledgeable and lot's of personal attention.
                    </div>
                    <div className={`${styles.notePink} ${styles.author1}`}>Jet Martens</div>
                </div>
            </div>
        </div>
    </div>
  )
}

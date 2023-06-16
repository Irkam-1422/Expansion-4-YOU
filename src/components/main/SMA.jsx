import React from 'react'
import styles from '../../styles/Main.module.css'

export const SMA = () => {
  return (
    <div className={styles.smaCont}>
        <div className="">
            <div style={{textAlign: 'end'}}>
                <div className={styles.smaBig1}>What is your desired number of followers on Facebook? </div>
                <div className={styles.smaBig2}>And what about Instagram? </div>
                <div className={styles.smaBig3}>Or maybe LinkedIn? </div>

                <div className={styles.followers}>
                    2000 <br />
                    <span>Followers</span>
                </div>
                
                <div className={`${styles.comment} ${styles.smaComment}`}>Or maybe you are just that one <br />
                who doesn’t believe in a magical power <br /> of the social networks?</div>
                
                <div className={`${styles.title1} ${styles.smaTitle1}`}> Well, well, well… </div>
                <div className={`${styles.title2} ${styles.smaTitle2}`}>Let us prove you’re wrong!</div> 
            </div>
            <div className={styles.vidCont}>
                <div className={styles.vidTextCont}>
                    <div className={styles.vidText}>
                        We promise, <br />
                        <span className={styles.underlineBlue}>you’ll be surprised</span> by how fast <br />
                        the number of followers you <span className={styles.underlineBlue}>used to desire for</span><br />
                        will become <span className={styles.underlineBlue}>just a half</span> of your achieved audience!
                    </div>
                </div>
                <div className={styles.vidWrap}>
                    <video className={styles.smaVideo} src={require('../../assets/SMA.mp4')} autoPlay='autoplay' loop={true}></video>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import styles from '../../styles/Contact.module.css'

export const Contact = () => {
  return (
    <div className={styles.contactBtnCont}>
        {/*  */}
        <div className={styles.contactBtn}>
            {/*      */}
            <div className={styles.phoneImg}></div> 
            <div className={styles.contactBtnText}>Contact us</div>
            {/*     font-size: 3vw;
    text-transform: uppercase;
    margin-left: 2vw;
    text-shadow: 3px 3px 0px black; */}
        </div>
    </div>
  )
}

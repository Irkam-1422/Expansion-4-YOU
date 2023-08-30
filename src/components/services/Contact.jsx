import React from 'react'
import styles from '../../styles/Contact.module.css'

export const Contact = () => {
  return (
    <div className={styles.contactBtnCont}>
        <div className={styles.contactBtn}>
            <div className={styles.phoneImg}></div> 
            <div className={styles.contactBtnText}>Contact us</div>
        </div>
    </div>
  )
}

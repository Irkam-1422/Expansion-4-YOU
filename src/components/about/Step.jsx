import React from 'react'
import styles from '../../styles/About.module.css'

export const Step = ({about}) => {
  return (
    <div className={styles.stepBorder}>
        {/* background: linear-gradient(45deg, #de30e4, #61dafb);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5%; */}
        <div className={styles.stepCont}>
            {/* background: #000;
    padding: 5%; */}
            <h2 className={styles.stepTitle}>{about.title}</h2>
            {/*     font-size: 1.8rem;
                margin-top: 0;
            background: linear-gradient(45deg, #de30e4, #3cfaff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */}
            <div className={styles.stepText}>{about.text}</div>
            {/*     font-size: 1.1rem; */}
        </div>
    </div>
  )
}

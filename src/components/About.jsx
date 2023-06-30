import React,{useState,useRef,useEffect} from 'react'
import styles from '../styles/About.module.css'
export const About = () => {

  const [c1,setC1] = useState(0)
  const [c2,setC2] = useState(0)
  const [c3,setC3] = useState(0)

  useEffect(() => {
    let timerId = setInterval(() => {
      if (c1 < 11) {
        setC1(prev => prev++) 
      } else {
      clearInterval(timerId)
      }
    },200)
  },[])

  return (
    <div>
      <div className={styles.aboutCont}>
          <div className={styles.aboutFlex1}>PROVIDING CLIENTS WITH SUPERIOR <span className={styles.span}>DIGITAL</span> MARKETING <hr className={styles.hr}/> </div>
          <div className={styles.aboutFlex2}>
            <h1 className={styles.thinner}>Let's talk numbers!</h1>
            <div className={styles.numsCont}>
              <div className="">
                <div className={styles.num}>{c1}+</div>
                <div className={styles.lable}>Years in Business</div>
              </div>
              <div className="">
                <div className={styles.num}>{c2}+</div>
                <div className={styles.lable}>Happy Customers</div>
              </div>
              <div className={styles.lastNum}>
                <div className={styles.num}>M{c3}+</div>
                <div className={styles.lable}>Generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

import React,{useState,useRef,useEffect} from 'react'
import styles from '../styles/About.module.css'
export const About = () => {

  const [c1,setC1] = useState(10)
  const [c2,setC2] = useState(50)
  const [c3,setC3] = useState(10)
  const [ currVal, setCurrVal ] = useState(0);

  const cont1 = useRef(null)
  const cont2 = useRef(null)

  useEffect(() => {
    console.log('scrolling:',window.scrollY)
    if (window.scrollY > 1) {
      cont1.current.style.transform = 'translateX(-100%)'
      cont2.current.style.transform = 'translateX(100%)'
    } else {
      cont1.current.style.transform = 'translateX(0%)'
      cont2.current.style.transform = 'translateX(0%)'
    }
  },[window.scrollY])

  useEffect(() => {
    c1 !== 10 ? setTimeout(setC1, 300, c1 + 1) : setTimeout(setC1, 2000, 0)
  }, [ c1 ]);

  useEffect(() => {
    c2 !== 50 ? setTimeout(setC2, 60, c2 + 1) : setTimeout(setC2, 2000, 0)
  }, [ c2 ]);

  useEffect(() => {
    c3 !== 10 ? setTimeout(setC3, 300, c3 + 1) : setTimeout(setC3, 2000, 0)
  }, [ c3 ]);

  const handleScroll = (e) => {
    console.log('scrolling')
    cont1.current.style.transform = 'translateX(-100%)'
    cont2.current.style.transform = 'translateX(100%)'
  }

  return (
    <div> 
      <div className={styles.aboutCont}>
          <div className={styles.aboutFlex1} ref={cont1}>PROVIDING CLIENTS WITH SUPERIOR <span className={styles.span}>DIGITAL</span> MARKETING <hr className={styles.hr}/> </div>
          <div className={styles.aboutFlex2} ref={cont2}>
            <h1 className={styles.thinner}>Let's talk numbers!</h1>
            <div className={styles.numsCont}>
              <div className="">
                <div className={styles.num} style={{width: '14.7vw'}}>{c1}+</div>
                <div className={styles.lable}>Years in Business</div>
              </div>
              <div className="">
                <div className={styles.num} style={{width: '17.5vw'}}>{c2}+</div>
                <div className={styles.lable}>Happy Customers</div>
              </div>
              <div className={styles.lastNum}>
                <div className={styles.num} style={{width: '22.4vw' }}>M{c3}+</div>
                <div className={styles.lable}>Generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

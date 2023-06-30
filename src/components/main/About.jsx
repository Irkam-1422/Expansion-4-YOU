import React, {useState,useRef,useEffect} from 'react'
import styles from '../../styles/Main.module.css'
import animStyles from '../../styles/Animation.module.css'

import {observer} from '../../observers.js'
export const About = ({reverted}) => {

  const title1 = useRef(null)  
  const image = useRef(null)  
  const text1 = useRef(null)  

  const title2 = useRef(null)  
  const text2 = useRef(null) 
  const container = useRef(null)  

  useEffect(() => {
    console.log(reverted)
    let elements1 = [title1.current,image.current,text1.current]
    let elements2 = [title2.current,text2.current]

    if (reverted) {
        if (container) container.current.style.transform = 'none'
        setTimeout(() => {
            elements1.forEach(elm => {
                if (elm) elm.classList.remove(`${animStyles.hiddenLeft}`)
            })
            elements2.forEach(elm => {
                if (elm) elm.classList.remove(`${animStyles.hiddenRight}`)
            })
        }, 1500);
    } else {
        if (container) container.current.style.transform = 'translateX(103%)'
        elements1.forEach(elm => {
            if (elm) elm.classList.add(`${animStyles.hiddenLeft}`)
        })
        elements2.forEach(elm => {
            if (elm) elm.classList.add(`${animStyles.hiddenRight}`)
        })
    }

  },[reverted])

  return (
    <div ref={container} className={`container ${styles.aboutMainCont}`} style={{position: 'absolute' ,top: `${window.innerHeight*2}px`}}>
        <div className={styles.revert}>
                <div className={styles.aboutCont}>
                    <div className={`${styles.title1} ${animStyles.hiddenLeft}`} styles={{transform: 'none'}} ref={title1} id='about'>So, what is it all about?</div>
                    <div className={styles.imgCont}>
                        <div className={`${styles.imgWrap} ${animStyles.hiddenLeft}`} ref={image} style={{transition: 'all 1s'}}>
                            <img className={styles.img} src={require('../../assets/founder.jpg')} alt="founder" />
                        </div>
                        <div className={`${styles.aboutText} ${animStyles.hiddenLeft}`} ref={text1} style={{transition: 'all 1s'}}>
                            <div className="">"Here at Expansion 4you we deliver <span className={styles.underlineBlue}>exceptional digital marketing solutions</span> that drive <span className={styles.underlineBlue}>measurable results</span>.</div>
                            <div className="">We strive to provide <span className={styles.underlineBlue}>customized strategies</span> and <span className={styles.underlineBlue}>cutting-edge techniques</span> that enhance brand visibility, generate high-quality leads, and maximize our clients' return on investment."</div>
                            <div className={styles.founder}>ANNA ZNAIEVSKA - UDING, <br /> Founder/ Online Marketer</div>
                        </div> 
                    </div>
                </div>
                <div className={`${styles.simpleCont} ${animStyles.hiddenRight}`} ref={text2} style={{transition: 'all 1s'}}>
                    <div className={`${styles.title2} ${styles.simpleTitle} ${animStyles.hiddenRight}`} ref={title2} style={{transition: 'all 1s'}}>Well, In simple terms:</div>
                    <div className='{animStyles.hiddenOp}'>
                    <div className="">We take in our hands all your problems about <span className={styles.underlinePink}>creating your digital content,</span></div>
                        <div className="">
                            So now, you'll never have to worry about <span className={styles.underlinePink}>what to post on social media</span>, <br />
                            or how to make your company's website to <span className={styles.underlinePink}>pop up first during a google search</span>!
                        </div> 
                    </div>
                </div>
            </div>
    </div>
  )
}

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

  useEffect(() => {
    console.log(reverted)
    let elements1 = [title1.current,image.current,text1.current]
    let elements2 = [title2.current,text2.current]

    if (reverted) {
        setTimeout(() => {
            elements1.forEach(elm => {
                if (elm) elm.classList.remove(`${animStyles.hiddenLeft}`)
            })
            elements2.forEach(elm => {
                if (elm) elm.classList.remove(`${animStyles.hiddenRight}`)
            })
        }, 2000);
    } else {
        elements1.forEach(elm => {
            if (elm) elm.classList.add(`${animStyles.hiddenLeft}`)
        })
        elements2.forEach(elm => {
            if (elm) elm.classList.add(`${animStyles.hiddenRight}`)
        })
    }

  },[reverted])

  return (
    <div>
        <div className={styles.revert}>
            {/*     transform: scaleX(.5) rotate(90deg);
    display: flex;
    align-items: flex-start;
    width: 100vw;
    position: relative;
    top: 34vw;
    flex-direction: row; */}
                <div className={styles.aboutCont}>
                    {/* transform: none;
    display: flex;
    flex-direction: column;
    position: relative;
    top: -13.8vw; */}
                    <div className={`${styles.title1} ${animStyles.hiddenLeft}`} styles={{transform: 'none'}} ref={title1}>So, what is it all about?</div>
                    <div className={styles.imgCont}>
                        <div className={animStyles.hiddenLeft} ref={image} style={{transition: 'all 1s'}}>
                            <img className={styles.img} src={require('../../assets/founder.jpg')} alt="founder" />
                        </div>
                        <div className={`${styles.aboutText} ${animStyles.hiddenLeft}`} ref={text1} style={{transition: 'all 1s'}}>
                            {/*     transition: all 1s ease 0s;
    font-size: 1.3rem;
    font-weight: 400;
    width: 37vw;
    text-align: initial;
    background: #fefefe;
    color: #000;
    border: 3px solid #642067; */}
                            <div className="">"Here at Expansion 4you we deliver <span className={styles.underlineBlue}>exceptional digital marketing solutions</span> that drive <span className={styles.underlineBlue}>measurable results</span>.</div>
                            <div className="">We strive to provide <span className={styles.underlineBlue}>customized strategies</span> and <span className={styles.underlineBlue}>cutting-edge techniques</span> that enhance brand visibility, generate high-quality leads, and maximize our clients' return on investment."</div>
                            <div style={{fontWeight: '400'}}>ANNA ZNAIEVSKA - UDING, <br /> Founder/ Online Marketer</div>
                            {/* font-weight: 400;
    margin-top: 5vh;
    color: #642067; */}
                        </div> 
                        {/* ::before {
                            content: 'This is our Mission';
    color: #642067;
    font-weight: 400;
    text-transform: uppercase;
    transform: scaleX(1.5);
    position: absolute;
    text-align: left;
    left: 0vw;
    width: 6.3vw;
    margin-top: -10.3vw;
    opacity: .8;
    font-size: 1.5rem;
                        } */}
                    </div>
                </div>
                <div className={`${styles.simpleCont} ${animStyles.hiddenRight}`} ref={text2} style={{transition: 'all 1s'}}>
                    {/* height: 180%;
    font-size: 1.5rem;
    font-weight: 400;
    padding-left: 3vw;
    right: -5.85vw;
    padding-right: 8vw;
    text-align: initial;
    margin-top: -19.4vw;
    padding-top: 7vh; */}
                    <div className={`${styles.title2} ${styles.simpleTitle} ${animStyles.hiddenRight}`} ref={title2} style={{transition: 'all 1s'}}>Well, In simple terms:</div>
                    {/*     background: transparent;
    color: #9345cd;
    font-weight: 400;
    width: 120%;
    left: -13vw; */}
                    <div className='{animStyles.hiddenOp}'>
                    <div className="">We take in our hands all your problems about <span className={styles.underlinePink}>creating your digital content,</span></div>
                        <div className="">
                            So now, you'll never have to worry about <span className={styles.underlinePink}>what to post on social media</span>, <br />
                            {/* text-decoration: underline #9643d4; */}
                            or how to make your company's website to <span className={styles.underlinePink}>pop up first during a google search</span>!
                        </div> 
                    </div>
                </div>
            </div>
    </div>
  )
}

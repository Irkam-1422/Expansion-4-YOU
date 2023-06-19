import React, {useState,useRef,useEffect} from 'react'
import styles from '../../styles/Main.module.css'
import animStyles from '../../styles/Animation.module.css'
import { About } from './About'
import { Contact } from './Contact'
import {observer} from '../../observers.js'

export const Welcoming = ({reverted}) => {

  const title1 = useRef(null)
  const title2 = useRef(null)
  const text1 = useRef(null)
  const text2 = useRef(null)
  const digital = useRef(null)
  const marketing = useRef(null)

  useEffect(() => { 
    let elements = [title1.current,title2.current]
    let elements2 = [text1.current,text2.current]
    let elements3 = [digital.current,marketing.current]
    for (let elm of elements) {
      if (elm) observer(`${animStyles.hiddenLeft}`).observe(elm);
    }
    // for (let elm of elements2) {
    //   if (elm) observer(`${animStyles.hiddenOp}`).observe(elm);
    // }
    for (let elm of elements3) {
      if (elm) observer(`${animStyles.hiddenGrow}`).observe(elm);
    }
  },[])  

  return (
    <>
    <div className={styles.welcomingCont} id='revert'>
        {/* transform: rotate(-90deg) translateX(-55vh) scaleX(2.5) translateY(-12.47vw); */}
        <div className={`${styles.title1} ${animStyles.hiddenLeft}`} ref={title1}>Well...</div>
        {/*     position: relative;
    left: -6vw; */}
        <div className={`${styles.title2} ${animStyles.hiddenLeft}`} ref={title2}>If you didn't stop now...</div>
        {/*     position: relative;
    left: -11vw; */}
        <div className={`${styles.text2Cont}`} ref={text1}>
            {/* font-weight: 400;
    font-size: 1.9rem; */}
            We guess, <br />  
            you are brave enough <br />
            to dive into <br /> 
            <span style={{transition: 'all 2s'}} className={`${styles.span1} ${animStyles.hiddenGrow}`} ref={digital}>Digital</span>
            <span style={{transition: 'all 2s'}} className={`${styles.span2} ${animStyles.hiddenGrow}`} ref={marketing}>Marketing</span> 
            {/* color: #642066;
    font-size: 3.5rem; */}
            <span className={`${styles.span3}`} ref={text2}>content!</span>

            {/* <div className={styles.revert}>
                <div className={styles.aboutCont}>
                    <div className={styles.title1} styles={{transform: 'none'}}>So, what is it all about?</div>
                    <div className={styles.imgCont}>
                        <div className="">
                            <img className={styles.img} src={require('../../assets/founder.jpg')} alt="founder" />
                        </div>
                        <div className={styles.aboutText}>
                            <div className="">"Here at Expansion 4you we deliver <span className={styles.underlineBlue}>exceptional digital marketing solutions</span> that drive <span className={styles.underlineBlue}>measurable results</span>.</div>
                            <div className="">We strive to provide <span className={styles.underlineBlue}>customized strategies</span> and <span className={styles.underlineBlue}>cutting-edge techniques</span> that enhance brand visibility, generate high-quality leads, and maximize our clients' return on investment."</div>
                            <div style={{fontWeight: '400'}}>ANNA ZNAIEVSKA - UDING, <br /> Founder/ Online Marketer</div>
                        </div> 
                    </div>
                </div>
                <div className={styles.simpleCont}>
                    <div className={`${styles.title2} ${styles.simpleTitle}`}>Well, In simple terms:</div>
                    <div className="">
                    <div className="">We take in our hands all your problems about <span className={styles.underlinePink}>creating your digital content,</span></div>
                        <div className="">
                            So now, you'll never have to worry about <span className={styles.underlinePink}>what to post on social media</span>, <br />
                            or how to make your company's website to <span className={styles.underlinePink}>pop up first during a google search</span>!
                        </div> 
                    </div>
                </div>
            </div> */}
            <About reverted={reverted}/>
        </div>
    </div>
    {/* <div className="">
        <Contact/>
    </div> */}
    </>
  )
}

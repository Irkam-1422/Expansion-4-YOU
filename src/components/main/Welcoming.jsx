import React from 'react'
import styles from '../../styles/Main.module.css'
import { About } from './About'
import { Contact } from './Contact'

export const Welcoming = () => {
  return (
    <>
    <div className={styles.welcomingCont}>
        <div className={styles.title1}>Well...</div>
        <div className={styles.title2}>If you didn't stop now...</div>
        <div className={styles.text2Cont}>
            We guess, <br /> 
            you are brave enough <br />
            to dive into <br /> 
            <span className={styles.span1}>Digital</span>
            <span className={styles.span2}>Marketing</span> 
            <span className={styles.span3}>content!</span>

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
            <About/>
        </div>
    </div>
    {/* <div className="">
        <Contact/>
    </div> */}
    </>
  )
}

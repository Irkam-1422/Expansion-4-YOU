import React, {useState, useRef, useEffect} from 'react'
import styles from '../../styles/Main.module.css'
import animStyles from '../../styles/Animation.module.css'
import {observer} from '../../observers.js'

export const Overview = () => {

  const title1 = useRef(null)
  const title2 = useRef(null)
  const text = useRef(null)
  const stop = useRef(null)
  const remark = useRef(null)

  useEffect(() => {
    let elements = [title1.current,title2.current]
    let elements2 = [text.current,stop.current]
    for (let elm of elements) {
      if (elm) observer(`${animStyles.hiddenLeft}`).observe(elm);
    }
    for (let elm of elements2) {
      if (elm) observer(`${animStyles.hiddenOp}`).observe(elm);
    }
    if (remark.current) observer(`${animStyles.hiddenRight}`).observe(remark.current);
})



  return (
    <div className={styles.overviewCont}>
        {/*     max-height: 400px;
    margin-top: 25vh; */}
        <div className={`${styles.title1} ${animStyles.hiddenLeft}`} ref={title1}>Oh, wait!</div>
        {/*     background: #fefefe;
    color: black; */}
        <div className={`${styles.title2} ${animStyles.hiddenLeft}`} ref={title2}>Just a quick warning before we start...</div>
        {/*          background: #fefefe;
    color: black;  */}
        <div id="typed-strings" className={`${styles.textCont} ${animStyles.hiddenOp}`} ref={text}>
            {/*     margin-top: 9vh;
    font-weight: 400;
    font-size: 1.6rem;
    text-align: initial;
    padding-left: 3.9vw;
    transition: all 1s; */}
            <span>Beware, boosting your digital marketing strategy can <span className={styles.span}>attract new customers significantly</span>.</span> <br />
            <span>This can cause <span className={styles.span}>severe growth</span> of your <span className={styles.span}>revenue</span> and <span className={styles.span}>customer loyality</span>. </span><br />
            <span>All the content we are showing here is based on <span className={styles.span}>real life cases</span>, </span><br />
            <span>and may cause the addiction to admiring the digital marketing, </span><br />
            <span>and the will to <span className={styles.span}>change your business for the best</span>.</span><br />
        </div>
        <div  className={styles.stopCont}>
          {/* z-index: 3;
    top: 6vh;
    background: transparent;
    width: 32.25vw; */}
            <div className={`${styles.stop} ${animStyles.stop} ${animStyles.hiddenOp}`} ref={stop}>
                {/*     transform: scale(2.5);
    color: #b34dff; */}
                STOP NOW!
            </div>
            <span  className={`${styles.remark} ${animStyles.hiddenRight}`} ref={remark}>*Or you might upset your competition...</span>
            {/*     text-transform: lowercase;
    font-size: 1.3rem;
    font-weight: 400;
    position: relative;
    top: -1vw;
    left: 3.9vw;
    color: #fefefe; */}
        </div>
    </div>
  )
}

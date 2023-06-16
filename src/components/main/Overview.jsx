import React, {useState, useRef, useEffect} from 'react'
import styles from '../../styles/Main.module.css'

export const Overview = () => {

  const title1 = useRef(null)
  const title2 = useRef(null)
  const text = useRef(null)

  useEffect(() => {
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let observer2 = new IntersectionObserver(onEntry2, options);
    let elements = [title1.current,title2.current]
    for (let elm of elements) {
      if (elm) observer.observe(elm);
    }
    if (text.current) observer2.observe(text.current); 
  })

  const onEntry = (entry) => {
    entry.forEach(change => {  
      if (change.isIntersecting) {
        change.target.classList.remove(`${styles.hidden}`)
      } else {
        change.target.classList.add(`${styles.hidden}`)
      }
    });
  }

  const onEntry2 = (entry) => {
    entry.forEach(change => {  
      if (change.isIntersecting) {
        change.target.classList.remove(`${styles.hiddenOp}`)
      } else {
        change.target.classList.add(`${styles.hiddenOp}`)
      }
    });
  }

//   const typed = new Typed ('#typed', { // Тут id того блока, в которм будет анимация
//     stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
//     typeSpeed: 100, // Скорость печати
//     startDelay: 500, // Задержка перед стартом анимации
//     backSpeed: 0, // Скорость удаления
//     loop: true // Указываем, повторять ли анимацию
//   });

  return (
    <div className={styles.overviewCont}>
        {/*     max-height: 400px;
    margin-top: 25vh; */}
        <div className={`${styles.title1} ${styles.hidden}`} ref={title1}>Oh, wait!</div>
        {/* background: #caaa7e; color: black; */}
        <div className={`${styles.title2} ${styles.hidden}`} ref={title2}>Just a quick warning before we start...</div>
        {/*      background: #85a3a9; color: black;  */}
        <div id="typed-strings" className={`${styles.textCont} ${styles.hiddenOp}`} ref={text}>
            <span>Beware, boosting your digital marketing strategy can <span className={styles.span}>attract new customers significantly</span>.</span> <br />
            <span>This can cause <span className={styles.span}>severe growth</span> of your <span className={styles.span}>revenue</span> and <span className={styles.span}>customer loyality</span>. </span><br />
            <span>All the content we are showing here is based on <span className={styles.span}>real life cases</span>, </span><br />
            <span>and may cause the addiction to admiring the digital marketing, </span><br />
            <span>and the will to <span className={styles.span}>change your business for the best</span>.</span><br />
        </div>
        <div  className={styles.stopCont}>
            <div className={styles.stop}>
                STOP NOW!
            </div>
            <span  className={styles.remark}>*Or you might upset your competition...</span>
        </div>
    </div>
  )
}

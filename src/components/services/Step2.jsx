import React, {useState,useRef,useEffect} from 'react'
import styles from '../../styles/Inside.module.css'
import animStyles from '../../styles/Animation.module.css'
import {observer} from '../../observers.js'

export const Step2 = ({step}) => {

  const cont = useRef(null)  

  React.useEffect(() => { 
    if (+step.num%2 == 0) {observer(`${animStyles.hiddenRight}`).observe(cont.current)}
    else {observer(`${animStyles.hiddenLeft}`).observe(cont.current)}
  }, [])  

  return (
    <div ref={cont} className={+step.num%2==0 ? `${styles.questCont2} ${animStyles.hiddenRight}` : `${styles.questCont} ${animStyles.hiddenLeft}`}>
        <div className={styles.questHeaderCont}>
            <div className={styles._01}
                 style={+step.num==2 ? {marginLeft: '4%'} : 
                 +step.num==3 || +step.num==4 ? {marginLeft: '3%'} 
                 : {}}
                 >{step.num}</div>
            <div className={styles.titleCont}
                style={+step.num==2 ? {marginLeft: '17%'} : 
                +step.num==3 ? {marginLeft: '10%', width: 'max-content'} 
                : +step.num==4 ? {marginLeft: '18%'} : {}}
                >
                {step.title[0]} {step.title[1]} <br />  
                <div className={styles.span}
                     style={+step.num==2 ? {padding: '2%',transform: 'scaleX(1.1)'} : 
                     +step.num==3 ? {padding: '2%'} 
                     : +step.num==4 ? {padding: '2%', fontSize: '2.3rem', width: 'max-content'} : {}}
                     >{step.title[2]}</div>
            </div>
        </div>
        {step.questions && <div className={styles.questions}>
                {step.questions.map(q => <p style={+step.num==3||+step.num==4 ? {paddingLeft: '21%'} : {}}>- {q}</p>)}
            </div>}
        <img className={styles.img} src={require(`../../assets/${step.title[2].toLowerCase().slice(0,-1).split(' ').join('')}.png`)} 
             alt="" 
             style={
                +step.num==2 ? {top: '40%',width: '35%',left: '0'} :
                +step.num==3 ? {top: '58.5%',width: '35%'} :
                +step.num==4 ? {width: '40%'} :
                {}
                }/>
    </div>
  )
}

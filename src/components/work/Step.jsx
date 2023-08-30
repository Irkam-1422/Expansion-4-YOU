import React from 'react'
import styles from '../../styles/Work.module.css'
import animStyles from '../../styles/Animation.module.css'
import {observer} from '../../observers.js'
import { useEffect, useRef, useState } from 'react'

export const Step = ({step,i}) => {

  const container = useRef(null)

  const [fileData, setFileData] = useState('')   

  const fetchFileData = async (filename) => {
        try {
            const response = await fetch(`https://expansion4-you-server.vercel.app/api/file/get/${filename}`);
            const arrayBuffer = await response.arrayBuffer(); 
            const base64String = btoa(
                new Uint8Array(arrayBuffer).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ''
                )
            ); 
        const str = `data:image/png;base64,${base64String}`
        setFileData(str)
        } catch (error) {
            console.error('Error fetching file data:', error);
        }
  };

  useEffect(() => {
    if (container.current) { 
      observer(`${i%2==0 ? animStyles.hiddenOp : animStyles.hiddenOp}`).observe(container.current)
      fetchFileData(`work${i+5}.png`)
    } 
  },[])  

  return (
    <div className={`${styles.stepCont} ${i%2==0 ? animStyles.hiddenOp : animStyles.hiddenOp}`} style={i%2==0 ? {} : {flexDirection: 'row-reverse'}} ref={container}>
        <div className={styles.img} style={i%2==0 ? {marginRight: '6%'} : {marginLeft: '6%'}}>
          <div className={styles.imgImg} style={{
            backgroundImage: `url(${fileData})`
            }}></div> 
        </div> 
        <div className={styles.info}> 
            <h1 className={styles.h1} style={i%2==0 ? {} : {textAlign: 'initial'}}>{step.title}</h1>
            <div className={styles.text} style={i%2==0 ? {} : {textAlign: 'initial'}}> 
              {step.text.map((text,i) => <span className={i%2==0 ? '' : styles.underline}> {text.trim()} </span>)} 
            </div>
        </div> 
    </div>
  )
}

import React from 'react'
import styles from '../../styles/Main.module.css'
import { SEA } from './SEA'
import { SEO } from './SEO'
import { SMA } from './SMA'

export const Services = () => {
  return (
    <div className={styles.servicesCont}>
      <div className="">
        <div className={`${styles.title1} {styles.titleServices}`}>Wanna know more about what we do?</div>
      </div>
      <div className={styles.services}>
        <div className="sma"> 
        <div className="">
          <img className={styles.imgService} src={require('../../assets/SMA.jpg')} alt="" />
        </div>
          <div className={`${styles.servicesText} ${styles.sma}`} >SOCIAL MEDIA STRATEGY & ADVERTISING</div>
        </div> 
        {/* <div className="">
         <SMA/> 
        </div> */}
        {/* <div className="">
          <SEO/>
        </div> */}
        {/* <div className="">
          <SEA/> 
        </div> */}
        <div className={styles.middleDiv}>
          <div className="">
            <img className={styles.imgService} src={require('../../assets/SEO.jpg')} alt="" />
          </div>
          <div className={`${styles.servicesText} ${styles.seo}`}>SEARCH ENGINE OTIMIZATION</div>
        </div>
        <div className="sea">
          <div className="">
            <img className={styles.imgService} src={require('../../assets/SEA.jpg')} alt="" />
          </div>
          <div className={`${styles.servicesText} ${styles.sea}`}>SEARCH ENGINE ADVERTISING</div>
        </div> 
      </div>
    </div>
  )
}

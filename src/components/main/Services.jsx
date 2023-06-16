import React, {useState,useRef,useEffect} from 'react'
import styles from '../../styles/Main.module.css'
import animStyles from '../../styles/Animation.module.css'
import { SEA } from './SEA'
import { SEO } from './SEO'
import { SMA } from './SMA'
import {observer} from '../../observers.js'

export const Services = () => {

  const fbCont = document.getElementById('fbCont')
  const title = useRef(null)
  const sma = useRef(null)
  const seo = useRef(null)
  const sea = useRef(null)
  const smaWrap = useRef(null)
  const seoWrap = useRef(null)
  const seaWrap = useRef(null)
  const smaText = useRef(null)
  const seoText = useRef(null)
  const seaText= useRef(null)
  const smaHidden = useRef(null)
  const seoHidden = useRef(null)
  const seaHidden = useRef(null) 
  const smaAll = useRef(null)
  const seoAll = useRef(null)
  const seaAll = useRef(null)

  useEffect(() => {
    if (title.current) observer(`${animStyles.hiddenLeft}`).observe(title.current)
    if (sma.current) observer(`${animStyles.hiddenLeft}`).observe(sma.current)
    if (seo.current) observer(`${animStyles.hiddenRight}`).observe(seo.current)
    if (sea.current) observer(`${animStyles.hiddenRight}`).observe(sea.current)
  },[])

  const handleSmaClick = () => {
      if (fbCont) fbCont.style.opacity = '0'
      smaAll.current.style.opacity = '1'
      smaWrap.current.style.maxWidth = '5px'
      smaText.current.style.left = '0'

      seo.current.classList.add(`${animStyles.hiddenRight}`)
      sea.current.classList.add(`${animStyles.hiddenRight}`)

      smaHidden.current.style.overflow = 'initial'
  }

  const handleSmaBak = () => {
    if (fbCont) fbCont.style.opacity = '1'
      smaAll.current.style.opacity = '0'
      smaWrap.current.style.maxWidth = '350px'
      smaText.current.style.left = '27.3vw'

      seo.current.classList.remove(`${animStyles.hiddenRight}`)
      sea.current.classList.remove(`${animStyles.hiddenRight}`)

      smaHidden.current.style.overflow = 'hidden'
  }

  const handleSeoClick = () => {
    if (fbCont) fbCont.style.opacity = '0'
    seo.current.style.position = 'relative'
    seo.current.style.left = '-52vw'
    seoAll.current.style.opacity = '1'
    seoWrap.current.style.maxWidth = '5px'
    seoText.current.style.left = '0'

    sma.current.classList.add(`${animStyles.hiddenRight}`)
    sea.current.classList.add(`${animStyles.hiddenRight}`)

    seoHidden.current.style.overflow = 'initial'
  }

  const handleSeoBack = () => {
    if (fbCont) fbCont.style.opacity = '1'
    seo.current.style.left = '0px'
    seoAll.current.style.opacity = '0'
    seoWrap.current.style.maxWidth = '350px'
    seoText.current.style.left = '24vw'

    sma.current.classList.remove(`${animStyles.hiddenRight}`)
    sea.current.classList.remove(`${animStyles.hiddenRight}`)

    seoHidden.current.style.overflow = 'hidden'
  }

const handleSeaClick = () => {
  if (fbCont) fbCont.style.opacity = '0'
  seaAll.current.style.opacity = '1'
  seaWrap.current.style.maxWidth = '5px'
  seaText.current.style.left = '0'

  seo.current.classList.add(`${animStyles.hiddenRight}`)
  sma.current.classList.add(`${animStyles.hiddenRight}`)

  seaHidden.current.style.overflow = 'initial'
}

const handleSeaBack = () => {
  if (fbCont) fbCont.style.opacity = '1'
  seaAll.current.style.opacity = '0'
  seaWrap.current.style.maxWidth = '350px'
  seaText.current.style.left = '-4vw'

  seo.current.classList.remove(`${animStyles.hiddenRight}`)
  sma.current.classList.remove(`${animStyles.hiddenRight}`)

  seaHidden.current.style.overflow = 'hidden'
}

  return (
    <div className={styles.servicesCont}>
      <div className="">
        <div className={`${styles.title1} {styles.titleServices}`} ref={title} >Wanna know more about what we do?</div>
      </div>
      <div className={styles.services}>
        <div className="sma" ref={sma} style={{transition: 'all 1s'}}> 
        <div className={styles.serviceWrap} ref={smaWrap} onClick={handleSmaClick}>
          <img className={styles.imgService} src={require('../../assets/SMA.jpg')} alt="" />
        </div>
          <div className={`${styles.servicesText} ${styles.sma}`} ref={smaText}>SOCIAL MEDIA STRATEGY & ADVERTISING 
              <span className={styles.notePink} style={{opacity: 0}} ref={smaAll} onClick={handleSmaBak}> <br /> ALL SERVICES</span> 
          </div>
        </div> 
        <div className={styles.serviceHidden} ref={smaHidden}>
         <SMA/> 
        </div>
        <div className={styles.serviceHidden} ref={seoHidden}>
          <SEO/>
        </div>
        <div className={styles.serviceHidden} ref={seaHidden}>
          <SEA/> 
        </div>
        <div className={styles.middleDiv} ref={seo} style={{transition: 'all 1s'}}>
          <div className={styles.serviceWrap} ref={seoWrap} onClick={handleSeoClick}>
            <img className={styles.imgService} src={require('../../assets/SEO.jpg')} alt="" />
          </div>
          <div className={`${styles.servicesText} ${styles.seo}`} ref={seoText}>
            SEARCH ENGINE OTIMIZATION
            <span className={styles.notePink} style={{opacity: 0}} ref={seoAll} onClick={handleSeoBack}> <br /> ALL SERVICES</span>
          </div>
        </div>
        <div className="sea" ref={sea} style={{transition: 'all 1s'}}>
          <div className={styles.serviceWrap} ref={seaWrap} onClick={handleSeaClick}> 
            <img className={styles.imgService} src={require('../../assets/SEA.jpg')} alt="" />
          </div>
          <div className={`${styles.servicesText} ${styles.sea}`} ref={seaText}>
            SEARCH ENGINE ADVERTISING
            <span className={styles.notePink} style={{opacity: 0}} ref={seaAll} onClick={handleSeaBack}> <br /> ALL SERVICES</span>
          </div>
        </div> 
      </div>
    </div>
  )
}

import React, {useState,useRef,useEffect} from 'react'
import styles from '../../styles/Services.module.css'
import animStyles from '../../styles/Animation.module.css'
import { MarketingStrategy } from './MarketingStrategy'
import { ECommerce } from './ECommerce'
import { Branding } from './Branding'
import { SearchEngineAdvertising } from './SearchEngineAdvertising'
import { SocialMediaAdvertising } from './SocialMediaAdvertising'
import { WebDevelopment } from './WebDevelopment'
import { SearchEngineOptimization } from './SearchEngineOptimization'
import { Link } from 'react-router-dom'

export const InsideService = ({closeModal,i}) => {

  const container = useRef(null)
  const cover = useRef(null)

  useEffect(() => {
    if (cover.current) {
        setTimeout(() => {
          cover.current.style.opacity = '0'
          cover.current.style.zIndex = '-1'
            //container.current.style.background = 'linear-gradient(45deg, #ca33cf, #61dafb)'
            // container.current.style.background = '#ca33cf'
        }, 100)
    }
  },[])

  const handleClick = () => {
    cover.current.style.opacity = '1'
    cover.current.style.zIndex = '1'
    //container.current.style.background = '#fefefe'
    setTimeout(() => {
        closeModal()
    },1000)
  }

  return (
    <div className={styles.insideCont} ref={container} id='container'>
      <div className={styles.coverDiv} ref={cover}></div>
        <div className={styles.back} onClick={handleClick}> 
            {'<'}<div className={styles.backDash}>-</div> Back
        </div>
        {i==0 ? <MarketingStrategy/>:
        i==1 ? <ECommerce /> : 
        i==2 ? <Branding /> : 
        i==3 ? <SearchEngineAdvertising /> : 
        i==4 ? <SocialMediaAdvertising /> : 
        i==5 ? <WebDevelopment /> : 
        <SearchEngineOptimization />}
        {/* <div className={styles.back}> 
            <Link to="/">Home</Link> <div className={styles.backDash} 
                     style={{left: '0.5vw',marginLeft: '0.5vw'}}>-</div>{'>'} <span onClick={handleClick}>Srvices</span> <div className={styles.backDash} 
                        style={{left: '0.5vw',marginLeft: '0.5vw'}}>-</div>{'>'} <span onClick={() => window.scrollBy(0, -50)}>{i==0 ? 'Marketing Strategy' :
                        i==1 ? 'E-Commerce' : 
                        i==2 ? 'Branding' : 
                        i==3 ? 'Search Engine Advertising' : 
                        i==4 ? 'Social Media Advertising' : 
                        i==5 ? 'Web Development' : 
                        'Search Engine Optimization'}</span>
        </div> */}
    </div>
  )
}

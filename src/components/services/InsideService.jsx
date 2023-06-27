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

export const InsideService = ({closeModal,i}) => {

  const container = useRef(null)

  useEffect(() => {
    if (container.current) {
        setTimeout(() => {
            container.current.style.background = '#642067'
        }, 100)
    }
  },[])

  const handleClick = () => {
    container.current.style.background = '#fefefe'
    setTimeout(() => {
        closeModal()
    },500)
  }

  return (
    <div className={styles.insideCont} ref={container}>
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
    </div>
  )
}

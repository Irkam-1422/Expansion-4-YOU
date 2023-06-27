import React, {useState} from 'react'
import { Service } from './services/Service'
import styles from '../styles/Services.module.css'
import { MarketingStrategy } from './services/MarketingStrategy'

const services = [
  {img: 'SMA.jpg', title: 'Marketing Strategy'},
  {img: 'SMA.jpg', title: 'E-commerce'},
  {img: 'SMA.jpg', title: 'Branding'},
  {img: 'SMA.jpg', title: 'Search Engine Advertising'},
  {img: 'SMA.jpg', title: 'Social Media Advertising'},
  {img: 'SMA.jpg', title: 'Web Development'},
  {img: 'SMA.jpg', title: 'Search Engine Optimisation'}
]

export const Services = () => {

  return (
    <div style={{marginTop: '6vh'}}>
      <div className={styles.servicesCont}>
        <h1 className={styles.servicesTitle}>Our Services</h1>
      </div>
      {services.map((service,i) => <Service service={service} i={i}/>)}
    </div>
  )
}

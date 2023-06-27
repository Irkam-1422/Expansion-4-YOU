import React from 'react'
import styles from '../../styles/Services.module.css'
import animStyles from '../../styles/Animation.module.css'
import {observer} from '../../observers.js'
import { MarketingStrategy } from './MarketingStrategy'
import { ECommerce } from './ECommerce'
import { Branding } from './Branding'
import { SearchEngineAdvertising } from './SearchEngineAdvertising'
import { SocialMediaAdvertising } from './SocialMediaAdvertising'
import { WebDevelopment } from './WebDevelopment'
import { SearchEngineOptimization } from './SearchEngineOptimization'
import { InsideService } from './InsideService'
 
export const Service = ({service,i}) => {

  const srvc = React.useRef(null)  
  const [open,setOpen] = React.useState(false)

  React.useEffect(() => {
    if (i%2 == 0) {observer(`${animStyles.hiddenRight}`).observe(srvc.current)}
    else {observer(`${animStyles.hiddenLeft}`).observe(srvc.current)}
  }, []) 

  const handleClick = () => {
    setOpen(true)
  }
  return (
    <>
    {open && <InsideService closeModal={() => setOpen(false)} i={i}/>}
    <div className={i%2 == 0 ? styles.serviceCont_2 : styles.serviceCont_1} >
        <div
             style={{transition: 'all 1s'}}
             >
            <div className={`${styles.serviceWrap} ${styles[`bbb${i%2==0 ? '2' : '1'}`]} ${animStyles[i%2==0 ? 'hiddenRight' : 'hiddenLeft']}`}  
                 style={i == 2 ? {margin: '5vh 0'} : {}}
                 ref={srvc}
                 onClick={handleClick}
                >
                <img className={styles.imgService} 
                     src={require(`../../assets/service${i+1}.png`)} 
                     alt="" 
                     />
                <div className={i%2 == 0 ? `${styles.servicesText_2} ${styles[`aaa${i}`]}` : `${styles.servicesText_1} ${styles[`aaa${i}`]}`} id={`srvc${i}`}>
                    {service.title}
                </div>
            </div> 
        </div>
    </div>
    </>
  )
}

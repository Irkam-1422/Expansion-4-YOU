import React from 'react'
import styles from '../../styles/Services.module.css'
import animStyles from '../../styles/Animation.module.css'
import {observer} from '../../observers.js'
import { useNavigate } from 'react-router-dom'
 
export const Service = ({service,i}) => {

  const srvc = React.useRef(null)  
  const navigate = useNavigate()

  const [fileData, setFileData] = React.useState('')   

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

  React.useEffect(() => {
    if (i%2 == 0) {observer(`${animStyles.hiddenRight}`).observe(srvc.current)}
    else {observer(`${animStyles.hiddenLeft}`).observe(srvc.current)}

    fetchFileData(`service${i+1}.png`)
  }, []) 

  const handleClick = (title) => {
    navigate(`/${title.split(' ').join('').split('-').join('').toLowerCase()}`)
  } 
  return (
    <>
    <div className={i%2 == 0 ? styles.serviceCont_2 : styles.serviceCont_1} >
        <div
             style={{transition: 'all 1s'}}
             >
            <div className={`${styles.serviceWrap} ${styles[`bbb${i%2==0 ? '2' : '1'}`]} ${animStyles[i%2==0 ? 'hiddenRight' : 'hiddenLeft']}`}  
                 ref={srvc}
                 onClick={() => handleClick(service.title)}
                >
                <img className={styles.imgService} 
                     src={fileData} 
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

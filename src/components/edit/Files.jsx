import React, {useState} from 'react'
import { useEffect } from 'react'
import styles from '../../styles/Edit.module.css'
import { FileReplace } from '../FileReplace'

export const Files = ({a}) => {

    const [fileData, setFileData] = useState('')   
    const [video,setVideo] = useState(false)

    const fetchFileData = async (filename) => {
        console.log('fetchFileData', a);
        if (a[a.length-1] == '4') setVideo(true)
        try {
            const response = await fetch(`/api/file/get/${filename}`);
            const arrayBuffer = await response.arrayBuffer(); 
            const base64String = btoa(
                new Uint8Array(arrayBuffer).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ''
                )
            ); 
        const str = video ? 
        `data:video/mp4;base64,${base64String}` : 
        `data:image/png;base64,${base64String}`
        setFileData(str)
        } catch (error) {
            console.error('Error fetching file data:', error);
        }
    };

    useEffect(() => {
        console.log('useEffect - ',a)
        fetchFileData(a)
    },[a])

  return (
    <>
    {a[a.length-1] == '4' ? 
    <div style={{position: 'relative', background: '#000'}}>
        <video 
            src={fileData}
            type="video/mp4"
            muted  
            autoPlay="autoplay"   
            loop="loop"
            style={{width: '100%'}} 
            alt={a}
            ></video>
        <div className={styles.assetCover}
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0'}
            >
        <FileReplace name={a} returnNewFile={(name) => console.log(name)}/>
        </div>
    </div>
   :
    <div style={{position: 'relative'}}>
        <img style={{width: '100%'}} src={fileData} alt={a} />
        <div className={styles.assetCover}
             onMouseEnter={(e) => e.target.style.opacity = '1'}
             onMouseLeave={(e) => e.target.style.opacity = '0'}
             >
        <FileReplace name={a} returnNewFile={() => fetchFileData(a)}/>
        </div>
    </div>}
    </>
  )
}

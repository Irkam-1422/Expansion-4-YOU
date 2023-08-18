import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import styles from '../styles/Articles.module.css'


export const ChangeFile = ({name, returnNewFile, click}) => {
  
  const input = useRef(null)

  useEffect(() => {
    if (click && input.current) input.current.click()
  }, [click])

  const handleFileChange = async (e) => {
    try {
        const formData = new FormData() 
        formData.append('file', e.target.files[0])
        formData.append('name', name)

        console.log(formData.get('file'), formData.get('name'))

        const res = await fetch('/api/content/change-file', {
            method: 'POST',
            body: formData,
        })

        if (!res.ok) {
            throw new Error('Network response was not ok')
        }

        const data = await res.json()
        console.log(data)
        returnNewFile(data.file)

    } catch (error) {
        console.error('Error:', error)
    }
  }

  return (
    <div className={styles.inputCont}> 
        <input type="file" 
               name="file" 
               ref={input}
               onChange={handleFileChange} 
               className={styles.input}
               onClick={() => console.log('fileInput')}
               /> 
        {/* {uploaded.length && <img src={require(`../assets/${uploaded}`)} style={{width: '60%', marginTop: '2%' }} /> } */}
    </div> 
  )
}
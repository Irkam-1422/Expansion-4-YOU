import React from 'react'
import styles from '../styles/Articles.module.css'

export const FileReplace = ({name,returnNewFile}) => {

//   const fetchFileData = async (filename) => {
//     if (filename.includes('video') || filename.includes('water')) setVideo(true)
//     console.log(filename.includes('video'), filename.includes('water'))
//     try {
//         const response = await fetch(`/api/file/get/${filename}`);
//         const arrayBuffer = await response.arrayBuffer(); 
//         const base64String = btoa(
//             new Uint8Array(arrayBuffer).reduce(
//                 (data, byte) => data + String.fromCharCode(byte),
//                 ''
//             )
//         ); 
//     const str = video ? 
//     `data:video/mp4;base64,${base64String}` : 
//     `data:image/png;base64,${base64String}`
//     setFileData(str)
//     console.log(str)
//     } catch (error) {
//         console.error('Error fetching file data:', error);
//     }
// };

  const handleFileChange = async (e) => {
    try {
      const newName = name.includes('?') ? name.split('?').join('') : name 
      const formData = new FormData() 
      formData.append('file', e.target.files[0])
      formData.append('name', newName)

      const response = await fetch('https://expansion4-you-server.vercel.app/api/file/replace-file', {
          method: 'POST',
          body: formData,
      })

      const responseData = await response.json(); 
      console.log(responseData)

      returnNewFile()

      if (!response.ok) {
          throw new Error('Network response was not ok')
      }

    } catch (error) {
      console.error('Error uploading file:', error) 
    }
  } 

  return (
    <div className={styles.inputCont}>
      <input type="file" onChange={handleFileChange} className={styles.input}/>
    </div>
  ) 
} 

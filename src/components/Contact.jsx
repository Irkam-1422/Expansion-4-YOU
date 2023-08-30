import React, {useRef,useEffect} from 'react'
import styles from '../styles/Contact.module.css'
import emailjs from 'emailjs-com'

export const Contact = ({page}) => {

  const cover = useRef(null)
  const submit = useRef(null)
  const imgDiv = useRef(null)

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
        if (imgDiv.current) imgDiv.current.style.backgroundImage = `url(${str})`
        } catch (error) {
            console.error('Error fetching file data:', error);
        }
  };

  useEffect(() => {

    let timerId = setTimeout(() => {
      if (cover.current) cover.current.style.transform = 'translateX(51.3%)'
      timerId = setTimeout(() => {
        if (cover.current) cover.current.style.transform = 'translateX(100%)'
      }, 1200)
    }, 200)

    fetchFileData('contact5.png')
  },[])

  const sendEmail = (e) => {
    e.preventDefault() 
  }

  const handleClick = (e) => {
    e.target.style.transform = 'scale(.98)'
    setTimeout(() => {
      e.target.style.transform = 'scale(1)'
    }, 500)
  }

  return (
    <>
    <div className={styles.pageCont}>
      <div className={styles.imgCont} ref={imgDiv}>
        <div className={styles.imgText}>
          {page.components[0].content[0][0]}
          <br />  
          <br />
          <div className={styles.infoText}>
            <div className={styles.mailImg}></div>
            {page.components[0].content[1][0]} <br />
            <div className={`${styles.mailImg} ${styles._img2}`}></div>
            {page.components[0].content[1][1]} <br />
            <div className={`${styles.mailImg} ${styles._img3}`}></div>
            {page.components[0].content[1][2]}
          </div>
        </div>
      </div>
      <div className={styles.formCont}>
        <div className={styles.cover} ref={cover}></div>
        <h1 className={styles.h1}>Let's get in touch!</h1>
        <hr className={styles.hr}/>
        <form className={styles.form} 
              onSubmit={sendEmail}
              >
          <input className={styles.input} 
                 type="text" 
                 placeholder='name'
                 />
          <input className={styles.input} 
                 type="text" 
                 placeholder='email'
                 />
          <input className={styles.input} 
                 type="text" 
                 placeholder='subject'
                 />
          <hr className={`${styles.hr} ${styles.hr2}`}/>
          <textarea className={styles.input} 
                    name="message" 
                    cols="30" 
                    rows="4" 
                    placeholder='Your message'
                    ></textarea>
          <div className={styles.submit}>
          <input type="submit" 
                 value="Send Email" 
                 className={`${styles.input} ${styles.submitInp}`}
                 ref={submit}
                 onClick={handleClick} />
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

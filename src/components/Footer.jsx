import React from 'react'
import styles from '../styles/Footer.module.css'
import emailjs from 'emailjs-com'

export const Footer = () => {

  const sendEmail = (e) => {
    e.preventDefault() 

    emailjs.sendForm('test', 'template_cjx31w9', 
    e.target, 'cNS0RvHP3DClgf7RI')
    .then((result) => {
          console.log(result.text);
          alert('Your message was successfully send!')
      }, 
       (error) => {
          console.log(error.text);
       });
  }

  return (
    <div className={styles.footerCont} id='footer'>
        {/* z-index: -1;
    margin-top: -3vh; */}
        <div className={styles.textAndLogo}>
            <div className={styles.logo}></div>
            <div className={styles.text}>
            We talented digitalmarketeers who are passionate about delivering exceptional highly customised results to our clients across the globe through innovative approaches. 
            <br /><br />
            We firmly believe that there is a better way to do this things – DIGITAL!
            </div>
        </div>
        <div className={styles.cont}>
            <h1 className={styles.h1}>Quick Links</h1>
            <div className="">- Home</div>
            <div className="">- Services</div>
            <div className="">- About</div>
            <div className="">- Work</div>
            <div className="">- Contact</div>
        </div>
        <div className={styles.cont}>
            <h1 className={styles.h1}>Connect</h1>
            <div className="">+31638471411</div>
            <div className="">info@expansion4you.nl</div>
            <div className={styles.imgs}>
                <div className={styles.linkedIn}></div>
                <div className={styles.twitter}></div>
                <div className={styles.facebook}></div>
            </div>
        </div>
        <form onSubmit={sendEmail} className={styles.cont}>
            <h1 className={styles.h1}>Drop Us an Email!</h1>
            <input className={styles.input} type="text" name='from_name'  placeholder='Name'/>
            <input className={styles.input}  type="text" name='from_email'  placeholder='Email'/>
            <hr />
            <textarea className={styles.input}  placeholder="Your message" name="message" id="" cols="30" rows="2"></textarea>
            <input className={styles.submit}  type="submit" value="Send" />
        </form>
    </div>
  )
}

import React from 'react'
import styles from '../styles/Footer.module.css'
import emailjs from 'emailjs-com'
import { Link } from 'react-router-dom'

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

  const handleMouseEnter = (e) => {
    const text = e.target.innerHTML.slice(2)
    e.target.innerHTML = `> ${text}`
  }
  const handleMouseLeave = (e) => {
    const text = e.target.innerHTML.slice(4)
    e.target.innerHTML = `- ${text}`
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
            <Link to='/'>
                <div className={styles.navbtn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    - Home
                </div>
            </Link>
            <Link to='/services'>
                <div className={styles.navbtn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    - Services
                </div>
            </Link>
            <Link to='/about'>
                <div className={styles.navbtn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    - About
                </div>
            </Link>
            <Link to='/work'>
                <div className={styles.navbtn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    - Work
                </div>
            </Link>
            <Link to='/contact'>
                <div className={styles.navbtn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    - Contact
                </div>
            </Link>
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

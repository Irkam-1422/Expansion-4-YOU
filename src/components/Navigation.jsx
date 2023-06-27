import React, { useState, useRef, useEffect }  from 'react'
import styles from '../styles/Navigation.module.css'
import anime from "animejs/lib/anime.es.js"
import { Link } from 'react-router-dom'

const links = ['/','/services','/about','/work','/contact']
const btns = ['Who Are We?','What Do We Offer?','Wana Know More About Us?','How Do We Work?','Want To Contact Us?']
 
const home = [
  {text: 'Why shouldn`t you work with us', id: 'overview'},
  {text: 'About us', id: 'about'},
  {text: 'Our services', id: 'services'},
  {text: 'Feedback from our clients', id: 'feedback'},
  ]
const services = []
const about = []
const work = []
const contact = []

export const Navigation = () => {

  const animation = useRef(null);
  const hoverAnime = useRef(null) 
  const [open,setOpen] = useState([])
  const [page,setPage] = useState(0)

  useEffect(() => {
  }, [])

  const handleHover = (e) => {
    console.log(open)
    if (e.target.id == 0) {
      setOpen(home)
    } else if (e.target.id == 1) {
      setOpen(services)
    } else if (e.target.id == 2) {
      setOpen(about)
    } else if (e.target.id == 3) {
      setOpen(work)
    } else if (e.target.id == 4) {
      setOpen(contact)
    } 
  }
  
  const handleClick = (e) => {
      console.log(e.target.id) 
  }

  return (
    <div 
    className={styles.navCont}
    onMouseLeave={() => setOpen([])}
    >
      <div className={`${styles.menu} buttons`}>
          {btns.map((btn,i) => <Link to={`${links[i]}`}><div key={i} 
                                    id={i} 
                                    className={page == i ? `${styles.navBtn} _${i} ${styles.hover}` : `${styles.navBtn} _${i}`}
                                    onMouseEnter={handleHover} 
                                    onClick={() => setPage(i)}
                                    >{btn}</div></Link>)} 
      </div>
      <div className={styles.btnCont}>
      {open.map((btn,i) => <div className={`${styles.menu} 
                                ${styles.on}`} 
                                //top: `${(i+1)*3.5}vw`, 
                                style={{position:'relative',borderBottom: '1px solid'}}
                                >
                                  <div className={`${styles.navBtn} _${i} ${styles.onBtn}`} style={{color: '#fefefe'}}>
                                    <a href={`#${btn.id}`} style={{color: 'white'}}>
                                      {btn.text}
                                    </a>
                                  </div>
                                </div>)}
      </div>
    </div>
  )
}

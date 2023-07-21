import React,{useState,useRef,useEffect} from 'react'
import styles from '../styles/About.module.css'
import animStyles from '../styles/Animation.module.css'
import {observer} from '../observers.js'
import { Step } from './about/Step' 
import { Footer } from './Footer' 
import { ContactImgBtn } from './contact/ContactImgBtn' 

const titles = ['WHAT','ARE','WE','ABOUT?']
const abouts = [
  {
    title: 'PERFORMANCE DRIVING',
    text: '          We help companies to achieve tangible results. Our purpose is to give you that marketing strategy that helps you to show your brand online, breaks through barriers to success and drive results.'
  },{
    title: 'TAILOR MADE SOLUTIONS',
    text: '          There is no “one size fits all” approach and we’ll work to tailor the campaigns that best suit your company based on your goals, in-house capability and budget.'
  },{
    title: 'GLOBAL PERSPECTIVE',
    text: '          Whether you’re doing business in Europe, UK, US, we will help you successfully navigate the global online marketing presence.'
  },{
    title: 'CONSTANT LEARNING',
    text: '          The innovation in technology and its adaptation by businesses have changed the way we communicate and receive information. We are working and learning around the clock to create new strategies to maximise your interaction with customers.'
  }
]

export const About = () => {

  const [c1,setC1] = useState(0)
  const [c2,setC2] = useState(0)
  const [c3,setC3] = useState(0)
  const [rotated,setRotated] = useState(true)

  const cont1 = useRef(null)
  const cont2 = useRef(null)
  const title0 = useRef(null)
  const title1 = useRef(null)
  const title2 = useRef(null)
  const title3 = useRef(null)
  const container = useRef(null)
  const container2 = useRef(null)
  const founderImg = useRef(null)
  const founderText = useRef(null)
  const h1 = useRef(null)

  useEffect(() => {
    const footer = document.getElementById('footer')
    footer.style.display = 'flex'
    footer.style.zIndex = '0'    

    if (cont1 && cont2) {
      let timerId = setTimeout(() => {
        cont1.current.style.transform = 'translateX(-100%)'
        cont2.current.style.transform = 'translateX(100%)'

        const titles = [title0.current,title1.current,title2.current,title3.current]
        titles.forEach(title => {
          if (titles.indexOf(title) == 0) {window.addEventListener("scroll", handleScroll);}
          if (title) {
            setTimeout(() => {
              title.style.backgroundPositionX = 'right'
              title.style.webkitBackgroundClip = 'text'
            }, 500*titles.indexOf(title)) 
          }
        })

      },2300)
    }

    if (founderText.current) observer(`${animStyles.hiddenRight}`).observe(founderText.current) 
    if (founderImg.current) observer(`${animStyles.hiddenLeft}`).observe(founderImg.current) 

  },[])

  useEffect(() => {
    c1 !== 10 ? setTimeout(setC1, 75, c1 + 1) : setTimeout(setC1, 2000, 0)
  }, [ c1 ]);

  useEffect(() => {
    c2 !== 50 ? setTimeout(setC2, 15, c2 + 1) : setTimeout(setC2, 2000, 0)
  }, [ c2 ]);

  useEffect(() => {
    c3 !== 10 ? setTimeout(setC3, 75, c3 + 1) : setTimeout(setC3, 2000, 0)
  }, [ c3 ]); 

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setRotated(false)
    } else {
      setRotated(true)
    }
    if (h1.current) {
      if (window.scrollY > getCoords(container.current).top - 200) {
        h1.current.style.backgroundPositionX = 'right'
      } else {
        h1.current.style.backgroundPositionX = 'left'
      }
    }
    if (container.current && container2.current) {
      const spans = Array.from(document.getElementsByClassName(`${styles.underline}`))
      if (window.scrollY > getCoords(container.current).top - 10) {
        container.current.style.background = '#fefefe'
        container2.current.style.background = '#fefefe'
        spans.forEach(span => {
          setTimeout(() => {
            span.style.backgroundPositionX = 'right'
          }, 500*spans.indexOf(span))
        });
      } else {
        container.current.style.background = '#000'
        container2.current.style.background = '#000'
        spans.forEach(span => span.style.backgroundPositionX = 'left')
      }
    }
  }

  const getCoords = (elem) => {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
  }

  return (
    <div> 
      <div className={styles.aboutCont}>
          <div className={styles.aboutFlex1} ref={cont1}>PROVIDING CLIENTS WITH SUPERIOR <span className={styles.span}>DIGITAL</span> MARKETING <hr className={styles.hr}/> </div>
          <div className={styles.aboutFlex2} ref={cont2}>
            <h1 className={styles.thinner}>Let's talk numbers!</h1>
            <div className={styles.numsCont}>
              <div className="">
                <div className={styles.num} style={{width: '14.7vw'}}>{c1}+</div>
                <div className={styles.lable}>Years in Business</div>
              </div>
              <div className="">
                <div className={styles.num} style={{width: '17.5vw'}}>{c2}+</div>
                <div className={styles.lable}>Happy Customers</div>
              </div>
              <div className={styles.lastNum}>
                <div className={styles.num} style={{width: '22.4vw' }}>M{c3}+</div>
                <div className={styles.lable}>Generated</div>
              </div>
            </div>
          </div>
      </div>
      <div className="">
        <div style={{background: 'black', zIndex: '2', position: 'relative'}}>
          {abouts.map((about,i) => {
            return (
              <div className={`${styles.cont} ${rotated ? styles[`rotateCont${i}`] : styles.transformNone}`} style={{position: 'relative', zIndex: `${i}`,flexDirection: i%2==0 ? 'row' : 'row-reverse', marginTop: i==0 ? '12%' : ''}}>
                <h1 className={styles.h1} style={i%2==0?{}:{transform: 'rotate(90deg)'}} ref={i==0?title0:i==1?title1:i==2?title2:title3}>{titles[i]}</h1> 
                {/* 
                transform: rotate(90deg) translate(30%);
                transform: rotate(-90deg) translate(-15%);
                transform: rotate(90deg) translate(-3%);
                transform: rotate(-90deg) translate(18%)
                */}
                <Step about={about}/>
              </div>
            )
          })}
        </div>
        <div className="container" ref={container} style={{transition: 'all 1s', height: 'auto', zIndex: '2', position: 'relative'}}>
          <h1 className={styles.h1_2} ref={h1} style={{marginTop: '0'}} >We are not just another digital marketing company!</h1>
          <div className="">
            <div className={styles.text1}>
            <span className={styles.underline}>Expansion 4YOU</span> is a Digital Marketing Agency based in Utrecht, The Netherlands,
             dedicated to offering a full suite of tailor-made internet-marketing solutions, 
             to help businesses:
            </div>
            <div className={styles.text2}>
              <div className="div">
              - create <span className={styles.underline}>brand awareness</span>;
              </div>
              <div className="div">
              - increase <span className={styles.underline}>customer engagement</span> <br />
              and <span className={styles.underline}>revenues</span> in the Online Space;
              </div>
              <div className="div">
              - generate <span className={styles.underline}>leads & sales</span> through digital platforms across the globe;
              </div>
            </div>
          </div>
        </div>
        <div className={styles.founderCont} ref={container2} style={{zIndex: '2', position: 'relative'}}>
          <img src={require(`../assets/founder.jpg`)} className={`${styles.founder} ${animStyles.hiddenLeft}`} ref={founderImg}/>
          <div className={`${styles.foundertextBorder} ${animStyles.hiddenRight}`} ref={founderText}> 
            <div className={styles.founderText}>
              " We are a fast-growing Online Marketing Company with an excellent portfolio of various clients 
              across the globe that are both small, medium & large enterprises.
              Our mission is to deliver exceptional highly customized results through innovative approaches 
              and unique solutions. " 
            </div>
          </div>
          <div className={styles.btnsCont}>
            <div className={styles.btns}>
              <button className={styles.btn}>Why do YOU need <br /> digital marketing</button>
              <button className={styles.btn}>Contact Us</button>
              <button className={styles.btn}>Articles</button>
              <button className={styles.btn}>Cases</button>
            </div>
          </div>
        </div>
        <div className="container" style={{background: 'linear-gradient(45deg, #de30e4, #3cfaff'}}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

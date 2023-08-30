import React, {useState,useRef,useEffect} from 'react'
import styles from '../../styles/Services.module.css'
import animStyles from '../../styles/Animation.module.css'
import { Contact } from './Contact'
import { Step2 } from './Step2'

const stepStyles = [
  {
      num: {},title:{},
      img:{width: '43%',top: '45%'},
      span:{width: 'max-content',marginLeft: '34%'},
      questions:[{paddingLeft: '39%'}]},
  {
      num: {},title:{},
      img:{width: '40%',top: '56%',left: '1%'},
      span:{width: 'max-content',marginLeft: '34%'},
      questions:[{paddingLeft: '30%'},{paddingLeft: '41%'}]},
  {
      num: {},title:{},
      img:{width: '40%',top: '54%',left: '1%'},
      span:{width: 'max-content',marginLeft: '34%'},
      questions:[{},{paddingLeft: '37%'}]},
  {
      num: {},title:{},
      img:{width: '39%',top: '54%',left: '-2.3%'},
      span:{width: 'max-content',marginLeft: '34%'},
      questions:[{},{},{},{paddingLeft: '45%'}]},
  {
      num: {},title:{},
      img:{width: '36%',left: '-2%',top: '52%',transform: 'rotateY(190deg)'},
      span:{width: 'max-content',marginLeft: '34%'},
      questions:[{paddingLeft: '13%'},{paddingLeft: '28%'}]}
]

export const Branding = ({page}) => {

  const title1 = useRef(null)
  const title2 = useRef(null)
  const [steps,setSteps] = useState([])

  useEffect(() => {

    setSteps(page.components.slice(1,page.components.length-1).map((c,i) => {
        return {
            num: `0${i+1}`,
            title: c.content[0],
            questions: c.content[1],
            style: stepStyles[i]
        }
    }))

    if (title1.current && title2.current) {
            setTimeout(() => {
                title1.current.classList.remove(`${animStyles.hiddenRight}`)
                title2.current.classList.remove(`${animStyles.hiddenRight}`)
            }, 300)
    }
  },[])

  return (
    <>
        <div className={styles.msCont}>
          <h1 className={styles.noteTitle} ref={title1} style={{marginLeft: '-57%'}}>
          {page.components[0].content[0][0]}
          </h1>
          <div className={styles.msDefinition} style={{paddingRight: '30vw',paddingLeft: '4vw', textAlign: 'initial'}}>
          “{page.components[0].content[0][1]}”
          </div>
          <h1 className={styles.noteTitle} ref={title1} style={{marginLeft: '63%',color: '#61dafb'}}>
          {page.components[0].content[0][2]}
          </h1>
          <div className={styles.msDefinition} style={{paddingLeft: '30vw',paddingRight: '4vw', textAlign: 'end'}}>
          “{page.components[0].content[0][3]}”
          </div>
        </div>

        <div className={styles.stepsCont}>
            {steps && steps.map(step => <Step2 step={step}/> )} 
        </div>

        <div className={styles.stepsCont}>
            <div className={styles.msCont}>
                <div className={styles.msDefinition}>
                    <div className={styles.textCont}>
                    {page.components[page.components.length-1].content[0][0]} 
                    </div>
                    <div style={{overflow: 'hidden'}}>
                        <div className={styles.title2}>
                        {page.components[page.components.length-1].content[0][1]} 
                        </div>
                        <div className={styles.contactTextCont}>
                          <div>
                          {page.components[page.components.length-1].content[0][2]} 
                          </div>
                          <hr style={{width: '100%'}}/>
                          <Contact/>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

import React, {useRef,useEffect} from 'react'
import styles from '../../styles/Services.module.css'
import animStyles from '../../styles/Animation.module.css'
import { Contact } from './Contact'
import { Step2 } from './Step2'

const questions = [
'What do you want to achive?',
'Is it about increasing the traffic?',
'Or maybe announcing something new to existing customers?',
'How much are you willing to spend?',
'And how many people do you want to engage?',
]

const questions2 = [
"What do you sell and how are you called?",
"Which words pop up to your mind thinking about your product?",
"Is it a simple word or can there be synonyms?",
"What is the language your adience use?",
"And have you ever heard about long-tail keywords? ",
]

const questions3 = [
'Who is your target audience?',
'Where do they live?',
'What are their interests and behaviour?',
'Why would they click on your page?',
'And what should be your main message to them?',
]

const questions4 = [
'What is the product you are promoting?',
'Does it have any specific highlights to emphasize?',
'How are you gonna demonstrate its benefits?',
'What are you gonna say?',
'And what are you gonna show?',
]

const steps = [
  {num: '01', title: ['Firstly, we need ','to define your ','Business Goal!'], questions: questions, 
  style: {span: {fontSize: '2.1rem'}, img: {top: '58.5%', width: '35%'}, questions: [
    {paddingLeft: '21%'},
    {paddingLeft: '21%'},
    {paddingLeft: '21%'},
    {paddingLeft: '21%'},
    {paddingLeft: '21%'}
  ]}},

  {num: '02', title: ['Now let`s','think about','keywords!'], questions: questions2, 
  style: {img: {top: '39%', width: '40%',left: '0'}, questions: [
    {paddingLeft: '21%'},
    {paddingLeft: '21%'},
    {paddingLeft: '32%'},
    {paddingLeft: '21%'},
    {paddingLeft: '21%'}
  ]}},

  {num: '03', title: ['Then it`s time','to make it','More Personal!'], questions: questions3, 
  style: {span: {fontSize: '2.1rem',transform: 'scaleX(1.5)'}, img: {top: '55.5%', width: '38%',left: '1%'}, questions: [
    {paddingLeft: '21%'},
    {paddingLeft: '21%'},
    {paddingLeft: '21%'},
    {paddingLeft: '21%'},
    {paddingLeft: '32%'}
  ]}},

  {num: '04', title: ['Finally,','lets talk about','Content!'], questions: questions4, 
  style: {img: {top: '40%', width: '37%',left: '-3%'}, questions: [
    {paddingLeft: '21%'},
    {paddingLeft: '21%'},
    {paddingLeft: '32%'},
    {paddingLeft: '21%'},
    {paddingLeft: '21%'}
  ]}}
]

export const SearchEngineAdvertising = () => {

  const title1 = useRef(null)
  const title2 = useRef(null)

  useEffect(() => {
    if (title1.current ) {
      setTimeout(() => {
          title1.current.classList.remove(`${animStyles.hiddenRight}`)
          title2.current.classList.remove(`${animStyles.hiddenRight}`)
      }, 300)
    }
  },[])

  return (
      <>
        <div className={styles.msCont}>
          <h1 className={styles.msTitle}>What is Search Engine Advertising?</h1>
          <div className={styles.msDefinition}>
          "Search engine ads {`(`}also known as paid search{`)`} are a form of online advertising 
          where businesses pay to have their ads displayed on major search engines. 
          SEA is at the heart of of what we do as Online Marketing Agency.
          Whatever you are advertising on Google or Bing 
          our PPC campaigns deliver that positive results you are looking for.
          We would help your company to place products or services exactly 
          in front of people who are actively searching for them.
          It outs your website in front of the right 
          people with the right message at the right time.”
          
          </div>
          <div className={styles.msNotesTitle}>
              <div className={`${styles.noteTitle} ${animStyles.hiddenRight}`} ref={title1} style={{transition: 'all 1s'}}>
              Now let’s take a closer look 
              </div>
              <div className={`${styles.noteTitle} ${animStyles.hiddenRight}`} ref={title2} style={{transition: 'all 1s'}}>
              at what we do here!
              </div>
          </div>
        </div>

        <div className={styles.stepsCont}>
            {steps.map(step => <Step2 step={step}/> )} 
        </div>

        <div className={styles.stepsCont}>
            <div className={styles.msCont}>
                <div className={styles.msDefinition}>
                    <div className={styles.textCont}>
                        All of these questions can be answered with two words: 
                    </div>
                    <div className="">
                      <div className={styles.title2}>
                            – Search Engine Advertising.
                      </div>
                      <div className={styles.contactTextCont}>
                        <div>
                            As this is your way to become closer with your customers,
                            explore what they really want and develop the solution they actually need, 
                            reach your business goals and attract new people who 
                            (with quite high probability) might eventually become 
                            your loyal customers.
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

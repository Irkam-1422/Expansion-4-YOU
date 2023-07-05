import React, {useState,useRef,useEffect} from 'react'
import styles from '../../styles/Services.module.css'
import animStyles from '../../styles/Animation.module.css'
import { Contact } from './Contact'
import { Step2 } from './Step2'

const questions = [
'Your website is basically the digital face of your company. Therefore, your aim is to make a solid fist impression for the ones who see it and provoke their will to work with you. The visual part is not only about photos and videos that you use, it’s also very much about correspondence to your brand style and brand vibe.'
]

const questions2 = [
'Have you ever wondered how to make the visitors of your website actually read your content? Here comes the content-writing! and the main goal here is to make it engaging and relatable to your brand voice. Therefore, the proper content on your website will not only be a huge bonus of your digital representation, but also a boost of your customer’s engagement.',
]

const questions3 = [
'Good user experience is becoming more and more important for website rankings.',
'As if you are able to deliver quality user experiences across platforms and devices, this will not only increase appearance of your website in search engine, but also engage your customers to use it more.',
'Mainly, this is something that happens behind the senses but vastly increases the comfort of using your webpage.'
]

const steps = [
    {num: '01', title: ['Firstly,','let`t talk about','Appearance.'], questions: questions, 
    style: {
      num: {}, 
      title: {marginLeft: '16%'}, 
      span: {}, 
      img: {width: '35%',top: '49.5%',left: '1%'}, 
      questions: [{paddingLeft: '34%'}]}
    },
    {num: '02', title: ['Now let1s move to','  ','Content.'], questions: questions2, 
    style: {
      num: {}, 
      title: {marginLeft: '16%'}, 
      span: {}, 
      img: {top: '41.5%',left: '-3%',width: '35%'}, 
      questions: [{paddingLeft: '30%'}]}
    },

    {num: '03', title: ['And again ', 'Improve ','User Experience.'], questions: questions3, 
    style: {
      num: {}, 
      title: {marginLeft: '10%'}, 
      span: {}, 
      img: {top: '38%',width: '34%',left: '1%'}, 
      questions: [{paddingLeft: '30%'},{paddingLeft: '30%'},{}]
    }
    },
]

export const WebDevelopment = () => {

  const title1 = useRef(null)
  const title2 = useRef(null)

  useEffect(() => {
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
        <h1 className={styles.msTitle}>Why is your website so important?</h1>
        <div className={styles.msDefinition}>
        “A marketing strategy refers to a business’s overall game plan 
        for reaching prospective consumers and turning them into customers 
        of their products or services. A marketing strategy contains 
        the company’s value proposition, key brand messaging, 
        data on target customer demographics, and other high-level elements.”
        </div>
        <div className={styles.msNotesTitle}>
            <div className={`${styles.noteTitle} ${animStyles.hiddenRight}`} ref={title1} style={{transition: 'all 1s'}}>
            Sounds complicated, right? 
            </div>
            <div className={`${styles.noteTitle} ${animStyles.hiddenRight}`} ref={title2} style={{transition: 'all 1s'}}>
            Now let’s break it to smaller parts!
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
                    <div styles={{overflow: 'hidden'}}>
                        <div className={styles.title2}>
                            – Web Development.
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
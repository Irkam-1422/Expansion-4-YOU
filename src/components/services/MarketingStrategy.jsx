import React, {useState,useRef,useEffect} from 'react'
import styles from '../../styles/Services.module.css'
import animStyles from '../../styles/Animation.module.css'
import { Contact } from './Contact'
import { Step } from './Step'
import { Step2 } from './Step2'

const questions = [
    'What is your mission?',
    'What do you want to bring to this world?',
    'How do you want to change it?',
    'Why is your product unique?',
    'What makes you different?'
    //'What is that special thing about you you can provide to you customers that others can’t?'
]

const questions2 = [
    'Who are they?',
    'What do they do?',
    'And what do they value?',
    'Are they strict and serious people?',
    'Or are they energetic and open minded?',
    'Or maybe a mixture?'
]

const questions3 = [
    'How to address your audience?'
    ,'Wether it’s better to use Linkedin and Facebook,'
    ,'Or maybe they spend more time on Instagram?',
    'And what about Google?',
]

const questions4 = [
    'What to post on social media?',
	//'What do you talk about?',
    'How to present your product?',
	'What to talk about?',
	'How to be creative and engage your audience?',
	'Which type of content to focus on?',
]

const steps = [
    {num: '01', title: ['First of all,','it’s about','YOU.'], questions: questions},
    {num: '02', title: ['Then, it’s','about your','customers.'], questions: questions2},
    {num: '03', title: ['Now it’s time',' to think about','channels.'], questions: questions3},
    {num: '04', title: ['And finally','it’s about','how and what.'], questions: questions4}
]

export const MarketingStrategy = () => {

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
        <h1 className={styles.msTitle}>What is Marketing Strategy?</h1>
        <div className={styles.msDefinition}>
        “A marketing strategy refers to a business’s overall game plan 
        for reaching prospective consumers and turning them into customers 
        of their products or services. A marketing strategy contains 
        the company’s value proposition, key brand messaging, 
        data on target customer demographics, and other high-level elements.”
        <br />  
        <div className={styles.msDefinitionAuthor}>
        – ADAM BARONE
        </div>
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
                        <div className={styles.title2}>
                            – Marketing Strategy.
                        </div>
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
    </>
  )
}

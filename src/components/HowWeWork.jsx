import React, {useEffect} from 'react'
import { Step } from './work/Step'
import styles from '../styles/Work.module.css'

const steps = [
  {
    title: 'BUT WHAT’S NEXT?',
    text: [
      `This is the well-known problem that entrepreneurs face. 
      You would like to take that next step and introduce your product to as many people as possible, 
      but how do you find all the `,
      `time`,
      ` and `,
      `knowledge`,
      ` to do it well? Then you call us!`]
  },
  {
    title: 'SO, WHAT WILL WE DO?',
    text: [`First, we want to know you better! What is your service and product? 
    Why do you sell it? Who are you selling it to? What are you unique in? 
    By doing this we will drive out the answer to a very important question: `,
    `«What is that special about your offer that differs you from any other company on the market?`,
    ` And `,
    `why do people need to choose you?»`]
  },
  {
    title: 'AND THEN?',
    text: [`Then, we will find out`,
    `who your target audience are`,
    `. 
    How to advertise your product to different groups of people? 
    How to find`,
    `the ones who are really interested in it?`,
    ` Which problems can your product solve for your customers? 
    Thus, we can create`,
    `a story that will land with the ideal target group`,
    `. 
    The next steps are about `,
    `analyzing your online environment`,
    `.
    We look both internally and externally at the factors that contribute to the `,
    `growth of your company`,
    `. 
    How are you currently found by the people who are already looking for your product? 
    How do you serve the people online who are already customers and where can we find more of these people? 
    Is it clear what role online plays in the purchase process?`]
  },
  {
    title: 'AND WHAT’S NEXT?',
    text: [`We will answer all these questions, 
    and from there we will make a `,
    `plan aimed at continuously growing`,
    ` your company. 
    From our experience, it will take you `,
    `less than two years`,
    ` to observe the `,
    `real changes`,
    ` in your business growth and reach your desired goals!`]
  },
  {
    title: 'WHY US?',
    text: [`We offer `,
    `unique strategy`,
    ` for each of our various clients. 
    We look deeply at their business and try to `,
    `step in the shoes of their customers`,
    ` 
    to really understand what they `,
    `need`,
    ` and what they `,
    `want`,
    `. We work with different businesses `,
    `worldwide`,
    ` 
    and gain a lot of knowledge about different customer groups. We have a highly `,
    `skilled team`,
    ` 
     that is extremely excited to work with every new business. 
    So, maybe you are the one we’ve been waiting for! Make a step outside the borders,
     call us! And we will offer some `,
     `expansion 4you!`]
  }
]

export const HowWeWork = () => {
  
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // },[]) 

  return (
    <div>
      <div className={styles.header}>
        <video className={styles.video} 
               src={require('../assets/water2.mp4')} 
               type="video/mp4"
               muted  
               autoPlay="autoplay"   
               loop="loop" 
               ></video>  
        {/*     position: absolute;
    top: 0; 
    left: 0;
    z-index: -1; */}

        <h1 className={styles.headerH1}>THE STRATEGY THAT WORKS</h1> 
        <div className={styles.headerText}>
        As an entrepreneur you only want one thing, <span className={styles.underline}>GROW</span>! 
        You have created a great product or service and everyone 
        who already knows where to find you is very exited. 
        </div>
      </div>
      {steps.map((step,i) => <Step step={step} i={i}/>)}
    </div>
  )
}

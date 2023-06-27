import React,{useState,useRef,useEffect} from 'react'

export const About = () => {

  const [c1,setC1] = useState(0)
  const [c2,setC2] = useState(0)
  const [c3,setC3] = useState(0)

  useEffect(() => {
    let timerId = setInterval(() => {
      if (c1 < 11) {
        setC1(prev => prev++) 
      } else {
      clearInterval(timerId)
      }
    },200)
  },[])

  return (
    <div>
      <div className="">
          <div className="">PROVIDING CLIENTS WITH SUPERIOR DIGITAL MARKETING</div>
          <div className="">
            <h1>Let's talk numbers!</h1>
            <div className="">
              <div className="">
                <div className="num">{c1}+</div>
                <div className="lable">Years in Business</div>
              </div>
              <div className="">
                <div className="num">{c2}+</div>
                <div className="lable">Happy Customers</div>
              </div>
              <div className="">
                <div className="num">M{c3}+</div>
                <div className="lable">Generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

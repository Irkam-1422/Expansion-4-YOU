import React, {useState,useRef} from 'react'
import { FileUpload } from './FileUpload'

export const FileTest = () => {

  const [name,setName] = useState('')
  const input = useRef(null)

  const handleChange = (e) => {
    setName(e.target.value)
    console.log(name)
  }
    
  return (
    <div style={{ height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: 'linear-gradient(45deg, #de30e4, #61dafb)'}}>
        <input type="text" ref={input} onChange={handleChange} style={{width: '29%',
    marginLeft: '-14%',
    marginBottom: '1%',
    padding: '1%'}}/> 
        <FileUpload name={name} returnSuccess={(n) => console.log(n)}/>
    </div>
  )
}

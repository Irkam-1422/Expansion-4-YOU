import React, {useEffect, useState} from 'react'
import { FileUpload } from '../FileUpload'

export const CheckForImg = ({source}) => {

  const [fileData, setFileData] = useState(null)   

  const fetchFileData = async (filename) => {
        try {
            const response = await fetch(`/api/file/get/${filename}`);
            const arrayBuffer = await response.arrayBuffer(); 
            const base64String = btoa(
                new Uint8Array(arrayBuffer).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ''
                )
            ); 
        const str = `data:image/png;base64,${base64String}`
        setFileData(str)
        } catch (error) {
            console.error('Error fetching file data:', error);
        }
  };

  useEffect(() => {
    console.log(source)
    console.log(source.slice(0,source.length-1));
    try{
        source.includes('service') 
        ? fetchFileData(source) 
        : fetchFileData(source.slice(0,source.length-1))
    }
    catch(err){
      console.log(err)
    }
  },[source])  

  return (
    <div>
        {fileData ? <>
            <div style={{color: '#8f3193', margin: '1%'}}>
                There's already an image existing for this step. <br /> 
                If you want to use another image, change the second input. 
            </div> 
            <img src={fileData} style={{width: '50%'}} />
            </> : <>
            <div className="">
                You have to upload the image for this step
            </div> 
            <FileUpload name={source.includes('service') ? source : source.slice(0,source.length-1)} returnSuccess={(name) => console.log(name)}/>
            </>}
    </div>
  )
}

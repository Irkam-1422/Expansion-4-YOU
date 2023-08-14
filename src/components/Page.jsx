import React, {useCallback, useState, useEffect, cloneElement} from 'react'
import { useHttp } from "../hooks/http.hook"

export const Page = ({name,component}) => {

    const {loading, request, error, clearError} = useHttp()
    const [element,setElement] = useState(null)

    const getPage = useCallback(async () => {
        try {
            const timestamp = Date.now(); // Get the current timestamp
            const url = `/api/content/:${name}?timestamp=${timestamp}` 
            const fetched = await request(url, 'GET', null)
            setElement(cloneElement(component, {page: fetched.page}))
        } catch (e) {}
    },[request,name]) 

  useEffect( () => {
    getPage()
  },[getPage])
 
  return (
    <div>
      {element}
    </div>
  )
}

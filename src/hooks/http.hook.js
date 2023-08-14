import { useCallback } from "react"
import { useState } from "react"
import axios from 'axios';

const serverUrl = 'https://expansion4-you-server.vercel.app';

export const useHttp = () => {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    const request = useCallback( async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
          if (body) {
            if (body.file) {
              body = body.file 
            } else {
              body = JSON.stringify(body)
              headers['Content-Type'] = 'application/json'
            }
          }

          // const response = await fetch(url, {method,body,headers})
          // const data = await response.json()
          
          let response;
          let data;

          if (method === 'GET') {
            response = await axios.get(serverUrl+url)
            data = await response.data
            console.log('data after fetching:', data)
          } else if (method === 'POST') {
            response = await axios.post(serverUrl+url, body)
            data = await response.data
            console.log('data after fetching:', data)
          } else {
            console.log('wrong method!');
          }

          //if (!response.ok) throw new Error(data.message || 'Something went wrong')
          if (response.status !== 200) {
            throw new Error(data.message || 'Something went wrong');
          }
          
          setLoading(false)
          console.log('data before returning:', data)
          return data

        } catch (e) {
            setLoading(false)
            setError(e.message)
            console.log(e)
            console.log(e.message)
            console.log(e.data)
            throw e
        }
    },[])

    const clearError = () => setError(null)

    return {loading, request, error, clearError}
}
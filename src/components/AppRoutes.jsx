import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from './Main'
import { Navigation } from './Navigation'
import { Services } from './Services'

export const AppRoutes = () => {
  return (
    <div>
        <Navigation/> 
        <Routes>
            <Route path='/' element={<Main/>}/> 
            <Route path='/services' element={<Services/>}/> 
        </Routes>
    </div>
  )
}

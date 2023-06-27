import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from './Main'
import { About } from './About'
import { Contact } from './Contact'
import { Navigation } from './Navigation'
import { Services } from './Services'
import { HowWeWork } from './HowWeWork'

export const AppRoutes = () => {
  return (
    <div>
        <Navigation/> 
        <Routes>
            <Route path='/' element={<Main/>}/> 
            <Route path='/services' element={<Services/>}/> 
            <Route path='/about' element={<About/>}/>  
            <Route path='/work' element={<HowWeWork/>}/> 
            <Route path='/contact' element={<Contact/>}/> 
        </Routes>
    </div>
  )
}

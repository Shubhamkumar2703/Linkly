import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import AbouPage from './components/AbouPage'
import LandingPage from './components/LandingPage'  


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/about' element={<AbouPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
 
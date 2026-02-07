import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import AbouPage from './components/AbouPage'
import LandingPage from './components/LandingPage'  
import RegisterPage from './components/RegisterPage'  
import Navbar from './components/Navbar'
import Footer from './components/Footer'    


const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/about' element={<AbouPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
 
    </BrowserRouter>
    </>
  )
}

export default App
 
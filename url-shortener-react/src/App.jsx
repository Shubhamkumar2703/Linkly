import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import AbouPage from './components/AbouPage'
import LandingPage from './components/LandingPage'  
import RegisterPage from './components/RegisterPage'  
import LoginPage from './components/LoginPage'
import DashboardLayout from './components/Dashboard/DashboardLayout'
import Navbar from './components/Navbar'
import Footer from './components/Footer'    
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <>
    <BrowserRouter>

    <Toaster position="top-center" />
    
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/about' element={<AbouPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/dashboard' element={<DashboardLayout/>}/>
    </Routes>
 
    </BrowserRouter>
    </>
  )
}

export default App
 

import React from 'react'

import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Register from './pages/Register'
import Login from './pages/Login'
import Todo from './components/Todo'
import './index.css'
import './App.css'
import Footer from './pages/Footer'
import ContactUS from './pages/ContactUS'
import Error from './pages/Error'
import Weather from './components/Weather'
const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
   <Weather/>
{/*       
      <BrowserRouter> 
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contactus' element={<ContactUS/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='*' element={<Error/>}/>
        
      </Routes>
      <Footer />
     
      </BrowserRouter> */}
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
 

  return (
    <>
    
    <Router>
       <Navbar/>
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/todo' element={<Home/>} />
          <Route path='/signup' element={<Home/>} />
          <Route path='/signin' element={<Home/>} />
      </Routes>
    </Router>
   
    <Footer/>
    </>
  )
}

export default App

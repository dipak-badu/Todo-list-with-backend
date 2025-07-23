import { useState } from 'react'
import './App.css'
import { ToastContainer} from 'react-toastify';

import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Signup from './components/signup/Signup'
import Signin from './components/signup/Signin'
import Todo from './components/todo/Todo'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
 

  return (
    <>
   < ToastContainer/>
    <Router>
       <Navbar/>
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/todo' element={<Todo/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
      </Routes>
      <Footer/>
    </Router>
   
    
    </>
  )
}

export default App

import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()
  const goToTodo = ()=>{
    navigate('/todo')
  }
  return (
    <div className='home  d-flex justify-contenet-center align-items-center'>
      <div className='container d-flex justify-contenet-center align-items-center flex-column'>
        <h1 className='text-center'> Organize Your <br /> Work and Life finally.</h1>
        <p> 
            Become Focused, oraganized, and calm with
            toto app. 
        </p>
        <button className='home-todo-btn p-2' onClick={goToTodo}>Make Todo List</button>
      </div>
    </div>
  )
}

export default Home

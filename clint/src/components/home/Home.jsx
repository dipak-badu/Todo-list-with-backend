import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home  d-flex justify-contenet-center align-items-center'>
      <div className='container d-flex justify-contenet-center align-items-center flex-column'>
        <h1 className='text-center'> Organize Your <br /> Work and Life finally.</h1>
        <p> 
            Become Focused, oraganized, and calm with <br />
            toto app. world's #1 task manager app.
        </p>
        <button className='home-todo-btn p-2'>Make Todo List</button>
      </div>
    </div>
  )
}

export default Home

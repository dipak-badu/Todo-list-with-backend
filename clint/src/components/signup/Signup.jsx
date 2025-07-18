import React from 'react'
import './Signup.css'
import HeadingComp from './HeadingComp'
function Signup() {
  return (
    <div className='signup '>
      <div className='container'>
       <div className='row min-vh-100' >
         <div className='col-lg-8 col-12 col-md-8   '>

          <div className='d-flex flex-column column  justify-content-center  ' >

            <input type="email" 
             placeholder='Email*'  
            className='email p-2' 
            name='email'/>
          

          
            <input type="text" 
           placeholder='username*'  
            className='username p-2 my-3' 
            name='username'/>
          

          
            <input type="password" 
            placeholder='Password*'  
            className='password p-2' 
            name='password'/>

           <button className="btn  mt-3 px-4 py-2 fw-bold">
  Sign Up
</button>

          </div>

         </div>
         <div className='col-lg-4 d-none d-lg-flex justify-content-center align-items-center '>
          <HeadingComp first="Sign" second="Up" />
         </div>
       </div>
      </div>
    </div>
  )
}

export default Signup 
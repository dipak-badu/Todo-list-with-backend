import React, { useState } from 'react'
import './Signup.css'
import { toast } from 'react-toastify';
import HeadingComp from './HeadingComp'
import {useNavigate} from "react-router-dom";
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {authActions} from '../../store'

function Signin() {
  const history = useNavigate();

  const dispatch = useDispatch();
const [input, setInput] = useState({ emailOrUsername: "",  password:"" });

const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };




  const handleSubmit = async (e) => {
  e.preventDefault();

  // Client-side validation
  if (!input.emailOrUsername  || !input.password) {
    toast.warn(" Please fill out all fields.");
    return;
  }

  try {
    const res = await axios.post('http://localhost:3000/api/v1/login', input);
 sessionStorage.setItem('token', res.data.token)
  
   
      dispatch(authActions.login())
        
    // Clear form
    setInput({ emailOrUsername: "", password: "" });
toast.success(res.data.message);
      setTimeout(() => {
      history('/todo'); 
    }, 1000); 
  

  } catch (error) {
    const msg = error?.response?.data?.message  || "Something went wrong!";
   
    toast.error(msg);
    console.error("Signin Error:", msg);
  }
};

  return (
  <div className='signup '>
      <div className='container'>
       <div className='row min-vh-100 ' >
        <div className='col-lg-4 d-none d-lg-flex justify-content-center align-items-center '>
          <HeadingComp first="Sign" second="In" />
         </div>
         <div className='col-lg-8 col-12 col-md-8   '>

          <div className='d-flex flex-column column  justify-content-center  ' >

            {/* <input type="email" 
             placeholder='Email*'  
            className='email p-2' 
            name='email'/> */}
          

          
            <input type="text" 
           placeholder='emailorusername*'  
            className='username p-2 my-3' 
            name='emailOrUsername'
            value={input.emailOrUsername} 
            onChange={handleChange}/>
          

          
            <input type="password" 
            placeholder='Password*'  
            className='password p-2' 
            name='password'
            value={input.password}
            onChange={handleChange}/>

           <button className="btn  mt-3 px-4 py-2 fw-bold"
           onClick={handleSubmit}>
  Sign In
</button>

          </div>

         </div>
         
       </div>
      </div>
    </div>
  )
}

export default Signin

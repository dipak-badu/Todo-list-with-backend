import React, { useState } from 'react'
import './Signup.css'
import HeadingComp from './HeadingComp'
import axios from 'axios'
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom";

function Signup() {
  const history = useNavigate();
const [input, setInput] = useState({ email: "", username : "", password:"" });

const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };




  const handleSubmit = async (e) => {
  e.preventDefault();

  // Client-side validation
  if (!input.email || !input.username || !input.password) {
    toast.warn(" Please fill out all fields.");
    return;
  }

  try {
    const res = await axios.post('http://localhost:3000/api/v1/register', input);

    toast.success(res.data.message);

    // Clear form
    setInput({ email: "", username: "", password: "" });
    history("/Signin")

  } catch (error) {
    const msg = error?.response?.data?.message  || "Something went wrong!";
   
    toast.error(msg);
    console.error("Signup Error:", msg);
  }
};

  return (
    <div className='signup '>
      <div className='container'>
       <div className='row min-vh-100' >
         <div className='col-lg-8 col-12 col-md-8   '>

          <div className='d-flex flex-column column  justify-content-center  ' >

            <input type="email" 
             placeholder='Email*'  
            className='email p-2' 
            name='email' value={input.email}
            onChange={handleChange}/>
          

          
            <input type="text" 
           placeholder='username*'  
            className='username p-2 my-3' 
            name='username'
            value={input.username} 
            onChange={handleChange}/>
          

          
            <input type="password" 
            placeholder='Password*'  
            className='password p-2' 
            name='password'
            value={input.password}
            onChange={handleChange}/>

           <button className="btn  mt-3 px-4 py-2 fw-bold"  onClick={handleSubmit}>
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
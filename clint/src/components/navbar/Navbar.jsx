import React from 'react'
import { FaBook } from "react-icons/fa";
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <Link className="navbar-brand nav-todo" to="#"><b><FaBook nav-btn/> &nbsp; todo</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3 ">
          <Link className="nav-Link active nav-btn " aria-current="page" to="/">Home</Link>
        </li>
           <li className="nav-item mx-3 ">
          <Link className="nav-Link active nav-btn " aria-current="page" to="/about">About Us</Link>
        </li>
        <li className="nav-item mx-3 ">
          <Link className="nav-Link active nav-btn " aria-current="page" to="/todo">Todo</Link>
        </li>
         <li className="nav-item mx-3 ">
          <Link className="nav-Link active nav-btn " aria-current="page" to="/signup">Sign Up</Link>
        </li>
         <li className="nav-item mx-3 ">
          <Link className="nav-Link activ nav-btn" aria-current="page" to="/signin">Sign In</Link>
        </li>
         <li className="nav-item mx-3 ">
          <Link className="nav-Link active nav-btn" aria-current="page" to="#">Log Out</Link>
        </li>
         {/* <li className="nav-item mx-3 ">
          <Link className="nav-Link active" aria-current="page" to="#"><img className='user-png img-fluid' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png" alt="img" /></Link>
        </li> */}
        </ul>
      </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

import React from 'react'
import { FaBook } from "react-icons/fa";
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand nav-todo" href="#"><b><FaBook nav-btn/> &nbsp; todo</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3 ">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
           <li className="nav-item mx-3 ">
          <a className="nav-link active" aria-current="page" href="#">About Us</a>
        </li>
         <li className="nav-item mx-3 ">
          <a className="nav-link active nav-btn" aria-current="page" href="#">Sign Up</a>
        </li>
         <li className="nav-item mx-3 ">
          <a className="nav-link activ nav-btn" aria-current="page" href="#">Sign In</a>
        </li>
         <li className="nav-item mx-3 ">
          <a className="nav-link active nav-btn" aria-current="page" href="#">Log Out</a>
        </li>
         <li className="nav-item mx-3 ">
          <a className="nav-link active" aria-current="page" href="#"><img className='user-png img-fluid' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png" alt="img" /></a>
        </li>
        </ul>
      </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

import React,{useState} from 'react'
//import  logo from '../assets/image1.png'
import  '../styles/Navbar.css'
import {Link} from "react-router-dom";
function Navbar() {
     
     // const toggleNavbar=()=>{
     //      //changing value to opposite
     //      setOpenLinks(!openLinks);
     // }
    // const [openLinks,setOpenLinks]=useState(false);
  return (
    <div className='navbar'>
        <div className='leftside'>
                <Link to="/">Home</Link>
                <Link to="/">Menu</Link>
                <Link to="/">Offer</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
              
        </div>
          
        {/* <div className='rightside'>
                 <img src={logo} alt="" /> */}
        {/* </div> */}
    </div>
  )
}

export default Navbar

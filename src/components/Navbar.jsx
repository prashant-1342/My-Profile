import React from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar = ({showcontact,setshowcontact}) => {

  
  
  return (
    <div className='header'>
     <Link activeClass="active" smooth={true}  offset={-70}  duration={500}  spy={true} to="page1"  className='returnHome'>Profile</Link>
       <ul className='swipe'>
        <li className='wse'><Link className='wse' activeClass="active" smooth={true}  offset={-70}  duration={500}  spy={true} to="page2" >Projects</Link></li>
        <li className='wse'><Link className='wse' to="page3">About me</Link></li>
       </ul>
      
      <div className="navSec">
        <button onClick={()=>setshowcontact(!showcontact)}  className='contact'>Contact</button>
        
      </div>
      
       
    </div>
  )
}

export default Navbar

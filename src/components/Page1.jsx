import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Page1 = ({showcontact,setshowcontact}) => {

  return (
    
    <div className="page1">
      <div className="page11">
        <div className='available'>
          <div>The cleanest code is the one that wasn't written. </div>
          <div className='abc1'>

            <span className='vbf'>Available to Work</span>
            <span>
              <div class="blinking-wrapper">
                <div class="blinking-dot"></div>
                <div class="ripple"></div>
              </div>
            </span>
          </div>
        </div>
        <div className='intro'>
          Prashant, FullStack Developer
        </div>
        <div className='abc2'>I make your project stand out with the elegance and quality it deserves.</div>

        <div className='abc3'>
          <div onClick={()=>setshowcontact(!showcontact)} className="contactbtn">Contact me</div>
          <a target='_blank'  href="Prashant Pal Resume  .pdf" className="resumebtn">Download Resume</a>
        </div>

        <div className="abc4">
          <span className='emailpic'>
            <img className='emailpic' src='email.png' />
          </span>
          prashantpal2024@gmail.com
          <span className='emailpic'>

            <img onClick={() => { toast("Copied Successfully") }} className='copypng' src='copy.png' />
            <ToastContainer className='edr' />



          </span>
        </div>
      </div>
    </div>
  )
}

export default Page1

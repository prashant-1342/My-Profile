import React from 'react'
import { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'


const Page4 = () => {
 
 const handlecpy = () => {
    navigator.clipboard.writeText('sparkps11@gmail.com')
   toast("I hope to hear from you soon!")
  }
  return (
    <div className='page4'>
      <div className='page41'>Do you want to start</div>
      <div className='page42'>a project?</div>
      <div onClick={() => { toast("I hope to hear from you soon!") }} className="femail">
        <ToastContainer/>
        <div  className="femail1">prashantpal2024@gmail.com</div>
        <div className="clk">Click to copy</div>
      </div>
    </div>
  )
}

export default Page4

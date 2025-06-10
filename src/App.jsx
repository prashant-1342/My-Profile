import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const App = () => {
  const [showcontact, setshowcontact] = useState(false)
  
    
  return (  
    <div className='Union'>
      
      
      <Navbar showcontact={showcontact} setshowcontact={setshowcontact}/>
      <Home showcontact={showcontact} setshowcontact={setshowcontact}/>
      <Footer/>

    </div>
  )
}

export default App

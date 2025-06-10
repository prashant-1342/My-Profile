import React from 'react'
import { useState } from 'react'

const Page2 = () => {
  const [grayscale, setgrayscale] = useState(1)
  const [grayscale2, setgrayscale2] = useState(1)
 
  return (
    <div className="page2">
      <div className="page2title">Featured Projects</div>
      <div className="page2row">
        <a target='_blank' href='https://flixdeck.vercel.app' className="page2col">
          <div onMouseOver={() => { setgrayscale(0) }} className="ps1" onMouseOut={() => { setgrayscale(1) }}>
            <figure className='blackwhite'>
              <img className='thumbnail' src='Screenshot 2025-06-10 134729.png' />
            </figure>
          </div>
          <div className="ps2">
            <div className="ps3">FlixDeck</div>
            <div>Movie exploration app</div>
          </div>
        </a >
        <a target='_blank' href='https://pokedex-sigma-azure.vercel.app/'className="page2col">
        <div onMouseOver={() => { setgrayscale2(0) }} className="ps1" onMouseOut={() => { setgrayscale2(1) }}>
            <figure  className='blackwhite'>
              <img className='thumbnail' src='Untitled design (1).png' />
            </figure>
          </div>
          <div className="ps2">
            <div className="ps3">Pokedex</div>
            <div>Pokemon browsing app</div>
          </div>
        </a>

      </div>
      {/* <div className="page2row">
        <div className="page2col">
        <div onMouseOver={() => { setgrayscale3(0) }} className="ps1" onMouseOut={() => { setgrayscale3(1) }}>
            <figure style={{ filter: grayscale3 ? "grayscale(1)" : "grayscale(0)" }} className='blackwhite'>
              <img className='thumbnail' src='fotor-20250310224315.png' />
            </figure>
          </div>
          <div className="ps2">
            <div className="ps3">Dreflix</div>
            <div>Movie browsing app</div>
          </div>
        </div>
        <div className="page2col">
        <div onMouseOver={() => { setgrayscale4(0) }} className="ps1" onMouseOut={() => { setgrayscale4(1) }}>
            <figure style={{ filter: grayscale4 ? "grayscale(1)" : "grayscale(0)" }} className='blackwhite'>
              <img className='thumbnail' src='fotor-20250310224315.png' />
            </figure>
          </div>
          <div className="ps2">
            <div className="ps3">Dreflix</div>
            <div>Movie browsing app</div>
          </div>
        </div>

      </div> */}
    </div>
  )
}

export default Page2

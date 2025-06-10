import React from 'react'
import { useState } from 'react'

const Page3 = () => {
  const [visible1, setvisible1] = useState(false)
  const [visible2, setvisible2] = useState(false)
  const [visible3, setvisible3] = useState(false)
  const [visible4, setvisible4] = useState(false)
  const [visible5, setvisible5] = useState(false)
  const [visible6, setvisible6] = useState(false)
  const [visible7, setvisible7] = useState(false)
  const [visible8, setvisible8] = useState(false)
  const [visible9, setvisible9] = useState(false)
  const [visible10, setvisible10] = useState(false)
  const [visible11, setvisible11] = useState(false)
  return (
    <div className="page3">
      <div className="page3title">
        About me
      </div>
      <div className="p3container">
        <div className="p3col">
          <div className="aboutme">
            <div className='aboutme1'>
              Software Developer with 2 years of experience specialized in FullStack, focused on details and performance to provide a representative user experience.
            </div>
            <div>
              <div className="links">
                <a target='_blank'  href='https://github.com/prashant-1342' className="iconcontainer">
                  <svg className='icons' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M12 4c1.67 0 2.61.4 3 .5.53-.43 1.94-1.5 3.5-1.5.34 1 .29 2.22 0 3 .75 1 1 2 1 3.5 0 2.19-.48 3.58-1.5 4.5-1.02.92-2.11 1.37-3.5 1.5.65.54.5 1.87.5 2.5v3M12 4c-1.67 0-2.61.4-3 .5C8.47 4.07 7.06 3 5.5 3c-.34 1-.29 2.22 0 3-.75 1-1 2-1 3.5 0 2.19.48 3.58 1.5 4.5 1.02.92 2.11 1.37 3.5 1.5-.65.54-.5 1.87-.5 2.5v3"></path><path d="M9 19c-1.41 0-2.84-.56-3.69-1.19-.84-.63-1.09-1.66-2.31-2.31"></path></g></svg>
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/prashantpal11/' className="iconcontainer">
                  <svg className='icons' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
                </a>
                <a href='mailto:prashantpal2024@gmail.com' target='_blank' className="iconcontainer">
                  <svg className='icons' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path stroke-width="1.5" fill="currentColor" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.519 0L12 11.671 18.481 6zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16z"></path></svg>
                </a>

              </div>

            </div>
          </div>
          <div className="aboutme">
            <div className="somemore">Some More</div>
            <div className='vbn'>I'm from India and I enjoy learning about the world of software development, I value the small details and I'm a big fan of React (such a versatile framework! 🙂).<br /><br />

              In my free time I usually consume content about technology, play video games, improve my creativity and communication skills, solve Data Structure and algorithms problems or generate ideas for my projects.<br /><br />
              I really enjoy working on the web, making it an accessible, enjoyable and efficient place for all types of users.<br /><br />

              Currently, I am deepening my knowledge in the React ecosystem , but I am always willing to learn new technologies (Angular.js ).</div>
          </div>
          <div className="aboutme rfd">
            <div className="stack">MY STACK</div>
            <div className="stacks">
              <div onMouseOver={() => setvisible1(true)} onMouseOut={() => setvisible1(false)} className='stackname'>
                <div style={{ visibility: visible1 ? "visible" : "hidden" }} className="notify">React</div>
                <img className='stackicon' src='physics.png' />
              </div>
              <div onMouseOver={() => setvisible2(true)} onMouseOut={() => setvisible2(false)} className='stackname'>
                <div style={{ visibility: visible2 ? "visible" : "hidden" }} className="notify">Next.js</div>
                <img className='stackicon' src='icons8-nextjs-480.png' />
              </div>

              <div onMouseOver={() => setvisible3(true)} onMouseOut={() => setvisible3(false)} className='stackname'>
                <div style={{ visibility: visible3 ? "visible" : "hidden" }} className="notify">Typescript</div>
                <img className='stackicon' src='icons8-typescript-480.png' />
              </div>

              <div onMouseOver={() => setvisible4(true)} onMouseOut={() => setvisible4(false)} className='stackname'>
                <div style={{ visibility: visible4 ? "visible" : "hidden" }} className="notify">Node.js</div>
                <img className='stackicon' src='https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png' />
              </div>

              <div onMouseOver={() => setvisible5(true)} onMouseOut={() => setvisible5(false)} className='stackname'>
                <div style={{ visibility: visible5 ? "visible" : "hidden" }} className="notify">Express.js</div>
                <img className='stackicon ' src='icons8-express-js-500.png' />
              </div>
              <div onMouseOver={() => setvisible6(true)} onMouseOut={() => setvisible6(false)} className='stackname'>
                <div style={{ visibility: visible6 ? "visible" : "hidden" }} className="notify">HTML</div>
                <img className='stackicon' src='icons8-html-480.png' />
              </div>
              <div onMouseOver={() => setvisible7(true)} onMouseOut={() => setvisible7(false)} className='stackname'>
                <div style={{ visibility: visible7 ? "visible" : "hidden" }} className="notify">CSS</div>
                <img className='stackicon' src='icons8-css-240.png' />
              </div>
              <div onMouseOver={() => setvisible8(true)} onMouseOut={() => setvisible8(false)} className='stackname'>
                <div style={{ visibility: visible8 ? "visible" : "hidden" }} className="notify">Javascript</div>
                <img className='stackicon' src='icons8-javascript-480.png' />
              </div>
              <div onMouseOver={() => setvisible9(true)} onMouseOut={() => setvisible9(false)} className='stackname'>
                <div style={{ visibility: visible9 ? "visible" : "hidden" }} className="notify">Tailwind</div>
                <img className='stackicon' src='icons8-tailwind-css-240.png' />
              </div>
              <div onMouseOver={() => setvisible10(true)} onMouseOut={() => setvisible10(false)} className='stackname'>
                <div style={{ visibility: visible10 ? "visible" : "hidden" }} className="notify">MongoDb</div>
                <img className='stackicon' src='MongoDB.png' />
              </div>
              <div onMouseOver={() => setvisible11(true)} onMouseOut={() => setvisible11(false)} className='stackname'>
                <div style={{ visibility: visible11 ? "visible" : "hidden" }} className="notify">Git</div>
                <img className='stackicon' src='icons8-github-240.png' />
              </div>
            </div>
          </div>
          <div className="otherproject"></div>
        </div>
        <div className="p3col">
          <div className="profilepicture">
            <img className='prph' src='skin.webp' />
            <div className="info">
              <span className='infodetail'>
                <span className='sdf'>Hello ✋</span>
              </span>
              <span className='infodetail'>
                <span className='sdf'>My name is Prashant Pal</span>
              </span>
              <span className='infodetail'>
                <span className='sdf'>I leave you my email so we can get in touch</span>
              </span>
            </div>
          </div>
          <div className="experience">
            <div className="experiencetitle">EXPERIENCE
            </div>
            <div className="exp1">
              <div className="exp11">2024 Present</div>
              <div className='exp12'>
                <div className="expname"> Web Developer</div>
                <a target='_blank' href='https://www.linkedin.com/company/dsc-dtu/' className='r1'>GDG DTU <img className='toicon' src='up-right-arrow.png' /></a>

              </div>
            </div>
            <div className="exp1">
              <div className="exp11">2023 — 2024</div>
              <div className="exp12">
                <div className="expname"> Frontend Developer</div>
                <a target='_blank' href='https://dtu-connect.netlify.app/' className='r1'  >DTU Connect <img className='toicon' src='up-right-arrow.png' /></a>
              </div>
            </div>
          </div>
          <div className="experience">
            <div className="experiencetitle">EDUCATION
            </div>
            <div className="exp1">
              <div className="exp11">2023-2027</div>
              <div className='exp12'>DELHI TECHNOLOGICAL UNIVERSITY<br/>(Software Engineering)</div>
            </div>
            <div className="exp1">
              <div className="exp11">2021-2022</div>
              <div className="exp12">CLASS 12th - 93.4%</div>
            </div>
            <div className="exp1">
              <div className="exp11">2019-2020</div>
              <div className="exp12">CLASS 10th - 86.4%</div>
            </div>
          </div>



        </div>


      </div>
    </div>
  )
}

export default Page3

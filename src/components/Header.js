import React, {useState, useEffect} from 'react'
import logo from '../images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import AppRouter from '../AppRouter'
const Header = () => {
  const [openNav, setOpenNav] = useState(false)
  console.log("my navbar is open", openNav)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  const styles ={
    navBar:{ display:openNav ? "block" :"none",

    }
  }
  return(
        <>
        {/* // <!-- header section --> */}
        <header className="header flex justify-between"> 
        <div className="logo p-2">
            {/* This will send you back to the homepage */}
               {/* <a className="icon nav-links" href="./index.html"> */}
               {/* Homepage icon need to be resized */} 
               <a href={`/`}>
                <img className="icon" style={{width:"50px",height:"50px"}} alt="Logo" src={logo}
                />
                </a>

                {/* </a> */}
             {/* <!-- other logo idea --> */}
             {/* <!-- <a className="icon nav-links" style=" text-underline-offset: 0.2em;
             text-decoration:underline 0.15em rgb(0,0,0,0); color:#000000; text-decoration-color: rgb(0, 0, 0);" href="./index.html">Rousse B.</a> --> */}
           </div>
         {/* <!-- Navbar section --> */}
         <nav className="navbar flex  items-center pt-2 pl-2 pr-6 md:flex md:items-center">
           {/* <!-- navbar icon --> */}
           {/* Make that a seperate components */}
          <button className="navButton sm:hidden " onClick={()=>setOpenNav(!openNav)}> 
          {openNav 
          ?<FontAwesomeIcon icon={
            solid('x')
            } size = 'lg' className='exit'/>
          :<FontAwesomeIcon icon={
            solid('bars')
            } size = 'lg' className='burger'/>
          
          }
           </button>
           {(openNav  || screenWidth > 640) &&(
             <ul className ="nav-links flex space-x-5 text-lg" id="navLink" >
             
             <li className="nav-item ">
               <a href={`about`}>About</a>
             </li>
             <li className="nav-item">
               <a href={`works`}>Works</a>
              
             </li>
             {/* Contact Page will Show on my index with icons/ footers */}
             <li className="nav-item"> 
               <a href={`contact`}>Contact</a>
             </li>
             <li className="nav-item">
                Resume
                 {/* Use Router */}
               {/* <a href="https://drive.google.com/file/d/1vqfx
              UhIFhLyh2NijoUtNKaP51aYi-NED/view?usp=sharing" target="_blank">Resume</a> */}
             </li>
             
           </ul> 
           )}
          

          
         </nav>
         </header>
        </>
    )
}
export default Header;

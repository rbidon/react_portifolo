import React from 'react'
import logo from '../images/Logo.png'
import AppRouter from '../AppRouter'
const Header = () => {
    return(
        <>
        {/* // <!-- header section --> */}
        <header className="header flex justify-between"> 
        <div className="logo p-2">
            {/* This will send you back to the homepage */}
               {/* <a className="icon nav-links" href="./index.html"> */}
               {/* Homepage icon need to be resized */} 
                <img className="icon" style={{width:"50px",height:"50px"}} alt="Logo" src={logo}/>

                {/* </a> */}
             {/* <!-- other logo idea --> */}
             {/* <!-- <a className="icon nav-links" style=" text-underline-offset: 0.2em;
             text-decoration:underline 0.15em rgb(0,0,0,0); color:#000000; text-decoration-color: rgb(0, 0, 0);" href="./index.html">Rousse B.</a> --> */}
           </div>
         {/* <!-- Navbar section --> */}
         <nav className="navbar flex  items-center pt-2 pl-2 pr-4">
           
           <ul className ="nav-links flex space-x-5 text-lg" id="navLink">
             
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
               {/* <a href="https://drive.google.com/file/d/1vqfxUhIFhLyh2NijoUtNKaP51aYi-NED/view?usp=sharing" target="_blank">Resume</a> */}
             </li>
           </ul> 
           {/* <!-- navbar icon --> */}
           {/* Make that a seperate components */}
           <div className="burger" id="toggleButton">
             <div className="line1"></div>
             <div className="line2"></div>
             <div className="line3"></div>
           </div>
         </nav>
         </header>
        </>
    )
}
export default Header;
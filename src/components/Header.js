import {useState, useEffect} from 'react'
import logo from '../images/Logo.png'
// import whiteLogo from '../images/WhitebackgroundLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  const [openNav, setOpenNav] = useState(false)
  // console.log("my navbar is open", openNav)
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
//  const [addUnderline, setUnderline]= useState(false, ()=>{

//  })

  return(
        <>
        
        {/* // <!-- header section --> */}
        {/* Add fixed if I want the header to move with user when scrolling */}
        <header className={`header flex justify-between static top-0 left-0 right-0  bg-yellow-100 ${openNav ?"outline-double" :"outline-double"}`}> 
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
          ?<FontAwesomeIcon 
          icon="fa-solid fa-xmark"  
          size='lg'
          />
          :<FontAwesomeIcon 
          icon="fa-solid fa-xmark" 
           size='lg'/>
          
          }
           </button>
           {(openNav  || screenWidth > 640) &&(
             <ul className ="nav-links flex space-x-6  text-lg " id="navLink" >
             
             <li className="nav-item space-y-1">
               <a href={`about`} className=" hover:underline underline-offset-4">About</a>
             </li>
             {/* Data Analysis Switch  */}
             <li className='nav-item space-y-1'>
              <a href={`dataanalysisworks`}
               className=" hover:underline underline-offset-4">Data Analysis</a>
             </li>
             <li className="nav-item space-y-1">
               <a href={`otherworks`} className=" hover:underline underline-offset-4"> Other Works</a>
             </li>
             {/* Contact Page will Show on my index with icons/ footers */}
             <li className="nav-item space-y-1 "> 
               <a href={`contact`}
               className=" hover:underline underline-offset-4">Contact</a>
             </li>
             <li className="nav-item space-y-1  underline-offset-4  outline rounded-full px-2 hover:outline-dashed">
                Resume --- Currently Updating
                 {/* Use Router */}
                 {/* Removing Resume Must Update */}
               {/* <a href="https://drive.google.com/file/d/1NRIuwGCGblHBb8eA5iVlt5QMYQcQ3b9U/view?usp=sharing"  
                rel="noreferrer" target="_blank">Resume</a> */}
             </li>
             
           </ul> 
           )}
          

          
         </nav>
         </header>
        </>
    )
}
export default Header;

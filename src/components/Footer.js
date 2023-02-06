import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid,  brands, } from '@fortawesome/fontawesome-svg-core/import.macro'
import GoTop from './goToTopButton'
const Footer =()=>{
    
    return(
        <div>
        <footer className="Footer static container-fluid bg-yellow-100 min-w-full min-h-full rounded-lg inset-x-0 bottom-0 p-4" 
        style={{minHeight:"200px"}}
        >
       
      <div className="socialmedia">
        <ul>
          <li>
            <a href="https://github.com/rbidon" target="__blank" alt="Github Icon" title='Github'> 
                <FontAwesomeIcon icon={
                brands('github-alt')
            } size = 'xl' className='social-icon'/>
            </a>
            </li>
            <li>
                <a href="mailto:roussebidon@gmail.com" target="__blank"
                alt="Email Icon" title='Email'>
                    <FontAwesomeIcon icon={
                    solid('envelope')
                    } size = 'xl' className='social-icon'/>
                 </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/roussebidon/" target="__blank"
                alt="Linkedin Icon" title='Linkedin'>
                    <FontAwesomeIcon icon={
                    brands('linkedin')
                    } size = 'xl' className='social-icon'/>
                </a>
            </li>
            
        {/* <li> <a href="https://www.linkedin.com/in/roussebidon/" target="__blank"> 
        <i class="fa-brands fa-linkedin fa-xl social-icon	"></i></a></li>
        <li> <i class="fa-brands fa-twitter fa-xl	social-icon"></i></a></li> */}
        </ul>
        </div>
        <div>
        <p className="footerHeader text-center pt-5 pb-2 bottom-0 flex
        justify-center
        items-end"> 
         Copyright <span>©</span> 2023 </p>
         <GoTop/>
         </div>
    </footer>
    </div>
    )
}
export default Footer
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import emailjs from '@emailjs/browser'
library.add(fas, far, fab)


const ContactForm = ()=>{
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
      });
    const [status, setStatus] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.send(
        'service_vccepk9',
        'template_bisdhog', 
        values,
       'M7bEMRbylZMNZNaFo')
        .then(response=>{
            console.log('Success', response)
        setValues({
            fullName: '',
            email: '',
            message: ''
        })
        setStatus('Success')
        }, 
        error => {
            console.log('Error:', error);
        })
    }
    useEffect(() => {
        if(status === 'Success') {
          setTimeout(() => {
            setStatus('');
          }, 3000);
        }
      }, [status]);

    const handleChange = (e)=>{
        setValues(values =>({
            ...values,
            [e.target.name]:e.target.value
        }))
    }
    return(
        <>

         {/* <h1>Contact Page</h1>
        <p>Feel free to reach with any inquiry!</p>  */}
        <div className="contactHolder pt-24">
            <div>
            <h2 className="contactme-title">Contact</h2>
            <p className='contactme-description text-center pb-4' >Feel free to reach out with any inquiry! </p>
            </div>
            <div className="contactme-container">
                
                <div className="contactform bg-yellow-100"> 
                {status && renderAlert()}
                
                    <form  onSubmit={handleSubmit}>
           
                    {/* <!-- Full Name --> */}
                    <div className="row">
                        <div className="input-group">
                            <input type="text"  id="fname" name="name" 
                            value={values.name} onChange={handleChange}
                             className="placeicons" required/>
                            
                             <label htmlFor="fname" className="contact_label">
                             <FontAwesomeIcon icon="fa-solid fa-user" />  Name</label>
                
                    </div>
                    {/* <!-- Email Address --> */}
                    <div className="input-group">
                         <input type="text"  id="emailaddress" className="email-message" name="email" value={values.email} onChange={handleChange} required/>

                        <label htmlFor="emailaddress" className="contact_label email-message">
                             <FontAwesomeIcon icon="fa-solid fa-envelope" />
                              Email Address</label>
                    </div>  
                     {/* <!-- Message --> */}
                    <div className="input-group">
                        <textarea name="message"rows="8" id="message" value={values.message} onChange={handleChange} required></textarea> 

                        <label id="message" htmlFor="message" className="contact_label"> 
                            <FontAwesomeIcon icon="fa-solid fa-comments" /> 
                            Your Message
                            </label>
                    </div>
                    {/* <!-- Button Submit --> */}
                    <div className="button-group">
                        <button className="submitbtn" type='submit'>
                            Submit 
                            <FontAwesomeIcon icon="fa-regular fa-paper-plane" />                             
                        </button>
                    </div>
                    </div>
                    </form>
                </div>
                
            </div>
      </div>
       </>
    )
}
const renderAlert = () => (
    <div className="px-4 py-3 leading-normal bg-green-100 rounded-full mt-5 text-center">
        <p>Your Message Submitted Successfully</p>
    </div>
  )

export default ContactForm
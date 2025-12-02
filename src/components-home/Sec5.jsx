import React, { Component } from 'react';
import "../components-home/Sec5.css"
import mojito from "../Assets/mojito.png"
const Sec5 = () => {
    return ( <>

    
<section className="contactsection">
       

        
        <div className="connectcontainer">
       

          <div className="formsection">
            <h2 className="formtitle">Let's connect</h2>
            <p className="formsubtitle">
              Let's align our visions! Reach out and let the magic of collaboration illuminate our skies.
            </p>

            <form className="contactform">
              <div className="formrow">
                <input
                  type="text"
                  name="lastName"
                  className="forminput"
                  placeholder="Last Name"
                 
                />
                <input
                  type="text"
                  name="firstName"
                  className="forminput"
                  placeholder="First Name"
              
                />
              </div>
              <input
                type="email"
                name="email"
                className="forminput"
                placeholder="Email"
           
              />
              <input
                type="tel"
                name="phone"
                className="forminput"
                placeholder="Phone Number"
                
              />
              <textarea
                name="message"
                className="message"
                placeholder="Message"
            
              />

              <button type="submit" className="submitbtn">
                Send it to Rou
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                 
                </svg>
              </button>
            </form>
          </div>

          <div className="imagesection">
            <div className="showcaseimage">
            <img src={mojito} alt="last" className="mojito" />
            </div>
          </div>
        </div>
      </section>
    
    </> );
}
 
export default Sec5;
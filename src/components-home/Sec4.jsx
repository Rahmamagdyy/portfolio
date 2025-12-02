import React, { Component } from 'react';
import '../components-home/Sec4.css'
import edume from "../Assets/edume.png"

const Sec4 = () => {

    return ( <>
  <section className="educationsection">


     
        <div className="educationdetails">
            <div className="educationitem">
                <h3 className="schoolname">red crecent<br />language school</h3>
                <span className="yearbadge">2022</span>
            </div>
            
             
            <div className="educationitem">
                <h3 className="schoolname">egypt university of<br />informatics</h3>
                <p className="degree">digital arts and design (<br />ux-ui )</p>
                <span className="yearbadge">2026</span>
            </div>
        </div>

      
        <div className="imagecontainer">

        <img src={edume} alt="second" className="edume" />
        
        </div>

   
        <div className="titlecontainer">
            <div className="starburst"></div>
            <h2 className="verticaltitle">EDUCATION</h2>
        </div>
    </section>

    </> );
}
 
export default Sec4;
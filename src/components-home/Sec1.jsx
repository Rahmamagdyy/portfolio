import React, { Component } from 'react';
import '../components-home/Sec1.css'
import rous from "../Assets/rous.gif"

const Sec1 = () => {
    return (

        <> 
        
          <section className="sec1">
        <img src={rous} alt="hero" className="rous" />
        <button className="downloadbtn">Download CV</button>
    </section>
    
    
    </>
     );
}
 
export default Sec1;
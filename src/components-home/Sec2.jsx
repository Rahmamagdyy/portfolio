import React, { Component } from 'react';
import '../components-home/Sec2.css'
import mepic from "../Assets/mepic.png"
const Sec2 = () => {
 
 
 return ( <>
    <section className="about-section">
        <h1 className="name-title">Rahma Magdy</h1>
        
        <div className="content-wrapper">
            <div className="text-content">
                <h2 className="about-heading">About Me</h2>
                <p className="about-description">
                    I'm a multidisciplinary creative specializing in graphic design, photography, and UX/UI. My work spans brand identities, digital interfaces, and editorial visuals — always crafted with attention to emotion and detail. I've contributed to major events like Zamna and Cairo Film Festival and lead my own photography brand, capturing everything from fashion to candid moments
                </p>
            </div>

            <div>
            <img src={mepic} alt="second" className="mepic" />
            </div>
        </div>
    </section>
    
    
    </> );
}
 
export default Sec2;
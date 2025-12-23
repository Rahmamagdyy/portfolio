import React, { Component } from 'react';
import './Error.css'
const Error = () => {
    return ( <>
     <div className="accent-circle circle-1"></div>
    <div className="accent-circle circle-2"></div>
    <div className="accent-circle circle-3"></div>
    
    <div className="container">
        <div className="error-code">404</div>
        <div className="error-message">Page Not Found</div>
        <div className="error-description">
            Oops! The page you're looking for seems to have wandered off. Let's get you back on track.
        </div>
        <a href="/" className="btn">Back to Home</a>
    </div>

    
    
    </> );
}
 
export default Error;
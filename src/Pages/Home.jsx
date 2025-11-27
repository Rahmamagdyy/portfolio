import React, { Component } from 'react';
import Nav from "../Components/Nav";
import rous from "../Assets/rous.gif"
import './Home.css'

const Home = () => {
    return (  <>
    <Nav/>

    <section className="sec1">
        <img src={rous} alt="hero" className="rous" />
    </section>

    </> );
}
 
export default Home;
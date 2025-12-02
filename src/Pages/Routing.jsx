import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Featured from './Featured';
const Routing = () => {
    return ( 

<BrowserRouter>

<Routes>

<Route path='/' element={<Home />} />
<Route path='/' element={<Featured />} />

</Routes>
</BrowserRouter>

    );
}
 
export default Routing;
 

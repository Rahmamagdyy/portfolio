import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Featured from './Pages/Featured';
import Testapi from './Pages/Testapi';
import Services from './Pages/Services';
import Contact from './Pages/Assign';
import Error from './Pages/Error';

const Routing = () => {
    return ( 

<BrowserRouter>

<Routes>

<Route path='/' element={<Home />} />
<Route path='/Featured' element={<Featured />} />
<Route path='/Services' element={<Services/>} />
<Route path='/Testapi' element={<Testapi />} />
<Route path='/Contact' element={<Contact />} />
<Route path='/Error' element={<Error />} />

</Routes>
</BrowserRouter>

    );
}
 
export default Routing;
 

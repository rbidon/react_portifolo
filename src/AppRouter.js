import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './components/Home/Home'
import About from './components/About/About'
import Works from './components/Works/Works'
import Contact from './components/Contact/Contact';

const AppRouter=() =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                element={
                    <Home/>
                }
                />
                <Route path="/about"
                element={
                    <About/>
                }
                />
                <Route path="/works"
                element={
                    <Works/>
                }
                />
                <Route path="/contact"
                element={
                    <Contact/>
                }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
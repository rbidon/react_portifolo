import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './components/Home/Home'
import About from './components/About/About'
import Works from './components/Works/Works'

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
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
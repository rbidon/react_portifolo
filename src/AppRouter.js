import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import OtherWorks from './components/OtherWorks/OtherWorks'
import Contact from './components/Contact/Contact';
import TestingSwitchFeature from './components/TestingSwitchFeature/TestingSwitchFeature'

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
                <Route path="/otherworks"
                element={
                    <OtherWorks/>
                }
                />
                <Route path ='/dataanalysisworks'
                element ={
                    <TestingSwitchFeature/>
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
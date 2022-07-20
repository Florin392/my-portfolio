import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from "./context";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./components/about/About";


ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <Router basename={"/portfolio"}>
                <Routes>
                    <Route path='/' element={<App/>}/>
                    <Route path='/about' element={<About/>}/>

                </Routes>
            </Router>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

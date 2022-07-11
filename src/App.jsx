import React, {useContext, useState} from "react";
import "./app.scss";
import "./global.scss";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Toggle from "./components/toggle/Toggle";
import {ThemeContext} from "./context";


function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const theme = useContext(ThemeContext)
    const setdarkMode = theme.state.darkMode;

    return (<>
        <div className="app"
             style={{
                 backgroundColor: setdarkMode ? "#15023a" : "white",
                 color: setdarkMode ? "#C1B8DEFF" : "black"
             }}>
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
            </Topbar>
            <Toggle menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">
                <Intro/>
                <Experience/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    </>);
}

export default App;

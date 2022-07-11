import React, {useContext} from "react";
import "./menu.scss"
import {ThemeContext} from "../../context";

export default function Menu({menuOpen, setMenuOpen, index}) {
    const theme = useContext(ThemeContext)
    const setdarkMode = theme.state.darkMode;
    return (
        <div className={"menu " + (menuOpen && "active")} id="menu" key={index}
             style={{color: (setdarkMode && menuOpen && "active") ? "#C1B8DEFF" : "black"}}
        >
            <ul>
                <li onClick={() => setMenuOpen(false)} key={index}
                    >
                    <a href="#intro">Home</a>

                </li>
                <li onClick={() => setMenuOpen(false)} key={index}>
                    <a href="#experience">Background</a>

                </li>
                <li onClick={() => setMenuOpen(false)} key={index}>
                    <a href="#contact">Contact</a>

                </li>

            </ul>
        </div>
    )
}
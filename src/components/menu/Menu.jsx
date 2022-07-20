import React, {useContext} from "react";
import "./menu.scss"
import {ThemeContext} from "../../context";
import {useNavigate} from "react-router-dom";

export default function Menu({menuOpen, setMenuOpen, index}) {
    const theme = useContext(ThemeContext)
    const setdarkMode = theme.state.darkMode;
    let navigate = useNavigate();
    return (
        <div className={"menu " + (menuOpen && "active")} id="menu" key={index}
             style={{color: (setdarkMode && menuOpen && "active") ? "#C1B8DEFF" : "black"}}
        >
            <ul>
                <li onClick={(event) => {
                    setMenuOpen(false);
                    navigate('/')}}
                    key={index}
                >
                    <a href="#intro">Home</a>

                </li>
                <li onClick={(event) => {
                    setMenuOpen(false);
                    navigate('/')}}
                    key={index}
                >
                    <a href="#experience">Background</a>

                </li>
                <li onClick={(event) => {
                    setMenuOpen(false);
                    navigate('/')}}
                    key={index}
                >
                    <a href="#footer">Contact</a>

                </li>
                <li onClick={(event) => {
                    setMenuOpen(false);
                    navigate('/portfolio')}}
                    key={index}
                >
                    <a href="/portfolio/about">About me</a>

                </li>


            </ul>
        </div>
    )
}
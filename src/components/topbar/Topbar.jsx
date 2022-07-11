import React, {useContext} from "react";
import "./topbar.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faUser} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {ThemeContext} from "../../context";

export default function Topbar({menuOpen, setMenuOpen}) {
    const theme = useContext(ThemeContext)
    const setdarkMode = theme.state.darkMode;

    return (
        <div className={"topbar " + (menuOpen && "active")}
             style={{backgroundColor: setdarkMode || (menuOpen && "active"),
                 color: setdarkMode ? "#C1B8DEFF" : "black" }}>
            <div className="wrapper_top">
                <div className="left">
                    <div className="logo">
                        <a href="https://florin392.github.io/portfolio/">myWork.</a>
                    </div>
                   <div className="itemContainer">
                       <div className="phone">
                           <a href="#contact"> <FontAwesomeIcon  icon={faUser}/></a>
                           <span> +40 731 006 282</span>
                       </div>
                       <div className="mail">
                           <a href="#footer"> <FontAwesomeIcon  icon={faEnvelope}/></a>
                           <span> iordacheflorin3@yahoo.com</span>
                       </div>
                       <div className="socialMedia">
                           <a href="https://www.linkedin.com/in/florin-iordache-2b998b166" >
                               <FontAwesomeIcon className="icon linkedin"  icon={faLinkedin} />
                           </a>
                       </div>
                   </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1" style={{backgroundColor: setdarkMode ? "#C1B8DEFF" : "black" || (menuOpen && "active")}}> </span>
                        <span className="line2" style={{backgroundColor: setdarkMode ? "#C1B8DEFF" : "black" || (menuOpen && "active")}}> </span>
                        <span className="line3" style={{backgroundColor: setdarkMode ? "#C1B8DEFF" : "black" || (menuOpen && "active")}}> </span>
                    </div>
                </div>

            </div>
        </div>
    )
}
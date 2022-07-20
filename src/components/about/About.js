import './about.scss';
import '../topbar/topbar.scss';
import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";

import ExpandingCards from "./ExpandingCards";
import {expandingCardsDataBase} from "./ExpandingCardsDataBase";
import Topbar from "../topbar/Topbar";
import Menu from "../menu/Menu";
import Toggle from "../toggle/Toggle";
import {ThemeContext} from "../../context";


export default function About(props) {
    let navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const theme = useContext(ThemeContext)
    const setdarkMode = theme.state.darkMode;

    return (<>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Toggle menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

        <div className="aboutmePage"
             style={{
                 backgroundColor: setdarkMode || (menuOpen && "active"),
                 backgroundImage: setdarkMode ?
                     `url("https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80")`
                         :
                     `url("https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,

                 color: setdarkMode ? "#C1B8DEFF" : "#5e1616"}}
        >

            <div className="aboutmeContainer">

                <div className='left-section'>
                    <h1>So, who am I?</h1>
                    <h2 className="description"> Hey, I am Florin, I am 30 and I live in Bucharest, Romania. <br/>

                        I am a beginner front-end developer with previous experience in automotive and sales -
                        completely unrelated, I know. <br/>
                        Right now I am looking for a career restart and even if this is just the beginning I am
                        ready to
                        learn, improve my skills and work with amazing people. <br/>
                        I know that there are a lot of entry level developers out there but together with my skills,
                        my
                        passions will also be joining your team. Hiking, running, cooking and my love for nature and
                        all
                        the living things out there are just a few.
                        That would be it. If you already checked my portfolio and consider I might be a good fit
                        just
                        drop an email!
                    </h2>
                </div>

                <div className='right-section'>

                    <div className='right-section-name'>
                        <svg width={300} height={140}>
                            <symbol id="s-text">
                                <text textAnchor="middle" x="50%" y="50%">Things I enjoy</text>
                            </symbol>
                            <g className="g-ants">
                                <use xlinkHref="#s-text" className="text-copy"></use>
                                <use xlinkHref="#s-text" className="text-copy"></use>
                                <use xlinkHref="#s-text" className="text-copy"></use>
                                <use xlinkHref="#s-text" className="text-copy"></use>
                                <use xlinkHref="#s-text" className="text-copy"></use>
                                <use xlinkHref="#s-text" className="text-copy"></use>
                            </g>
                        </svg>
                    </div>

                    <div className="right-section-hobbies">
                        <ExpandingCards data={expandingCardsDataBase}/>
                    </div>
                </div>
            </div>
            <div className="toHomePage">
                <button style={{color: setdarkMode ? "black" : "#5e1616"}}
                        onClick={() => {
                    navigate('/')
                }}
                >
                    home page
                </button>
            </div>

        </div>
    </>)
}
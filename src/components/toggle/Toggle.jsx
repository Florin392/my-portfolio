import "./toggle.scss"
import {useContext} from "react";
import {ThemeContext} from "../../context";



export default function Toggle({menuOpen, setMenuOpen})  {

    const theme = useContext(ThemeContext)
    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"});
    };

    return (
        <div className={"toggle " + (menuOpen && "active")}  >
                <img src="img/sun.png" alt="" className="t-icon"/>
                <img src="img/moon.png" alt="" className="t-icon"/>
                <div className="t-button"
                     onClick={handleClick}
                     style={{left: theme.state.darkMode ? 0 : 25}}>
                </div>
        </div>
    )
}

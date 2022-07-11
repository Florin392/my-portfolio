import "./footer.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloudArrowUp} from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
    return (
        <div className="footer" id="footer">
            <h2>© All rights reserved, Inc 2022</h2>
            <a href="#intro"> <FontAwesomeIcon icon={faCloudArrowUp}/></a>
        </div>
    )
}
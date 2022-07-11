import './about.scss';
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBookReader,
    faBowlFood,
    faHiking, faPlaneDeparture,
    faRunning,

} from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';
import {useEffect} from "react";


export default function About() {
    let navigate = useNavigate();

    function showHobbies() {
        $(".option").click(function a() {
            $(".option").removeClass("active");
            $(this).addClass("active");
        });
    }
    useEffect( () => {
        showHobbies()
    },[])

    return (

        <div className="aboutmePage">
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
                        <svg  width={300} height={200} >
                            <symbol id="s-text">
                                <text textAnchor="middle" x="50%" y="50%">Things I enjoy</text>
                            </symbol>
                            <g className="g-ants">
                                <use xlinkHref="#s-text" className="text-copy"> </use>
                                <use xlinkHref="#s-text" className="text-copy"> </use>
                                <use xlinkHref="#s-text" className="text-copy"> </use>
                                <use xlinkHref="#s-text" className="text-copy"> </use>
                                <use xlinkHref="#s-text" className="text-copy"> </use>
                                <use xlinkHref="#s-text" className="text-copy"> </use>
                            </g>
                        </svg>
                    </div>

                    <div className="right-section-hobbies">
                        <div className="options"
                              >
                            <div className="option active"
                                 style={{backgroundImage: `url("img/running.jpg")`}}>
                                <div className="shadow"> </div>
                                <div className="label">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faRunning}/>
                                    </div>
                                    <div className="info">
                                        <div className="main">Running</div>
                                    </div>
                                </div>
                            </div>
                            <div className="option active"
                                 style={{backgroundImage: `url("img/hiking.jpg")`}}>
                                <div className="shadow"> </div>
                                <div className="label">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faHiking}/>
                                    </div>
                                    <div className="info">
                                        <div className="main">Hiking</div>
                                    </div>
                                </div>
                            </div>
                            <div className="option active"
                                 style={{backgroundImage: `url("img/cooking.jpg")`}}>
                                <div className="shadow"> </div>
                                <div className="label">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faBowlFood}/>
                                    </div>
                                    <div className="info">
                                        <div className="main">Cooking</div>
                                    </div>
                                </div>
                            </div>
                            <div className="option active"
                                 style={{backgroundImage: `url("img/reading.jpg")`}}>
                                <div className="shadow"> </div>
                                <div className="label">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faBookReader}/>
                                    </div>
                                    <div className="info">
                                        <div className="main">Reading</div>
                                    </div>
                                </div>
                            </div>
                            <div className="option active"
                                 style={{backgroundImage: `url("img/travel.jpg")`}}>
                                <div className="shadow"> </div>
                                <div className="label">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faPlaneDeparture}/>
                                    </div>
                                    <div className="info">
                                        <div className="main">Travel</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="toHomePage">
                <button onClick={() => {
                    navigate('/')
                }}
                >
                    home page
                </button>
            </div>


        </div>)
}
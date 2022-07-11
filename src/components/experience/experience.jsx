import React, {useContext, useEffect, useRef, useState} from "react";
import ExperienceList from "../experienceList/experienceList";
import "./experience.scss"
import {
    coursesData, workData, educationData,
} from "../../data.js";
import {ThemeContext} from "../../context";
import VanillaTilt from "vanilla-tilt";

function Tilt(props) {
    const {options, ...rest} = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

export default function Experience() {
    const [selected, setSelected] = useState("courses")
    const [data, setData] = useState([])
    const theme = useContext(ThemeContext)
    const setdarkMode = theme.state.darkMode;

    const options = {
        scale: 1,
        speed: 1000,
        max: 30,
        glare:true,
        "max-glare": .5,
    };


    const list = [{
        id: "courses", title: "Courses",
    }, {
        id: "work", title: "Work experience",
    }, {
        id: "education", title: "Education",
    },

    ];

    useEffect(() => {

        switch (selected) {
            case "courses":
                setData(coursesData);
                break;
            case "work":
                setData(workData);
                break;
            case "education":
                setData(educationData);
                break;
            default:
                setData(coursesData);
        }
    }, [selected])


    return (<div className="experience" id="experience"
                 style={{backgroundColor: setdarkMode || "whiteSmoke"}}
        >

            <h1>Background</h1>
            <ul>
                {list.map((item, indexitem) => (<ExperienceList title={item.title} active={selected === item.id}
                                                                setCateg={setSelected}
                                                                id={item.id} key={indexitem}/>))}
            </ul>
            <div className="container">
                {data.map((d, index) => (


                    <Tilt className="item" options={options} key={index}>
                        <div className="itemDetails">
                            <h3>{d.title}</h3>
                            <h4>{d.date}</h4>
                            <h6>{d.description.map((el, indexel) => <li key={indexel}>{el}</li>)}</h6>
                            <h5>{d.company}</h5>
                        </div>

                        <div className="hoverContainer">
                            <img src="img/hoverBacground.jpg" alt=""/>
                            <h2 style={{color: setdarkMode && "yellow"}}>{d.hoverEffectTitle.map((el, indexEl) => <p
                                key={indexEl}>{el}</p>)}</h2>
                            <h3 style={{color: setdarkMode && "yellow"}}>{d.hoverEffectDescription.map((el, indexelL) =>
                                <p key={indexelL}>{el}</p>)}</h3>
                        </div>

                    </Tilt>))}

            </div>

        </div>

    )

}


import React from "react";
import "./about.scss"

const Card = (props) => {
    const {id, title, url, logo, active} = props.data;


    return (
        <div className={`card ${active && "active"}`}
                 style={{backgroundImage: `url(${url})`}}
                 onClick={() => props.onCardClick(id)}>
            <div className="card-details">
                <div className="icon">
                    <div className="logo">{logo}</div>
                </div>
                <h2>{title}</h2>
            </div>

        </div>)
}

export default Card;




























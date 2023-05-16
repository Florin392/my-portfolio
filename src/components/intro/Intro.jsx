import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
import { Link } from "react-router-dom";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["portfolio"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="img/man.png" alt="/" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Florin Iordache </h1>
          <h3>
            and this is my <span ref={textRef}></span>
          </h3>
          <div className="aboutMe">
            <Link to="/about">
              <h2>more about me</h2>
            </Link>
          </div>
        </div>
        <div className="arrowDown">
          <a href="#experience">
            <img src="img/arrowdown.png" alt="down" />
          </a>
        </div>
      </div>
    </div>
  );
}

import "./about.scss";
import "../topbar/topbar.scss";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import ExpandingCards from "./ExpandingCards";
import { expandingCardsDataBase } from "./ExpandingCardsDataBase";
import Topbar from "../topbar/Topbar";
import Menu from "../menu/Menu";
import Toggle from "../toggle/Toggle";
import { ThemeContext } from "../../context";

export default function About() {
  let navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useContext(ThemeContext);
  const setdarkMode = theme.state.darkMode;

  return (
    <>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Toggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div
        className="aboutmePage"
        style={{
          backgroundColor: setdarkMode || (menuOpen && "active"),
          backgroundImage: setdarkMode
            ? `url("https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80")`
            : `url("https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,

          color: setdarkMode ? "#C1B8DEFF" : "#5e1616",
        }}
      >
        <div className="aboutmeContainer">
          <div className="left-section">
            <h1>So, who am I?</h1>
            <h2 className="description">
              I am a junior front-end developer with experience in React,
              Typescript, CSS and HTML.
              <br /> After almost one year of working in the field and two since
              first taking contact with this field I am searching for new
              challenges and way to improve my knowledge. I chose front-end
              because I am really good at visualising things and I discovered I
              enjoy creating products which bring a lot of value from UI/UX
              perspective.
              <br /> Since hard skills are something that a lot of people can
              learn easily I am also bringing a lot of passions that describe my
              personality even more than job-related abilities. I love hiking
              and nature and if you cannot reach me I am definitely on top of
              some mountain. I also enjoy running and cooking and I think that
              the best way to end a hard day is taking a long walk with my dog.
              That would be it. <br />
              If you already checked my profile and consider I might be a good
              fit just drop an email!
            </h2>
          </div>

          <div className="right-section">
            <div className="right-section-name">
              <svg width={300} height={140}>
                <symbol id="s-text">
                  <text textAnchor="middle" x="50%" y="50%">
                    About me
                  </text>
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
              <ExpandingCards data={expandingCardsDataBase} />
            </div>
          </div>
        </div>
        <div className="toHomePage">
          <button
            style={{ color: setdarkMode ? "black" : "#5e1616" }}
            onClick={() => {
              navigate("/");
            }}
          >
            home page
          </button>
        </div>
      </div>
    </>
  );
}

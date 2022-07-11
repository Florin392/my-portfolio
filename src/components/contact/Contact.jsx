import React, {useContext, useRef, useState} from "react";
import "./contact.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faUser, faLocation} from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser';
import {ThemeContext} from "../../context";

export default function Contact() {
    const formRef = useRef();
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);
    const [greetings, setGreetings] = useState(false);
    const theme = useContext(ThemeContext)
    const setdarkMode = theme.state.darkMode;

    const handleSubmit = (event) => {
        event.preventDefault();
        const errs = [];

        if (name.length < 3) {
            errs.push("Your name is too short!");
        }
        if (subject.length < 3) {
            errs.push("You forgot to mention a subject");
        }
        if (email.length < 3) {
            errs.push("Don't forget to mention your email adress!");
        }
        if (message.length < 4) {
            errs.push("Please enter a message");
        }


        if (errs.length === 0) {
            emailjs.sendForm('service_1ya4hnd', 'template_gpjax04', formRef.current, '9HX90hyXSgHEU_TIm')
                .then((result) => {
                    setGreetings("Thank you for your interest!")
                }).catch(errs => {
                setErrors(["wrong"])
            });

        } else {
            setErrors(errs);
        }
    }
    const successDiv = <div className="messageSent"><h2>{greetings}</h2></div>;

    return (<div className="contact" id="contact">
        <div className="contact-bg"> </div>
        <div className="contact-wrapper">
            <div className="wr-left">
                <h1 className="title"> Let's discuss your projects!</h1>
                <div className="info">
                    <div className="item">
                        <FontAwesomeIcon className="icon" icon={faUser}/>
                        <span>+40 731 006 282</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon className="icon" icon={faEnvelope}/>
                        <span>iordacheflorin3@yahoo.com</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon className="icon" icon={faLocation}/>
                        <span>Bucharest, Romania</span>
                    </div>

                </div>
            </div>
            <div className="wr-right">
                <div className="description">
                    <p><b>Did you like my portfolio?</b> Send me a message!</p>
                </div>
                {greetings.length ? successDiv :
                    <div className="formContent">
                        <form ref={formRef} action={"#"} method={"post"} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" name="user_name" value={name}
                                   style={{backgroundColor: setdarkMode && "#333",
                                   color: setdarkMode && "white"}}
                                   onChange={(event) => {
                                       setName((event.target.value))
                                   }}/>
                            <input type="text" placeholder="Subject" name="user_subject" value={subject}
                                   style={{backgroundColor: setdarkMode && "#333",
                                       color: setdarkMode && "white"}}
                                   onChange={(event) => {
                                       setSubject((event.target.value))
                                   }}/>
                            <input type="text" placeholder="Email" name="user_email" value={email}
                                   style={{backgroundColor: setdarkMode && "#333",
                                       color: setdarkMode && "white"}}
                                   onChange={(event) => {
                                       setEmail((event.target.value))
                                   }}/>
                            <textarea rows="5" placeholder="Message" name="message" value={message}
                                      style={{backgroundColor: setdarkMode && "#333",
                                          color: setdarkMode && "white"}}
                                      onChange={(event) => {
                                          setMessage((event.target.value))
                                      }}/>
                            <button>Submit</button>
                        </form>
                    <div className="errors"> {errors.join(", ")} </div>
                </div>}
            </div>

        </div>
    </div>)
}


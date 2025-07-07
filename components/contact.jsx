import React from "react";

export default function Contact() {
    return(
        <>
            <img className="waveThree" src="../images/wave3.svg" />
            <div className="contactContainer">
                <h1>Contact Me</h1>
                <form className="formContainer">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Name"></input>
                    <label htmlFor="email" >Email</label>
                    <input type="text" id="email" placeholder="Email"></input>
                    <label htmlFor="message">Message</label>
                    <input type="text" id="message" placeholder="Message..."></input>

                </form>
            </div>
        </>
    )
    
} 
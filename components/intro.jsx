import React from "react";

export default function Intro(){
    return (
        <>
        <div className="intro">
            <div className="leftIntro">
                <img src="../images/placeholder.jpg" alt="Profile Picture"/>
            </div>
            <div className="rightIntro">
                <div>
                    <h1 className="typeWriter">Hi, I'm Peter</h1>
                    <div className="desc">Recent Wentworth Institute Of Technology graduate and aspiring Junior Fullstack Developer eager to improve my skills and grow to become a better person and developer.</div>
                </div>
            </div>  
        </div>
        <img className="waveOne" src="../images/wave1.svg" />
        </>
    )
}
import React from "react";

export default function AboutMe(){
    return(
        <>
        <section id="about"></section>
        <img className="waveFour" src="../images/wave4.svg" />
        <div className="aboutMeContainer">
            <div className="aboutMe">
                <h1>About Me</h1>
                <div className="descriptionContainer">Hello, my name is Peter Nguyen and I'm an aspiring Junior Fullstack developer. I'm always pushing myself to learn new technologies and to constantly improve myself to become a better person and developer</div>
            </div>
            <div className="Hobbies">
                <h1>Hobbies</h1>
                <div className="descriptionContainer">Hello, my name is Peter Nguyen and I really like video games!</div>
            </div>
            <div className="Skills">
                <h1>Skills</h1>
                <div className="skillsContainer">
                    <div>
                        Java
                    </div>
                    <div>
                        C#
                    </div>
                    <div>
                        JavaScript
                    </div>
                    <div>
                        HTML
                    </div>
                    <div>
                        CSS
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
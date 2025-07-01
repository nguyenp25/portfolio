import React from "react";

export default function Project(props){
    return(
        <>
            <div className={`projectContainer ${props["reverse"] ? "reverse" : ""}`}>
                <img src={props["image"]} alt="Profile Picture"/>
                <div>
                    <h2 className="projectTitle">{props["title"]}</h2>
                    <div className="projectName">{props["description"]}</div>
                    <div className="projectDesc"></div>
                    <div className="redirectsContainer">
                        <img src="../images/github-mark-white.svg" alt="Profile Picture"/>
                        <button>Live Wesbite</button>
                    </div>
                </div>
            </div>
        </>
    )
}
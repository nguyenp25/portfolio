import React from "react";

export default function Header(){
    return (
        <>
            <div class="wrapper">
                <div class="leftHeader">
                    <div>PN</div>
                    <div class="itemContainer">GITHUB</div>
                    <div class="itemContainer">LINKEDIN</div>
                </div>
                <div class="rightHeader">
                    <span>a</span>
                    <span>b</span>
                    <span>c</span>
                </div>
            </div>
            <div class="intro">
                <div class="left">
                    <img src="../images/placeholder.jpg" />
                </div>
                <div class="right">
                    <div class="wrapper">
                        <div>HI IM PETER NGUYEN</div>
                        <div>desc</div>
                    </div>
                </div>  
            </div>
        </>
    )
}
import React from "react";

export default function Header(){
    return (
        <>
            <div className="topHeader">
                <div className="wrapper">
                    <div className="leftHeader">
                        <div className="initials">PN</div>
                        <div className="itemContainer git">
                            <a href="https://github.com/nguyenp25" rel="noreferrer" target="_blank">
                            <svg height="32px" width="32px" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                            </a>
                        </div>
                        <div className="itemContainer linkedIn">
                            <a href="https://www.linkedin.com/in/peter-vo-nguyen/" rel="noreferrer" target="_blank">
                                <svg height="32px" width="32px" fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M 880 112 H 144 c -17.7 0 -32 14.3 -32 32 v 736 c 0 17.7 14.3 32 32 32 h 736 c 17.7 0 32 -14.3 32 -32 V 144 c 0 -17.7 -14.3 -32 -32 -32 Z M 349.3 793.7 H 230.6 V 411.9 h 118.7 v 381.8 Z m -59.3 -434 a 68.8 68.8 0 1 1 68.8 -68.8 c -0.1 38 -30.9 68.8 -68.8 68.8 Z m 503.7 434 H 675.1 V 608 c 0 -44.3 -0.8 -101.2 -61.7 -101.2 c -61.7 0 -71.2 48.2 -71.2 98 v 188.9 H 423.7 V 411.9 h 113.8 v 52.2 h 1.6 c 15.8 -30 54.5 -61.7 112.3 -61.7 c 120.2 0 142.3 79.1 142.3 181.9 v 209.4 Z"></path>
                                </svg>
                            </a>   
                        </div>
                    </div>
                    <div className="hamBurger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </>
    )
}
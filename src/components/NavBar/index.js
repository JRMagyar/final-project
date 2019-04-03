import React from "react";
import "./style.css"

function Nav() {
    return (
        <nav className="main-nav">
            <a className="nav-brand" href="/">
                Uncle
            </a>
            <a href="#menu">
                &#9776;
            </a>
        </nav>
    )
}

export default Nav;
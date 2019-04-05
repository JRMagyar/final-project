import React from "react";
import "./style.css";

class Nav extends React.Component {
    state = {
        auth: false
    }

    

    render(){
        
        if(this.state.auth){
            return (
                <nav className="main-nav">
                    <a className="nav-brand" href="/">
                        Uncle
                    </a>
                </nav>
            )
        } else {
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

    }
}

export default Nav;

/*This is the Google Signout "Button"
<a href="#" onclick="signOut();">Sign out</a>*/
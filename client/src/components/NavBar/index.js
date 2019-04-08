import React from "react";
import "./style.css";
import MediaQuery from 'react-responsive';

class Nav extends React.Component {

    state = {
        auth: false,
        display: false
    }

    handleModal = () => {
        if(!this.state.display){
            this.setState({ display: true });
        } else{
            this.setState({ display: false });
        }
    } 

    render(){
        return (
            <div>
                <nav className="main-nav">
                    <a className="nav-brand" href="/dashboard">
                        Uncle
                    </a>
                    <button className="nav-button-open" onClick={this.handleModal}>
                        &#9776;
                    </button>
                </nav>
                <MediaQuery minDeviceWidth={700}>
                    {(matches) =>{
                        if(matches){
                            return <div className="nav-modal" style={{display: this.state.display ? 'flex' : 'none' }}>
                                <span className="nav-button-closed" onClick={this.handleModal}>&times;</span>
                                <a href="#" onClick="signOut();">Sign out</a>
                                <a href="/" onClick="signOut();">Sign out</a>
                                <a href="/dashboard">dashboard</a>
                                <a href="/expenses">expenses</a>
                            </div>
                        } else {
                            return <div className="nav-modal-mobile" style={{display: this.state.display ? 'flex' : 'none' }}>
                                <span className="nav-button-closed" onClick={this.handleModal}>&times;</span>
                                <a href="#" onClick="signOut();">Sign out</a>
                                <a href="/" onClick="signOut();">Sign out</a>
                                <a href="/dashboard">dashboard</a>
                                <a href="/expenses">expenses</a>
                            </div>
                        }
                    }}
                </MediaQuery>
            </div>
        )
    }
}

export default Nav;
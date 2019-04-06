import React from "react";
import "./style.css";

class NavModal extends React.Component {   

    state = {
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
        return(
        <div className="nav-modal" style={{display: this.state.display ? 'block' : 'none' }}>
            <div className="modal-content">
                <a href="/">sign-out</a>
                <a href="/dashboard">dashboard</a>
                <a href="/expenses">expenses</a>
            </div>
        </div>
        )
    }
}

export default NavModal;
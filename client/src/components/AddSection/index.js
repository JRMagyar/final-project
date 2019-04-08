import React from "react";
import "./style.css";
//import ReactDOM from "react-dom";

class AddSection extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(e) {
        alert('The value is: ' + this.input.value);
        e.preventDefault();
      }
    state = {
        notClickedYet: true,
        value: ''
    }
    //     <article className="add-box" onClick={this.ExpandBox} style={{ backgroundColor: "rgb(126, 240, 240)", height: "35%" }}>
    //     { /*, height: this.state.notClickedYet ? "35%" : "90%"*/}
    //     {/* <button className="add-form" style={{ backgroundColor: "rgb(126, 240, 240)", height: this.state.notClickedYet ? "35%" : "90%"}}>
    //                     Add Expenses Stuff
    //     </button> */}
    //     {/* <div style={{ visibility: this.state.notClickedYet ? "hidden" : "visible"}}> */}
    // </article>
   

    ExpandBox = () => {
        if (!this.state.notClickedYet) {
            this.setState({ notClickedYet: true });
            console.log(this.state.notClickedYet);
            return (
                <article className="add-box" style={{ backgroundColor: "rgb(126, 240, 240)", height: "90%" }}>

                </article>
            )
        } else {
            this.setState({ notClickedYet: false });
            console.log(this.state.notClickedYet);
            return (
                <article className="add-box" style={{ backgroundColor: "rgb(126, 240, 240)", "height": "35%" }}>

                </article>
            );
        }

    }

    render() {
        //if the button is clicked than the form will be visible in formDiv
        // and if clicked again the in the form will be hidden until next btn click and so forth
        return (
            <div className="formDiv" style={{ backgroundColor: "rgb(126, 240, 240)", height: "35%", height: this.state.notClickedYet ? "35%" : "90%" }}>
            <button onClick={this.ExpandBox}>ADD STUFF</button>
            <article className="add-box" style={{ backgroundColor: "rgb(126, 240, 240)", height: "35%" }}>
            
            </article>
        <form className="add-form" onSubmit={this.handleSubmit} style={{ border: "double", visibility: this.state.notClickedYet ? "hidden" : "visible", color: "black"}}>
                    <label>
                        Add an Expense:
                            <input type="text" value={this.state.value}/>
                    </label>
                    <label>
                        Add an Expense:
                            <input type="text" value={this.state.value}/>
                    </label>
                    <label>
                        Add an Expense:
                            <input type="text" value={this.state.value}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
             
            </div>
        );

    }

}

export default AddSection;
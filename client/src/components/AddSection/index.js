import React from "react";
import "./style.css";
//import ReactDOM from "react-dom";\
//import ValGoesToCalender, {addEvent} from "../../components/ValGoesToCalender/index"

class AddSection extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(e) {
        alert('The value is: ' + this.input.value);
        e.preventDefault();
      }
    state = {
        notClickedYet: true
    }

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
        //UPDATE: We have to get another button if we want to add another input and keeps going and going.
        return (
            <div className="formDiv" style={{ backgroundColor: "rgb(126, 240, 240)", height: this.state.notClickedYet ? "35%" : "60%" }}>
            <button onClick={this.ExpandBox}>ADD STUFF</button>
            {/* <article className="add-box" style={{ backgroundColor: "rgb(126, 240, 240)", height: "35%" }}>
            </article> */}
                <form className="add-form" onSubmit={this.handleSubmit} style={{visibility: this.state.notClickedYet ? "hidden" : "visible"}}>
                    <input type="text" name="exp-name" placeholder="enter expense"/>
                    <input type="number" name="exp-amount" placeholder="expense amount"/>
                    <input type="text" name="exp-category" placeholder="select category"/>
                    <select name="exp-recur">
                        
                        <option label="yes" value="true">yes</option> 
                        <option label="no" value="false">no</option> 
                        
                    </select>
                    <select name="exp-freq">
                        <option value="monthly">monthly</option>
                        <option value="bi-weekly">bi-weekly</option>
                        <option value="weekly">weekly</option>
                        <option value="daily">daily</option>
                        <option value="yearly">yearly</option>
                    </select>
                    <textarea type="text" name="exp-descrip" >expense description</textarea>
                    <input type="submit" value="Add" />
                </form>
            </div>
        );

    }

}

export default AddSection;
import React from "react";
import "./style.css";
import Axios from "axios";
import ExpenseList from "./addToList"
// const mongoose = require("mongoose");
// const db = require("../models");
//import ReactDOM from "react-dom";\
//import ValGoesToCalender, {addEvent} from "../../components/ValGoesToCalender/index"

class AddSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notClickedYet: true,
            name: '',
            description: '',
            amount: 0,
            calendar: {
                    title: '',
                    start: '' //yyyy-mm-ddThh:mm:ss 24hr clock
            }                
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addExpense = this.addExpense.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAmount = this.handleChangeAmount.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeCalStart = this.handleChangeCalStart.bind(this);
        // this.ExpenseList = this.ExpenseList.bind(this);
      }
      handleChangeName(event) {
        this.setState({
            name: event.target.value,
           
        });
        console.log(this.state.name);
        console.log(this.state);
      }
      handleChangeAmount(event){
          this.setState({
              amount: event.target.value
          })
          console.log(this.state.amount)
      }
      handleChangeDescription(event){
        this.setState({
            description: event.target.value
        })
    }
    handleChangeCalStart(event){
        this.setState({
            calender: {
                        title: this.state.name,
                        start: event.target.value
                    }
        })
        
    }
      handleSubmit(event) {
        //alert('The value is: ' + this.state.name);
        event.preventDefault();
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
    
    addExpense = (props) => {
        // this.setState({
        //     //value: this.state.value + 1
        //     //name: this.state.name,
        //     description: this.state.description,
        //     amount: this.state.amount,
        //     calender: {
        //         title: this.state.name,
        //         start: this.state.calendar.start
        //     }
        //   });
          console.log(this.state.name);
        const clientVal = {
            name: (this.state.name),
            description: this.state.description,
            amount: this.state.amount,
            calender: {
                title: this.state.name,
                start: this.state.start
            }
        }
        Axios.post("/expenses/5cb22272faf92402403661c0", {clientVal})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        
        <ExpenseList name={this.state.name} amount={this.state.amount} description={this.state.description} dueDate={this.state.start}   />
          
        
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
                    <input type="text" value={this.state.name} onChange={this.handleChangeName} placeholder="enter expense"/>
                    <input type="number" value={this.state.amount} onChange={this.handleChangeAmount} placeholder="expense amount"/>
                    <input type="text" value={this.state.description} onChange={this.handleChangeDescription} name="exp-category" placeholder="select category"/>
                    <input type="text" value={this.state.start} onChange={this.handleChangeCalStart} name="exp-category" placeholder="select Date(yyyy-mm-dd)"/>
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
                    <input type="submit" value="Add" onClick={this.addExpense} />
                </form>
            </div>
        );
            //goals in this page, use onClick right above to when bars are filled and 
            //submit is clicked it will add to mongoose and also add to the calendar(whatever is mongoose it goes to calender)
    }

}

export default AddSection;
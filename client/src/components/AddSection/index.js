import React from "react";
import "./style.css"

class AddSection extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // since you're using this method in a callback, don't forget to
    //     // bind the this context
    //     this.ExpandBox = this.ExpandBox.bind(this);
    //     this.state = {
    //         notClickedYet: true
    //     };
    // }
    state = {
        notClickedYet: true
    }

    ExpandBox = () => {
        if(!this.state.notClickedYet){
            this.setState({ notClickedYet: true });
            console.log(this.state.notClickedYet);
            const addBox = {
                height: '300px',
                border: '5px solid pink'
              };
           return  <article className = "add-box" style={addBox}>
            {/* {{height: "200px"}}>*/}</article>
        } else{
            this.setState({ notClickedYet: false });
            console.log(this.state.notClickedYet);
        }

    } 

    render() {
        return (
            <article className="add-box" onClick={this.ExpandBox}>
            ADD BOX
            


            {/* // add item area */}

            {/* click to expand the flex container */}

        </article>
        )
        
    }

}
       
export default AddSection;
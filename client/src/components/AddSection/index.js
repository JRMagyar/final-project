import React from "react";
import "./style.css"

// const divStyle = {
//     height: '200px',
//     border: '5px solid pink'
// };
export class AddSection extends React.Component {
    constructor(props) {
        super(props);
        // since you're using this method in a callback, don't forget to
        // bind the this context
        this.ExpandBox = this.ExpandBox.bind(this);
        this.state = {
            notClickedYet: true,
            Clicked: false
        };
    }
    DottedBox = (props) => (
        <div className="DottedBox">
          <p className="DottedBox_content">Get started with CSS styling</p>
        </div>
      );
    // ClickedOnAdd () {
    //     <div 
            
    // }
   

    ExpandBox() {
        if(this.notClickedYet === true){
            this.setState({
                notClickedYet: false,
                Clicked: true
            })
        }else{
            this.setState({
                notClickedYet: true,
                Clicked: false
            })
        }
        
        // const divStyle = {
        //     margin: '40px',
        //     border: '5px solid pink'
        // };
        return (
            <div onClick={() => this.DottedBox()}>

                {console.log("Testing")}
    
    
    
            </div>
        )
    };

    render(){
        
        return (
            <div onClick = {this.ExpandBox()}>
                

            </div>
        )
    }

}
       






// export default AddSection;
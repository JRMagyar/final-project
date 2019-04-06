import React from "react";
import "./style.css"

function AddSection(props) {
    return (
        <div onClick={() => props.clickChar(props.id)}>

            {/* <img src={props.src} alt="Pic" />
            <h2>{props.id}</h2> */}

            

        </div>
    )
}

export default AddSection;
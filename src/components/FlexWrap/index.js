import React from "react";
import "./style.css"

function FlexWrap({children}){
    return (
        <div className='flex-parent'>{children}</div>
    )
}

export default FlexWrap;
import React from "react";
import "./style.css"

export function AddSection({children}){
    return (
        <div className='flex-row'>{children}</div>
    )
}

